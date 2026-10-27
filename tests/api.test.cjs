const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
test('chat proxy: CORS, methods, validation, history, provider errors and rate limit',async()=>{
 const source=fs.readFileSync('api/chat.js','utf8');
 const {default:handler}=await import('data:text/javascript;base64,'+Buffer.from(source).toString('base64'));
 const originalFetch=global.fetch, originalKey=process.env.GROQ_API_KEY;
 function response(){return {code:200,headers:{},setHeader(k,v){this.headers[k]=v},status(c){this.code=c;return this},json(body){this.body=body;return this},end(){return this}};}
 let id=0;
 async function call({method='POST',origin='http://localhost:3000',body={},ip=String(++id)}={}){const res=response();await handler({method,headers:{origin,'x-forwarded-for':ip},body},res);return res;}
 try{
  assert.equal((await call({origin:'https://untrusted.example'})).code,403);
  assert.equal((await call({method:'OPTIONS'})).code,200);
  assert.equal((await call({method:'GET'})).code,405);
  assert.equal((await call()).code,400);
  delete process.env.GROQ_API_KEY;
  assert.equal((await call({body:{messages:[]}})).code,500);
  process.env.GROQ_API_KEY='test-only';
  let sent;
  global.fetch=async(url,options)=>{sent={url,...JSON.parse(options.body)};return {ok:true,json:async()=>({choices:[{message:{content:'Respuesta de prueba'}}]})}};
  const ok=await call({body:{system:'Contexto',messages:Array.from({length:25},()=>({role:'user',content:'x'.repeat(1200)}))}});
  assert.equal(ok.body.reply,'Respuesta de prueba');
  assert.equal(sent.messages.length,21);
  assert.equal(sent.messages[1].content.length,1000);
  assert.equal(ok.headers['Access-Control-Allow-Origin'],'http://localhost:3000');
  global.fetch=async()=>({ok:false,status:503,json:async()=>({})});
  assert.equal((await call({body:{messages:[]}})).code,502);
  for(let i=0;i<15;i++) await call({ip:'rate-test'});
  assert.equal((await call({ip:'rate-test'})).code,429);
 }finally{global.fetch=originalFetch;if(originalKey===undefined)delete process.env.GROQ_API_KEY;else process.env.GROQ_API_KEY=originalKey;}
});
