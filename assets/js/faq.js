
function openFaq() {
  const html = `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>Preguntas Frecuentes — WitcherTorque</title>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Rajdhani:wght@400;500;600;700&family=Share+Tech+Mono&display=swap" rel="stylesheet">
<style>
:root{--black:#060606;--graphite:#0f0f0f;--graphite-2:#171717;--graphite-3:#222;--graphite-4:#2e2e2e;--red:#c80000;--red-bright:#ff1500;--red-glow:rgba(200,0,0,0.35);--white:#efefef;--white-dim:rgba(239,239,239,0.5);--font-display:'Bebas Neue',sans-serif;--font-body:'Rajdhani',sans-serif;--font-mono:'Share Tech Mono',monospace;}
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
body{background:var(--black);color:var(--white);font-family:var(--font-body);font-size:16px;overflow-x:hidden;}
::-webkit-scrollbar{width:3px;}::-webkit-scrollbar-thumb{background:var(--red);}
.topbar{position:sticky;top:0;z-index:100;background:rgba(6,6,6,0.95);backdrop-filter:blur(16px);border-bottom:1px solid rgba(200,0,0,0.15);padding:0 18px;height:56px;display:flex;align-items:center;justify-content:space-between;}
.topbar-logo{text-decoration:none;display:flex;align-items:center;}
.topbar-logo img{height:46px;width:auto;display:block;}
.back-btn{display:flex;align-items:center;gap:8px;font-family:var(--font-mono);font-size:10px;letter-spacing:2px;color:var(--white-dim);background:none;border:1px solid rgba(239,239,239,0.1);padding:7px 14px;cursor:pointer;text-transform:uppercase;transition:color 0.2s,border-color 0.2s;}
.back-btn:hover{color:var(--red);border-color:rgba(200,0,0,0.3);}
.page-hero{padding:48px 20px 36px;border-bottom:1px solid rgba(200,0,0,0.1);position:relative;overflow:hidden;}
.page-hero-bg{position:absolute;inset:0;background-image:url('https://res.cloudinary.com/dvvuwigmy/image/upload/v1780446778/IMG_7238_uxqr4m.jpg');background-size:cover;background-position:center;opacity:0.22;z-index:0;}
.page-hero-content{position:relative;z-index:1;}
.page-hero::before{content:'FAQ';position:absolute;right:-10px;top:-20px;font-family:var(--font-display);font-size:200px;color:rgba(200,0,0,0.03);line-height:1;pointer-events:none;}
.page-label{font-family:var(--font-mono);font-size:10px;letter-spacing:5px;color:var(--red);text-transform:uppercase;margin-bottom:12px;display:flex;align-items:center;gap:10px;}
.page-label::before{content:'';width:24px;height:1px;background:var(--red);}
.page-title{font-family:var(--font-display);font-size:clamp(50px,14vw,80px);line-height:0.88;letter-spacing:3px;text-transform:uppercase;color:var(--white);margin-bottom:16px;}
.page-title span{color:var(--red);}
.page-desc{font-size:15px;font-weight:400;color:var(--white-dim);line-height:1.7;border-left:2px solid var(--red);padding-left:14px;max-width:360px;}
/* FAQ */
.faq-section{padding:36px 20px;}
.faq-section h2{font-family:var(--font-display);font-size:28px;letter-spacing:3px;text-transform:uppercase;color:var(--white);margin-bottom:6px;}
.faq-section h2 span{color:var(--red);}
.faq-intro{font-family:var(--font-mono);font-size:10px;letter-spacing:2px;color:var(--white-dim);text-transform:uppercase;margin-bottom:24px;}
.faq-list{display:flex;flex-direction:column;gap:2px;}
.faq-item{border:1px solid var(--graphite-3);overflow:hidden;background:var(--graphite);}
.faq-q{width:100%;background:none;border:none;display:flex;align-items:center;justify-content:space-between;gap:14px;padding:18px;cursor:pointer;text-align:left;border-left:3px solid rgba(200,0,0,0.3);transition:border-left-color 0.25s,background 0.25s;}
.faq-q:hover{background:rgba(200,0,0,0.04);border-left-color:var(--red);}
.faq-q.open{border-left-color:var(--red);background:rgba(200,0,0,0.06);}
.faq-q span{font-family:var(--font-mono);font-size:10px;letter-spacing:1.5px;color:var(--white);text-transform:uppercase;line-height:1.5;}
.faq-arrow{font-size:20px;color:var(--red);flex-shrink:0;line-height:1;transition:transform 0.3s;font-family:var(--font-mono);}
.faq-q.open .faq-arrow{transform:rotate(45deg);}
.faq-a{max-height:0;overflow:hidden;font-size:14px;color:rgba(239,239,239,0.55);line-height:1.75;transition:max-height 0.4s ease,padding 0.3s ease;padding:0 18px;border-left:3px solid var(--red);}
.faq-a.open{max-height:400px;padding:14px 18px 18px;}
/* CTA */
.cta-section{padding:40px 20px;background:var(--graphite-2);border-top:1px solid rgba(200,0,0,0.15);text-align:center;}
.cta-title{font-family:var(--font-display);font-size:clamp(32px,9vw,52px);letter-spacing:3px;text-transform:uppercase;color:var(--white);margin-bottom:10px;}
.cta-title span{color:var(--red);}
.cta-desc{font-size:14px;color:var(--white-dim);margin-bottom:28px;max-width:280px;margin-left:auto;margin-right:auto;}
.btn-wa{background:#25D366;color:white;border:none;padding:16px 32px;font-family:var(--font-mono);font-size:10px;letter-spacing:3px;text-transform:uppercase;cursor:pointer;text-decoration:none;display:inline-flex;align-items:center;gap:10px;clip-path:polygon(0 0,calc(100% - 8px) 0,100% 8px,100% 100%,8px 100%,0 calc(100% - 8px));}
</style>
</head>
<body>
<div class="topbar">
  <a class="topbar-logo" href="javascript:closeWtModal()"><img src="https://res.cloudinary.com/dvvuwigmy/image/upload/v1780437802/IMG_7191_sljwim_livrxj.png" alt="WitcherTorque"></a>
  <button class="back-btn" onclick="closeWtModal()">
    <svg width="14" height="10" viewBox="0 0 14 10" fill="none"><path d="M13 5H1M5 9L1 5L5 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
    Volver
  </button>
</div>

<div class="page-hero">
  <div class="page-hero-bg"></div>
  <div class="page-hero-content">
    <div class="page-label">WitcherTorque</div>
    <div class="page-title">PREGUNTAS<br><span>FRECUENTES</span></div>
    <p class="page-desc">Todo lo que necesitás saber antes de llevar tu vehículo al taller.</p>
  </div>
</div>

<div class="faq-section">
  <h2>CONSULTAS <span>GENERALES</span></h2>
  <p class="faq-intro">Respuestas directas a las dudas más comunes</p>
  <div class="faq-list">
    <div class="faq-item">
      <button class="faq-q" onclick="toggleFaq(this)"><span>¿Qué es una reprogramación de ECU y cómo mejora mi vehículo?</span><span class="faq-arrow">+</span></button>
      <div class="faq-a">La reprogramación consiste en modificar el software original que gestiona el motor (ECU) para optimizar parámetros críticos como la presión del turbo, los tiempos de inyección, el avance de encendido y los limitadores de torque. Esto permite liberar la potencia oculta del motor que los fabricantes restringen por normativas globales, mejorando drásticamente la aceleración, la respuesta del acelerador y la eficiencia general.</div>
    </div>
    <div class="faq-item">
      <button class="faq-q" onclick="toggleFaq(this)"><span>¿Qué diferencia hay entre Stage 1, Stage 2 y Stage 3?</span><span class="faq-arrow">+</span></button>
      <div class="faq-a"><strong>Stage 1:</strong> Calibración puramente de software para vehículos completamente originales. Aprovecha los márgenes sin comprometer la seguridad del fabricante. <br><br><strong>Stage 2:</strong> Requiere modificaciones de hardware básicas (downpipe, intake, intercooler mejorado). El software se calibra específicamente para exprimir estas mejoras. <br><br><strong>Stage 3:</strong> Modificación electrónica y mecánica profunda. Incluye turbocompresores más grandes, sistemas de inyección de mayor flujo. La calibración se hace completamente a medida desde cero en el dinamómetro.</div>
    </div>
    <div class="faq-item">
      <button class="faq-q" onclick="toggleFaq(this)"><span>¿Qué son los multimapas y cómo se controlan desde el volante?</span><span class="faq-arrow">+</span></button>
      <div class="faq-a">Los multimapas permiten almacenar diferentes configuraciones de potencia y comportamiento en la computadora original del vehículo. A través de los botones originales del volante (como los mandos del control de crucero), podés alternar en tiempo real entre diferentes perfiles: economía, calle y máxima potencia, sin ningún dispositivo externo.</div>
    </div>
    <div class="faq-item">
      <button class="faq-q" onclick="toggleFaq(this)"><span>¿Por qué no usar módulos externos (piggybacks) o cajitas?</span><span class="faq-arrow">+</span></button>
      <div class="faq-a">Los módulos externos funcionan "engañando" las señales de los sensores, lo que genera retardos en la respuesta, lecturas erróneas y puede desactivar los sistemas de seguridad del motor. En WitcherTorque hacemos reprogramación directa (Remap) sobre la ECU original vía OBD2 o en banco de pruebas. Control total nativo, cero cables cortados y garantía de fábrica a salvo porque el proceso es 100% reversible.</div>
    </div>
    <div class="faq-item">
      <button class="faq-q" onclick="toggleFaq(this)"><span>¿La reprogramación anula la garantía del vehículo?</span><span class="faq-arrow">+</span></button>
      <div class="faq-a">Con nuestro sistema de reprogramación directa podés estar tranquilo. El proceso es 100% reversible: si necesitás llevar el vehículo a una revisión de garantía, podemos flashear la ECU nuevamente con el software original de fábrica. Al no haber modificaciones físicas en el cableado ni componentes externos visibles, no dejamos huellas que pongan en riesgo tu garantía.</div>
    </div>
    <div class="faq-item">
      <button class="faq-q" onclick="toggleFaq(this)"><span>¿Qué es el Único Mainline ProHub Dyno y por qué es superior?</span><span class="faq-arrow">+</span></button>
      <div class="faq-a">Contamos con el único dinamómetro Mainline ProHub de nueva generación en toda Venezuela. A diferencia de los dynos tradicionales de rodillos, el ProHub se atornilla directamente a los hubs de las ruedas del vehículo: eliminamos completamente el deslizamiento de los cauchos, el auto queda físicamente anclado (máxima seguridad), y obtenemos mediciones precisas celda por celda. Cero desgaste de neumáticos y diagnóstico de nivel ingeniería.</div>
    </div>
    <div class="faq-item">
      <button class="faq-q" onclick="toggleFaq(this)"><span>¿Las reprogramaciones están adaptadas al combustible venezolano?</span><span class="faq-arrow">+</span></button>
      <div class="faq-a">Completamente. No usamos mapas genéricos importados de países con combustibles de alto octanaje. Cada mapa se desarrolla y refina en nuestro dinamómetro teniendo en cuenta las variaciones locales, configurando mapas de protección térmica agresivos para evitar la detonación y proteger los pistones.</div>
    </div>
    <div class="faq-item">
      <button class="faq-q" onclick="toggleFaq(this)"><span>¿La reprogramación va a romper mi motor?</span><span class="faq-arrow">+</span></button>
      <div class="faq-a">No, siempre que el mantenimiento del vehículo esté al día. Nuestras calibraciones mantienen activos todos los sistemas de protección de fábrica de la ECU. No llevamos los componentes al 100% de su capacidad mecánica; trabajamos dentro de los márgenes tolerables para garantizar que el vehículo siga siendo perfectamente confiable para el uso diario.</div>
    </div>
    <div class="faq-item">
      <button class="faq-q" onclick="toggleFaq(this)"><span>¿Pueden activar Launch Control y funciones especiales?</span><span class="faq-arrow">+</span></button>
      <div class="faq-a">Sí. Desarrollamos y activamos funciones avanzadas directamente en la electrónica del vehículo: Launch Control para máxima tracción desde parado, mapas de petardeo controlado (Pops &amp; Bangs), limitadores personalizados y más, siempre cuidando la integridad de los componentes mecánicos.</div>
    </div>
    <div class="faq-item">
      <button class="faq-q" onclick="toggleFaq(this)"><span>¿Hacen Remote Tuning? ¿Desde cualquier país?</span><span class="faq-arrow">+</span></button>
      <div class="faq-a">Sí. Ofrecemos servicio de Remote Tuning a cualquier parte del mundo. El cliente usa un dispositivo de lectura/escritura compatible y nosotros gestionamos la calibración de forma remota con el mismo nivel de exigencia técnica que en el taller.</div>
    </div>
    <div class="faq-item">
      <button class="faq-q" onclick="toggleFaq(this)"><span>¿Cómo agendo un turno?</span><span class="faq-arrow">+</span></button>
      <div class="faq-a">El taller funciona únicamente <strong>con cita previa</strong>. Escribinos al WhatsApp +58 412-585-6541 con tu nombre, vehículo (marca, modelo, año y motor) y el servicio que te interesa. Atendemos de lunes a viernes, 8:00 AM – 5:00 PM.</div>
    </div>
  </div>
</div>

<div class="cta-section">
  <div class="cta-title">¿QUEDARON <span>DUDAS?</span></div>
  <p class="cta-desc">Escribinos directamente y un asesor te responde en minutos.</p>
  <a class="btn-wa" href="https://wa.me/584125856541" target="_blank">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
    Hablar por WhatsApp
  </a>
</div>

<script>
function toggleFaq(btn) {
  const answer = btn.nextElementSibling;
  const isOpen = btn.classList.contains('open');
  document.querySelectorAll('.faq-q.open').forEach(b => {
    b.classList.remove('open');
    b.nextElementSibling.classList.remove('open');
  });
  if (!isOpen) {
    btn.classList.add('open');
    answer.classList.add('open');
  }
}
<\/script>
</body>
</html>`;
  openWtModal(html);
}
