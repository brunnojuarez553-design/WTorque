function openHallOfFame() {
  const html = `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>Hall of Fame — WitcherTorque</title>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Rajdhani:wght@300;400;500;600;700&family=Share+Tech+Mono&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/assets/css/hall-of-fame.css">
</head>
<body>

<!-- TOPBAR -->
<div class="topbar">
  <a class="topbar-logo" href="javascript:closeWtModal()">
    <img src="https://res.cloudinary.com/dvvuwigmy/image/upload/v1780437802/IMG_7191_sljwim_livrxj.png" alt="WitcherTorque">
  </a>
  <button class="back-btn" onclick="closeWtModal()">
    <svg width="14" height="10" viewBox="0 0 14 10" fill="none"><path d="M13 5H1M5 9L1 5L5 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
    Volver
  </button>
</div>

<!-- HERO -->
<div class="page-hero">
  <div class="page-hero-bg" style="background-image:url('https://res.cloudinary.com/dpiavcukm/image/upload/v1781500891/9d3fbf89-916b-4bb0-96d3-5d5019b454be.JPG_l6m8lg.jpg');"></div>
  <div class="page-hero-overlay"></div>
  <div class="page-hero-content">
    <div class="page-label">Récords y Proyectos Destacados</div>
    <div class="page-title">HALL OF<br><span>FAME</span></div>
    <p class="page-desc">Los proyectos más radicales que han pasado por WitcherTorque. Récords nacionales, potencias extremas, pilotos de élite.</p>
  </div>
</div>

<!-- STATS -->
<div class="hof-stats">
  <div class="hof-stat-box"><div class="hof-stat-num">12</div><div class="hof-stat-label">Récords Nacionales</div></div>
  <div class="hof-stat-box"><div class="hof-stat-num">+50</div><div class="hof-stat-label">Proyectos High Perf</div></div>
  <div class="hof-stat-box"><div class="hof-stat-num">+3K</div><div class="hof-stat-label">HP Desarrollados</div></div>
</div>

<!-- PROJECTS -->
<div class="hof-projects-wrap">
  <div class="hof-section-label">Proyectos Hall of Fame</div>

  <!-- ── PROYECTO 01: CORVETTE C8 ── -->
  <div class="hof-project">
    <div class="hof-rank-badge">01</div>

    <!-- PHOTO GRID -->
    <div class="hof-photo-grid">
      <div class="hof-photo-hero"><img src="https://res.cloudinary.com/dpiavcukm/image/upload/v1781500891/9d3fbf89-916b-4bb0-96d3-5d5019b454be.JPG_l6m8lg.jpg" loading="lazy" alt="Corvette C8" onclick="hofLightbox(this)" style="object-position:center 75%;"></div>
      <div><img src="https://res.cloudinary.com/dpiavcukm/image/upload/v1781500891/6942b519-f935-4f4a-a788-493ac2c46538.JPG_n4wgvn.jpg" loading="lazy" alt="Corvette C8" onclick="hofLightbox(this)" onerror="this.parentElement.style.display='none'"></div>
      <div><img src="https://res.cloudinary.com/dpiavcukm/image/upload/v1781500892/e587de09-26f6-4e9b-8139-6bfd7661d7d2.JPG_ylgiu0.jpg" loading="lazy" alt="Corvette C8" onclick="hofLightbox(this)" onerror="this.parentElement.style.display='none'"></div>
      <div><img src="https://res.cloudinary.com/dpiavcukm/image/upload/v1781500915/b8024c72-0103-4222-bf20-ee658de0c31f.JPG_gkxkjf.jpg" loading="lazy" alt="Corvette C8" onclick="hofLightbox(this)" onerror="this.parentElement.style.display='none'"></div>
      <div><img src="https://res.cloudinary.com/dpiavcukm/image/upload/v1781500904/IMG_5785.jpg_qlxk8n.jpg" loading="lazy" alt="Corvette C8" onclick="hofLightbox(this)" onerror="this.parentElement.style.display='none'"></div>
      <div><img src="https://res.cloudinary.com/dpiavcukm/image/upload/v1781500893/9f124631-559f-416c-8f0a-613fc7342f86.JPG_sufkc6.jpg" loading="lazy" alt="Corvette C8" onclick="hofLightbox(this)" onerror="this.parentElement.style.display='none'"></div>
      <div class="hof-video-thumb" style="background-image:url('https://res.cloudinary.com/dpiavcukm/video/upload/so_0,f_jpg,w_600/v1781567267/IMG_9880_n62tcz.jpg')" onclick="hofVideoLightbox('https://res.cloudinary.com/dpiavcukm/video/upload/f_mp4,vc_auto/v1781567267/IMG_9880_n62tcz.mp4')">
        <div class="hof-video-thumb-overlay">
          <div class="hof-video-play"><svg width="16" height="18" viewBox="0 0 16 18" fill="white"><polygon points="2,1 15,9 2,17"/></svg></div>
          <div class="hof-video-label">Circuito Turagua</div>
        </div>
      </div>
    </div>

    <div class="hof-info">
      <div class="hof-car-name">Corvette C8 Stingray</div>
      <div class="hof-car-subtitle">El C8 más rápido de Venezuela · Drag &amp; Circuito</div>

      <div class="hof-hp-row">
        <div class="hof-hp-badge">628HP</div>
        <div class="hof-hp-sub">A las ruedas<br>Motor interno stock</div>
      </div>

      <div class="hof-record-tags">
        <span class="hof-tag">🏆 #1 Venezuela Drag</span>
        <span class="hof-tag">🏆 #1 Venezuela Circuito</span>
        <span class="hof-tag">Categoría 10s</span>
        <span class="hof-tag">1/4 mi: 1:10:45</span>
      </div>

      <div class="hof-specs">
        <div class="hof-spec"><div class="hof-spec-label">Tiempo 1/4 milla</div><div class="hof-spec-val">1:10:45</div></div>
        <div class="hof-spec"><div class="hof-spec-label">Circuito</div><div class="hof-spec-val">Cat. 10s</div></div>
        <div class="hof-spec"><div class="hof-spec-label">Potencia rueda</div><div class="hof-spec-val">628 HP</div></div>
        <div class="hof-spec"><div class="hof-spec-label">Motor</div><div class="hof-spec-val">Stock LT2</div></div>
      </div>

      <div class="hof-mods-title">Modificaciones</div>
      <div class="hof-mods">
        <div class="hof-mod">Sistema completo de óxido nitroso doble</div>
        <div class="hof-mod">Sistema de admisión Eventuri en fibra de carbono</div>
        <div class="hof-mod">Colector de admisión Performance Throttle Response (Carbón pTR)</div>
        <div class="hof-mod">Cuerpo de aceleración</div>
        <div class="hof-mod">Sistema de combustible de metanol auxiliar</div>
        <div class="hof-mod">Reprogramación de ECU</div>
        <div class="hof-mod" style="color:rgba(200,0,0,0.75);font-style:italic;">Próximamente: motor forjado + Twin Turbo → objetivo 1400 HP</div>
      </div>

      <div class="hof-pilot">
        <span class="hof-pilot-icon">🏎️</span>
        <div><div class="hof-pilot-label">Pilotos</div><div class="hof-pilot-val">Enzo Notta &amp; Yury Slibe — Notta Motor</div></div>
      </div>
      <div class="hof-venue">
        <span class="hof-venue-icon">📍</span>
        <div><div class="hof-pilot-label">Circuito</div><div class="hof-pilot-val">Autódromo Internacional de Turagua — Pancho Pepe Croquer</div></div>
      </div>
    </div>
  </div>

  <div class="hof-divider"></div>

  <!-- ── PROYECTO 02: SUZUKI GSX-R 1000 ── -->
  <div class="hof-project">
    <div class="hof-rank-badge">02</div>

    <!-- PHOTO GRID -->
    <div class="hof-photo-grid">
      <div class="hof-photo-hero"><img src="https://res.cloudinary.com/dpiavcukm/image/upload/v1781500929/IMG_9320.jpg_mjmriz.jpg" loading="lazy" alt="GSX-R 1000" onclick="hofLightbox(this)"></div>
      <div><img src="https://res.cloudinary.com/dpiavcukm/image/upload/f_jpg,q_auto/v1781500921/IMG_9317_zc58zh.jpg" loading="lazy" alt="GSX-R 1000" onclick="hofLightbox(this)" onerror="this.parentElement.style.display='none'"></div>
      <div><img src="https://res.cloudinary.com/dpiavcukm/image/upload/f_jpg,q_auto/v1781500901/IMG_9339_vvgsky.jpg" loading="lazy" alt="GSX-R 1000" onclick="hofLightbox(this)" onerror="this.parentElement.style.display='none'"></div>
      <div><img src="https://res.cloudinary.com/dpiavcukm/image/upload/f_jpg,q_auto/v1781500913/IMG_9358_onky7o.jpg" loading="lazy" alt="GSX-R 1000" onclick="hofLightbox(this)" onerror="this.parentElement.style.display='none'"></div>
      <div><img src="https://res.cloudinary.com/dpiavcukm/image/upload/f_jpg,q_auto/v1781500929/IMG_9356_snlcwd.jpg" loading="lazy" alt="GSX-R 1000" onclick="hofLightbox(this)" onerror="this.parentElement.style.display='none'"></div>
      <div><img src="https://res.cloudinary.com/dpiavcukm/image/upload/f_jpg,q_auto/v1781500938/IMG_9462_n16nb8.jpg" loading="lazy" alt="GSX-R 1000" onclick="hofLightbox(this)" onerror="this.parentElement.style.display='none'"></div>
      <div><img src="https://res.cloudinary.com/dpiavcukm/image/upload/f_jpg,q_auto/v1781500938/IMG_9389_syqjrv.jpg" loading="lazy" alt="GSX-R 1000" onclick="hofLightbox(this)" onerror="this.parentElement.style.display='none'"></div>
      <div><img src="https://res.cloudinary.com/dpiavcukm/image/upload/f_jpg,q_auto/v1781500947/IMG_9318_bs3x1i.jpg" loading="lazy" alt="GSX-R 1000" onclick="hofLightbox(this)" onerror="this.parentElement.style.display='none'"></div>
      <div><img src="https://res.cloudinary.com/dpiavcukm/image/upload/f_jpg,q_auto/v1781500939/IMG_9472_k17khp.jpg" loading="lazy" alt="GSX-R 1000" onclick="hofLightbox(this)" onerror="this.parentElement.style.display='none'"></div>
      <div><img src="https://res.cloudinary.com/dpiavcukm/image/upload/v1781500961/09e965b7-c8d4-499f-a060-80fd5ff9be55.JPG_d3ab4d.jpg" loading="lazy" alt="GSX-R 1000" onclick="hofLightbox(this)" onerror="this.parentElement.style.display='none'"></div>
      <div><img src="https://res.cloudinary.com/dpiavcukm/image/upload/f_jpg,q_auto/v1781500959/IMG_9474_bww3qt.jpg" loading="lazy" alt="GSX-R 1000" onclick="hofLightbox(this)" onerror="this.parentElement.style.display='none'"></div>
      <div><img src="https://res.cloudinary.com/dpiavcukm/image/upload/v1781500960/IMG_9477.jpg_fqdpxe.jpg" loading="lazy" alt="GSX-R 1000" onclick="hofLightbox(this)" onerror="this.parentElement.style.display='none'"></div>
      <div><img src="https://res.cloudinary.com/dpiavcukm/image/upload/v1781500965/0863f861-ff02-4c29-8c43-f7c5a39b6247.JPG_p1tu0y.jpg" loading="lazy" alt="GSX-R 1000" onclick="hofLightbox(this)" onerror="this.parentElement.style.display='none'"></div>
      <div><img src="https://res.cloudinary.com/dpiavcukm/image/upload/f_jpg,q_auto/v1781500969/IMG_6255_kymbix.jpg" loading="lazy" alt="GSX-R 1000" onclick="hofLightbox(this)" onerror="this.parentElement.style.display='none'"></div>
      <div><img src="https://res.cloudinary.com/dpiavcukm/image/upload/f_jpg,q_auto/v1781500979/IMG_6259_tovpjq.jpg" loading="lazy" alt="GSX-R 1000" onclick="hofLightbox(this)" onerror="this.parentElement.style.display='none'"></div>
      <div class="hof-video-thumb" style="background-image:url('https://res.cloudinary.com/dpiavcukm/video/upload/so_0,f_jpg,w_600/v1781500942/58746365-facb-4efb-99b0-e1dca8d7360d_euwguv.jpg')" onclick="hofVideoLightbox('https://res.cloudinary.com/dpiavcukm/video/upload/f_mp4,vc_auto/v1781500942/58746365-facb-4efb-99b0-e1dca8d7360d_euwguv.mp4')">
        <div class="hof-video-thumb-overlay">
          <div class="hof-video-play"><svg width="16" height="18" viewBox="0 0 16 18" fill="white"><polygon points="2,1 15,9 2,17"/></svg></div>
          <div class="hof-video-label">The Valley Dragway</div>
        </div>
      </div>
    </div>

    <div class="hof-info">
      <div class="hof-car-name">Suzuki GSX-R 1000</div>
      <div class="hof-car-subtitle">La moto más rápida de Venezuela · Récord Nacional</div>

      <div class="hof-hp-row">
        <div class="hof-hp-badge">8.74s</div>
        <div class="hof-hp-sub">1/4 de milla<br>Sin nitro · HP confidencial</div>
      </div>

      <div class="hof-record-tags">
        <span class="hof-tag">🏆 Récord Nacional Venezuela</span>
        <span class="hof-tag">Moto más rápida</span>
        <span class="hof-tag">8.74s sin nitro</span>
        <span class="hof-tag">Motor stock</span>
      </div>

      <div class="hof-specs">
        <div class="hof-spec"><div class="hof-spec-label">Tiempo 1/4 milla</div><div class="hof-spec-val">8.74 s</div></div>
        <div class="hof-spec"><div class="hof-spec-label">Nitro en pasada</div><div class="hof-spec-val">No usado</div></div>
        <div class="hof-spec"><div class="hof-spec-label">HP</div><div class="hof-spec-val">Confidencial</div></div>
        <div class="hof-spec"><div class="hof-spec-label">Motor</div><div class="hof-spec-val">Stock</div></div>
      </div>

      <div class="hof-mods-title">Modificaciones</div>
      <div class="hof-mods">
        <div class="hof-mod">Instalación y adaptación de MaxxEcu Race (1 EGT por cilindro, wideband, etc.)</div>
        <div class="hof-mod">Bomba de combustible Brushless</div>
        <div class="hof-mod">Inyectores de alto flujo</div>
        <div class="hof-mod">Nitro progresivo</div>
        <div class="hof-mod">Cambio rápido por CO₂ (solenoide que mueve la palanca)</div>
        <div class="hof-mod">Launch control</div>
        <div class="hof-mod">Electrónica de competición avanzada</div>
      </div>

      <div class="hof-pilot">
        <span class="hof-pilot-icon">🏍️</span>
        <div><div class="hof-pilot-label">Piloto</div><div class="hof-pilot-val">Alberto Yepez — Mechi Racing</div></div>
      </div>
      <div class="hof-venue">
        <span class="hof-venue-icon">📍</span>
        <div><div class="hof-pilot-label">Pista</div><div class="hof-pilot-val">The Valley Dragway — Ciudad Ojeda</div></div>
      </div>
    </div>
  </div>

  <div class="hof-divider"></div>

  <!-- ── PROYECTO 03: FORD RANGER RAPTOR ── -->
  <div class="hof-project">
    <div class="hof-rank-badge">03</div>

    <!-- PHOTO GRID -->
    <div class="hof-photo-grid">
      <div class="hof-photo-hero"><img src="https://res.cloudinary.com/dpiavcukm/image/upload/v1781508206/IMG_7667_tarzt5.jpg" loading="lazy" alt="Ranger Raptor" onclick="hofLightbox(this)" onerror="this.parentElement.style.display='none'"></div>
      <div><img src="https://res.cloudinary.com/dpiavcukm/image/upload/v1781508204/IMG_7670_n5z0zs.jpg" loading="lazy" alt="Ranger Raptor" onclick="hofLightbox(this)" onerror="this.parentElement.style.display='none'"></div>
      <div><img src="https://res.cloudinary.com/dpiavcukm/image/upload/v1781508209/IMG_7678_wyqoct.jpg" loading="lazy" alt="Ranger Raptor" onclick="hofLightbox(this)" onerror="this.parentElement.style.display='none'"></div>
      <div><img src="https://res.cloudinary.com/dpiavcukm/image/upload/v1781508208/IMG_7664_qmut59.jpg" loading="lazy" alt="Ranger Raptor" onclick="hofLightbox(this)" onerror="this.parentElement.style.display='none'"></div>
      <div><img src="https://res.cloudinary.com/dpiavcukm/image/upload/v1781508208/IMG_7677_edacp1.jpg" loading="lazy" alt="Ranger Raptor" onclick="hofLightbox(this)" onerror="this.parentElement.style.display='none'"></div>
      <div><img src="https://res.cloudinary.com/dpiavcukm/image/upload/v1781508203/IMG_7680_k3ztma.jpg" loading="lazy" alt="Ranger Raptor" onclick="hofLightbox(this)" onerror="this.parentElement.style.display='none'"></div>
      <div><img src="https://res.cloudinary.com/dpiavcukm/image/upload/v1781508202/IMG_7673_jat9kg.jpg" loading="lazy" alt="Ranger Raptor" onclick="hofLightbox(this)" onerror="this.parentElement.style.display='none'"></div>
      <div><img src="https://res.cloudinary.com/dpiavcukm/image/upload/v1781508201/IMG_7683_yzmkd7.jpg" loading="lazy" alt="Ranger Raptor" onclick="hofLightbox(this)" onerror="this.parentElement.style.display='none'"></div>
      <div><img src="https://res.cloudinary.com/dpiavcukm/image/upload/v1781508200/IMG_7679_zcijvt.jpg" loading="lazy" alt="Ranger Raptor" onclick="hofLightbox(this)" onerror="this.parentElement.style.display='none'"></div>
      <div><img src="https://res.cloudinary.com/dpiavcukm/image/upload/v1781508200/IMG_7676_ajvneu.jpg" loading="lazy" alt="Ranger Raptor" onclick="hofLightbox(this)" onerror="this.parentElement.style.display='none'"></div>
      <div class="hof-video-thumb" style="background-image:url('https://res.cloudinary.com/dpiavcukm/video/upload/so_0,f_jpg,w_600/v1781501305/IMG_9165_uuaaxk.jpg')" onclick="hofVideoLightbox('https://res.cloudinary.com/dpiavcukm/video/upload/f_mp4,vc_auto/v1781501305/IMG_9165_uuaaxk.mp4')">
        <div class="hof-video-thumb-overlay">
          <div class="hof-video-play"><svg width="16" height="18" viewBox="0 0 16 18" fill="white"><polygon points="2,1 15,9 2,17"/></svg></div>
          <div class="hof-video-label">Ranger Raptor</div>
        </div>
      </div>
    </div>

    <div class="hof-info">
      <div class="hof-car-name">Ford Ranger Raptor</div>
      <div class="hof-car-subtitle">Paquete Completo · En conjunto con Blindados Aquilino</div>

      <div class="hof-hp-row">
        <div class="hof-hp-badge">579HP</div>
        <div class="hof-hp-sub">A las ruedas<br>Motor interno stock</div>
      </div>

      <div class="hof-record-tags">
        <span class="hof-tag">579 HP rueda</span>
        <span class="hof-tag">Motor stock</span>
        <span class="hof-tag">Stage 2</span>
        <span class="hof-tag">Blindados Aquilino</span>
        <span class="hof-tag">RotoraBrakeVe</span>
      </div>

      <div class="hof-specs">
        <div class="hof-spec"><div class="hof-spec-label">Potencia rueda</div><div class="hof-spec-val">579 HP</div></div>
        <div class="hof-spec"><div class="hof-spec-label">Motor</div><div class="hof-spec-val">Stock</div></div>
        <div class="hof-spec"><div class="hof-spec-label">Turbos</div><div class="hof-spec-val">Garrett Stage 2</div></div>
        <div class="hof-spec"><div class="hof-spec-label">Transmisión</div><div class="hof-spec-val">10R60 Stage 3</div></div>
      </div>

      <div class="hof-mods-title">Modificaciones</div>
      <div class="hof-mods">
        <div class="hof-mod">Piping HKS</div>
        <div class="hof-mod">Process West Stage 2 Intercooler</div>
        <div class="hof-mod">UPR Oil Catch Can</div>
        <div class="hof-mod">Eibach Pro Lift Kit (front)</div>
        <div class="hof-mod">Downpipe custom made in WitcherTorque</div>
        <div class="hof-mod">Turbos Garrett Stage 2 Turbocharger</div>
        <div class="hof-mod">Process West Transmission Cooler</div>
        <div class="hof-mod">Bujías NGK Iridium</div>
        <div class="hof-mod">K&N Cold Air Intake</div>
        <div class="hof-mod">Vossen HF6 20x9.5</div>
        <div class="hof-mod">Nitto Recon 295/60R20</div>
        <div class="hof-mod">Frenos ROTORA forjados — 8 pistones adelante · 6 pistones atrás</div>
        <div class="hof-mod">Upgrade Stage 3 10R60</div>
        <div class="hof-mod">Tanque auxiliar ARB 120 litros</div>
        <div class="hof-mod">Mishimoto Carbon Fiber Exhaust</div>
        <div class="hof-mod">Reprogramación — multimapas, laguna, control rolling, antilag, hard cut</div>
        <div class="hof-mod" style="color:rgba(200,0,0,0.75);font-style:italic;">Próximamente: sistema de combustible</div>
      </div>

      <div class="hof-pilot">
        <span class="hof-pilot-icon">🏎️</span>
        <div><div class="hof-pilot-label">Piloto</div><div class="hof-pilot-val">Ricardo Pernia Chang — Blindados Aquilino &amp; RotoraBrakeVe</div></div>
      </div>
    </div>
  </div>

  <div class="hof-divider"></div>

  <!-- ── PROYECTO 04: NISSAN GTR R35 ── -->
  <div class="hof-project">
    <div class="hof-rank-badge">04</div>

    <!-- PHOTO GRID -->
    <div class="hof-photo-grid">
      <div class="hof-photo-hero"><img src="https://res.cloudinary.com/dpiavcukm/image/upload/v1781500990/7f16fbd1-23c5-4496-89d1-6e7c11ebe474.JPG_rghhrs.jpg" loading="lazy" alt="Nissan GTR R35" onclick="hofLightbox(this)" onerror="this.parentElement.style.display='none'"></div>
      <div><img src="https://res.cloudinary.com/dpiavcukm/image/upload/v1781501004/e4916dc1-486a-4f53-95d2-ddaf584fda17.JPG_qurcdz.jpg" loading="lazy" alt="Nissan GTR R35" onclick="hofLightbox(this)" onerror="this.parentElement.style.display='none'"></div>
      <div><img src="https://res.cloudinary.com/dpiavcukm/image/upload/v1781501017/e98806ed-3c1c-4b29-a21a-b04b9e710b9d.JPG_xtod9o.jpg" loading="lazy" alt="Nissan GTR R35" onclick="hofLightbox(this)" onerror="this.parentElement.style.display='none'"></div>
      <div><img src="https://res.cloudinary.com/dpiavcukm/image/upload/v1781501014/e2389e82-33da-44af-aeb4-525f8d7dbe4d.JPG_eyd64k.jpg" loading="lazy" alt="Nissan GTR R35" onclick="hofLightbox(this)" onerror="this.parentElement.style.display='none'"></div>
      <div class="hof-video-thumb" style="background-image:url('https://res.cloudinary.com/dpiavcukm/video/upload/so_0,f_jpg,w_600/v1781501247/IMG_6726_ses2q1.jpg')" onclick="hofVideoLightbox('https://res.cloudinary.com/dpiavcukm/video/upload/f_mp4,vc_auto/v1781501247/IMG_6726_ses2q1.mp4')">
        <div class="hof-video-thumb-overlay">
          <div class="hof-video-play"><svg width="16" height="18" viewBox="0 0 16 18" fill="white"><polygon points="2,1 15,9 2,17"/></svg></div>
          <div class="hof-video-label">GTR R35 — Aceleración</div>
        </div>
      </div>
      <div class="hof-video-thumb" style="background-image:url('https://res.cloudinary.com/dpiavcukm/video/upload/so_0,f_jpg,w_600/v1781501283/IMG_9903_phvl2u.jpg')" onclick="hofVideoLightbox('https://res.cloudinary.com/dpiavcukm/video/upload/f_mp4,vc_auto/v1781501283/IMG_9903_phvl2u.mp4')">
        <div class="hof-video-thumb-overlay">
          <div class="hof-video-play"><svg width="16" height="18" viewBox="0 0 16 18" fill="white"><polygon points="2,1 15,9 2,17"/></svg></div>
          <div class="hof-video-label">GTR en pista</div>
        </div>
      </div>
    </div>

    <div class="hof-info">
      <div class="hof-car-name">Nissan GTR R35</div>
      <div class="hof-car-subtitle">El Nissan GTR más rápido de Venezuela</div>

      <div class="hof-hp-row">
        <div class="hof-hp-badge">1000HP</div>
        <div class="hof-hp-sub">A las ruedas (actualmente)<br>Objetivo: 2000 HP</div>
      </div>

      <div class="hof-record-tags">
        <span class="hof-tag">🏆 GTR más rápido Venezuela</span>
        <span class="hof-tag">1000 HP rueda</span>
        <span class="hof-tag">1/4 mi: 9.30s</span>
        <span class="hof-tag">Motor stock</span>
        <span class="hof-tag">Proyecto en desarrollo</span>
      </div>

      <div class="hof-specs">
        <div class="hof-spec"><div class="hof-spec-label">Potencia rueda</div><div class="hof-spec-val">1000 HP</div></div>
        <div class="hof-spec"><div class="hof-spec-label">Motor</div><div class="hof-spec-val">Stock</div></div>
        <div class="hof-spec"><div class="hof-spec-label">Tiempo 1/4 milla</div><div class="hof-spec-val">9.30 s</div></div>
        <div class="hof-spec"><div class="hof-spec-label">Objetivo</div><div class="hof-spec-val">2000 HP</div></div>
      </div>

      <div class="hof-mods-title">Estado actual</div>
      <div class="hof-mods">
        <div class="hof-mod">Motor internos stock (actualmente)</div>
        <div class="hof-mod">1000 HP a las ruedas verificados en dyno</div>
        <div class="hof-mod">Tiempo 1/4 de milla: 9.30s — Autódromo Internacional de Turagua Pancho Pepe Croquer</div>
        <div class="hof-mod" style="color:rgba(200,0,0,0.75);font-style:italic;">Próximamente: mejoras radicales — objetivo 2000 HP · el proyecto más ambicioso de la historia del taller</div>
      </div>

      <div class="hof-pilot">
        <span class="hof-pilot-icon">🏎️</span>
        <div><div class="hof-pilot-label">Piloto</div><div class="hof-pilot-val">Tony Castro</div></div>
      </div>
      <div class="hof-venue">
        <span class="hof-venue-icon">📍</span>
        <div><div class="hof-pilot-label">Pista</div><div class="hof-pilot-val">Autódromo Internacional de Turagua — Pancho Pepe Croquer</div></div>
      </div>
    </div>
  </div>

  <div class="hof-divider"></div>

  <!-- ── PROYECTO 05: FORD F-150 5.0 COYOTE ── -->
  <div class="hof-project">
    <div class="hof-rank-badge">05</div>

    <!-- PHOTO GRID -->
    <div class="hof-photo-grid">
      <div class="hof-photo-hero"><img src="https://res.cloudinary.com/dpiavcukm/image/upload/v1781501022/IMG_4728.jpg_fxcvtt.jpg" loading="lazy" alt="Ford F-150 Coyote" onclick="hofLightbox(this)"></div>
      <div><img src="https://res.cloudinary.com/dpiavcukm/image/upload/v1781501054/IMG_4729.jpg_e9tijn.jpg" loading="lazy" alt="Ford F-150 Coyote" onclick="hofLightbox(this)"></div>
      <div><img src="https://res.cloudinary.com/dpiavcukm/image/upload/f_jpg,q_auto/v1781501051/IMG_1597_igindj.jpg" loading="lazy" alt="Ford F-150 Coyote" onerror="this.parentElement.style.display='none'" onclick="hofLightbox(this)"></div>
      <div><img src="https://res.cloudinary.com/dpiavcukm/image/upload/f_jpg,q_auto/v1781501030/IMG_1598_bfslx8.jpg" loading="lazy" alt="Ford F-150 Coyote" onerror="this.parentElement.style.display='none'" onclick="hofLightbox(this)"></div>
      <div><img src="https://res.cloudinary.com/dpiavcukm/image/upload/f_jpg,q_auto/v1781501050/IMG_1583_pjwxqm.jpg" loading="lazy" alt="Ford F-150 Coyote" onerror="this.parentElement.style.display='none'" onclick="hofLightbox(this)"></div>
      <div><img src="https://res.cloudinary.com/dpiavcukm/image/upload/f_jpg,q_auto/v1781501042/IMG_1577_xxbql4.jpg" loading="lazy" alt="Ford F-150 Coyote" onerror="this.parentElement.style.display='none'" onclick="hofLightbox(this)"></div>
      <div><img src="https://res.cloudinary.com/dpiavcukm/image/upload/f_jpg,q_auto/v1781501052/IMG_8545_urpbsl.jpg" loading="lazy" alt="Ford F-150 Coyote" onerror="this.parentElement.style.display='none'" onclick="hofLightbox(this)"></div>
      <div><img src="https://res.cloudinary.com/dpiavcukm/image/upload/f_jpg,q_auto/v1781501020/IMG_1608_heq44g.jpg" loading="lazy" alt="Ford F-150 Coyote" onerror="this.parentElement.style.display='none'" onclick="hofLightbox(this)"></div>
    </div>

    <div class="hof-info">
      <div class="hof-car-name">Ford F-150 5.0 Coyote</div>
      <div class="hof-car-subtitle">Proyecto personal del taller · Con EsteemCustom (Miami)</div>

      <div class="hof-hp-row">
        <div class="hof-hp-badge">+1500HP</div>
        <div class="hof-hp-sub">Objetivo<br>Twin Turbo 5.0 Coyote</div>
      </div>

      <div class="hof-record-tags">
        <span class="hof-tag">Proyecto WitcherTorque</span>
        <span class="hof-tag">Twin Turbo 5.0</span>
        <span class="hof-tag">+1500 HP objetivo</span>
        <span class="hof-tag">EsteemCustom Miami</span>
        <span class="hof-tag">En construcción</span>
      </div>

      <div class="hof-specs">
        <div class="hof-spec"><div class="hof-spec-label">Motor</div><div class="hof-spec-val">5.0 Coyote</div></div>
        <div class="hof-spec"><div class="hof-spec-label">Config.</div><div class="hof-spec-val">Twin Turbo</div></div>
        <div class="hof-spec"><div class="hof-spec-label">HP objetivo</div><div class="hof-spec-val">+1500</div></div>
        <div class="hof-spec"><div class="hof-spec-label">Estado</div><div class="hof-spec-val">En build</div></div>
      </div>

      <div class="hof-mods-title">Proyecto</div>
      <div class="hof-mods">
        <div class="hof-mod">Motor 5.0 Coyote — preparación Twin Turbo</div>
        <div class="hof-mod">Objetivo: +1500 HP</div>
        <div class="hof-mod">Proyecto personal del taller WitcherTorque</div>
        <div class="hof-mod">En colaboración con EsteemCustom (Miami, USA)</div>
        <div class="hof-mod" style="color:rgba(200,0,0,0.75);font-style:italic;">Pronto empezamos el proyecto — prepárense</div>
      </div>
    </div>
  </div>

  <div class="hof-divider"></div>

  <!-- ── PROYECTO 06: MITSUBISHI LANCER EVOLUTION 5RS ── -->
  <div class="hof-project">
    <div class="hof-rank-badge">06</div>

    <!-- PHOTO GRID -->
    <div class="hof-photo-grid">
      <div class="hof-photo-hero"><img src="https://res.cloudinary.com/dpiavcukm/image/upload/v1781501076/IMG_3081.jpg_i61men.jpg" loading="lazy" alt="Evo 5RS" onclick="hofLightbox(this)"></div>
      <div><img src="https://res.cloudinary.com/dpiavcukm/image/upload/f_jpg,q_auto/v1781501082/IMG_5603_mbrbpx.jpg" loading="lazy" alt="Evo 5RS" onerror="this.parentElement.style.display='none'" onclick="hofLightbox(this)"></div>
      <div><img src="https://res.cloudinary.com/dpiavcukm/image/upload/v1781501086/F93D0105-C45D-4DEE-BD79-0278C5300218.JPG_ac07gk.jpg" loading="lazy" alt="Evo 5RS" onclick="hofLightbox(this)"></div>
      <div><img src="https://res.cloudinary.com/dpiavcukm/image/upload/f_jpg,q_auto/v1781501065/IMG_2172_ynswqm.jpg" loading="lazy" alt="Evo 5RS" onerror="this.parentElement.style.display='none'" onclick="hofLightbox(this)"></div>
      <div><img src="https://res.cloudinary.com/dpiavcukm/image/upload/f_jpg,q_auto/v1781501069/IMG_3054_rxmgqn.jpg" loading="lazy" alt="Evo 5RS" onerror="this.parentElement.style.display='none'" onclick="hofLightbox(this)"></div>
      <div><img src="https://res.cloudinary.com/dpiavcukm/image/upload/f_jpg,q_auto/v1781501070/IMG_1949_nscm4d.jpg" loading="lazy" alt="Evo 5RS" onerror="this.parentElement.style.display='none'" onclick="hofLightbox(this)"></div>
      <div><img src="https://res.cloudinary.com/dpiavcukm/image/upload/f_jpg,q_auto/v1781501058/IMG_0957_xu3e8n.jpg" loading="lazy" alt="Evo 5RS" onerror="this.parentElement.style.display='none'" onclick="hofLightbox(this)"></div>
      <div><img src="https://res.cloudinary.com/dpiavcukm/image/upload/f_jpg,q_auto/v1781501066/IMG_2906_yuhere.jpg" loading="lazy" alt="Evo 5RS" onerror="this.parentElement.style.display='none'" onclick="hofLightbox(this)"></div>
      <div><img src="https://res.cloudinary.com/dpiavcukm/image/upload/f_jpg,q_auto/v1781501075/IMG_5599_eax7ui.jpg" loading="lazy" alt="Evo 5RS" onerror="this.parentElement.style.display='none'" onclick="hofLightbox(this)"></div>
      <div><img src="https://res.cloudinary.com/dpiavcukm/image/upload/f_jpg,q_auto/v1781501072/IMG_0739_qwbhdm.jpg" loading="lazy" alt="Evo 5RS" onerror="this.parentElement.style.display='none'" onclick="hofLightbox(this)"></div>
      <div><img src="https://res.cloudinary.com/dpiavcukm/image/upload/v1781501077/IMG_2281.jpg_qgv6fi.jpg" loading="lazy" alt="Evo 5RS" onclick="hofLightbox(this)"></div>
      <div><img src="https://res.cloudinary.com/dpiavcukm/image/upload/f_jpg,q_auto/v1781501082/IMG_1481_zureyc.jpg" loading="lazy" alt="Evo 5RS" onerror="this.parentElement.style.display='none'" onclick="hofLightbox(this)"></div>
      <div><img src="https://res.cloudinary.com/dpiavcukm/image/upload/f_jpg,q_auto/v1781501078/IMG_1950_oic9em.jpg" loading="lazy" alt="Evo 5RS" onerror="this.parentElement.style.display='none'" onclick="hofLightbox(this)"></div>
      <div><img src="https://res.cloudinary.com/dpiavcukm/image/upload/f_jpg,q_auto/v1781501084/IMG_6273_tx6bgw.jpg" loading="lazy" alt="Evo 5RS" onerror="this.parentElement.style.display='none'" onclick="hofLightbox(this)"></div>
    </div>

    <div class="hof-info">
      <div class="hof-car-name">Mitsubishi Lancer Evo 5RS</div>
      <div class="hof-car-subtitle">El 4 cilindros más rápido de Venezuela · Drag &amp; Roll Race</div>

      <div class="hof-hp-row">
        <div class="hof-hp-badge">1018HP</div>
        <div class="hof-hp-sub">A las ruedas<br>Bloque billet · Motor forjado</div>
      </div>

      <div class="hof-record-tags">
        <span class="hof-tag">🏆 4-cil más rápido Venezuela</span>
        <span class="hof-tag">🏆 Evo más rápido Venezuela</span>
        <span class="hof-tag">1018 HP</span>
        <span class="hof-tag">Drag &amp; Roll Race</span>
        <span class="hof-tag">1ª MaxxECU Gen2 Venezuela</span>
        <span class="hof-tag">Proyecto en desarrollo</span>
      </div>

      <div class="hof-specs">
        <div class="hof-spec"><div class="hof-spec-label">Potencia</div><div class="hof-spec-val">1018 HP</div></div>
        <div class="hof-spec"><div class="hof-spec-label">Bloque</div><div class="hof-spec-val">Billet</div></div>
        <div class="hof-spec"><div class="hof-spec-label">Transmisión</div><div class="hof-spec-val">Billet</div></div>
        <div class="hof-spec"><div class="hof-spec-label">ECU</div><div class="hof-spec-val">MaxxECU Gen2</div></div>
      </div>

      <div class="hof-mods-title">Modificaciones destacadas</div>
      <div class="hof-mods">
        <div class="hof-mod">Bloque billet</div>
        <div class="hof-mod">Motor forjado</div>
        <div class="hof-mod">Transmisión billet</div>
        <div class="hof-mod">Primera MaxxECU Gen 2 instalada en Venezuela</div>
        <div class="hof-mod">Paracaídas</div>
        <div class="hof-mod" style="color:rgba(200,0,0,0.75);font-style:italic;">Es solo una pequeña parte de toda la farmacia que tiene este carro — proyecto en desarrollo</div>
      </div>

      <div class="hof-pilot">
        <span class="hof-pilot-icon">🏎️</span>
        <div><div class="hof-pilot-label">Piloto</div><div class="hof-pilot-val">Gamar Márquez</div></div>
      </div>
    </div>
  </div>

  <!-- PRÓXIMAMENTE -->
  <div class="hof-divider"></div>

  <!-- ── PROYECTO 07: NISSAN GTR R35 COLOMBIANO ── -->
  <div class="hof-project">
    <div class="hof-rank-badge">07</div>

    <!-- PHOTO GRID -->
    <div class="hof-photo-grid">
      <div class="hof-photo-hero"><img src="https://res.cloudinary.com/dpiavcukm/image/upload/v1781501086/IMG_4751.jpg_b4tkk8.jpg" loading="lazy" alt="GTR R35 Colombia" onclick="hofLightbox(this)"></div>
      <div><img src="https://res.cloudinary.com/dpiavcukm/image/upload/v1781501087/IMG_4749.jpg_mavpvg.jpg" loading="lazy" alt="GTR R35 Colombia" onclick="hofLightbox(this)"></div>
      <div><img src="https://res.cloudinary.com/dpiavcukm/image/upload/v1781501084/IMG_4743.jpg_kgp3kt.jpg" loading="lazy" alt="GTR R35 Colombia" onclick="hofLightbox(this)"></div>
      <div><img src="https://res.cloudinary.com/dpiavcukm/image/upload/v1781501084/IMG_4752.jpg_imqoyi.jpg" loading="lazy" alt="GTR R35 Colombia" onclick="hofLightbox(this)"></div>
      <div><img src="https://res.cloudinary.com/dpiavcukm/image/upload/v1781501081/IMG_4753.jpg_ze0ocp.jpg" loading="lazy" alt="GTR R35 Colombia" onclick="hofLightbox(this)"></div>
      <div><img src="https://res.cloudinary.com/dpiavcukm/image/upload/v1781501079/IMG_4748.jpg_xjotmv.jpg" loading="lazy" alt="GTR R35 Colombia" onclick="hofLightbox(this)"></div>
      <div><img src="https://res.cloudinary.com/dpiavcukm/image/upload/v1781501087/IMG_4755.jpg_igikig.jpg" loading="lazy" alt="GTR R35 Colombia" onclick="hofLightbox(this)"></div>
    </div>

    <div class="hof-info">
      <div class="hof-car-name">Nissan GTR R35</div>
      <div class="hof-car-subtitle">Proyecto Colombiano · Bucaramanga → Venezuela → Bucaramanga</div>

      <div class="hof-hp-row">
        <div class="hof-hp-badge">1000HP</div>
        <div class="hof-hp-sub">A las ruedas<br>Motor y transmisión restaurados</div>
      </div>

      <div class="hof-record-tags">
        <span class="hof-tag">🇨🇴 Cliente Bucaramanga</span>
        <span class="hof-tag">Importación temporal</span>
        <span class="hof-tag">1000 HP</span>
        <span class="hof-tag">Motor + Transmisión</span>
        <span class="hof-tag">@gtrmix</span>
      </div>

      <div class="hof-specs">
        <div class="hof-spec"><div class="hof-spec-label">Potencia</div><div class="hof-spec-val">1000 HP</div></div>
        <div class="hof-spec"><div class="hof-spec-label">Origen</div><div class="hof-spec-val">Bucaramanga, COL</div></div>
        <div class="hof-spec"><div class="hof-spec-label">Motor</div><div class="hof-spec-val">Restaurado + Upgrade</div></div>
        <div class="hof-spec"><div class="hof-spec-label">Trans.</div><div class="hof-spec-val">Restaurada</div></div>
      </div>

      <div class="hof-mods-title">La Historia</div>
      <div class="hof-mods">
        <div class="hof-mod">Cliente contactó desde Bucaramanga, Colombia con múltiples fallas en motor y transmisión</div>
        <div class="hof-mod">Vehículo traído a Venezuela bajo permiso temporal de importación — tiempo limitado</div>
        <div class="hof-mod">Diagnóstico completo, búsqueda y adquisición de piezas en tiempo récord</div>
        <div class="hof-mod">Solución total de fallas de motor y transmisión</div>
        <div class="hof-mod">Aumento de potencia a 1000 HP</div>
        <div class="hof-mod" style="color:rgba(200,0,0,0.85);font-style:italic;">A pocas horas de expirar el permiso, el vehículo fue cargado en grúa y enviado de regreso a Colombia</div>
      </div>

      <div class="hof-pilot">
        <span class="hof-pilot-icon">🇨🇴</span>
        <div><div class="hof-pilot-label">Cliente</div><div class="hof-pilot-val">@gtrmix — Bucaramanga, Colombia</div></div>
      </div>
    </div>
  </div>

  <div class="hof-divider"></div>

  <!-- ── PROYECTO 08: VOLKSWAGEN GOLF R MK7.5 ── -->
  <div class="hof-project">
    <div class="hof-rank-badge">08</div>

    <!-- PHOTO + VIDEO GRID -->
    <div class="hof-photo-grid">
      <div class="hof-photo-hero"><img src="https://res.cloudinary.com/dpiavcukm/image/upload/v1781501090/IMG_4674.jpg_sz4yek.jpg" loading="lazy" alt="Golf R MK7.5" onclick="hofLightbox(this)"></div>
      <div><img src="https://res.cloudinary.com/dpiavcukm/image/upload/v1781501090/IMG_4675.jpg_jkvyp6.jpg" loading="lazy" alt="Golf R MK7.5" onclick="hofLightbox(this)"></div>
      <div><img src="https://res.cloudinary.com/dpiavcukm/image/upload/v1781501087/IMG_4676.jpg_natnjq.jpg" loading="lazy" alt="Golf R MK7.5" onclick="hofLightbox(this)"></div>
      <div><img src="https://res.cloudinary.com/dpiavcukm/image/upload/v1781501089/IMG_4679.jpg_qaigl8.jpg" loading="lazy" alt="Golf R MK7.5" onclick="hofLightbox(this)"></div>
      <div><img src="https://res.cloudinary.com/dpiavcukm/image/upload/v1781501086/IMG_4678.jpg_lfoqj2.jpg" loading="lazy" alt="Golf R MK7.5" onclick="hofLightbox(this)"></div>
      <div><img src="https://res.cloudinary.com/dpiavcukm/image/upload/v1781501093/IMG_4677.jpg_s0xhub.jpg" loading="lazy" alt="Golf R MK7.5" onclick="hofLightbox(this)"></div>
      <div class="hof-video-thumb" style="background-image:url('https://res.cloudinary.com/dpiavcukm/video/upload/so_0,f_jpg,w_600/v1781501232/IMG_9291_digelf.jpg')" onclick="hofVideoLightbox('https://res.cloudinary.com/dpiavcukm/video/upload/f_mp4,vc_auto/v1781501232/IMG_9291_digelf.mp4')">
        <div class="hof-video-thumb-overlay">
          <div class="hof-video-play"><svg width="16" height="18" viewBox="0 0 16 18" fill="white"><polygon points="2,1 15,9 2,17"/></svg></div>
          <div class="hof-video-label">Golf R — En pista</div>
        </div>
      </div>
    </div>

    <div class="hof-info">
      <div class="hof-car-name">Volkswagen Golf R MK7.5</div>
      <div class="hof-car-subtitle">El VAG más rápido de Venezuela · Proyecto personal del taller</div>

      <div class="hof-hp-row">
        <div class="hof-hp-badge">???HP</div>
        <div class="hof-hp-sub">Confidencial<br>Todos los juguetes</div>
      </div>

      <div class="hof-record-tags">
        <span class="hof-tag">🏆 VAG más rápido Venezuela</span>
        <span class="hof-tag">🏆 VW más rápido Venezuela</span>
        <span class="hof-tag">Top Golf R mundial</span>
        <span class="hof-tag">9.67s 1/4 milla</span>
        <span class="hof-tag">Proyecto en desarrollo</span>
      </div>

      <div class="hof-specs">
        <div class="hof-spec"><div class="hof-spec-label">Tiempo 1/4 milla</div><div class="hof-spec-val">9.67 s</div></div>
        <div class="hof-spec"><div class="hof-spec-label">HP</div><div class="hof-spec-val">Confidencial</div></div>
        <div class="hof-spec"><div class="hof-spec-label">Setup</div><div class="hof-spec-val">Todos los juguetes</div></div>
        <div class="hof-spec"><div class="hof-spec-label">Estado</div><div class="hof-spec-val">En desarrollo</div></div>
      </div>

      <div class="hof-mods-title">El Proyecto</div>
      <div class="hof-mods">
        <div class="hof-mod">Proyecto personal de WitcherTorque</div>
        <div class="hof-mod">El VAG más rápido de Venezuela</div>
        <div class="hof-mod">El Volkswagen más rápido del país</div>
        <div class="hof-mod">Uno de los Golf R más rápidos del mundo</div>
        <div class="hof-mod" style="color:rgba(200,0,0,0.85);font-style:italic;">HP confidencial — todos los juguetes — proyecto en desarrollo continuo</div>
      </div>

      <div class="hof-pilot">
        <span class="hof-pilot-icon">🏎️</span>
        <div><div class="hof-pilot-label">Piloto</div><div class="hof-pilot-val">Robert Witcher — WitcherTorque</div></div>
      </div>
    </div>
  </div>

  <div class="hof-divider"></div>

  <!-- ── PROYECTO 09: HONDA CIVIC #90 ── -->
  <div class="hof-project">
    <div class="hof-rank-badge">09</div>

    <div class="hof-photo-grid">
      <div class="hof-photo-hero"><img src="https://res.cloudinary.com/dpiavcukm/image/upload/v1781501093/c6b73b58-8a4e-4f34-97c1-e270d6bf2dc1.JPG_tuf5ve.jpg" loading="lazy" alt="Honda Civic #90" onclick="hofLightbox(this)"></div>
      <div><img src="https://res.cloudinary.com/dpiavcukm/image/upload/v1781501092/ca0540be-22ff-40de-9c01-38dc4cfd939e.JPG_lrvsdf.jpg" loading="lazy" alt="Honda Civic #90" onclick="hofLightbox(this)" onerror="this.parentElement.style.display='none'"></div>
      <div><img src="https://res.cloudinary.com/dpiavcukm/image/upload/v1781501093/825b7024-82a1-4b00-876d-51da831a7fd8.JPG_bebg0f.jpg" loading="lazy" alt="Honda Civic #90" onclick="hofLightbox(this)" onerror="this.parentElement.style.display='none'"></div>
      <div><img src="https://res.cloudinary.com/dpiavcukm/image/upload/v1781501093/3419e5ff-1c3a-4b37-b875-525751dab890.JPG_mcyn4q.jpg" loading="lazy" alt="Honda Civic #90" onclick="hofLightbox(this)" onerror="this.parentElement.style.display='none'"></div>
      <div><img src="https://res.cloudinary.com/dpiavcukm/image/upload/v1781501092/a27ef4fe-a499-47af-a80e-efbce60c5aa8.JPG_bzj5qt.jpg" loading="lazy" alt="Honda Civic #90" onclick="hofLightbox(this)" onerror="this.parentElement.style.display='none'"></div>
      <div><img src="https://res.cloudinary.com/dpiavcukm/image/upload/v1781501091/deecd179-8aa1-4f64-adbf-51f6b8f059d1.JPG_troswe.jpg" loading="lazy" alt="Honda Civic #90" onclick="hofLightbox(this)" onerror="this.parentElement.style.display='none'"></div>
      <div><img src="https://res.cloudinary.com/dpiavcukm/image/upload/v1781501089/3419e5ff-1c3a-4b37-b875-525751dab890.JPG_1_okhypc.jpg" loading="lazy" alt="Honda Civic #90" onclick="hofLightbox(this)" onerror="this.parentElement.style.display='none'"></div>
    </div>

    <div class="hof-info">
      <div class="hof-car-name">Honda Civic Si #90</div>
      <div class="hof-car-subtitle">Campeón Nacional · Easy Civic Pro Temporada 2025</div>

      <div class="hof-hp-row">
        <div class="hof-hp-badge" style="font-size:22px;">🏆 CAM.</div>
        <div class="hof-hp-sub">Categoría Easy Civic Pro<br>Temporada 2025</div>
      </div>

      <div class="hof-record-tags">
        <span class="hof-tag">🏆 Campeón Nacional 2025</span>
        <span class="hof-tag">Easy Civic Pro</span>
        <span class="hof-tag">222 puntos</span>
        <span class="hof-tag">Ardagna Racing Team</span>
        <span class="hof-tag">Team Maella</span>
      </div>

      <div class="hof-specs">
        <div class="hof-spec"><div class="hof-spec-label">Categoría</div><div class="hof-spec-val">Easy Civic Pro</div></div>
        <div class="hof-spec"><div class="hof-spec-label">Temporada</div><div class="hof-spec-val">2025</div></div>
        <div class="hof-spec"><div class="hof-spec-label">Puntos</div><div class="hof-spec-val">222 pts</div></div>
        <div class="hof-spec"><div class="hof-spec-label">Número</div><div class="hof-spec-val">#90</div></div>
      </div>

      <div class="hof-mods-title">El Campeonato</div>
      <div class="hof-mods">
        <div class="hof-mod">Campeón del Campeonato Nacional de Automovilismo Easy Civic Si temporada 2025</div>
        <div class="hof-mod">222 puntos acumulados en la categoría Easy Civic Pro</div>
        <div class="hof-mod">Ardagna Racing Team — Team Maella</div>
        <div class="hof-mod">WitcherTorque detrás de la preparación técnica del vehículo</div>
      </div>

      <div class="hof-pilot">
        <span class="hof-pilot-icon">🏎️</span>
        <div><div class="hof-pilot-label">Piloto</div><div class="hof-pilot-val">Gaetano Ardagna (#90) — Ardagna Racing Team · Team Maella</div></div>
      </div>
    </div>
  </div>

  <div class="hof-divider"></div>

  <!-- ── PROYECTO 10: TOYOTA SUPRA MK4 ── -->
  <div class="hof-project">
    <div class="hof-rank-badge">10</div>

    <div class="hof-photo-grid">
      <div class="hof-photo-hero"><img src="https://res.cloudinary.com/dpiavcukm/image/upload/v1781501099/IMG_4732.jpg_wdgv7e.jpg" loading="lazy" alt="Toyota Supra Mk4" onclick="hofLightbox(this)"></div>
      <div><img src="https://res.cloudinary.com/dpiavcukm/image/upload/v1781501098/IMG_4739.jpg_xef7of.jpg" loading="lazy" alt="Toyota Supra Mk4" onclick="hofLightbox(this)" onerror="this.parentElement.style.display='none'"></div>
      <div><img src="https://res.cloudinary.com/dpiavcukm/image/upload/v1781501101/IMG_4730.jpg_uifcqh.jpg" loading="lazy" alt="Toyota Supra Mk4" onclick="hofLightbox(this)" onerror="this.parentElement.style.display='none'"></div>
      <div><img src="https://res.cloudinary.com/dpiavcukm/image/upload/v1781501098/IMG_4741.jpg_v1398l.jpg" loading="lazy" alt="Toyota Supra Mk4" onclick="hofLightbox(this)" onerror="this.parentElement.style.display='none'"></div>
      <div><img src="https://res.cloudinary.com/dpiavcukm/image/upload/v1781501098/IMG_4738.jpg_b8ekxg.jpg" loading="lazy" alt="Toyota Supra Mk4" onclick="hofLightbox(this)" onerror="this.parentElement.style.display='none'"></div>
      <div><img src="https://res.cloudinary.com/dpiavcukm/image/upload/v1781501099/IMG_4736.jpg_gr0q2z.jpg" loading="lazy" alt="Toyota Supra Mk4" onclick="hofLightbox(this)" onerror="this.parentElement.style.display='none'"></div>
      <div><img src="https://res.cloudinary.com/dpiavcukm/image/upload/v1781501100/IMG_4734.jpg_jvgnh8.jpg" loading="lazy" alt="Toyota Supra Mk4" onclick="hofLightbox(this)" onerror="this.parentElement.style.display='none'"></div>
      <div><img src="https://res.cloudinary.com/dpiavcukm/image/upload/v1781501101/IMG_4735.jpg_y6aa9o.jpg" loading="lazy" alt="Toyota Supra Mk4" onclick="hofLightbox(this)" onerror="this.parentElement.style.display='none'"></div>
      <div><img src="https://res.cloudinary.com/dpiavcukm/image/upload/v1781501101/IMG_4740.jpg_sukcrk.jpg" loading="lazy" alt="Toyota Supra Mk4" onclick="hofLightbox(this)" onerror="this.parentElement.style.display='none'"></div>
    </div>

    <div class="hof-info">
      <div class="hof-car-name">Toyota Supra Mk4</div>
      <div class="hof-car-subtitle">Premier Edition 1/1 Vossen Forbes Wheels · Venezuela → Miami</div>

      <div class="hof-hp-row">
        <div class="hof-hp-badge">965HP</div>
        <div class="hof-hp-sub">Motor 2JZ<br>Armado y afinado en WitcherTorque</div>
      </div>

      <div class="hof-record-tags">
        <span class="hof-tag">Premier Edition 1/1</span>
        <span class="hof-tag">Vossen Forbes Wheels</span>
        <span class="hof-tag">965 HP</span>
        <span class="hof-tag">Venezuela → Miami</span>
        <span class="hof-tag">Esteem Custom</span>
        <span class="hof-tag">Viral @Juca · @daniclos</span>
      </div>

      <div class="hof-specs">
        <div class="hof-spec"><div class="hof-spec-label">Motor</div><div class="hof-spec-val">2JZ</div></div>
        <div class="hof-spec"><div class="hof-spec-label">Potencia</div><div class="hof-spec-val">965 HP</div></div>
        <div class="hof-spec"><div class="hof-spec-label">Ruedas</div><div class="hof-spec-val">Vossen Forbes</div></div>
        <div class="hof-spec"><div class="hof-spec-label">Edición</div><div class="hof-spec-val">1 de 1</div></div>
      </div>

      <div class="hof-mods-title">La Historia</div>
      <div class="hof-mods">
        <div class="hof-mod">Proyecto personal de Robert Witcher — vendido a Esteban Jiménez (Esteem Custom &amp; Vossen Wheels)</div>
        <div class="hof-mod">Armado y afinado completamente en WitcherTorque (Caracas, Venezuela)</div>
        <div class="hof-mod">Exportado a Miami donde Esteban terminó de afinar los últimos detalles del icónico motor 2JZ</div>
        <div class="hof-mod">De venezolanos para venezolanos rompiéndola en Miami</div>
        <div class="hof-mod">Aparece en varios videos virales en Instagram y YouTube — @Juca · @daniclos</div>
      </div>

      <div class="hof-pilot">
        <span class="hof-pilot-icon">🏎️</span>
        <div><div class="hof-pilot-label">Propietario</div><div class="hof-pilot-val">Esteban Jiménez — Esteem Custom &amp; Vossen Wheels</div></div>
      </div>
      <div class="hof-venue">
        <span class="hof-venue-icon">📍</span>
        <div><div class="hof-pilot-label">Ruta</div><div class="hof-pilot-val">Caracas, Venezuela → Miami, Florida, USA</div></div>
      </div>
    </div>
  </div>

  <div class="hof-divider"></div>

  <!-- ── PROYECTO 11: FERRARI 458 CHALLENGE EVO ── -->
  <div class="hof-project">
    <div class="hof-rank-badge">11</div>

    <div class="hof-photo-grid">
      <div class="hof-photo-hero"><img src="https://res.cloudinary.com/dpiavcukm/image/upload/v1781501104/IMG_4832.jpg_xrd2y6.jpg" loading="lazy" alt="Ferrari 458 Challenge Evo" onclick="hofLightbox(this)"></div>
      <div><img src="https://res.cloudinary.com/dpiavcukm/image/upload/v1781501103/IMG_4829.jpg_mu2mzb.jpg" loading="lazy" alt="Ferrari 458 Challenge Evo" onclick="hofLightbox(this)" onerror="this.parentElement.style.display='none'"></div>
      <div><img src="https://res.cloudinary.com/dpiavcukm/image/upload/v1781501104/IMG_4834.jpg_nm7k0t.jpg" loading="lazy" alt="Ferrari 458 Challenge Evo" onclick="hofLightbox(this)" onerror="this.parentElement.style.display='none'"></div>
      <div><img src="https://res.cloudinary.com/dpiavcukm/image/upload/v1781501102/IMG_4831.jpg_z4xlkw.jpg" loading="lazy" alt="Ferrari 458 Challenge Evo" onclick="hofLightbox(this)" onerror="this.parentElement.style.display='none'"></div>
      <div><img src="https://res.cloudinary.com/dpiavcukm/image/upload/v1781501105/IMG_4828.jpg_hus6xb.jpg" loading="lazy" alt="Ferrari 458 Challenge Evo" onclick="hofLightbox(this)" onerror="this.parentElement.style.display='none'"></div>
      <div><img src="https://res.cloudinary.com/dpiavcukm/image/upload/v1781501103/IMG_4827.jpg_vyres2.jpg" loading="lazy" alt="Ferrari 458 Challenge Evo" onclick="hofLightbox(this)" onerror="this.parentElement.style.display='none'"></div>
      <div><img src="https://res.cloudinary.com/dpiavcukm/image/upload/v1781501102/b7bad4ed-3aaa-4244-bfa0-201c42d00e0d.jpg_uezoi3.jpg" loading="lazy" alt="Ferrari 458 Challenge Evo" onclick="hofLightbox(this)" onerror="this.parentElement.style.display='none'"></div>
      <div class="hof-video-thumb" style="background-image:url('https://res.cloudinary.com/dpiavcukm/video/upload/so_0,f_jpg,w_600/v1781501143/9f1371e0-17bc-4179-8275-9fbd06ff401b_rcaaot.jpg')" onclick="hofVideoLightbox('https://res.cloudinary.com/dpiavcukm/video/upload/f_mp4,vc_auto/v1781501143/9f1371e0-17bc-4179-8275-9fbd06ff401b_rcaaot.mp4')">
        <div class="hof-video-thumb-overlay">
          <div class="hof-video-play"><svg width="16" height="18" viewBox="0 0 16 18" fill="white"><polygon points="2,1 15,9 2,17"/></svg></div>
          <div class="hof-video-label">Ferrari 458 — GT Challenge</div>
        </div>
      </div>
      <div><img src="https://res.cloudinary.com/dpiavcukm/image/upload/v1781501107/IMG_4830.jpg_v8ovjf.jpg" loading="lazy" alt="Ferrari 458 Challenge Evo" onclick="hofLightbox(this)" onerror="this.parentElement.style.display='none'"></div>
    </div>

    <div class="hof-info">
      <div class="hof-car-name">Ferrari 458 Challenge Evo</div>
      <div class="hof-car-subtitle">GT Challenge de las Américas 2025 · Meval Racing Team</div>

      <div class="hof-hp-row">
        <div class="hof-hp-badge" style="font-size:20px;">+90HP</div>
        <div class="hof-hp-sub">Ganancia con repro remota sobre Dyno<br>HP total: confidencial</div>
      </div>

      <div class="hof-record-tags">
        <span class="hof-tag">🏆 Únicos en América Central</span>
        <span class="hof-tag">GT Challenge Américas 2025</span>
        <span class="hof-tag">Varios podios Cat. GT Lighting</span>
        <span class="hof-tag">Meval Racing</span>
        <span class="hof-tag">Repro remota sobre Dyno</span>
        <span class="hof-tag">+90 HP ganados</span>
      </div>

      <div class="hof-specs">
        <div class="hof-spec"><div class="hof-spec-label">HP total</div><div class="hof-spec-val">Confidencial</div></div>
        <div class="hof-spec"><div class="hof-spec-label">Ganancia</div><div class="hof-spec-val">+90 HP</div></div>
        <div class="hof-spec"><div class="hof-spec-label">Método</div><div class="hof-spec-val">Repro remota / Dyno</div></div>
        <div class="hof-spec"><div class="hof-spec-label">Categoría</div><div class="hof-spec-val">GT Lighting</div></div>
      </div>

      <div class="hof-mods-title">La Historia</div>
      <div class="hof-mods">
        <div class="hof-mod">El único Ferrari 458 Challenge Evo de toda la región de América Central</div>
        <div class="hof-mod">Corrió la temporada completa 2025 del GT Challenge de las Américas — competencia multietapa en varios países de América Central</div>
        <div class="hof-mod">Logró varios podios en la categoría GT Lighting</div>
        <div class="hof-mod">Cuando el carro llegó a Panamá, WitcherTorque realizó una reprogramación remota sobre Dyno logrando +90 HP de ganancia</div>
      </div>

      <div class="hof-pilot">
        <span class="hof-pilot-icon">🏎️</span>
        <div><div class="hof-pilot-label">Piloto</div><div class="hof-pilot-val">Daniel Spisso — Meval Racing Team</div></div>
      </div>
      <div class="hof-venue">
        <span class="hof-venue-icon">📍</span>
        <div><div class="hof-pilot-label">Circuito</div><div class="hof-pilot-val">GT Challenge de las Américas — América Central</div></div>
      </div>
    </div>
  </div>

  <div class="hof-divider"></div>
  <div class="hof-upcoming">
    <div class="hof-upcoming-num">12</div>
    <div class="hof-upcoming-name">Próximamente</div>
    <div class="hof-upcoming-detail">Tu proyecto puede estar aquí — ???</div>
  </div>
</div>

<!-- CTA -->
<div class="hof-cta">
  <div class="hof-cta-title">¿QUERÉS ESTAR EN EL<br><span>HALL OF FAME?</span></div>
  <p class="hof-cta-desc">Llevá tu proyecto al siguiente nivel con WitcherTorque. Contactanos y empezamos a escribir tu historia.</p>
  <a class="btn-wa" href="https://wa.me/584125856541" target="_blank">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
    Hablar por WhatsApp
  </a>
</div>

<!-- LIGHTBOX -->
<div class="hof-lightbox" id="hofLightbox" onclick="closeHofLightbox()">
  <button class="hof-lightbox-close" onclick="closeHofLightbox()">×</button>
  <img class="hof-lightbox-media" id="hofLightboxImg" src="" alt="" style="display:none;">
  <video id="hofLightboxVideo" src="" controls playsinline style="display:none;position:fixed;inset:0;width:100%;height:100%;object-fit:contain;background:#000;z-index:901;"></video>
</div>


</body>
</html>`;
  openWtModal(html, 'hall-of-fame');
}

// ─── AI POPUP CHAT (ANTHROPIC) ───────────────────────
