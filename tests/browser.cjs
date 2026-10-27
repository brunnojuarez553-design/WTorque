const fs=require('node:fs');
const path=require('node:path');
const http=require('node:http');
const {execFileSync}=require('node:child_process');
const assert=require('node:assert/strict');
const {chromium}=require('playwright');
const root=path.resolve(__dirname,'..');
const baseline=execFileSync('git',['show','f88f1fe8dde87ea2fec0e76bbadc1ada5e2a448c:index.html'],{cwd:root,encoding:'utf8',maxBuffer:2e6});
const output=path.join(root,'test-results');fs.mkdirSync(output,{recursive:true});
const config=JSON.parse(fs.readFileSync(path.join(root,'vercel.json'),'utf8'));
const mime={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'application/javascript; charset=utf-8','.xml':'application/xml','.txt':'text/plain'};
function server(original){return http.createServer((req,res)=>{
 const pathname=new URL(req.url,'http://localhost').pathname;
 for(const h of config.headers[0].headers)res.setHeader(h.key,h.value);
 if(original){res.setHeader('Content-Type',mime['.html']);return res.end(baseline)}
 const file=path.resolve(root,'.'+decodeURIComponent(pathname==='/'?'/index.html':pathname));
 if(!file.startsWith(root+path.sep)){res.statusCode=403;return res.end()}
 let actual=file;
 if(!fs.existsSync(file)){if(pathname.startsWith('/assets/')){res.statusCode=404;return res.end()}actual=path.join(root,'index.html')}
 res.setHeader('Content-Type',mime[path.extname(actual)]||'application/octet-stream');res.end(fs.readFileSync(actual));
})}
const before=server(true),after=server(false);
const failures=[],checks=[];
function check(name,fn){return Promise.resolve().then(fn).then(()=>checks.push(name)).catch(e=>{failures.push({name,error:e.message});console.error('FAIL',name,e.message.slice(0,250))})}
async function ready(page){await page.evaluate(()=>document.fonts.ready);await page.waitForTimeout(1900)}
async function freezeAnimations(page){await page.addStyleTag({content:'*,*::before,*::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}'});}
async function fixture(page){
 await page.route('https://**/*',route=>{
  const kind=route.request().resourceType();
  if(kind==='image')return route.fulfill({contentType:'image/svg+xml',body:'<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800"><rect width="1200" height="800" fill="#151515"/></svg>'});
  return route.abort();
 });
 await page.addInitScript(()=>{window.open=(url)=>{window.__opened=url;return null};window.alert=(text)=>{window.__alert=text};});
}
async function snapshot(page){return page.evaluate(()=>{
 const scope=document.getElementById('wt-modal-overlay').style.display==='block'?document.getElementById('wt-modal-inner'):document.body;
 return [...scope.querySelectorAll('*')].filter(e=>!['SCRIPT','STYLE','LINK','MAIN'].includes(e.tagName)).map(e=>{
 const r=e.getBoundingClientRect(),s=getComputedStyle(e);
 return [e.tagName,e.id,e.className?.baseVal??e.className,e.childElementCount?null:e.textContent.trim(),...[r.x,r.y,r.width,r.height].map(n=>Math.round(n*10)/10),s.color,s.backgroundColor,s.fontFamily,s.fontSize,s.display];
 });
})}
async function assertSamePixels(browser,shots){
 if(shots[0].equals(shots[1]))return;
 const page=await browser.newPage();
 try{
  const difference=await page.evaluate(async sources=>{
   const data=await Promise.all(sources.map(src=>new Promise(resolve=>{const img=new Image();img.onload=()=>{const canvas=document.createElement('canvas');canvas.width=img.width;canvas.height=img.height;const ctx=canvas.getContext('2d');ctx.drawImage(img,0,0);resolve({width:img.width,height:img.height,pixels:ctx.getImageData(0,0,img.width,img.height).data})};img.src=src})));
   if(data[0].width!==data[1].width||data[0].height!==data[1].height)return Infinity;
   let max=0;for(let i=0;i<data[0].pixels.length;i++)max=Math.max(max,Math.abs(data[0].pixels[i]-data[1].pixels[i]));return max;
  },shots.map(b=>'data:image/png;base64,'+b.toString('base64')));
  // Chromium rasterization can differ by one RGB level even with identical geometry.
  assert.ok(difference<=1,`maximum channel difference ${difference}`);
 }finally{await page.close()}
}
async function main(){
 await Promise.all([new Promise(r=>before.listen(0,'127.0.0.1',r)),new Promise(r=>after.listen(0,'127.0.0.1',r))]);
 const oldUrl=`http://127.0.0.1:${before.address().port}`,newUrl=`http://127.0.0.1:${after.address().port}`;
 const browser=await chromium.launch({headless:true,...(process.env.BROWSER_CHANNEL?{channel:process.env.BROWSER_CHANNEL}:{})});
 try{
  for(const [label,viewport]of [['desktop',{width:1440,height:900}],['mobile',{width:390,height:844}]]){
   for(const view of ['home','openRepro','openContacto','openFaq','openServicios','openHallOfFame']){
    const states=[],shots=[];
    for(const [version,url]of [['before',oldUrl],['after',newUrl]]){
     const p=await browser.newPage({viewport,isMobile:label==='mobile',hasTouch:label==='mobile'});await fixture(p);
     await p.goto(url,{waitUntil:'domcontentloaded'});
     if(view!=='home')await p.evaluate(fn=>window[fn](),view);
     await freezeAnimations(p);
     await ready(p);
     states.push(await snapshot(p));
     shots.push(await p.screenshot({path:path.join(output,`${label}-${view}-${version}.png`),animations:'disabled',fullPage:false}));
     await p.close();
    }
    await check(`${label} ${view}: same text, geometry and computed appearance`,()=>{
      assert.equal(states[1].length,states[0].length);
      states[0].forEach((row,i)=>row.forEach((value,j)=>{
        // Subpixel positions of animated scroll cues can vary between frames.
        if(j>=4&&j<=7)assert.ok(Math.abs(states[1][i][j]-value)<=0.25,`element ${i} coordinate ${j}: ${states[1][i][j]} vs ${value}`);
        else assert.deepEqual(states[1][i][j],value);
      }));
    });
    await check(`${label} ${view}: viewport pixels match (one color-level tolerance) with deterministic media`,()=>assertSamePixels(browser,shots));
   }
   const p=await browser.newPage({viewport,isMobile:label==='mobile',hasTouch:label==='mobile'});await fixture(p);
   const errors=[];p.on('pageerror',e=>errors.push(e.message));
   let payload;
   await p.route('**/api/chat',async route=>{payload=route.request().postDataJSON();await route.fulfill({json:{reply:'Respuesta de prueba del asistente'}})});
   await p.goto(newUrl,{waitUntil:'domcontentloaded'});
   await check(`${label}: popup assistant request and reply`,async()=>{
    await p.locator('#aiFloatBtn').click();await p.locator('#aiPopupInput').fill('Quiero información para mi Golf');await p.locator('.ai-popup-send').click();
    await p.getByText('Respuesta de prueba del asistente',{exact:false}).waitFor();assert.equal(payload.messages.at(-1).content,'Quiero información para mi Golf');assert.ok(payload.system);await p.locator('.ai-popup-close').click();
   });
   await check(`${label}: parts form validation and WhatsApp payload`,async()=>{
    await p.evaluate(()=>submitRepuesto());assert.ok(await p.evaluate(()=>window.__alert));
    for(const [id,value]of Object.entries({rNombre:'Prueba QA',rWA:'12345678',rVehiculo:'Golf 2020',rDesc:'Filtro'}))await p.locator('#'+id).fill(value);
    await p.locator('#rCategoria').selectOption({index:1});await p.evaluate(()=>submitRepuesto());
    assert.match(await p.evaluate(()=>decodeURIComponent(window.__opened)),/Prueba QA/);assert.equal(await p.locator('#rNombre').inputValue(),'');
   });
   if(label==='mobile')await check('mobile: navigation drawer opens and anchor closes it',async()=>{await p.locator('#navHamburger').click();assert.match(await p.locator('#navDrawer').getAttribute('class'),/open/);await p.locator('#navDrawer a[href="#nosotros"]').click();assert.doesNotMatch(await p.locator('#navDrawer').getAttribute('class'),/open/)});
   for(let repeat=0;repeat<2;repeat++)await check(`${label}: calculator, stage tabs and modal chat, opening ${repeat+1}`,async()=>{
    await p.evaluate(()=>openRepro());await p.locator('#calcMarca').selectOption('volkswagen');await p.locator('#calcModelo').selectOption({index:1});
    assert.equal(await p.locator('#calcOrigNum').textContent(),'230 HP');
    await p.evaluate(()=>selectStage(1));assert.match(await p.locator('.stage-tab').nth(1).getAttribute('class'),/active/);
    await p.locator('#rChatInput').fill('Golf GTI');await p.evaluate(()=>sendRChat());assert.equal(payload.messages.at(-1).content,'Golf GTI');
    await p.keyboard.press('Escape');assert.equal(await p.locator('#wt-modal-overlay').isVisible(),false);
   });
   await check(`${label}: FAQ expands and closes`,async()=>{await p.evaluate(()=>openFaq());const q=p.locator('#wt-modal-inner .faq-q').first();await q.click();assert.match(await q.getAttribute('class'),/open/);await q.click();assert.doesNotMatch(await q.getAttribute('class'),/open/);await p.keyboard.press('Escape')});
   await check(`${label}: gallery navigation and lightbox`,async()=>{const initial=await p.locator('#track-4runner').getAttribute('style');await p.locator('#track-4runner').locator('..').locator('.garrow').last().click();assert.notEqual(await p.locator('#track-4runner').getAttribute('style'),initial);await p.evaluate(()=>openLightbox(document.querySelector('#track-4runner img')));assert.equal(await p.locator('#lightbox').isVisible(),true);await p.evaluate(()=>closeLightbox())});
   await check(`${label}: service form validation`,async()=>{await p.evaluate(()=>openServicios());await p.evaluate(()=>{window.__alert='';submitForm()});assert.match(await p.evaluate(()=>window.__alert),/obligatorios/);await p.keyboard.press('Escape')});
   await check(`${label}: direct modal link`,async()=>{await p.goto(newUrl+'/#contacto',{waitUntil:'domcontentloaded'});assert.equal(await p.locator('#wt-modal-overlay').isVisible(),true)});
   await check(`${label}: Hall of Fame image and video lightboxes`,async()=>{
    await p.evaluate(()=>{openHallOfFame();hofLightbox(document.querySelector('#wt-modal-inner img'))});
    assert.equal(await p.locator('#hofLightbox').isVisible(),true);
    await p.evaluate(()=>{closeHofLightbox();hofVideoLightbox('https://res.cloudinary.com/test.mp4')});
    assert.equal(await p.locator('#hofLightboxVideo').count(),1);
    await p.evaluate(()=>closeHofLightbox());assert.equal(await p.locator('#hofLightboxVideo').count(),0);await p.keyboard.press('Escape');
   });
   await check(`${label}: no JavaScript errors on repeated interactions`,()=>assert.deepEqual(errors,[]));
   await check(`${label}: completed service form generates WhatsApp URL`,async()=>{
    await p.evaluate(()=>openServicios());
    for(const [id,value]of Object.entries({fNombre:'Prueba QA',fVehiculo:'Golf 2020',fWA:'12345678'}))await p.locator('#'+id).fill(value);
    await p.locator('#fServicio').selectOption({index:1});
    await p.route('https://wa.me/**',route=>route.fulfill({body:'WhatsApp intercepted by test'}));
    const request=p.waitForRequest(r=>r.url().startsWith('https://wa.me/'));
    await p.evaluate(()=>submitForm());const url=(await request).url();assert.match(decodeURIComponent(url),/Prueba QA/);assert.match(decodeURIComponent(url),/Golf 2020/);
   });
   await p.close();
  }
  for(const resource of ['/robots.txt','/sitemap.xml','/assets/css/main.css','/assets/js/modal.js'])await check('HTTP resource '+resource,async()=>{const r=await fetch(newUrl+resource);assert.equal(r.status,200);assert.ok(!((await r.text()).startsWith('<!DOCTYPE')))});
 }finally{await browser.close();before.close();after.close()}
 fs.writeFileSync(path.join(output,'results.json'),JSON.stringify({checks,failures},null,2));
 console.log(JSON.stringify({passed:checks.length,failed:failures.length,failures},null,2));if(failures.length)process.exitCode=1;
}
main().catch(e=>{console.error(e);before.close();after.close();process.exit(1)});
