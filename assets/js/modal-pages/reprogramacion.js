// Each opening receives fresh local state; event handlers remain available to the existing markup.
window.WTModalPages = window.WTModalPages || {};
window.WTModalPages['reprogramacion'] = function () {

const WT_SYS_R = "Eres el asesor técnico virtual oficial de WitcherTorque. Tenés acceso completo a toda la información del taller. Nunca digas que sos una IA.\n\nWitcherTorque — Caracas, Venezuela. 16+ años. WhatsApp: +58 412-585-6541. Horario: Lun-Vie 8:00-17:00 por cita previa. Remote Tuning disponible a nivel mundial. Email: witchertorquevzla@gmail.com\n\nSERVICIOS: Reprogramación ECU (único Master Tuner Ecutek de Venezuela, distribuidor autorizado HPTuners, multimapas, Stage 1/2/3, E85, Pops & Bangs, Launch Control), Remote Tuning mundial, Dyno Sessions en el único Mainline ProHub de Venezuela, Mecánica High Performance, Stand Alone ECU (MaxxEcu Gen2, Haltech, FuelTech, Link ECU), Electricidad, Construcciones Custom Inox/Aluminio/Titanio, Impresión 3D, Mecánica General.\n\nSTAGES: Stage 1 = solo software stock, +20-30% HP. Stage 2 = software + downpipe/intake/intercooler, +30-40% HP. Stage 2+ E85 = con etanol, +50-60% HP. Stage 3 = turbo grande + inyección alto flujo + calibración completa en dyno desde cero.\n\nDIFERENCIADORES: Reprogramación DIRECTA sobre ECU original, sin módulos externos, sin cables cortados, 100% reversible. Mapas calibrados para el combustible venezolano. Único Mainline ProHub Dyno de Venezuela.\n\nFLUJO: Obtené nombre, vehículo (marca/modelo/año/motor), modificaciones actuales y servicio de interés. Natural, sin pedir todo de golpe. Nunca inventes datos ni garantices HP exactos. Nunca diagnostiques sin inspección física. Respuestas cortas, máximo un párrafo.\n\nCIERRE cuando tengas nombre + vehículo + servicio: Perfecto [NOMBRE], ya tengo todo lo que necesito. Voy a derivarte con nuestro equipo para coordinar tu [SERVICIO]. Un momento! — después no respondas más.";
const rModels={volkswagen:["Golf GTI MK7 (230HP)","Golf GTI MK8 (245HP)","Golf R MK7 (300HP)","Golf R MK8 (320HP)","Golf GTI Clubsport (265HP)","Tiguan R (320HP)","Tiguan R-Line TSI (150HP)","Polo GTI (207HP)","Arteon R-Line (272HP)","T-Roc R (300HP)"],audi:["A3 S3 8V (310HP)","A3 S3 8Y (310HP)","RS3 8V (400HP)","RS3 8Y (400HP)","TT RS (400HP)","A4 B9 2.0T (190HP)","S4 B9 (354HP)","RS4 B9 (450HP)","A5 2.0T (245HP)","S5 B9 (354HP)","RS5 (450HP)","Q5 45 TFSI (265HP)","SQ5 (354HP)","RSQ8 (600HP)","R8 V10 (570HP)"],bmw:["M240i G42 (374HP)","M340i G20 (374HP)","M2 G87 (460HP)","M3 G80 (510HP)","M4 G82 (510HP)","320i G20 (184HP)","330i G20 (258HP)","M135i F40 (306HP)","M235i Gran Coupe (306HP)","X3 M40i (360HP)","X4 M40i (360HP)","M550i (530HP)","M5 F90 (600HP)","Z4 M40i (340HP)"],mercedes:["A45 AMG W177 (421HP)","A35 AMG (306HP)","CLA 45 AMG (421HP)","CLA 35 AMG (306HP)","C43 AMG W206 (390HP)","C63 AMG W205 (476HP)","C63 S AMG (510HP)","GLA 45 AMG (421HP)","GLC 43 AMG (390HP)","E53 AMG (435HP)","GLE 53 AMG (435HP)","GLA 250 (224HP)","C200 (204HP)"],ford:["Ranger Raptor (288HP)","Mustang GT 5.0 (450HP)","Mustang EcoBoost 2.3 (310HP)","Mustang Shelby GT500 (760HP)","Focus RS (350HP)","Focus ST MK3 (250HP)","Focus ST MK4 (280HP)","Bronco 2.3 EcoBoost (300HP)","F-150 3.5 EcoBoost (450HP)"],chevrolet:["Camaro SS 6.2 (455HP)","Camaro ZL1 (650HP)","Camaro 2.0T (275HP)","Corvette C7 (455HP)","Corvette C8 (490HP)","Colorado ZR2 (308HP)","Silverado 5.3 (355HP)","Silverado 6.2 (420HP)","Equinox RS 2.0T (252HP)"],toyota:["Supra A90 2.0 (258HP)","Supra A90 3.0 (382HP)","GR Yaris (261HP)","GR86 (228HP)","Land Cruiser 300 3.5T (415HP)","4Runner TRD Pro (270HP)","Hilux GR Sport (224HP)","Tacoma TRD Pro (278HP)","Tundra 3.5T (389HP)","RAV4 Prime (302HP)"],honda:["Civic Type R FL5 (315HP)","Civic Type R FK8 (316HP)","Civic Si 11gen (200HP)","Accord 2.0T (252HP)","CR-V Sport Hybrid (204HP)"],subaru:["WRX STI VA (310HP)","WRX VB (271HP)","WRX STI EJ257 (305HP)","BRZ (228HP)","Forester XT (177HP)","Outback 2.5 (182HP)"],nissan:["GT-R R35 (565HP)","GT-R R35 Track Ed. (600HP)","Z RZ34 (400HP)","Frontier Pro-4X (310HP)","Pathfinder 3.8 (284HP)","Kicks e-Power (136HP)"],mitsubishi:["Lancer Evo X (291HP)","Outlander PHEV (248HP)","Eclipse Cross 1.5T (150HP)"],mazda:["MX-5 RF 2.0 (181HP)","Mazda3 Turbo (250HP)","CX-5 2.5T (256HP)","CX-50 2.5T Turbo (256HP)"],hyundai:["Elantra N (276HP)","Veloster N (275HP)","i30 N (280HP)","Tucson N-Line 1.6T (180HP)","Kona N (276HP)","Ioniq 5 N (641HP)"],kia:["Stinger GT 3.3T (365HP)","K5 GT 2.5T (290HP)","Sportage 1.6T (180HP)"],porsche:["Cayman 718 T (300HP)","Cayman 718 GTS (394HP)","Boxster 718 (300HP)","Macan GTS (440HP)","Cayenne GTS (460HP)","Panamera 4S (440HP)","911 Carrera (385HP)","911 Carrera S (450HP)"],jeep:["Wrangler Rubicon 392 (470HP)","Gladiator Mojave (285HP)","Grand Cherokee Trackhawk (707HP)","Compass 1.3T (150HP)"],land_rover:["Defender 90 P400 (400HP)","Discovery Sport P290 (290HP)","Range Rover Sport SVR (575HP)"],volvo:["S60 T8 Polestar (415HP)","XC40 Recharge (408HP)","V60 Cross Country B5 (250HP)"]};
const rHpData={"Golf GTI MK7 (230HP)":230,"Golf GTI MK8 (245HP)":245,"Golf R MK7 (300HP)":300,"Golf R MK8 (320HP)":320,"Golf GTI Clubsport (265HP)":265,"Tiguan R (320HP)":320,"Tiguan R-Line TSI (150HP)":150,"Polo GTI (207HP)":207,"Arteon R-Line (272HP)":272,"T-Roc R (300HP)":300,"A3 S3 8V (310HP)":310,"A3 S3 8Y (310HP)":310,"RS3 8V (400HP)":400,"RS3 8Y (400HP)":400,"TT RS (400HP)":400,"A4 B9 2.0T (190HP)":190,"S4 B9 (354HP)":354,"RS4 B9 (450HP)":450,"A5 2.0T (245HP)":245,"S5 B9 (354HP)":354,"RS5 (450HP)":450,"Q5 45 TFSI (265HP)":265,"SQ5 (354HP)":354,"RSQ8 (600HP)":600,"R8 V10 (570HP)":570,"M240i G42 (374HP)":374,"M340i G20 (374HP)":374,"M2 G87 (460HP)":460,"M3 G80 (510HP)":510,"M4 G82 (510HP)":510,"320i G20 (184HP)":184,"330i G20 (258HP)":258,"M135i F40 (306HP)":306,"M235i Gran Coupe (306HP)":306,"X3 M40i (360HP)":360,"X4 M40i (360HP)":360,"M550i (530HP)":530,"M5 F90 (600HP)":600,"Z4 M40i (340HP)":340,"A45 AMG W177 (421HP)":421,"A35 AMG (306HP)":306,"CLA 45 AMG (421HP)":421,"CLA 35 AMG (306HP)":306,"C43 AMG W206 (390HP)":390,"C63 AMG W205 (476HP)":476,"C63 S AMG (510HP)":510,"GLA 45 AMG (421HP)":421,"GLC 43 AMG (390HP)":390,"E53 AMG (435HP)":435,"GLE 53 AMG (435HP)":435,"GLA 250 (224HP)":224,"C200 (204HP)":204,"Ranger Raptor (288HP)":288,"Mustang GT 5.0 (450HP)":450,"Mustang EcoBoost 2.3 (310HP)":310,"Mustang Shelby GT500 (760HP)":760,"Focus RS (350HP)":350,"Focus ST MK3 (250HP)":250,"Focus ST MK4 (280HP)":280,"Bronco 2.3 EcoBoost (300HP)":300,"F-150 3.5 EcoBoost (450HP)":450,"Camaro SS 6.2 (455HP)":455,"Camaro ZL1 (650HP)":650,"Camaro 2.0T (275HP)":275,"Corvette C7 (455HP)":455,"Corvette C8 (490HP)":490,"Colorado ZR2 (308HP)":308,"Silverado 5.3 (355HP)":355,"Silverado 6.2 (420HP)":420,"Equinox RS 2.0T (252HP)":252,"Supra A90 2.0 (258HP)":258,"Supra A90 3.0 (382HP)":382,"GR Yaris (261HP)":261,"GR86 (228HP)":228,"Land Cruiser 300 3.5T (415HP)":415,"4Runner TRD Pro (270HP)":270,"Hilux GR Sport (224HP)":224,"Tacoma TRD Pro (278HP)":278,"Tundra 3.5T (389HP)":389,"RAV4 Prime (302HP)":302,"Civic Type R FL5 (315HP)":315,"Civic Type R FK8 (316HP)":316,"Civic Si 11gen (200HP)":200,"Accord 2.0T (252HP)":252,"CR-V Sport Hybrid (204HP)":204,"WRX STI VA (310HP)":310,"WRX VB (271HP)":271,"WRX STI EJ257 (305HP)":305,"BRZ (228HP)":228,"Forester XT (177HP)":177,"Outback 2.5 (182HP)":182,"GT-R R35 (565HP)":565,"GT-R R35 Track Ed. (600HP)":600,"Z RZ34 (400HP)":400,"Frontier Pro-4X (310HP)":310,"Pathfinder 3.8 (284HP)":284,"Kicks e-Power (136HP)":136,"Lancer Evo X (291HP)":291,"Outlander PHEV (248HP)":248,"Eclipse Cross 1.5T (150HP)":150,"MX-5 RF 2.0 (181HP)":181,"Mazda3 Turbo (250HP)":250,"CX-5 2.5T (256HP)":256,"CX-50 2.5T Turbo (256HP)":256,"Elantra N (276HP)":276,"Veloster N (275HP)":275,"i30 N (280HP)":280,"Tucson N-Line 1.6T (180HP)":180,"Kona N (276HP)":276,"Ioniq 5 N (641HP)":641,"Stinger GT 3.3T (365HP)":365,"K5 GT 2.5T (290HP)":290,"Sportage 1.6T (180HP)":180,"Cayman 718 T (300HP)":300,"Cayman 718 GTS (394HP)":394,"Boxster 718 (300HP)":300,"Macan GTS (440HP)":440,"Cayenne GTS (460HP)":460,"Panamera 4S (440HP)":440,"911 Carrera (385HP)":385,"911 Carrera S (450HP)":450,"Wrangler Rubicon 392 (470HP)":470,"Gladiator Mojave (285HP)":285,"Grand Cherokee Trackhawk (707HP)":707,"Compass 1.3T (150HP)":150,"Defender 90 P400 (400HP)":400,"Discovery Sport P290 (290HP)":290,"Range Rover Sport SVR (575HP)":575,"S60 T8 Polestar (415HP)":415,"XC40 Recharge (408HP)":408,"V60 Cross Country B5 (250HP)":250};

function updateCalcRepro(){
  const m=document.getElementById("calcMarca").value;
  const ms=document.getElementById("calcModelo");
  ms.innerHTML="<option value=''>— Seleccionar modelo —</option>";
  if(m&&rModels[m])rModels[m].forEach(x=>{const o=document.createElement("option");o.value=x;o.textContent=x;ms.appendChild(o);});
  hideResult();
}
function hideResult(){document.getElementById("calcResultBox").style.display="none";}
function calcHPRepro(){
  const m=document.getElementById("calcModelo").value;
  if(m&&rHpData[m])showCalcReproResult(rHpData[m]);
}
function showCalcReproResult(hp){
  if(!hp||hp<50)return;
  const box=document.getElementById("calcResultBox");
  box.style.display="block";
  box.scrollIntoView({behavior:"smooth",block:"nearest"});
  // Animate dyno chart
  setTimeout(()=>drawDynoChart(hp),200);
  // Populate ranges
  const s1lo=Math.round(hp*1.20),s1hi=Math.round(hp*1.30);
  const s2lo=Math.round(hp*1.30),s2hi=Math.round(hp*1.40);
  const s3lo=Math.round(hp*1.50),s3hi=Math.round(hp*1.60);
  document.getElementById("calcS1").textContent=s1lo+"–"+s1hi+" HP";
  document.getElementById("calcS2").textContent=s2lo+"–"+s2hi+" HP";
  document.getElementById("calcS3").textContent=s3lo+"–"+s3hi+" HP";
  document.getElementById("calcOrigNum").textContent=hp+" HP";
  document.getElementById("calcS1range").textContent="+20% a +30%";
  document.getElementById("calcS2range").textContent="+30% a +40%";
  document.getElementById("calcS3range").textContent="+50% a +60%";
}

function drawDynoChart(baseHP){
  const canvas=document.getElementById("dynoCanvas");
  if(!canvas)return;
  const ctx=canvas.getContext("2d");
  const W=canvas.width=canvas.offsetWidth;
  const H=canvas.height=canvas.offsetHeight;
  const pad={top:28,right:20,bottom:36,left:50};
  const chartW=W-pad.left-pad.right;
  const chartH=H-pad.top-pad.bottom;
  
  // Generate smooth dyno curves
  function stockCurve(x){ // x = 0..1 (RPM normalized)
    const ramp=Math.pow(Math.sin(x*Math.PI*0.5),0.7);
    const peak=Math.exp(-Math.pow((x-0.75)*2.5,2));
    return 0.35+ramp*0.45+peak*0.15;
  }
  function tunedCurve(x){
    const ramp=Math.pow(Math.sin(x*Math.PI*0.5),0.65);
    const peak=Math.exp(-Math.pow((x-0.78)*2.2,2));
    return 0.40+ramp*0.52+peak*0.22;
  }
  
  const RPM_LABELS=["2k","3k","4k","5k","6k","7k"];
  
  ctx.clearRect(0,0,W,H);
  
  // Background grid
  ctx.strokeStyle="rgba(239,239,239,0.04)";
  ctx.lineWidth=1;
  for(let i=0;i<=4;i++){
    const y=pad.top+i*(chartH/4);
    ctx.beginPath();ctx.moveTo(pad.left,y);ctx.lineTo(pad.left+chartW,y);ctx.stroke();
  }
  for(let i=0;i<RPM_LABELS.length;i++){
    const x=pad.left+i*(chartW/(RPM_LABELS.length-1));
    ctx.beginPath();ctx.moveTo(x,pad.top);ctx.lineTo(x,pad.top+chartH);ctx.stroke();
    ctx.fillStyle="rgba(239,239,239,0.35)";
    ctx.font="10px 'Share Tech Mono', monospace";
    ctx.textAlign="center";
    ctx.fillText(RPM_LABELS[i],x,pad.top+chartH+18);
  }
  
  // Axes
  ctx.strokeStyle="rgba(239,239,239,0.15)";
  ctx.lineWidth=1;
  ctx.beginPath();ctx.moveTo(pad.left,pad.top);ctx.lineTo(pad.left,pad.top+chartH);ctx.lineTo(pad.left+chartW,pad.top+chartH);ctx.stroke();
  
  // HP labels on Y
  ctx.fillStyle="rgba(239,239,239,0.35)";
  ctx.font="9px 'Share Tech Mono', monospace";
  ctx.textAlign="right";
  const maxHP=Math.round(baseHP*1.65);
  for(let i=0;i<=4;i++){
    const y=pad.top+i*(chartH/4);
    const val=Math.round(maxHP*(1-i/4));
    ctx.fillText(val,pad.left-6,y+4);
  }
  
  const pts=60;
  
  // Animate draw
  let progress=0;
  const anim=setInterval(()=>{
    progress+=2;
    if(progress>pts)progress=pts;
    ctx.clearRect(0,0,W,H);
    
    // Grid redraw
    ctx.strokeStyle="rgba(239,239,239,0.04)";
    ctx.lineWidth=1;
    for(let i=0;i<=4;i++){const y=pad.top+i*(chartH/4);ctx.beginPath();ctx.moveTo(pad.left,y);ctx.lineTo(pad.left+chartW,y);ctx.stroke();}
    for(let i=0;i<RPM_LABELS.length;i++){const x=pad.left+i*(chartW/(RPM_LABELS.length-1));ctx.beginPath();ctx.moveTo(x,pad.top);ctx.lineTo(x,pad.top+chartH);ctx.stroke();ctx.fillStyle="rgba(239,239,239,0.35)";ctx.font="10px 'Share Tech Mono', monospace";ctx.textAlign="center";ctx.fillText(RPM_LABELS[i],x,pad.top+chartH+18);}
    ctx.strokeStyle="rgba(239,239,239,0.15)";ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(pad.left,pad.top);ctx.lineTo(pad.left,pad.top+chartH);ctx.lineTo(pad.left+chartW,pad.top+chartH);ctx.stroke();
    ctx.fillStyle="rgba(239,239,239,0.35)";ctx.font="9px 'Share Tech Mono', monospace";ctx.textAlign="right";
    for(let i=0;i<=4;i++){const y=pad.top+i*(chartH/4);const val=Math.round(maxHP*(1-i/4));ctx.fillText(val,pad.left-6,y+4);}
    
    // Stock curve fill + line
    ctx.beginPath();
    for(let i=0;i<=progress;i++){
      const t=i/pts;
      const x=pad.left+t*chartW;
      const y=pad.top+chartH*(1-stockCurve(t));
      i===0?ctx.moveTo(x,y):ctx.lineTo(x,y);
    }
    const gradStock=ctx.createLinearGradient(pad.left,0,pad.left+chartW,0);
    gradStock.addColorStop(0,"rgba(100,100,100,0.5)");
    gradStock.addColorStop(1,"rgba(160,160,160,0.5)");
    ctx.strokeStyle=gradStock;
    ctx.lineWidth=2;
    ctx.stroke();
    
    // Tuned curve
    ctx.beginPath();
    for(let i=0;i<=progress;i++){
      const t=i/pts;
      const x=pad.left+t*chartW;
      const y=pad.top+chartH*(1-tunedCurve(t));
      i===0?ctx.moveTo(x,y):ctx.lineTo(x,y);
    }
    const gradTuned=ctx.createLinearGradient(pad.left,0,pad.left+chartW,0);
    gradTuned.addColorStop(0,"rgba(200,0,0,0.9)");
    gradTuned.addColorStop(1,"rgba(255,21,0,1)");
    ctx.strokeStyle=gradTuned;
    ctx.lineWidth=2.5;
    ctx.shadowColor="rgba(200,0,0,0.6)";
    ctx.shadowBlur=8;
    ctx.stroke();
    ctx.shadowBlur=0;
    
    // Legend
    ctx.fillStyle="rgba(160,160,160,0.8)";ctx.font="10px 'Share Tech Mono', monospace";ctx.textAlign="left";
    ctx.fillRect(pad.left+4,pad.top+8,18,2);ctx.fillText("STOCK",pad.left+28,pad.top+12);
    ctx.fillStyle="rgba(200,0,0,0.9)";
    ctx.fillRect(pad.left+4,pad.top+22,18,2);ctx.fillText("CALIBRADO",pad.left+28,pad.top+26);
    
    if(progress>=pts)clearInterval(anim);
  },16);
}

let rHistory=[];
async function sendRChat(){
  const inp=document.getElementById("rChatInput"),msg=inp.value.trim();
  if(!msg)return;
  const msgs=document.getElementById("rChatMsgs");
  msgs.innerHTML+="<div class='msg msg-user'>"+msg+"</div>";
  inp.value="";msgs.scrollTop=msgs.scrollHeight;
  rHistory.push({role:"user",content:msg});
  document.getElementById("rChatTyping").style.display="block";
  try{
    const res=await fetch("/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({system:WT_SYS_R,messages:rHistory})});
    const data=await res.json();
    const reply=data.reply||"Inconvenientes técnicos. Escribinos al WhatsApp +58 412-585-6541.";
    rHistory.push({role:"assistant",content:reply});
    document.getElementById("rChatTyping").style.display="none";
    msgs.innerHTML+="<div class='msg msg-ai'><div class='msg-label'>WT AI</div>"+reply+"</div>";
    msgs.scrollTop=msgs.scrollHeight;
    // Check if should show WA button
    if(/voy a derivarte|ya tengo todo|derivarte con nuestro equipo/i.test(reply)){
      setTimeout(()=>{
        if(!document.getElementById("rWaBtn")){
          const w=document.createElement("div");w.style.cssText="padding:4px 0 8px;";
          const b=document.createElement("a");b.id="rWaBtn";b.href="https://wa.me/584125856541";b.target="_blank";b.className="wa-derive-btn";
          b.innerHTML='<svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg> Continuar por WhatsApp';
          w.appendChild(b);msgs.appendChild(w);msgs.scrollTop=msgs.scrollHeight;
        }
      },600);
    }
  }catch(e){
    document.getElementById("rChatTyping").style.display="none";
    msgs.innerHTML+="<div class='msg msg-ai'><div class='msg-label'>WT AI</div>Error de conexión. Escribinos al WhatsApp +58 412-585-6541</div>";
    msgs.scrollTop=msgs.scrollHeight;
  }
}

function toggleFaq(btn){
  const answer=btn.nextElementSibling;
  const isOpen=btn.classList.contains('open');
  document.querySelectorAll('.faq-q.open').forEach(b=>{b.classList.remove('open');b.nextElementSibling.classList.remove('open');});
  if(!isOpen){btn.classList.add('open');answer.classList.add('open');}
}

// Reveal on scroll
const revObs=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');revObs.unobserve(e.target);}});},{threshold:0.08});
document.querySelectorAll('.reveal').forEach(el=>revObs.observe(el));

// Counter animation
function animateCounter(el){
  const target=parseInt(el.dataset.target);
  const duration=1600;
  const step=target/duration*16;
  let current=0;
  const timer=setInterval(()=>{
    current=Math.min(current+step,target);
    el.textContent=Math.round(current)+(el.dataset.suffix||"");
    if(current>=target)clearInterval(timer);
  },16);
}
const cntObs=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){animateCounter(e.target);cntObs.unobserve(e.target);}});},{threshold:0.5});
document.querySelectorAll('.counter').forEach(el=>cntObs.observe(el));

// Stage tabs
function selectStage(idx){
  document.querySelectorAll('.stage-tab').forEach((t,i)=>{t.classList.toggle('active',i===idx);});
  document.querySelectorAll('.stage-panel').forEach((p,i)=>{p.classList.toggle('active',i===idx);});
}

Object.assign(window, { updateCalcRepro, hideResult, calcHPRepro, showCalcReproResult, drawDynoChart, sendRChat, toggleFaq, animateCounter, selectStage });
return function () { revObs.disconnect(); cntObs.disconnect(); };
};
