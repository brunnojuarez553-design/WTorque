export default async function handler(req, res) {
  // Solo POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // CORS — permite llamadas desde tu propio dominio
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  const { system, messages } = req.body;

  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: 'Missing messages' });
  }

  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // La key vive en las variables de entorno de Vercel — nunca en el código
        'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: [
          { role: 'system', content: system },
          ...messages
        ],
        max_tokens: 400,
        temperature: 0.7,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({ error: data });
    }

    const reply = data.choices?.[0]?.message?.content || '';
    return res.status(200).json({ reply });

  } catch (err) {
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
}
