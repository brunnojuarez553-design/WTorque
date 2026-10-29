
function openContacto() {
  const html = `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>Contacto — WitcherTorque</title>
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
/* HERO */
.page-hero{padding:48px 20px 36px;border-bottom:1px solid rgba(200,0,0,0.1);position:relative;overflow:hidden;}
.page-hero-bg{position:absolute;inset:0;background-image:url('https://res.cloudinary.com/dvvuwigmy/image/upload/v1780446778/IMG_7241_u3bbto.jpg');background-size:cover;background-position:center;opacity:0.22;z-index:0;}
.page-hero-content{position:relative;z-index:1;}
.page-hero::before{content:'CONTACT';position:absolute;right:-10px;top:-20px;font-family:var(--font-display);font-size:130px;color:rgba(200,0,0,0.03);line-height:1;pointer-events:none;letter-spacing:4px;}
.page-label{font-family:var(--font-mono);font-size:10px;letter-spacing:5px;color:var(--red);text-transform:uppercase;margin-bottom:12px;display:flex;align-items:center;gap:10px;}
.page-label::before{content:'';width:24px;height:1px;background:var(--red);}
.page-title{font-family:var(--font-display);font-size:clamp(50px,14vw,80px);line-height:0.88;letter-spacing:3px;text-transform:uppercase;color:var(--white);margin-bottom:16px;}
.page-title span{color:var(--red);}
.page-desc{font-size:15px;font-weight:400;color:var(--white-dim);line-height:1.7;border-left:2px solid var(--red);padding-left:14px;max-width:360px;}
/* INFO */
.info-section{padding:36px 20px;}
.section-label{font-family:var(--font-mono);font-size:10px;letter-spacing:5px;color:var(--red);text-transform:uppercase;margin-bottom:20px;display:flex;align-items:center;gap:10px;}
.section-label::before{content:'';width:24px;height:1px;background:var(--red);}
.contact-item{display:flex;align-items:center;gap:16px;padding:16px 18px;background:var(--graphite-2);border:1px solid var(--graphite-3);border-left:3px solid rgba(200,0,0,0.3);margin-bottom:10px;text-decoration:none;transition:border-left-color 0.2s,background 0.2s;}
.contact-item:hover{border-left-color:var(--red);background:rgba(200,0,0,0.04);}
.contact-icon{font-size:22px;flex-shrink:0;}
.contact-label{font-family:var(--font-mono);font-size:8px;letter-spacing:3px;color:var(--white-dim);text-transform:uppercase;margin-bottom:4px;}
.contact-val{font-size:16px;font-weight:600;color:var(--white);}
/* BOTONES DIRECTOS */
.btns-section{padding:0 20px 36px;display:flex;flex-direction:column;gap:12px;}
.btn-wa{background:#25D366;color:white;border:none;padding:17px 28px;font-family:var(--font-mono);font-size:11px;letter-spacing:3px;text-transform:uppercase;cursor:pointer;text-decoration:none;display:flex;align-items:center;justify-content:center;gap:12px;clip-path:polygon(0 0,calc(100% - 10px) 0,100% 10px,100% 100%,10px 100%,0 calc(100% - 10px));box-shadow:0 4px 20px rgba(37,211,102,0.2);transition:box-shadow 0.3s;}
.btn-wa:hover{box-shadow:0 6px 28px rgba(37,211,102,0.4);}
.btn-ig{background:linear-gradient(135deg,#833ab4,#fd1d1d,#fcb045);color:white;border:none;padding:17px 28px;font-family:var(--font-mono);font-size:11px;letter-spacing:3px;text-transform:uppercase;cursor:pointer;text-decoration:none;display:flex;align-items:center;justify-content:center;gap:12px;clip-path:polygon(0 0,calc(100% - 10px) 0,100% 10px,100% 100%,10px 100%,0 calc(100% - 10px));box-shadow:0 4px 20px rgba(200,0,0,0.15);transition:box-shadow 0.3s;}
.btn-ig:hover{box-shadow:0 6px 28px rgba(200,0,0,0.3);}
.btn-yt{background:#FF0000;color:white;border:none;padding:17px 28px;font-family:var(--font-mono);font-size:11px;letter-spacing:3px;text-transform:uppercase;cursor:pointer;text-decoration:none;display:flex;align-items:center;justify-content:center;gap:12px;clip-path:polygon(0 0,calc(100% - 10px) 0,100% 10px,100% 100%,10px 100%,0 calc(100% - 10px));box-shadow:0 4px 20px rgba(255,0,0,0.2);transition:box-shadow 0.3s;}
.btn-yt:hover{box-shadow:0 6px 28px rgba(255,0,0,0.4);}
/* MAPA */
.map-section{padding:0 20px 48px;}
.map-section .section-label{margin-bottom:14px;}
.map-frame{width:100%;height:220px;border:0;border:1px solid var(--graphite-3);border-top:2px solid var(--red);filter:grayscale(80%) contrast(1.1);display:block;}
/* HORARIO */
.horario-section{padding:36px 20px;background:var(--graphite-2);border-top:1px solid rgba(200,0,0,0.12);}
.horario-row{display:flex;justify-content:space-between;align-items:center;padding:12px 0;border-bottom:1px solid var(--graphite-3);}
.horario-day{font-family:var(--font-mono);font-size:10px;letter-spacing:2px;color:var(--white-dim);text-transform:uppercase;}
.horario-time{font-family:var(--font-display);font-size:18px;letter-spacing:2px;color:var(--white);}
.horario-time.closed{color:rgba(239,239,239,0.2);}
.horario-dot{width:7px;height:7px;border-radius:50%;background:var(--red);box-shadow:0 0 8px var(--red-glow);animation:pulse 2s infinite;flex-shrink:0;}
.horario-dot.off{background:var(--graphite-4);box-shadow:none;animation:none;}
@keyframes pulse{0%,100%{opacity:1}50%{opacity:0.3}}
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
    <div class="page-title">CON<span>TACTO</span></div>
    <p class="page-desc">Estamos en Caracas. Escribinos, llamanos o pasate por el taller — te atendemos en el momento.</p>
  </div>
</div>

<div class="info-section">
  <div class="section-label">Información de contacto</div>
  <a class="contact-item" href="https://wa.me/584125856541" target="_blank">
    <span class="contact-icon">📱</span>
    <div><div class="contact-label">WhatsApp</div><div class="contact-val">+58 412-585-6541</div></div>
  </a>
  <a class="contact-item" href="https://instagram.com/witchertorque" target="_blank">
    <span class="contact-icon">📸</span>
    <div><div class="contact-label">Instagram</div><div class="contact-val">@witchertorque</div></div>
  </a>
  <a class="contact-item" href="https://www.youtube.com/@witchertorque" target="_blank">
    <span class="contact-icon">▶️</span>
    <div><div class="contact-label">YouTube</div><div class="contact-val">@witchertorque</div></div>
  </a>
  <a class="contact-item" href="mailto:witchertorquevzla@gmail.com" target="_blank">
    <span class="contact-icon">✉️</span>
    <div><div class="contact-label">Email</div><div class="contact-val">witchertorquevzla@gmail.com</div></div>
  </a>
  <div class="contact-item">
    <span class="contact-icon">📍</span>
    <div><div class="contact-label">Ubicación</div><div class="contact-val">Caracas, Venezuela</div></div>
  </div>
  <div class="contact-item">
    <span class="contact-icon">🕐</span>
    <div><div class="contact-label">Horario</div><div class="contact-val">Lun – Vie: 8:00 – 17:00 · Por cita previa</div></div>
  </div>
</div>

<div class="btns-section">
  <a class="btn-wa" href="https://wa.me/584125856541" target="_blank">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
    Escribir por WhatsApp
  </a>
  <a class="btn-ig" href="https://instagram.com/witchertorque" target="_blank">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="white" stroke="none"/></svg>
    Ver en Instagram
  </a>
  <a class="btn-yt" href="https://www.youtube.com/@witchertorque" target="_blank">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
    Ver canal de YouTube
  </a>
</div>

<div class="map-section">
  <div class="section-label">Ubicación</div>
  <iframe class="map-frame" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d250871.88383789405!2d-67.08195864999999!3d10.4805937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2a58adcd824807%3A0x90b81f7eb5b78c0!2sCaracas%2C%20Distrito%20Capital%2C%20Venezuela!5e0!3m2!1ses!2sve!4v1700000000000" allowfullscreen="" loading="lazy"></iframe>
</div>

<div class="horario-section">
  <div class="section-label">Horarios de atención</div>
  <div class="horario-row"><span class="horario-day">Lunes</span><div style="display:flex;align-items:center;gap:10px"><span class="horario-time">8:00 – 17:00</span><div class="horario-dot"></div></div></div>
  <div class="horario-row"><span class="horario-day">Martes</span><div style="display:flex;align-items:center;gap:10px"><span class="horario-time">8:00 – 17:00</span><div class="horario-dot"></div></div></div>
  <div class="horario-row"><span class="horario-day">Miércoles</span><div style="display:flex;align-items:center;gap:10px"><span class="horario-time">8:00 – 17:00</span><div class="horario-dot"></div></div></div>
  <div class="horario-row"><span class="horario-day">Jueves</span><div style="display:flex;align-items:center;gap:10px"><span class="horario-time">8:00 – 17:00</span><div class="horario-dot"></div></div></div>
  <div class="horario-row"><span class="horario-day">Viernes</span><div style="display:flex;align-items:center;gap:10px"><span class="horario-time">8:00 – 17:00</span><div class="horario-dot"></div></div></div>
  <div class="horario-row"><span class="horario-day">Sábado</span><div style="display:flex;align-items:center;gap:10px"><span class="horario-time closed">Cerrado</span><div class="horario-dot off"></div></div></div>
  <div class="horario-row"><span class="horario-day">Domingo</span><div style="display:flex;align-items:center;gap:10px"><span class="horario-time closed">Cerrado</span><div class="horario-dot off"></div></div></div>
</div>

</body>
</html>`;
  openWtModal(html);
}
