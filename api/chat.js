// api/chat.js — WitcherTorque AI proxy

// ── Rate limit (en memoria por instancia de Vercel)
const rateLimitMap = new Map();
const WINDOW_MS = 10 * 60 * 1000; // 10 minutos
const MAX_REQUESTS = 15;           // 15 mensajes por IP cada 10 min

function checkRateLimit(ip) {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now - entry.windowStart > WINDOW_MS) {
    rateLimitMap.set(ip, { windowStart: now, count: 1 });
    return { allowed: true };
  }
  entry.count++;
  return { allowed: entry.count <= MAX_REQUESTS };
}

// Limpieza periódica para evitar memory leak
let reqCount = 0;
function maybeCleanup() {
  if (++reqCount % 200 !== 0) return;
  const now = Date.now();
  for (const [ip, e] of rateLimitMap.entries()) {
    if (now - e.windowStart > WINDOW_MS * 2) rateLimitMap.delete(ip);
  }
}

// ── Orígenes permitidos
const ALLOWED_ORIGINS = [
  'https://www.witchertorque.com',
  'https://witchertorque.com',
  'https://w-torque.vercel.app',
  'http://localhost:3000',
  'http://127.0.0.1:5500',
];

export default async function handler(req, res) {

  // ── CORS
  const origin = req.headers['origin'] || '';
  const isLocalFile = origin === '' || origin === 'null';
  const allowedOrigin = ALLOWED_ORIGINS.includes(origin) ? origin : null;

  if (!allowedOrigin && !isLocalFile) {
    return res.status(403).json({ error: 'Origen no autorizado' });
  }
  if (allowedOrigin) {
    res.setHeader('Access-Control-Allow-Origin', allowedOrigin);
  }
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Vary', 'Origin');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  // ── Rate limit
  const ip =
    req.headers['x-forwarded-for']?.split(',')[0]?.trim() ||
    req.socket?.remoteAddress ||
    'unknown';
  maybeCleanup();
  const { allowed } = checkRateLimit(ip);
  if (!allowed) {
    return res.status(429).json({ error: 'Demasiadas solicitudes. Esperá unos minutos.' });
  }

  // ── Validar body
  const { system, messages } = req.body || {};
  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: 'Missing messages' });
  }

  // ── Sanitizar: límite de historial y longitud de mensajes
  const MAX_HISTORY = 20;
  const MAX_CHARS   = 1000;
  const sanitized = messages
    .slice(-MAX_HISTORY)
    .filter(m => ['user', 'assistant'].includes(m.role))
    .map(m => ({
      role: m.role,
      content: typeof m.content === 'string'
        ? m.content.slice(0, MAX_CHARS)
        : '',
    }));

  // ── API key
  const GROQ_KEY = process.env.GROQ_API_KEY;
  if (!GROQ_KEY) return res.status(500).json({ error: 'API key no configurada' });

  // ── Llamada a Groq
  try {
    const groqRes = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${GROQ_KEY}`,
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        max_tokens: 400,
        temperature: 0.7,
        messages: [
          { role: 'system', content: system || '' },
          ...sanitized,
        ],
      }),
    });

    const data = await groqRes.json();
    if (!groqRes.ok) {
      console.error('Groq error:', groqRes.status, data);
      return res.status(502).json({ error: 'Error al contactar el servicio de IA' });
    }

    const reply = data.choices?.[0]?.message?.content || '';
    return res.status(200).json({ reply });

  } catch (err) {
    console.error('Handler error:', err);
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
}
