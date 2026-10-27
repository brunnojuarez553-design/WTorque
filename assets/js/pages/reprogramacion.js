function openRepro() {


  const html = `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>Reprogramación ECU — WitcherTorque</title>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Rajdhani:wght@400;500;600;700&family=Share+Tech+Mono&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/assets/css/reprogramacion.css">
</head>
<body>

<!-- TOPBAR -->
<div class="topbar">
  <a class="topbar-logo" href="javascript:closeWtModal()"><img src="https://res.cloudinary.com/dvvuwigmy/image/upload/v1780437802/IMG_7191_sljwim_livrxj.png" alt="WitcherTorque"></a>
  <button class="back-btn" onclick="closeWtModal()">
    <svg width="12" height="10" viewBox="0 0 14 10" fill="none"><path d="M13 5H1M5 9L1 5L5 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
    Volver
  </button>
</div>

<!-- ─── HERO ─────────────────────────────── -->
<section class="hero">
  <div class="hero-bg"></div>
  <div class="hero-content">
    <div class="hero-eyebrow">
      <span class="hero-eyebrow-line"></span>
      <span class="hero-eyebrow-text">Ingeniería de Alto Desempeño</span>
    </div>
    <h1 class="hero-title">
      <span class="l1">DESBLOQUEÁ EL</span>
      <span class="l2">POTENCIAL</span>
    </h1>
    <p class="hero-sub">Calibraciones de ingeniería desarrolladas y verificadas en dinamómetro Mainline ProHub. Más de 500 motores intervenidos.</p>
    <div class="hero-pills">
      <span class="hero-pill">Más potencia</span>
      <span class="hero-pill">Más torque</span>
      <span class="hero-pill">Mejor respuesta</span>
      <span class="hero-pill">Calibraciones personalizadas</span>
    </div>
    <div class="hero-btns">
      <a class="btn-primary" href="#calculadora" onclick="document.getElementById('calculadora').scrollIntoView({behavior:'smooth'});return false;">
        <svg width="14" height="10" viewBox="0 0 14 10" fill="none"><path d="M1 5H13M9 1L13 5L9 9" stroke="white" stroke-width="1.5" stroke-linecap="round"/></svg>
        Calcular el potencial de mi auto
      </a>
      <a class="btn-ghost" href="#chat-ai" onclick="document.getElementById('chat-ai').scrollIntoView({behavior:'smooth'});return false;">Hablar con un tuner</a>
    </div>
  </div>
  <div class="hero-scroll"><div class="hero-scroll-line"></div></div>
</section>

<!-- ─── CALCULADORA ──────────────────────── -->
<section class="calc-section" id="calculadora">
  <div class="section-eyebrow reveal">Calculadora de ingeniería</div>
  <h2 class="section-title reveal">POTENCIAL DE <span>TU MOTOR</span></h2>
  <p class="section-desc reveal">Seleccioná tu vehículo y visualizá el rango de ganancia estimado según proyectos similares calibrados por WitcherTorque.</p>

  <div class="calc-selects reveal">
    <div class="calc-field">
      <label>Marca del Vehículo</label>
      <select id="calcMarca" onchange="updateCalcRepro()">
        <option value="">— Seleccionar marca —</option>
        <option value="volkswagen">Volkswagen</option>
        <option value="audi">Audi</option>
        <option value="bmw">BMW</option>
        <option value="mercedes">Mercedes-Benz</option>
        <option value="ford">Ford</option>
        <option value="chevrolet">Chevrolet</option>
        <option value="toyota">Toyota</option>
        <option value="honda">Honda</option>
        <option value="subaru">Subaru</option>
        <option value="nissan">Nissan</option>
        <option value="mitsubishi">Mitsubishi</option>
        <option value="mazda">Mazda</option>
        <option value="hyundai">Hyundai</option>
        <option value="kia">Kia</option>
        <option value="porsche">Porsche</option>
        <option value="jeep">Jeep</option>
        <option value="land_rover">Land Rover</option>
        <option value="volvo">Volvo</option>
      </select>
    </div>
    <div class="calc-field">
      <label>Modelo</label>
      <select id="calcModelo" onchange="calcHPRepro()">
        <option value="">— Seleccionar modelo —</option>
      </select>
    </div>
    <div class="calc-field">
      <label>O ingresá la potencia stock (HP)</label>
      <input type="number" id="calcHPInput" placeholder="Ej: 280" oninput="showCalcReproResult(parseInt(this.value))">
    </div>
  </div>

  <div class="calc-result-box" id="calcResultBox">
    <div class="calc-orig-header">
      <div>
        <div class="calc-orig-label">Potencia Stock</div>
        <div id="calcOrigNum">—</div>
      </div>
    </div>

    <!-- DYNO CHART -->
    <div class="dyno-wrap reveal">
      <canvas id="dynoCanvas"></canvas>
      <div class="dyno-footer">
        <div class="dyno-note">Curva estimada · Resultados verificados en dinamómetro<br>Los valores reales dependen del estado del vehículo y la configuración.</div>
        <div class="dyno-badge">MAINLINE PROHUB</div>
      </div>
    </div>

    <div class="calc-stages-grid">
      <div class="calc-stage-row">
        <div>
          <div class="csr-name">Stage 1</div>
          <div class="csr-gain" id="calcS1">—</div>
        </div>
        <div class="csr-range" id="calcS1range">—</div>
      </div>
      <div class="calc-stage-row">
        <div>
          <div class="csr-name">Stage 2</div>
          <div class="csr-gain" id="calcS2">—</div>
        </div>
        <div class="csr-range" id="calcS2range">—</div>
      </div>
      <div class="calc-stage-row">
        <div>
          <div class="csr-name">Stage 2+ E85</div>
          <div class="csr-gain" id="calcS3">—</div>
        </div>
        <div class="csr-range" id="calcS3range">—</div>
      </div>
    </div>
    <div class="calc-disclaimer">⚠ Estimaciones basadas en vehículos similares calibrados por WitcherTorque. Los resultados finales siempre se verifican y garantizan en dinamómetro Mainline ProHub. El potencial real depende del estado del motor, combustible y modificaciones previas.</div>
  </div>
</section>

<!-- ─── STAGES ──────────────────────────── -->
<section class="stages-section" id="stages">
  <div class="section-eyebrow reveal">Niveles de calibración</div>
  <h2 class="section-title reveal">STAGES DE <span>REPROGRAMACIÓN</span></h2>
  <p class="section-desc reveal">Cada vehículo y objetivo es diferente. Elegí el nivel que se ajusta a tu configuración de hardware y ambición.</p>

  <div class="stage-tabs reveal">
    <button class="stage-tab active" onclick="selectStage(0)">Stage 1</button>
    <button class="stage-tab" onclick="selectStage(1)">Stage 2</button>
    <button class="stage-tab" onclick="selectStage(2)">Stage 2+ E85</button>
    <button class="stage-tab" onclick="selectStage(3)">Stage 3</button>
    <button class="stage-tab" onclick="selectStage(4)">Pops &amp; Bangs</button>
    <button class="stage-tab" onclick="selectStage(5)">Multimapas</button>
  </div>

  <div class="stage-panel active reveal">
    <div class="sp-header">
      <div class="sp-name">Stage 1</div>
      <div class="sp-gain">+20% a +30% HP · Solo software</div>
    </div>
    <p class="sp-desc">Calibración puramente de software sobre la ECU original de fábrica. Sin necesidad de modificaciones de hardware. Ideal para motores completamente originales que buscan mejorar la respuesta del acelerador, la entrega de torque y la potencia total.</p>
    <div class="sp-tags"><span class="tag">ECU Stock</span><span class="tag">Sin hardware</span><span class="tag">Gas 91-95</span><span class="tag">Torque mejorado</span><span class="tag">Throttle response</span><span class="tag">Launch Control</span></div>
    <div class="sp-reqs">
      <div class="sp-reqs-label">Requisitos del vehículo</div>
      <div class="sp-req-item">Motor completamente original</div>
      <div class="sp-req-item">Mantenimiento al día</div>
      <div class="sp-req-item">Sin fallas en sistema de gestión de motor</div>
    </div>
  </div>

  <div class="stage-panel reveal">
    <div class="sp-header">
      <div class="sp-name">Stage 2</div>
      <div class="sp-gain">+30% a +40% HP · Software + Hardware</div>
    </div>
    <p class="sp-desc">Calibración combinada con upgrade de hardware básico: downpipe de mayor flujo, intercooler mejorado o catless. El mapa se desarrolla específicamente para exprimir estas mejoras de la manera más confiable y potente posible.</p>
    <div class="sp-tags"><span class="tag">Downpipe</span><span class="tag">Intercooler</span><span class="tag">Catless</span><span class="tag">Mapa custom</span><span class="tag">Boost elevado</span><span class="tag">Calibración Dyno</span></div>
    <div class="sp-reqs">
      <div class="sp-reqs-label">Requisitos del vehículo</div>
      <div class="sp-req-item">Downpipe de mayor flujo instalado</div>
      <div class="sp-req-item">Intercooler mejorado (recomendado)</div>
      <div class="sp-req-item">Filtro de admisión de mayor flujo</div>
    </div>
  </div>

  <div class="stage-panel reveal">
    <div class="sp-header">
      <div class="sp-name">Stage 2+ E85</div>
      <div class="sp-gain">+50% a +60% HP · Etanol / Flex Fuel</div>
    </div>
    <p class="sp-desc">El mayor incremento disponible en plataformas turboalimentadas. El etanol E85 permite niveles de boost significativamente superiores con temperaturas de combustión más bajas. El mapa se calibra desde cero en nuestro dinamómetro para cada configuración.</p>
    <div class="sp-tags"><span class="tag">E85</span><span class="tag">Flex Fuel</span><span class="tag">Inyectores de alto flujo</span><span class="tag">High Boost</span><span class="tag">Mapa etanol</span></div>
    <div class="sp-reqs">
      <div class="sp-reqs-label">Requisitos del vehículo</div>
      <div class="sp-req-item">Inyectores de alto flujo</div>
      <div class="sp-req-item">Bomba de combustible mejorada</div>
      <div class="sp-req-item">Hardware de Stage 2 completo</div>
      <div class="sp-req-item">Acceso a combustible E85</div>
    </div>
  </div>

  <div class="stage-panel reveal">
    <div class="sp-header">
      <div class="sp-name">Stage 3</div>
      <div class="sp-gain">Calibración full custom · Turbo big / Standalone</div>
    </div>
    <p class="sp-desc">Modificación electrónica y mecánica profunda. Turbocompresores de mayor flujo, sistemas de inyección de alto caudal, Stand Alone ECU (MaxxEcu Gen2, Haltech, FuelTech). La calibración se desarrolla completamente desde cero en nuestro dinamómetro Mainline ProHub.</p>
    <div class="sp-tags"><span class="tag">Big Turbo</span><span class="tag">MaxxEcu Gen2</span><span class="tag">Haltech</span><span class="tag">FuelTech</span><span class="tag">Standalone ECU</span><span class="tag">Calibración full dyno</span></div>
    <div class="sp-reqs">
      <div class="sp-reqs-label">Evaluación personalizada</div>
      <div class="sp-req-item">Requiere inspección previa del vehículo</div>
      <div class="sp-req-item">Cotización individualizada</div>
      <div class="sp-req-item">Proyecto diseñado según objetivos</div>
    </div>
  </div>

  <div class="stage-panel reveal">
    <div class="sp-header">
      <div class="sp-name">Pops &amp; Bangs</div>
      <div class="sp-gain">Sonido brutal · 100% software</div>
    </div>
    <p class="sp-desc">Mapas de deceleración controlados para generar el característico sonido de backfire al soltar el acelerador. Completamente en software, sin modificaciones físicas, sin riesgo mecánico cuando está correctamente calibrado. Compatible con Stage 1 o Stage 2.</p>
    <div class="sp-tags"><span class="tag">Backfire Map</span><span class="tag">Decel Pop</span><span class="tag">Antilag</span><span class="tag">Sin hardware</span><span class="tag">Launch Control</span></div>
    <div class="sp-reqs">
      <div class="sp-reqs-label">Compatibilidad</div>
      <div class="sp-req-item">Se añade sobre Stage 1 o Stage 2</div>
      <div class="sp-req-item">Compatible con la mayoría de plataformas</div>
    </div>
  </div>

  <div class="stage-panel reveal">
    <div class="sp-header">
      <div class="sp-name">Multimapas</div>
      <div class="sp-gain">Perfiles de potencia · Control desde el volante</div>
    </div>
    <p class="sp-desc">Almacenamos múltiples configuraciones de potencia y comportamiento en la ECU original del vehículo. Se cambian en tiempo real usando los botones originales del volante — sin dispositivos externos, sin pantallas adicionales.</p>
    <div class="sp-tags"><span class="tag">Perfil Eco</span><span class="tag">Perfil Calle</span><span class="tag">Perfil Sport</span><span class="tag">Control volante</span><span class="tag">Sin dispositivos externos</span></div>
    <div class="sp-reqs">
      <div class="sp-reqs-label">Funcionamiento</div>
      <div class="sp-req-item">3 perfiles de potencia en una sola ECU</div>
      <div class="sp-req-item">Cambio instantáneo desde el volante</div>
      <div class="sp-req-item">100% nativo, sin módulos externos</div>
    </div>
  </div>
</section>

<!-- ─── LO QUE VAS A SENTIR ──────────────── -->
<section class="feel-section">
  <div class="section-eyebrow reveal">Experiencia de conducción</div>
  <h2 class="section-title reveal">LO QUE VAS <span>A SENTIR</span></h2>
  <div class="feel-grid">
    <div class="feel-card reveal">
      <div class="feel-icon">⚡</div>
      <div class="feel-name">Aceleración Superior</div>
      <p class="feel-desc">Respuesta inmediata desde el fondo del rango de RPM. Menos turbo lag, más tracción.</p>
    </div>
    <div class="feel-card reveal">
      <div class="feel-icon">🎯</div>
      <div class="feel-name">Control Total</div>
      <p class="feel-desc">El motor responde exactamente como querés. Sin suavizados artificiales de fábrica.</p>
    </div>
    <div class="feel-card reveal">
      <div class="feel-icon">🔧</div>
      <div class="feel-name">Torque Brutal</div>
      <p class="feel-desc">Curva de torque más plana y prolongada. El empuje está disponible todo el tiempo.</p>
    </div>
    <div class="feel-card reveal">
      <div class="feel-icon">🏁</div>
      <div class="feel-name">Disfrute Real</div>
      <p class="feel-desc">El auto que compraste, pero desbloqueado. La versión que el fabricante nunca te dio.</p>
    </div>
  </div>
</section>

<!-- ─── MÉTRICAS DASHBOARD ───────────────── -->
<section class="metrics-section">
  <div class="section-eyebrow reveal">Por qué WitcherTorque</div>
  <h2 class="section-title reveal">INGENIERÍA <span>CERTIFICADA</span></h2>
  <div class="metrics-grid reveal">
    <div class="metric-card">
      <div class="metric-num"><span class="counter" data-target="500" data-suffix="+">0+</span></div>
      <div class="metric-label">Vehículos calibrados</div>
      <span class="metric-tag">Verificado en dyno</span>
    </div>
    <div class="metric-card">
      <div class="metric-num"><span class="counter" data-target="16" data-suffix="+">0+</span></div>
      <div class="metric-label">Años de experiencia</div>
      <span class="metric-tag">Desde 2008</span>
    </div>
    <div class="metric-card">
      <div class="metric-num"><span class="counter" data-target="12" data-suffix="+">0+</span></div>
      <div class="metric-label">Récords nacionales</div>
      <span class="metric-tag">Venezuela</span>
    </div>
    <div class="metric-card">
      <div class="metric-num"><span class="counter" data-target="3000" data-suffix="+">0+</span></div>
      <div class="metric-label">HP desarrollados</div>
      <span class="metric-tag">En proyectos activos</span>
    </div>
  </div>
  <div style="margin-top:20px;background:var(--graphite-2);border:1px solid var(--graphite-3);border-left:3px solid var(--red);padding:18px;display:flex;flex-direction:column;gap:10px;" class="reveal">
    <div style="font-family:var(--font-mono);font-size:9px;letter-spacing:3px;color:var(--white-dim);text-transform:uppercase;">Certificaciones exclusivas</div>
    <div style="display:flex;flex-direction:column;gap:8px;">
      <div style="font-size:14px;color:var(--white);display:flex;align-items:center;gap:10px;"><span style="width:4px;height:4px;background:var(--red);border-radius:50%;flex-shrink:0;display:inline-block;"></span>Único Master Tuner Ecutek de Venezuela</div>
      <div style="font-size:14px;color:var(--white);display:flex;align-items:center;gap:10px;"><span style="width:4px;height:4px;background:var(--red);border-radius:50%;flex-shrink:0;display:inline-block;"></span>Distribuidor autorizado HPTuners</div>
      <div style="font-size:14px;color:var(--white);display:flex;align-items:center;gap:10px;"><span style="width:4px;height:4px;background:var(--red);border-radius:50%;flex-shrink:0;display:inline-block;"></span>Único Mainline ProHub Dyno de Venezuela</div>
      <div style="font-size:14px;color:var(--white);display:flex;align-items:center;gap:10px;"><span style="width:4px;height:4px;background:var(--red);border-radius:50%;flex-shrink:0;display:inline-block;"></span>Pioneros MaxxEcu Gen2 en Venezuela</div>
    </div>
  </div>
</section>

<!-- ─── PROCESO ──────────────────────────── -->
<section class="process-section">
  <div class="section-eyebrow reveal">Cómo trabajamos</div>
  <h2 class="section-title reveal">EL <span>PROCESO</span></h2>
  <div class="process-steps">
    <div class="process-step reveal">
      <div class="ps-num-wrap"><div class="ps-num">01</div><div class="ps-line"></div></div>
      <div class="ps-content"><div class="ps-name">Diagnóstico</div><p class="ps-desc">Inspeccionamos el vehículo y el estado del motor. Evaluamos el sistema de gestión electrónica y detectamos cualquier falla preexistente antes de intervenir.</p></div>
    </div>
    <div class="process-step reveal">
      <div class="ps-num-wrap"><div class="ps-num">02</div><div class="ps-line"></div></div>
      <div class="ps-content"><div class="ps-name">Medición Base en Dyno</div><p class="ps-desc">Establecemos la curva de potencia original en nuestro Mainline ProHub. Esta medición sirve como referencia real — no usamos datos de fábrica, usamos lo que realmente tiene tu motor en este momento.</p></div>
    </div>
    <div class="process-step reveal">
      <div class="ps-num-wrap"><div class="ps-num">03</div><div class="ps-line"></div></div>
      <div class="ps-content"><div class="ps-name">Calibración</div><p class="ps-desc">Desarrollamos el mapa personalizado para tu motor, combustible y objetivo. Cada parámetro se ajusta individualmente: boost, ignición, inyección, control de tracción, limitadores.</p></div>
    </div>
    <div class="process-step reveal">
      <div class="ps-num-wrap"><div class="ps-num">04</div><div class="ps-line"></div></div>
      <div class="ps-content"><div class="ps-name">Verificación en Dyno</div><p class="ps-desc">Corremos el vehículo calibrado y validamos los resultados con datos reales. Comparamos las curvas antes y después. Refinamos hasta alcanzar el objetivo.</p></div>
    </div>
    <div class="process-step reveal">
      <div class="ps-num-wrap"><div class="ps-num">05</div></div>
      <div class="ps-content"><div class="ps-name">Entrega y Seguimiento</div><p class="ps-desc">Te entregamos el vehículo con el reporte de dinamómetro. Guardamos una copia del mapa original y el mapa calibrado. Soporte técnico post-entrega incluido.</p></div>
    </div>
  </div>
</section>

<!-- ─── CASOS REALES ─────────────────────── -->
<section class="cases-section">
  <div class="section-eyebrow reveal">Resultados verificados</div>
  <h2 class="section-title reveal">CASOS <span>REALES</span></h2>
  <div class="cases-scroll reveal">
    <div class="case-card">
      <div class="case-car">BMW M340i</div>
      <div class="case-service">Stage 2 — Mapa Custom</div>
      <p class="case-result">Calibración desarrollada sobre downpipe y filtro de mayor flujo. Curva de potencia verificada en Mainline ProHub con sensible mejora en todo el rango de RPM.</p>
      <div class="case-feel">Sensación: <span>Transformada</span></div>
    </div>
    <div class="case-card">
      <div class="case-car">Audi RS3 8V</div>
      <div class="case-service">Stage 2+ — E85 Flex Fuel</div>
      <p class="case-result">Inyectores de alto flujo y calibración completa para etanol. La entrega de torque desde bajas RPM superó las expectativas del cliente.</p>
      <div class="case-feel">Sensación: <span>Brutal</span></div>
    </div>
    <div class="case-card">
      <div class="case-car">Golf GTI MK7</div>
      <div class="case-service">Stage 1 — ECU Stock</div>
      <p class="case-result">Calibración de software sobre motor completamente original. Respuesta del acelerador notablemente superior, entrega más lineal y sin suavizados de fábrica.</p>
      <div class="case-feel">Sensación: <span>Viva</span></div>
    </div>
    <div class="case-card">
      <div class="case-car">Ford Ranger Raptor</div>
      <div class="case-service">Multimapas — 3 Perfiles</div>
      <p class="case-result">Tres perfiles de conducción programados: trekking económico, calle y sport. El cliente alterna entre ellos con los botones del volante original.</p>
      <div class="case-feel">Sensación: <span>Control total</span></div>
    </div>
    <div class="case-card">
      <div class="case-car">Mitsubishi Evo 5 RS</div>
      <div class="case-service">Stage 3 — Full Build 1100HP</div>
      <p class="case-result">Proyecto de rescate. 6 años en otro taller sin resultado. WitcherTorque intervino y en una sola sesión de dyno logró el objetivo del cliente.</p>
      <div class="case-feel">Sensación: <span>Récord</span></div>
    </div>
    <div class="case-card">
      <div class="case-car">Toyota Supra MK4</div>
      <div class="case-service">Calibración Premium — Export Build</div>
      <p class="case-result">Premier Edition 1/1. Build exclusivo para exportación Venezuela → Miami. Calibración de nivel internacional en el único ProHub de Venezuela.</p>
      <div class="case-feel">Sensación: <span>Obra maestra</span></div>
    </div>
  </div>
</section>

<!-- ─── MITOS ─────────────────────────────── -->
<section class="myths-section">
  <div class="section-eyebrow reveal">Preguntas reales</div>
  <h2 class="section-title reveal">MITOS Y <span>VERDADES</span></h2>
  <div class="myth-item reveal">
    <div class="myth-check"><svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4L3.5 6.5L9 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg></div>
    <div><div class="myth-q">¿La reprogramación rompe el motor?</div><p class="myth-a">No, siempre que el mantenimiento esté al día. Nuestras calibraciones mantienen activos todos los sistemas de protección de fábrica. No llevamos los componentes al 100% de su capacidad mecánica — trabajamos dentro de márgenes tolerables para que el auto sea perfectamente confiable.</p></div>
  </div>
  <div class="myth-item reveal">
    <div class="myth-check"><svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4L3.5 6.5L9 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg></div>
    <div><div class="myth-q">¿Anula la garantía del fabricante?</div><p class="myth-a">No con nuestro sistema. El proceso es 100% reversible — podemos reflashear la ECU con el software original antes de cualquier revisión de garantía. Sin modificaciones físicas visibles, sin huellas que comprometan la garantía.</p></div>
  </div>
  <div class="myth-item reveal">
    <div class="myth-check"><svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4L3.5 6.5L9 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg></div>
    <div><div class="myth-q">¿Los mapas genéricos importados son iguales?</div><p class="myth-a">No. Los mapas genéricos están calibrados para combustibles de alto octanaje de otros países. Venezuela tiene combustible con características propias. Cada uno de nuestros mapas se desarrolla y refina en nuestro dinamómetro teniendo esto en cuenta — con protecciones térmicas específicas.</p></div>
  </div>
  <div class="myth-item reveal">
    <div class="myth-check"><svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4L3.5 6.5L9 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg></div>
    <div><div class="myth-q">¿Un cajita o módulo externo es lo mismo?</div><p class="myth-a">No. Los módulos externos funcionan engañando los sensores — generan retardos, lecturas erróneas y pueden desactivar sistemas de seguridad. WitcherTorque hace reprogramación directa (Remap) sobre la ECU original. Control total nativo, cero cables cortados.</p></div>
  </div>
</section>

<!-- ─── CHAT AI ────────────────────────────── -->
<section class="ai-section" id="chat-ai">
  <div class="section-eyebrow reveal">Asesor virtual 24/7</div>
  <h2 class="section-title reveal">CONSULTAR <span>CON WT AI</span></h2>
  <p class="section-desc reveal">Decime qué vehículo tenés y te oriento sobre el potencial de tu configuración.</p>
  <div class="chat-win reveal">
    <div class="chat-hdr">
      <div class="chat-dot"></div>
      <span class="chat-hdr-txt">WitcherTorque AI — En línea</span>
    </div>
    <div class="chat-msgs" id="rChatMsgs">
      <div class="msg msg-ai">
        <div class="msg-label">WT AI</div>
        👋 ¿Qué vehículo tenés?<br><br>Decime: marca, modelo, año y motor — y te orientamos sobre el potencial de tu configuración.
      </div>
    </div>
    <div class="chat-typing" id="rChatTyping">WT AI está escribiendo...</div>
    <div class="chat-input-wrap">
      <input class="chat-input" id="rChatInput" type="text" placeholder="Ej: BMW M340i 2022, ¿qué Stage me recomendás?" onkeydown="if(event.key==='Enter')sendRChat()">
      <button class="chat-send" onclick="sendRChat()">Enviar</button>
    </div>
  </div>
</section>

<!-- ─── FAQ ───────────────────────────────── -->
<section class="faq-section">
  <div class="section-eyebrow reveal">Preguntas frecuentes</div>
  <h2 class="section-title reveal">FAQ</h2>
  <div class="reveal">
    <div class="faq-item">
      <button class="faq-q" onclick="toggleFaq(this)"><span>¿Qué diferencia hay entre Stage 1, Stage 2 y Stage 3?</span><span class="faq-arrow">+</span></button>
      <div class="faq-a"><strong>Stage 1:</strong> Solo software sobre motor stock. +20-30% HP. <br><br><strong>Stage 2:</strong> Software + hardware básico (downpipe, intercooler). +30-40% HP. El mapa se calibra específicamente para esas mejoras. <br><br><strong>Stage 3:</strong> Turbocompresores más grandes, inyección de alto flujo, standalone ECU. Calibración completa desde cero en nuestro dinamómetro.</div>
    </div>
    <div class="faq-item">
      <button class="faq-q" onclick="toggleFaq(this)"><span>¿Cuánto tarda el proceso de reprogramación?</span><span class="faq-arrow">+</span></button>
      <div class="faq-a">Stage 1 puede realizarse en el mismo día. Stage 2 requiere entre 1-2 días dependiendo del estado del vehículo y los ajustes en dynamómetro. Stage 3 es un proceso de varios días o semanas según la complejidad del build.</div>
    </div>
    <div class="faq-item">
      <button class="faq-q" onclick="toggleFaq(this)"><span>¿Qué es el Mainline ProHub y por qué es superior?</span><span class="faq-arrow">+</span></button>
      <div class="faq-a">El ProHub se atornilla directamente a los hubs de las ruedas del vehículo, eliminando el deslizamiento de los neumáticos que tienen los dynos de rodillos convencionales. El auto queda físicamente anclado, las mediciones son precisas celda por celda y sin desgaste de cauchos. Es el único de este tipo en Venezuela.</div>
    </div>
    <div class="faq-item">
      <button class="faq-q" onclick="toggleFaq(this)"><span>¿Qué son los multimapas y cómo se controlan?</span><span class="faq-arrow">+</span></button>
      <div class="faq-a">Los multimapas almacenan diferentes perfiles de potencia en la ECU original. Podés alternar entre ellos en tiempo real usando los botones originales del volante — como los mandos del crucero. Sin dispositivos externos, sin pantallas adicionales.</div>
    </div>
    <div class="faq-item">
      <button class="faq-q" onclick="toggleFaq(this)"><span>¿Hacen Remote Tuning?</span><span class="faq-arrow">+</span></button>
      <div class="faq-a">Sí. Realizamos Remote Tuning a cualquier parte del mundo. El cliente usa un dispositivo de lectura/escritura compatible y nosotros gestionamos la calibración remotamente con el mismo nivel de exigencia técnica que en el taller.</div>
    </div>
    <div class="faq-item">
      <button class="faq-q" onclick="toggleFaq(this)"><span>¿Cómo agendo un turno?</span><span class="faq-arrow">+</span></button>
      <div class="faq-a">El taller funciona únicamente <strong>con cita previa</strong>. Escribinos al WhatsApp +58 412-585-6541 con tu nombre, vehículo (marca, modelo, año y motor) y el servicio de interés. Atendemos de lunes a viernes, 8:00 AM – 5:00 PM.</div>
    </div>
  </div>
</section>

<!-- ─── CTA FINAL ─────────────────────────── -->
<section class="cta-final">
  <div class="cta-big reveal">DESCUBRÍ EL<br>POTENCIAL <span>REAL</span></div>
  <p class="cta-sub reveal">Cada motor tiene un potencial distinto. Lo medimos, lo desarrollamos y lo verificamos en dinamómetro.</p>
  <div class="cta-btns-wrap reveal">
    <a class="btn-primary" href="#calculadora" onclick="document.getElementById('calculadora').scrollIntoView({behavior:'smooth'});return false;">
      <svg width="14" height="10" viewBox="0 0 14 10" fill="none"><path d="M1 5H13M9 1L13 5L9 9" stroke="white" stroke-width="1.5" stroke-linecap="round"/></svg>
      Calcular el potencial de mi auto
    </a>
    <a class="btn-wa-big" href="https://wa.me/584125856541" target="_blank">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      Hablar con un tuner
    </a>
  </div>
</section>


</body>
</html>`;

  openWtModal(html, 'reprogramacion');
}

// ─── OPEN SERVICIOS PAGE ──────────────────────────

