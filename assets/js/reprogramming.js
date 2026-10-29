
const REPRO_SCRIPT = `
const WT_SYS_R = "Eres el asesor técnico virtual oficial de WitcherTorque. Tenés acceso completo a toda la información del taller. Nunca digas que sos una IA.\n\nWitcherTorque — Caracas, Venezuela. 16+ años. WhatsApp: +58 412-585-6541. Horario: Lun-Vie 8:00-17:00 por cita previa. Remote Tuning disponible a nivel mundial. Email: witchertorquevzla@gmail.com\n\nSERVICIOS: Reprogramación ECU (único Master Tuner Ecutek de Venezuela, distribuidor autorizado HPTuners, multimapas, Stage 1/2/3, E85, Pops & Bangs, Launch Control), Remote Tuning mundial, Dyno Sessions en el único Mainline ProHub de Venezuela, Mecánica High Performance, Stand Alone ECU (MaxxEcu Gen2, Haltech, FuelTech, Link ECU), Electricidad, Construcciones Custom Inox/Aluminio/Titanio, Impresión 3D, Mecánica General, Distribución oficial: Amsoil, vPracing, Fuel Factory, X-Shift Gearboxes, aFe Power, Mishimoto, Dodson Motorsport, Precision Turbo, Vibrant Performance, MaxxEcu.\n\nSTAGES: Stage 1 = solo software stock, +20-30% HP. Stage 2 = software + downpipe/intake/intercooler, +30-40% HP. Stage 2+ E85 = con etanol, +50-60% HP. Stage 3 = turbo grande + inyección alto flujo + calibración completa en dyno desde cero.\n\nDIFERENCIADORES: Reprogramación DIRECTA sobre ECU original, sin módulos externos, sin cables cortados, 100% reversible (se vuelve a stock antes de ir a garantía). Mapas calibrados para el combustible venezolano con protecciones térmicas activas. Único Mainline ProHub Dyno de Venezuela (se atornilla a los hubs, cero deslizamiento, vehículo anclado). Pioneros en MaxxEcu Gen 2 en Venezuela. Multimapas desde botones del volante original. Pops & Bangs 100% software. Launch Control integrado.\n\nPREGUNTAS FRECUENTES: ¿Rompe el motor? No, mantenemos activas todas las protecciones de la ECU. ¿Anula garantía? No, proceso 100% reversible sin huellas físicas. ¿Aumenta consumo? Generalmente igual o mejor. ¿Adaptan al combustible local? Sí, completamente, no usamos mapas genéricos importados.\n\nRÉCORDS: Evo 5 RS 1100HP rescatado, GSX-R 1000 moto más rápida de Venezuela (8.74s sin nitro), Top 1-2-3 Ranger Raptor más rápidas del país, GTR R35 internos stock más rápido del país (1000HP/9.30s), Campeón Nacional 2025 Honda Civic #90 (222 pts), Corvette C8 más rápido de Venezuela, Toyota 4Runner TRD Pro 2026 más rápida del mundo, Golf R MK7.5 VAG más rápido de Venezuela (9.67s), Ferrari 458 Challenge Evo +90HP remote GT Challenge Américas 2025. 11+ récords nacionales, +50 builds, +3000HP desarrollados, 500+ motores intervenidos.\n\nTESTIMONIOS: Gamar Márquez (Evo 5 RS 1100HP): pasó 6 años en otro taller que no pudo pasar de 800HP y partió el motor. WitcherTorque lo rescató y en un solo intento hizo 1100HP. Autoclub Performance Miami: felicitó a WitcherTorque por educador al público sobre por qué la reprogramación es necesaria.\n\nFLUJO: Obtené nombre, vehículo (marca/modelo/año/motor), modificaciones actuales y servicio de interés. Natural, sin pedir todo de golpe. Nunca inventes datos ni garantices HP exactos. Nunca diagnostiques sin inspección física. Respuestas cortas, máximo un párrafo.\n\nCIERRE cuando tengas nombre + vehículo + servicio: Perfecto [NOMBRE], ya tengo todo lo que necesito. Voy a derivarte con nuestro equipo para coordinar tu [SERVICIO]. Un momento! — después no respondas más.";
const rModels={volkswagen:["Golf GTI MK7 (230HP)","Golf GTI MK8 (245HP)","Golf R MK7 (300HP)","Golf R MK8 (320HP)","Golf GTI Clubsport (265HP)","Tiguan R (320HP)","Tiguan R-Line TSI (150HP)","Polo GTI (207HP)","Arteon R-Line (272HP)","T-Roc R (300HP)"],audi:["A3 S3 8V (310HP)","A3 S3 8Y (310HP)","RS3 8V (400HP)","RS3 8Y (400HP)","TT RS (400HP)","A4 B9 2.0T (190HP)","S4 B9 (354HP)","RS4 B9 (450HP)","A5 2.0T (245HP)","S5 B9 (354HP)","RS5 (450HP)","Q5 45 TFSI (265HP)","SQ5 (354HP)","RSQ8 (600HP)","R8 V10 (570HP)"],bmw:["M240i G42 (374HP)","M340i G20 (374HP)","M2 G87 (460HP)","M3 G80 (510HP)","M4 G82 (510HP)","320i G20 (184HP)","330i G20 (258HP)","M135i F40 (306HP)","M235i Gran Coupe (306HP)","X3 M40i (360HP)","X4 M40i (360HP)","M550i (530HP)","M5 F90 (600HP)","Z4 M40i (340HP)"],mercedes:["A45 AMG W177 (421HP)","A35 AMG (306HP)","CLA 45 AMG (421HP)","CLA 35 AMG (306HP)","C43 AMG W206 (390HP)","C63 AMG W205 (476HP)","C63 S AMG (510HP)","GLA 45 AMG (421HP)","GLC 43 AMG (390HP)","E53 AMG (435HP)","GLE 53 AMG (435HP)","GLA 250 (224HP)","C200 (204HP)"],ford:["Ranger Raptor (288HP)","Mustang GT 5.0 (450HP)","Mustang EcoBoost 2.3 (310HP)","Mustang Shelby GT500 (760HP)","Focus RS (350HP)","Focus ST MK3 (250HP)","Focus ST MK4 (280HP)","Bronco 2.3 EcoBoost (300HP)","F-150 3.5 EcoBoost (450HP)"],chevrolet:["Camaro SS 6.2 (455HP)","Camaro ZL1 (650HP)","Camaro 2.0T (275HP)","Corvette C7 (455HP)","Corvette C8 (490HP)","Colorado ZR2 (308HP)","Silverado 5.3 (355HP)","Silverado 6.2 (420HP)","Equinox RS 2.0T (252HP)"],toyota:["Supra A90 2.0 (258HP)","Supra A90 3.0 (382HP)","GR Yaris (261HP)","GR86 (228HP)","Land Cruiser 300 3.5T (415HP)","4Runner TRD Pro (270HP)","Hilux GR Sport (224HP)","Tacoma TRD Pro (278HP)","Tundra 3.5T (389HP)","RAV4 Prime (302HP)"],honda:["Civic Type R FL5 (315HP)","Civic Type R FK8 (316HP)","Civic Si 11gen (200HP)","Accord 2.0T (252HP)","CR-V Sport Hybrid (204HP)"],subaru:["WRX STI VA (310HP)","WRX VB (271HP)","WRX STI EJ257 (305HP)","BRZ (228HP)","Forester XT (177HP)","Outback 2.5 (182HP)"],nissan:["GT-R R35 (565HP)","GT-R R35 Track Ed. (600HP)","Z RZ34 (400HP)","Frontier Pro-4X (310HP)","Pathfinder 3.8 (284HP)","Kicks e-Power (136HP)"],mitsubishi:["Lancer Evo X (291HP)","Outlander PHEV (248HP)","Eclipse Cross 1.5T (150HP)"],mazda:["MX-5 RF 2.0 (181HP)","Mazda3 Turbo (250HP)","CX-5 2.5T (256HP)","CX-50 2.5T Turbo (256HP)"],hyundai:["Elantra N (276HP)","Veloster N (275HP)","i30 N (280HP)","Tucson N-Line 1.6T (180HP)","Kona N (276HP)","Ioniq 5 N (641HP)"],kia:["Stinger GT 3.3T (365HP)","K5 GT 2.5T (290HP)","Sportage 1.6T (180HP)"],porsche:["Cayman 718 T (300HP)","Cayman 718 GTS (394HP)","Boxster 718 (300HP)","Macan GTS (440HP)","Cayenne GTS (460HP)","Panamera 4S (440HP)","911 Carrera (385HP)","911 Carrera S (450HP)"],jeep:["Wrangler Rubicon 392 (470HP)","Gladiator Mojave (285HP)","Grand Cherokee Trackhawk (707HP)","Compass 1.3T (150HP)"],land_rover:["Defender 90 P400 (400HP)","Discovery Sport P290 (290HP)","Range Rover Sport SVR (575HP)"],volvo:["S60 T8 Polestar (415HP)","XC40 Recharge (408HP)","V60 Cross Country B5 (250HP)"]};
const rHpData={"Golf GTI MK7 (230HP)":230,"Golf GTI MK8 (245HP)":245,"Golf R MK7 (300HP)":300,"Golf R MK8 (320HP)":320,"Golf GTI Clubsport (265HP)":265,"Tiguan R (320HP)":320,"Tiguan R-Line TSI (150HP)":150,"Polo GTI (207HP)":207,"Arteon R-Line (272HP)":272,"T-Roc R (300HP)":300,"A3 S3 8V (310HP)":310,"A3 S3 8Y (310HP)":310,"RS3 8V (400HP)":400,"RS3 8Y (400HP)":400,"TT RS (400HP)":400,"A4 B9 2.0T (190HP)":190,"S4 B9 (354HP)":354,"RS4 B9 (450HP)":450,"A5 2.0T (245HP)":245,"S5 B9 (354HP)":354,"RS5 (450HP)":450,"Q5 45 TFSI (265HP)":265,"SQ5 (354HP)":354,"RSQ8 (600HP)":600,"R8 V10 (570HP)":570,"M240i G42 (374HP)":374,"M340i G20 (374HP)":374,"M2 G87 (460HP)":460,"M3 G80 (510HP)":510,"M4 G82 (510HP)":510,"320i G20 (184HP)":184,"330i G20 (258HP)":258,"M135i F40 (306HP)":306,"M235i Gran Coupe (306HP)":306,"X3 M40i (360HP)":360,"X4 M40i (360HP)":360,"M550i (530HP)":530,"M5 F90 (600HP)":600,"Z4 M40i (340HP)":340,"A45 AMG W177 (421HP)":421,"A35 AMG (306HP)":306,"CLA 45 AMG (421HP)":421,"CLA 35 AMG (306HP)":306,"C43 AMG W206 (390HP)":390,"C63 AMG W205 (476HP)":476,"C63 S AMG (510HP)":510,"GLA 45 AMG (421HP)":421,"GLC 43 AMG (390HP)":390,"E53 AMG (435HP)":435,"GLE 53 AMG (435HP)":435,"GLA 250 (224HP)":224,"C200 (204HP)":204,"Ranger Raptor (288HP)":288,"Mustang GT 5.0 (450HP)":450,"Mustang EcoBoost 2.3 (310HP)":310,"Mustang Shelby GT500 (760HP)":760,"Focus RS (350HP)":350,"Focus ST MK3 (250HP)":250,"Focus ST MK4 (280HP)":280,"Bronco 2.3 EcoBoost (300HP)":300,"F-150 3.5 EcoBoost (450HP)":450,"Camaro SS 6.2 (455HP)":455,"Camaro ZL1 (650HP)":650,"Camaro 2.0T (275HP)":275,"Corvette C7 (455HP)":455,"Corvette C8 (490HP)":490,"Colorado ZR2 (308HP)":308,"Silverado 5.3 (355HP)":355,"Silverado 6.2 (420HP)":420,"Equinox RS 2.0T (252HP)":252,"Supra A90 2.0 (258HP)":258,"Supra A90 3.0 (382HP)":382,"GR Yaris (261HP)":261,"GR86 (228HP)":228,"Land Cruiser 300 3.5T (415HP)":415,"4Runner TRD Pro (270HP)":270,"Hilux GR Sport (224HP)":224,"Tacoma TRD Pro (278HP)":278,"Tundra 3.5T (389HP)":389,"RAV4 Prime (302HP)":302,"Civic Type R FL5 (315HP)":315,"Civic Type R FK8 (316HP)":316,"Civic Si 11gen (200HP)":200,"Accord 2.0T (252HP)":252,"CR-V Sport Hybrid (204HP)":204,"WRX STI VA (310HP)":310,"WRX VB (271HP)":271,"WRX STI EJ257 (305HP)":305,"BRZ (228HP)":228,"Forester XT (177HP)":177,"Outback 2.5 (182HP)":182,"GT-R R35 (565HP)":565,"GT-R R35 Track Ed. (600HP)":600,"Z RZ34 (400HP)":400,"Frontier Pro-4X (310HP)":310,"Pathfinder 3.8 (284HP)":284,"Kicks e-Power (136HP)":136,"Lancer Evo X (291HP)":291,"Outlander PHEV (248HP)":248,"Eclipse Cross 1.5T (150HP)":150,"MX-5 RF 2.0 (181HP)":181,"Mazda3 Turbo (250HP)":250,"CX-5 2.5T (256HP)":256,"CX-50 2.5T Turbo (256HP)":256,"Elantra N (276HP)":276,"Veloster N (275HP)":275,"i30 N (280HP)":280,"Tucson N-Line 1.6T (180HP)":180,"Kona N (276HP)":276,"Ioniq 5 N (641HP)":641,"Stinger GT 3.3T (365HP)":365,"K5 GT 2.5T (290HP)":290,"Sportage 1.6T (180HP)":180,"Cayman 718 T (300HP)":300,"Cayman 718 GTS (394HP)":394,"Boxster 718 (300HP)":300,"Macan GTS (440HP)":440,"Cayenne GTS (460HP)":460,"Panamera 4S (440HP)":440,"911 Carrera (385HP)":385,"911 Carrera S (450HP)":450,"Wrangler Rubicon 392 (470HP)":470,"Gladiator Mojave (285HP)":285,"Grand Cherokee Trackhawk (707HP)":707,"Compass 1.3T (150HP)":150,"Defender 90 P400 (400HP)":400,"Discovery Sport P290 (290HP)":290,"Range Rover Sport SVR (575HP)":575,"S60 T8 Polestar (415HP)":415,"XC40 Recharge (408HP)":408,"V60 Cross Country B5 (250HP)":250};
function updateCalcRepro(){const m=document.getElementById("calcMarca").value;const ms=document.getElementById("calcModelo");ms.innerHTML="<option value=''>- Seleccionar modelo -</option>";if(m&&rModels[m])rModels[m].forEach(x=>{const o=document.createElement("option");o.value=x;o.textContent=x;ms.appendChild(o);});}
function calcHPRepro(){const m=document.getElementById("calcModelo").value;if(m&&rHpData[m])showCalcReproResult(rHpData[m]);}
function showCalcReproResult(hp){if(!hp||hp<50)return;document.getElementById("calcResultBox").style.display="block";document.getElementById("calcOrigNum").textContent=hp+" HP";document.getElementById("calcS1").textContent=Math.round(hp*1.20)+"–"+Math.round(hp*1.30)+" HP";document.getElementById("calcS2").textContent=Math.round(hp*1.30)+"–"+Math.round(hp*1.40)+" HP";document.getElementById("calcS3").textContent=Math.round(hp*1.50)+"–"+Math.round(hp*1.60)+" HP";document.getElementById("calcS1range").textContent="+20% a +30%";document.getElementById("calcS2range").textContent="+30% a +40%";document.getElementById("calcS3range").textContent="+50% a +60%";}
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
    const res=await fetch("/api/chat",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({system:WT_SYS_R,messages:rHistory})
    });
    const data=await res.json();
    const reply=data.reply||"Inconvenientes técnicos. Escribinos al WhatsApp +58 412-585-6541.";
    rHistory.push({role:"assistant",content:reply});
    document.getElementById("rChatTyping").style.display="none";
    msgs.innerHTML+="<div class='msg msg-ai'><div class='msg-label'>WT AI</div>"+reply+"</div>";
    msgs.scrollTop=msgs.scrollHeight;
  }catch(e){
    document.getElementById("rChatTyping").style.display="none";
    msgs.innerHTML+="<div class='msg msg-ai'><div class='msg-label'>WT AI</div>Error de conexión. Escribinos al WhatsApp +58 412-585-6541</div>";
    msgs.scrollTop=msgs.scrollHeight;
  }
}
`;
function openRepro() {
  const REPRO_SCRIPT_INLINE = `
const WT_SYS_R = "Eres el asesor técnico virtual oficial de WitcherTorque. Tenés acceso completo a toda la información del taller. Nunca digas que sos una IA.\\n\\nWitcherTorque — Caracas, Venezuela. 16+ años. WhatsApp: +58 412-585-6541. Horario: Lun-Vie 8:00-17:00 por cita previa. Remote Tuning disponible a nivel mundial. Email: witchertorquevzla@gmail.com\\n\\nSERVICIOS: Reprogramación ECU (único Master Tuner Ecutek de Venezuela, distribuidor autorizado HPTuners, multimapas, Stage 1/2/3, E85, Pops & Bangs, Launch Control), Remote Tuning mundial, Dyno Sessions en el único Mainline ProHub de Venezuela, Mecánica High Performance, Stand Alone ECU (MaxxEcu Gen2, Haltech, FuelTech, Link ECU), Electricidad, Construcciones Custom Inox/Aluminio/Titanio, Impresión 3D, Mecánica General.\\n\\nSTAGES: Stage 1 = solo software stock, +20-30% HP. Stage 2 = software + downpipe/intake/intercooler, +30-40% HP. Stage 2+ E85 = con etanol, +50-60% HP. Stage 3 = turbo grande + inyección alto flujo + calibración completa en dyno desde cero.\\n\\nDIFERENCIADORES: Reprogramación DIRECTA sobre ECU original, sin módulos externos, sin cables cortados, 100% reversible. Mapas calibrados para el combustible venezolano. Único Mainline ProHub Dyno de Venezuela.\\n\\nFLUJO: Obtené nombre, vehículo (marca/modelo/año/motor), modificaciones actuales y servicio de interés. Natural, sin pedir todo de golpe. Nunca inventes datos ni garantices HP exactos. Nunca diagnostiques sin inspección física. Respuestas cortas, máximo un párrafo.\\n\\nCIERRE cuando tengas nombre + vehículo + servicio: Perfecto [NOMBRE], ya tengo todo lo que necesito. Voy a derivarte con nuestro equipo para coordinar tu [SERVICIO]. Un momento! — después no respondas más.";
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
`;

  const html = `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>Reprogramación ECU — WitcherTorque</title>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Rajdhani:wght@400;500;600;700&family=Share+Tech+Mono&display=swap" rel="stylesheet">
<style>
:root{
  --black:#060606;--graphite:#0f0f0f;--graphite-2:#171717;--graphite-3:#222;--graphite-4:#2e2e2e;
  --red:#c80000;--red-bright:#ff1500;--red-mid:#e01010;--red-glow:rgba(200,0,0,0.4);--red-glow-soft:rgba(200,0,0,0.15);
  --white:#efefef;--white-dim:rgba(239,239,239,0.5);--white-faint:rgba(239,239,239,0.07);
  --font-display:'Bebas Neue',sans-serif;--font-body:'Rajdhani',sans-serif;--font-mono:'Share Tech Mono',monospace;
}
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
html{scroll-behavior:smooth;}
body{background:var(--black);color:var(--white);font-family:var(--font-body);font-size:16px;overflow-x:hidden;}
::-webkit-scrollbar{width:3px;}::-webkit-scrollbar-track{background:var(--black);}::-webkit-scrollbar-thumb{background:linear-gradient(to bottom,var(--red),var(--red-bright));}

/* NOISE */
body::before{content:'';position:fixed;inset:0;z-index:1;pointer-events:none;opacity:0.02;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");background-size:200px;}

/* TOPBAR */
.topbar{position:sticky;top:0;z-index:500;background:rgba(6,6,6,0.96);backdrop-filter:blur(20px) saturate(180%);border-bottom:1px solid rgba(200,0,0,0.15);padding:0 18px;height:56px;display:flex;align-items:center;justify-content:space-between;}
.topbar-logo{text-decoration:none;display:flex;align-items:center;}
.topbar-logo img{height:44px;width:auto;display:block;}
.back-btn{display:flex;align-items:center;gap:8px;font-family:var(--font-mono);font-size:10px;letter-spacing:2px;color:var(--white-dim);background:none;border:1px solid rgba(239,239,239,0.1);padding:7px 14px;cursor:pointer;text-transform:uppercase;transition:color 0.2s,border-color 0.2s;}
.back-btn:hover{color:var(--red);border-color:rgba(200,0,0,0.3);}

/* ─── HERO ─────────────────────────────────── */
.hero{position:relative;min-height:92vh;display:flex;flex-direction:column;justify-content:flex-end;overflow:hidden;}
.hero-bg{position:absolute;inset:0;z-index:0;background:url('https://res.cloudinary.com/dpiavcukm/image/upload/v1781757134/IMG_7241_pcpwcd.jpg') center center/cover no-repeat;}
.hero-bg::after{content:'';position:absolute;inset:0;background:linear-gradient(180deg,rgba(6,6,6,0.2) 0%,rgba(6,6,6,0.15) 30%,rgba(6,6,6,0.7) 65%,rgba(6,6,6,0.98) 100%);}
.hero-bg::before{content:'';position:absolute;inset:0;z-index:1;background:repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(0,0,0,0.035) 3px,rgba(0,0,0,0.035) 4px);pointer-events:none;}
.hero-content{position:relative;z-index:2;padding:0 22px 52px;}
.hero-eyebrow{display:flex;align-items:center;gap:12px;margin-bottom:14px;opacity:0;animation:fadeUp 0.8s 0.1s forwards;}
.hero-eyebrow-line{width:28px;height:1px;background:var(--red);}
.hero-eyebrow-text{font-family:var(--font-mono);font-size:10px;letter-spacing:4px;color:var(--red);text-transform:uppercase;}
.hero-title{font-family:var(--font-display);font-size:clamp(62px,17vw,100px);line-height:0.88;letter-spacing:3px;text-transform:uppercase;margin-bottom:18px;opacity:0;animation:fadeUp 0.8s 0.2s forwards;}
.hero-title .l1{display:block;color:var(--white);}
.hero-title .l2{display:block;color:var(--red);text-shadow:0 0 40px rgba(200,0,0,0.4);}
.hero-sub{font-size:15px;color:rgba(239,239,239,0.65);line-height:1.7;border-left:2px solid var(--red);padding-left:14px;max-width:340px;margin-bottom:28px;opacity:0;animation:fadeUp 0.8s 0.35s forwards;}
.hero-pills{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:32px;opacity:0;animation:fadeUp 0.8s 0.45s forwards;}
.hero-pill{font-family:var(--font-mono);font-size:9px;letter-spacing:2px;color:var(--white-dim);border:1px solid rgba(200,0,0,0.25);padding:6px 12px;text-transform:uppercase;background:rgba(200,0,0,0.05);display:flex;align-items:center;gap:7px;}
.hero-pill::before{content:'';width:5px;height:5px;background:var(--red);border-radius:50%;box-shadow:0 0 6px var(--red-glow);}
.hero-btns{display:flex;flex-direction:column;gap:10px;opacity:0;animation:fadeUp 0.8s 0.55s forwards;}
.btn-primary{background:var(--red);color:var(--white);border:none;padding:16px 28px;font-family:var(--font-mono);font-size:10px;letter-spacing:3px;text-transform:uppercase;cursor:pointer;text-decoration:none;display:inline-flex;align-items:center;justify-content:center;gap:10px;clip-path:polygon(0 0,calc(100% - 10px) 0,100% 10px,100% 100%,10px 100%,0 calc(100% - 10px));transition:box-shadow 0.3s,transform 0.2s;box-shadow:0 4px 28px rgba(200,0,0,0.3);}
.btn-primary:hover{box-shadow:0 6px 40px rgba(200,0,0,0.55);transform:translateY(-1px);}
.btn-ghost{background:transparent;color:var(--white-dim);border:1px solid rgba(239,239,239,0.15);padding:14px 28px;font-family:var(--font-mono);font-size:10px;letter-spacing:3px;text-transform:uppercase;cursor:pointer;text-decoration:none;display:inline-flex;align-items:center;justify-content:center;gap:10px;clip-path:polygon(0 0,calc(100% - 10px) 0,100% 10px,100% 100%,10px 100%,0 calc(100% - 10px));transition:color 0.2s,border-color 0.2s;}
.btn-ghost:hover{color:var(--white);border-color:rgba(200,0,0,0.4);}
.hero-scroll{position:absolute;bottom:18px;left:50%;transform:translateX(-50%);z-index:3;display:flex;flex-direction:column;align-items:center;gap:5px;opacity:0;animation:fadeUp 0.8s 1.2s forwards;}
.hero-scroll-line{width:1px;height:38px;background:linear-gradient(to bottom,var(--red),transparent);animation:scrollPulse 2s infinite;}
@keyframes scrollPulse{0%,100%{opacity:1;transform:scaleY(1)}50%{opacity:0.3;transform:scaleY(0.5)}}

/* ─── SECTION COMMONS ────────────────────── */
.section-eyebrow{font-family:var(--font-mono);font-size:9px;letter-spacing:5px;color:var(--red);text-transform:uppercase;display:flex;align-items:center;gap:10px;margin-bottom:12px;}
.section-eyebrow::before{content:'';width:22px;height:1px;background:var(--red);}
.section-title{font-family:var(--font-display);font-size:clamp(38px,10vw,60px);letter-spacing:3px;line-height:0.9;text-transform:uppercase;color:var(--white);margin-bottom:18px;}
.section-title span{color:var(--red);}
.section-desc{font-size:14px;color:var(--white-dim);line-height:1.75;border-left:2px solid var(--red);padding-left:14px;max-width:380px;margin-bottom:32px;}

/* REVEAL */
.reveal{opacity:0;transform:translateY(24px);transition:opacity 0.7s ease,transform 0.7s ease;}
.reveal.visible{opacity:1;transform:none;}

@keyframes fadeUp{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none}}

/* ─── CALCULADORA ─────────────────────────── */
.calc-section{padding:60px 22px 52px;background:var(--graphite-2);position:relative;overflow:hidden;}
.calc-section::before{content:'DYNO';position:absolute;right:-20px;top:-10px;font-family:var(--font-display);font-size:200px;color:rgba(200,0,0,0.025);line-height:1;pointer-events:none;letter-spacing:6px;}
.calc-selects{display:flex;flex-direction:column;gap:14px;margin-bottom:20px;}
.calc-field label{font-family:var(--font-mono);font-size:9px;letter-spacing:4px;color:var(--white-dim);text-transform:uppercase;display:block;margin-bottom:7px;}
.calc-field select,.calc-field input{width:100%;background:var(--black);border:1px solid var(--graphite-4);color:var(--white);padding:13px 14px;font-family:var(--font-body);font-size:15px;outline:none;appearance:none;-webkit-appearance:none;transition:border-color 0.25s;}
.calc-field select:focus,.calc-field input:focus{border-color:var(--red);}
.calc-field select option{background:#0f0f0f;}

/* DYNO CHART */
.dyno-wrap{background:var(--black);border:1px solid var(--graphite-3);border-top:2px solid var(--red);padding:18px 10px 10px;margin-bottom:20px;position:relative;}
.dyno-label-y{font-family:var(--font-mono);font-size:9px;letter-spacing:2px;color:var(--white-dim);text-transform:uppercase;writing-mode:vertical-rl;transform:rotate(180deg);position:absolute;left:4px;top:50%;transform:translateX(0) translateY(-50%) rotate(180deg);pointer-events:none;}
#dynoCanvas{width:100%;height:200px;display:block;}
.dyno-footer{display:flex;justify-content:space-between;align-items:center;margin-top:10px;padding-top:10px;border-top:1px solid var(--graphite-3);}
.dyno-note{font-family:var(--font-mono);font-size:9px;letter-spacing:1px;color:rgba(239,239,239,0.5);line-height:1.6;}
.dyno-badge{font-family:var(--font-mono);font-size:9px;letter-spacing:2px;color:var(--red);border:1px solid rgba(200,0,0,0.3);padding:4px 10px;text-transform:uppercase;}

/* CALC RESULT */
.calc-result-box{display:none;}
.calc-orig-header{display:flex;align-items:baseline;gap:14px;margin-bottom:24px;padding-bottom:18px;border-bottom:1px solid var(--graphite-3);}
.calc-orig-label{font-family:var(--font-mono);font-size:9px;letter-spacing:3px;color:var(--white-dim);text-transform:uppercase;}
#calcOrigNum{font-family:var(--font-display);font-size:56px;color:var(--red);line-height:1;text-shadow:0 0 30px rgba(200,0,0,0.35);}
.calc-stages-grid{display:flex;flex-direction:column;gap:10px;}
.calc-stage-row{background:var(--graphite);border:1px solid var(--graphite-3);border-left:3px solid rgba(200,0,0,0.3);padding:14px 16px;display:flex;justify-content:space-between;align-items:center;transition:border-left-color 0.2s;}
.calc-stage-row:hover{border-left-color:var(--red);}
.csr-name{font-family:var(--font-display);font-size:20px;letter-spacing:2px;text-transform:uppercase;color:var(--white);}
.csr-gain{font-family:var(--font-mono);font-size:10px;letter-spacing:2px;color:var(--red);margin-top:4px;}
.csr-range{font-family:var(--font-display);font-size:22px;color:var(--red);text-align:right;text-shadow:0 0 15px rgba(200,0,0,0.3);}
.calc-disclaimer{font-family:var(--font-mono);font-size:9px;letter-spacing:1px;color:rgba(239,239,239,0.45);line-height:1.7;margin-top:14px;padding:12px 14px;border:1px solid var(--graphite-3);border-left:2px solid rgba(200,0,0,0.2);}

/* ─── STAGES TABS ─────────────────────────── */
.stages-section{padding:60px 22px 52px;background:var(--black);position:relative;overflow:hidden;}
.stages-section::after{content:'';position:absolute;inset:0;z-index:0;background:url('https://res.cloudinary.com/dpiavcukm/image/upload/f_jpg,q_auto/v1781501066/IMG_2906_yuhere.heic') center bottom/cover no-repeat;opacity:0.13;pointer-events:none;}
.stages-section::before{content:'';position:absolute;inset:0;z-index:0;background:linear-gradient(180deg,var(--black) 0%,rgba(6,6,6,0.9) 30%,rgba(6,6,6,0.45) 70%,rgba(6,6,6,0.75) 100%);pointer-events:none;}
.stages-section>*{position:relative;z-index:1;}
.stage-tabs{display:flex;gap:0;border-bottom:1px solid var(--graphite-3);margin-bottom:28px;overflow-x:auto;-webkit-overflow-scrolling:touch;}
.stage-tab{font-family:var(--font-mono);font-size:10px;letter-spacing:3px;color:var(--white-dim);background:none;border:none;border-bottom:2px solid transparent;padding:12px 18px;cursor:pointer;text-transform:uppercase;white-space:nowrap;transition:color 0.2s,border-color 0.2s;flex-shrink:0;}
.stage-tab.active{color:var(--red);border-bottom-color:var(--red);}
.stage-panel{display:none;}
.stage-panel.active{display:block;}
.sp-header{margin-bottom:20px;}
.sp-name{font-family:var(--font-display);font-size:clamp(34px,9vw,52px);letter-spacing:3px;text-transform:uppercase;color:var(--white);line-height:0.9;margin-bottom:8px;}
.sp-gain{font-family:var(--font-mono);font-size:12px;letter-spacing:2px;color:var(--red);text-transform:uppercase;}
.sp-desc{font-size:14px;color:var(--white-dim);line-height:1.7;margin-bottom:18px;border-left:2px solid rgba(200,0,0,0.3);padding-left:14px;}
.sp-tags{display:flex;flex-wrap:wrap;gap:5px;margin-bottom:22px;}
.tag{font-family:var(--font-mono);font-size:8px;letter-spacing:2px;color:rgba(200,0,0,0.8);border:1px solid rgba(200,0,0,0.2);padding:3px 8px;text-transform:uppercase;background:rgba(200,0,0,0.04);}
.sp-reqs{background:var(--graphite-2);border:1px solid var(--graphite-3);padding:16px 18px;}
.sp-reqs-label{font-family:var(--font-mono);font-size:9px;letter-spacing:3px;color:var(--white-dim);text-transform:uppercase;margin-bottom:10px;}
.sp-req-item{display:flex;align-items:center;gap:10px;padding:7px 0;border-bottom:1px solid rgba(239,239,239,0.04);font-size:13px;color:rgba(239,239,239,0.65);}
.sp-req-item::before{content:'';width:4px;height:4px;background:var(--red);border-radius:50%;flex-shrink:0;}

/* ─── FEEL SECTION ─────────────────────────── */
.feel-section{padding:60px 22px 52px;background:var(--graphite-2);}
.feel-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;}
.feel-card{background:var(--black);border:1px solid var(--graphite-3);padding:22px 16px;position:relative;overflow:hidden;transition:border-color 0.3s;}
.feel-card:hover{border-color:rgba(200,0,0,0.35);}
.feel-card::before{content:'';position:absolute;top:0;left:0;width:2px;height:100%;background:linear-gradient(to bottom,transparent,var(--red),transparent);opacity:0.5;transition:opacity 0.3s;}
.feel-card:hover::before{opacity:1;}
.feel-icon{font-size:26px;margin-bottom:12px;}
.feel-name{font-family:var(--font-display);font-size:20px;letter-spacing:2px;text-transform:uppercase;color:var(--white);line-height:1;margin-bottom:7px;}
.feel-desc{font-size:12px;color:var(--white-dim);line-height:1.6;}

/* ─── METRICS DASHBOARD ─────────────────────── */
.metrics-section{padding:60px 22px 52px;background:var(--black);position:relative;overflow:hidden;}
.metrics-section::after{content:'';position:absolute;inset:0;z-index:0;background:url('https://res.cloudinary.com/dpiavcukm/image/upload/v1781757133/IMG_7238_eebaqk.jpg') center center/cover no-repeat;opacity:0.09;pointer-events:none;}
.metrics-section::before{content:'';position:absolute;inset:0;z-index:0;background:radial-gradient(ellipse at 50% 100%,rgba(200,0,0,0.06) 0%,transparent 70%);pointer-events:none;}
.metrics-section>*{position:relative;z-index:1;}
.metrics-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;}
.metric-card{background:var(--graphite-2);border:1px solid var(--graphite-3);padding:20px 16px;text-align:center;position:relative;overflow:hidden;}
.metric-card::after{content:'';position:absolute;bottom:0;left:0;right:0;height:2px;background:linear-gradient(to right,transparent,var(--red),transparent);}
.metric-num{font-family:var(--font-display);font-size:clamp(36px,9vw,52px);color:var(--red);line-height:1;text-shadow:0 0 20px rgba(200,0,0,0.3);margin-bottom:6px;}
.metric-label{font-family:var(--font-mono);font-size:8px;letter-spacing:2px;color:var(--white-dim);text-transform:uppercase;line-height:1.5;}
.metric-tag{font-family:var(--font-mono);font-size:9px;letter-spacing:2px;color:var(--red);border:1px solid rgba(200,0,0,0.25);padding:2px 7px;text-transform:uppercase;display:inline-block;margin-top:8px;}

/* ─── PROCESS TIMELINE ─────────────────────── */
.process-section{padding:60px 22px 52px;background:var(--graphite-2);position:relative;overflow:hidden;}
.process-section::after{content:'';position:absolute;inset:0;z-index:0;background:url('https://res.cloudinary.com/dpiavcukm/image/upload/v1781757134/IMG_7237_bplnlb.jpg') center center/cover no-repeat;opacity:0.08;pointer-events:none;}
.process-section>*{position:relative;z-index:1;}
.process-steps{display:flex;flex-direction:column;gap:0;}
.process-step{display:flex;gap:18px;padding:20px 0;border-bottom:1px solid rgba(200,0,0,0.06);position:relative;}
.process-step:last-child{border-bottom:none;}
.ps-num-wrap{display:flex;flex-direction:column;align-items:center;flex-shrink:0;}
.ps-num{font-family:var(--font-display);font-size:32px;color:var(--red);line-height:1;text-shadow:0 0 15px rgba(200,0,0,0.25);}
.ps-line{width:1px;flex:1;background:linear-gradient(to bottom,rgba(200,0,0,0.3),transparent);margin-top:8px;min-height:20px;}
.process-step:last-child .ps-line{display:none;}
.ps-content{padding-top:4px;}
.ps-name{font-family:var(--font-display);font-size:22px;letter-spacing:2px;text-transform:uppercase;color:var(--white);margin-bottom:6px;}
.ps-desc{font-size:13px;color:var(--white-dim);line-height:1.65;}

/* ─── CASES SLIDER ──────────────────────────── */
.cases-section{padding:60px 22px 52px;background:var(--black);}
.cases-scroll{display:flex;gap:14px;overflow-x:auto;-webkit-overflow-scrolling:touch;padding-bottom:12px;scrollbar-width:none;}
.cases-scroll::-webkit-scrollbar{display:none;}
.case-card{background:var(--graphite-2);border:1px solid var(--graphite-3);border-top:2px solid var(--red);min-width:280px;max-width:280px;padding:22px 18px;flex-shrink:0;transition:border-color 0.3s;}
.case-card:hover{border-color:var(--red);}
.case-car{font-family:var(--font-display);font-size:22px;letter-spacing:2px;text-transform:uppercase;color:var(--white);margin-bottom:8px;line-height:1;}
.case-service{font-family:var(--font-mono);font-size:9px;letter-spacing:3px;color:var(--red);text-transform:uppercase;margin-bottom:14px;}
.case-result{font-size:13px;color:rgba(239,239,239,0.7);line-height:1.65;margin-bottom:16px;border-left:2px solid rgba(200,0,0,0.3);padding-left:12px;}
.case-feel{font-family:var(--font-mono);font-size:9px;letter-spacing:2px;color:var(--white-dim);text-transform:uppercase;}
.case-feel span{color:var(--red);}

/* ─── MYTHS ─────────────────────────────────── */
.myths-section{padding:60px 22px 52px;background:var(--graphite-2);position:relative;overflow:hidden;}
.myths-section::after{content:'';position:absolute;inset:0;z-index:0;background:url('https://res.cloudinary.com/dpiavcukm/image/upload/v1781757134/IMG_7239_x2mp8m.jpg') center center/cover no-repeat;opacity:0.08;pointer-events:none;}
.myths-section>*{position:relative;z-index:1;}
.myth-item{background:var(--black);border:1px solid var(--graphite-3);padding:20px 18px;margin-bottom:10px;display:flex;gap:14px;align-items:flex-start;transition:border-color 0.3s;}
.myth-item:hover{border-color:rgba(200,0,0,0.3);}
.myth-check{width:20px;height:20px;border:1px solid var(--red);flex-shrink:0;display:flex;align-items:center;justify-content:center;margin-top:2px;}
.myth-check svg{color:var(--red);}
.myth-q{font-family:var(--font-display);font-size:18px;letter-spacing:1px;text-transform:uppercase;color:var(--white);margin-bottom:6px;line-height:1.1;}
.myth-a{font-size:13px;color:var(--white-dim);line-height:1.65;}

/* ─── AI CHAT ────────────────────────────────── */
.ai-section{padding:60px 22px 52px;background:var(--black);}
.chat-win{background:var(--graphite-2);border:1px solid var(--graphite-3);border-top:2px solid var(--red);overflow:hidden;}
.chat-hdr{padding:12px 16px;border-bottom:1px solid var(--graphite-3);display:flex;align-items:center;gap:8px;background:rgba(200,0,0,0.04);}
.chat-dot{width:6px;height:6px;border-radius:50%;background:var(--red);animation:pulse 2s infinite;flex-shrink:0;}
@keyframes pulse{0%,100%{opacity:1}50%{opacity:0.3}}
.chat-hdr-txt{font-family:var(--font-mono);font-size:9px;letter-spacing:3px;color:var(--white-dim);text-transform:uppercase;}
.chat-msgs{min-height:200px;max-height:280px;overflow-y:auto;padding:14px;display:flex;flex-direction:column;gap:10px;}
.msg{padding:10px 13px;font-size:13px;line-height:1.55;max-width:92%;}
.msg-ai{background:var(--graphite);border:1px solid var(--graphite-3);border-left:2px solid var(--red);align-self:flex-start;}
.msg-user{background:rgba(200,0,0,0.08);border:1px solid rgba(200,0,0,0.2);align-self:flex-end;text-align:right;}
.msg-label{font-family:var(--font-mono);font-size:8px;letter-spacing:3px;color:var(--red);text-transform:uppercase;margin-bottom:4px;}
.chat-typing{padding:8px 14px;font-family:var(--font-mono);font-size:9px;letter-spacing:2px;color:var(--white-dim);display:none;}
.chat-input-wrap{display:flex;border-top:1px solid var(--graphite-3);}
.chat-input{flex:1;background:transparent;border:none;color:var(--white);padding:13px 14px;font-family:var(--font-body);font-size:14px;outline:none;}
.chat-input::placeholder{color:rgba(239,239,239,0.2);}
.chat-send{background:var(--red);color:var(--white);border:none;padding:13px 18px;font-family:var(--font-mono);font-size:9px;letter-spacing:2px;text-transform:uppercase;cursor:pointer;transition:filter 0.2s;}
.chat-send:hover{filter:brightness(1.15);}
.wa-derive-btn{display:inline-flex;align-items:center;gap:8px;background:#25D366;color:white;border:none;padding:10px 16px;font-family:var(--font-mono);font-size:9px;letter-spacing:2px;text-transform:uppercase;cursor:pointer;text-decoration:none;margin-top:6px;clip-path:polygon(0 0,calc(100% - 6px) 0,100% 6px,100% 100%,6px 100%,0 calc(100% - 6px));}

/* ─── FAQ ────────────────────────────────────── */
.faq-section{padding:60px 22px 52px;background:var(--graphite-2);}
.faq-item{border-bottom:1px solid rgba(239,239,239,0.05);}
.faq-q{width:100%;background:none;border:none;color:var(--white);padding:18px 0;display:flex;justify-content:space-between;align-items:center;gap:14px;cursor:pointer;font-family:var(--font-body);font-size:15px;font-weight:500;text-align:left;transition:color 0.2s;}
.faq-q:hover{color:var(--red);}
.faq-q.open{color:var(--red);}
.faq-arrow{font-family:var(--font-mono);font-size:16px;color:var(--red);flex-shrink:0;transition:transform 0.3s;}
.faq-q.open .faq-arrow{transform:rotate(45deg);}
.faq-a{display:none;padding:0 0 18px;font-size:14px;color:var(--white-dim);line-height:1.75;}
.faq-a.open{display:block;}

/* ─── CTA FINAL ──────────────────────────────── */
.cta-final{padding:72px 22px 60px;text-align:center;position:relative;overflow:hidden;background:var(--black);}
.cta-final::before{content:'';position:absolute;inset:0;z-index:0;background:radial-gradient(ellipse at 50% 50%,rgba(200,0,0,0.1) 0%,transparent 70%);}
.cta-final>*{position:relative;z-index:1;}
.cta-big{font-family:var(--font-display);font-size:clamp(42px,12vw,72px);line-height:0.88;letter-spacing:3px;text-transform:uppercase;color:var(--white);margin-bottom:18px;}
.cta-big span{color:var(--red);text-shadow:0 0 40px rgba(200,0,0,0.4);}
.cta-sub{font-size:15px;color:var(--white-dim);line-height:1.7;margin-bottom:32px;max-width:300px;margin-left:auto;margin-right:auto;}
.cta-btns-wrap{display:flex;flex-direction:column;gap:12px;align-items:center;}
.btn-wa-big{background:#25D366;color:white;border:none;padding:16px 32px;font-family:var(--font-mono);font-size:10px;letter-spacing:3px;text-transform:uppercase;cursor:pointer;text-decoration:none;display:inline-flex;align-items:center;gap:10px;clip-path:polygon(0 0,calc(100% - 10px) 0,100% 10px,100% 100%,10px 100%,0 calc(100% - 10px));box-shadow:0 4px 24px rgba(37,211,102,0.2);transition:box-shadow 0.3s;}
.btn-wa-big:hover{box-shadow:0 6px 32px rgba(37,211,102,0.4);}
</style>
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

<script>
${REPRO_SCRIPT_INLINE}
<\/script>
</body>
</html>`;

  openWtModal(html);
}

// ─── OPEN SERVICIOS PAGE ──────────────────────────
