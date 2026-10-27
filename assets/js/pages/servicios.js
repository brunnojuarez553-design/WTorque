function openServicios() {
  const html = `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>Servicios — WitcherTorque</title>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Rajdhani:wght@400;500;600;700&family=Share+Tech+Mono&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/assets/css/servicios.css">
</head>
<body>
<div class="topbar">
  <a class="topbar-logo" href="javascript:closeWtModal()"><img src="https://res.cloudinary.com/dvvuwigmy/image/upload/v1780437802/IMG_7191_sljwim_livrxj.png" alt="WitcherTorque"></a>
  <button class="back-btn" onclick="closeWtModal()">
    <svg width="12" height="10" viewBox="0 0 14 10" fill="none"><path d="M13 5H1M5 9L1 5L5 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
    Volver
  </button>
</div>

<div class="page-hero" style="padding:0;min-height:260px;position:relative;overflow:hidden;display:flex;flex-direction:column;justify-content:flex-end;">
  <div style="position:absolute;inset:0;z-index:0;background:url('https://res.cloudinary.com/dvvuwigmy/image/upload/v1780446778/IMG_7238_uxqr4m.jpg') center center/cover no-repeat;"></div>
  <div style="position:absolute;inset:0;z-index:1;background:linear-gradient(180deg,rgba(6,6,6,0.25) 0%,rgba(6,6,6,0.55) 55%,rgba(6,6,6,0.96) 100%);"></div>
  <div style="position:relative;z-index:2;padding:36px 20px 32px;border-bottom:1px solid rgba(200,0,0,0.1);">
    <div class="page-label">Taller &amp; Mecánica</div>
    <h1 class="page-title">AGENDAR<br><span>SERVICIOS</span></h1>
    <p class="page-desc">Taller equipado con dinamómetro DynoProHub y más de 10 años de experiencia. Completá el formulario o contactanos por WhatsApp.</p>
  </div>
</div>

<div class="form-section">
  <h2>SOLICITAR <span>TURNO</span></h2>
  <p class="form-intro">Completá tus datos y te contactamos a la brevedad</p>
  <div class="form-field"><label>Nombre completo</label><input type="text" id="fNombre" placeholder="Tu nombre" required></div>
  <div class="form-field"><label>Vehículo</label><input type="text" id="fVehiculo" placeholder="Marca, modelo y año" required></div>
  <div class="form-field"><label>Motorización</label><input type="text" id="fMotor" placeholder="Ej: 3.0L EcoBoost, 4G63T, 2JZ-GTE..."></div>
  <div class="form-field">
    <label>Servicio requerido</label>
    <select id="fServicio" required>
      <option value="">— Seleccionar servicio —</option>
      <option>Reprogramación ECU Stage 1</option>
      <option>Reprogramación ECU Stage 2</option>
      <option>Reprogramación ECU Stage 3</option>
      <option>Remote Tuning</option>
      <option>Multimapas</option>
      <option>Pops &amp; Bangs</option>
      <option>Stand Alone ECU (MaxxEcu / Haltech / FuelTech)</option>
      <option>Sesión Dyno Mainline ProHub</option>
      <option>Mecánica High Performance</option>
      <option>Suspensión &amp; Setup</option>
      <option>Electricidad &amp; Electrónica</option>
      <option>Fabricación Custom (Inoxidable / Titanio)</option>
      <option>Construcción Custom</option>
      <option>Mecánica General</option>
      <option>Otro servicio</option>
    </select>
  </div>
  <div class="form-field">
    <label>Objetivo del proyecto</label>
    <select id="fObjetivo">
      <option value="">— Seleccionar objetivo —</option>
      <option>Uso diario confiable</option>
      <option>Roll Racing</option>
      <option>Drag / Cuarto de milla</option>
      <option>Track Day / Circuito</option>
      <option>Off-Road alta velocidad</option>
      <option>Proyecto custom / Restomod</option>
    </select>
  </div>
  <div class="form-field"><label>WhatsApp</label><input type="tel" id="fWA" placeholder="+58 412-000-0000" required></div>
  <div class="form-field"><label>Modificaciones actuales (opcional)</label><textarea id="fDesc" placeholder="Contanos las modificaciones que ya tiene el vehículo o los síntomas que notás..."></textarea></div>
  <button class="btn-submit" onclick="submitForm()">
    <svg width="14" height="10" viewBox="0 0 14 10" fill="none"><path d="M1 5H13M9 1L13 5L9 9" stroke="white" stroke-width="1.5" stroke-linecap="round"/></svg>
    <span>Enviar Solicitud</span>
  </button>
  <div class="submit-ok" id="submitOk">✓ Solicitud enviada — Te contactamos pronto por WhatsApp</div>
</div>

<div class="services-section">
  <h2>NUESTROS <span>SERVICIOS</span></h2>
  <p class="services-intro">Todo lo que hacemos en el taller</p>

  <div class="svc-card">
    <div class="svc-num">01</div>
    <div class="svc-icon">⚡</div>
    <div class="svc-name">Reprogramación ECU</div>
    <p class="svc-desc">Stage 1, Stage 2, Stage 3, E85 y multimapas. Único Master Tuner Ecutek de Venezuela y distribuidor autorizado HPTuners. Calibraciones verificadas en dinamómetro a medida para cada vehículo.</p>
    <div class="svc-tags"><span class="tag">Stage 1</span><span class="tag">Stage 2</span><span class="tag">Stage 3</span><span class="tag">E85</span><span class="tag">Multimapas</span><span class="tag">Pops &amp; Bangs</span><span class="tag">Launch Control</span></div>
  </div>

  <div class="svc-card">
    <div class="svc-num">02</div>
    <div class="svc-icon">🌐</div>
    <div class="svc-name">Remote Tuning</div>
    <p class="svc-desc">Reprogramación ECU a distancia para cualquier parte del mundo. Mismo nivel de exigencia técnica que en el taller, desde la comodidad de tu ubicación.</p>
    <div class="svc-tags"><span class="tag">Mundial</span><span class="tag">HPTuners</span><span class="tag">Ecutek</span><span class="tag">Remoto</span></div>
  </div>

  <div class="svc-card">
    <div class="svc-num">03</div>
    <div class="svc-icon">🔧</div>
    <div class="svc-name">Mecánica High Performance</div>
    <p class="svc-desc">Construcción de motores, suspensión de competencia, frenos de élite y preparaciones de pista ejecutadas con precisión milimétrica. Track prep y diagnóstico avanzado.</p>
    <div class="svc-tags"><span class="tag">Motores</span><span class="tag">Suspensión</span><span class="tag">Frenos</span><span class="tag">Track Prep</span><span class="tag">Diagnóstico</span></div>
  </div>

  <div class="svc-card">
    <div class="svc-num">04</div>
    <div class="svc-icon">💻</div>
    <div class="svc-name">Stand Alone ECU</div>
    <p class="svc-desc">Instalación y calibración de centralitas de competición de nueva generación. Pioneros en MaxxEcu Gen 2 en Venezuela. Para proyectos que superan los límites de la ECU de fábrica.</p>
    <div class="svc-tags"><span class="tag">MaxxEcu</span><span class="tag">Haltech</span><span class="tag">FuelTech</span><span class="tag">Link ECU</span><span class="tag">Nitro</span></div>
  </div>

  <div class="svc-card">
    <div class="svc-num">05</div>
    <div class="svc-icon">⚙️</div>
    <div class="svc-name">Electricidad &amp; Electrónica</div>
    <p class="svc-desc">Diagnóstico computarizado, módulos CAN Bus, sistemas eléctricos complejos y soluciones definitivas. Sin cortar ni invadir el arnés eléctrico original.</p>
    <div class="svc-tags"><span class="tag">Diagnóstico</span><span class="tag">CAN Bus</span><span class="tag">Módulos</span><span class="tag">Eléctrica Avanzada</span></div>
  </div>

  <div class="svc-card">
    <div class="svc-num">06</div>
    <div class="svc-icon">🔩</div>
    <div class="svc-name">Fabricación Custom</div>
    <p class="svc-desc">Arte puro en Acero Inoxidable, Aluminio y Titanio. Downpipes, headers, escapes y componentes a medida con calidad de exportación. Impresión 3D para prototipado único.</p>
    <div class="svc-tags"><span class="tag">Inoxidable</span><span class="tag">Titanio</span><span class="tag">Aluminio</span><span class="tag">Impresión 3D</span><span class="tag">Custom</span></div>
  </div>

  <div class="svc-card">
    <div class="svc-num">07</div>
    <div class="svc-icon">📊</div>
    <div class="svc-name">Sesiones Dyno — Mainline ProHub</div>
    <p class="svc-desc">El único dinamómetro Mainline ProHub de Venezuela. Medición directa en los hubs de las ruedas para precisión absoluta. Diagnóstico de nivel ingeniería, sin deslizamiento ni desgaste de neumáticos.</p>
    <div class="svc-tags"><span class="tag">Mainline ProHub</span><span class="tag">Medición HP</span><span class="tag">Diagnóstico</span><span class="tag">Calibración</span></div>
  </div>

  <div class="svc-card">
    <div class="svc-num">08</div>
    <div class="svc-icon">🛢️</div>
    <div class="svc-name">Distribución Oficial de Élite</div>
    <p class="svc-desc">Distribuidores autorizados de Amsoil, vPracing, Fuel Factory. Representantes de X-Shift Gearboxes, aFe Power, MaxxEcu, Precision Turbo, Mishimoto, Dodson Motorsport y Vibrant Performance.</p>
    <div class="svc-tags"><span class="tag">Amsoil</span><span class="tag">vPracing</span><span class="tag">Fuel Factory</span><span class="tag">X-Shift</span><span class="tag">aFe Power</span><span class="tag">Mishimoto</span><span class="tag">Dodson</span><span class="tag">Precision Turbo</span></div>
  </div>

  <div class="svc-card">
    <div class="svc-num">09</div>
    <div class="svc-icon">🏎️</div>
    <div class="svc-name">Mecánica General</div>
    <p class="svc-desc">Servicio completo de mecánica para vehículos de alto nivel. Mantenimiento, diagnóstico y reparaciones con el mismo estándar de calidad de nuestros proyectos de competición.</p>
    <div class="svc-tags"><span class="tag">Mantenimiento</span><span class="tag">Diagnóstico</span><span class="tag">Reparaciones</span><span class="tag">Alta Gama</span></div>
  </div>
</div>

<div class="contact-section">
  <h2>CONTACTO <span>DIRECTO</span></h2>
  <div class="contact-item"><span class="contact-icon">📍</span><div><div class="contact-label">Ubicación</div><div class="contact-val">Caracas, Venezuela</div></div></div>
  <div class="contact-item"><span class="contact-icon">📱</span><div><div class="contact-label">WhatsApp</div><div class="contact-val">+58 412-585-6541</div></div></div>
  <div class="contact-item"><span class="contact-icon">✉️</span><div><div class="contact-label">Email</div><div class="contact-val">witchertorquevzla@gmail.com</div></div></div>
  <div class="contact-item"><span class="contact-icon">🕐</span><div><div class="contact-label">Horario</div><div class="contact-val">Lun – Vie: 8:00 – 17:00 · Solo con cita previa</div></div></div>
  <div class="contact-item"><span class="contact-icon">📸</span><div><div class="contact-label">Instagram</div><div class="contact-val">@witchertorque</div></div></div>
  <a class="btn-wa-full" href="https://wa.me/584125856541" target="_blank">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
    Hablar por WhatsApp
  </a>
</div>

<\/script>
</body>
</html>`;
  openWtModal(html);
}

// ─── OPEN HALL OF FAME PAGE ──────────────────────────
