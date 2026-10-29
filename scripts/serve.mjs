import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import {root} from './check.mjs';

const directory = path.resolve(root,process.argv[2] || '.');
if (directory !== path.resolve(root) && directory !== path.join(root,'dist')) throw new Error('Serve source or dist only');
const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.xml':'application/xml; charset=utf-8','.txt':'text/plain; charset=utf-8'};
const config=JSON.parse(fs.readFileSync(path.join(root,'vercel.json'),'utf8'));
const server=http.createServer((req,res)=>{
  const pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname);
  if(pathname.startsWith('/api/')){
    res.writeHead(501,{'Content-Type':'application/json'});
    res.end(JSON.stringify({error:'The production AI endpoint runs on Vercel; this server only previews static files.'}));
    return;
  }
  let file=path.resolve(directory,'.'+pathname);
  if(file !== directory && !file.startsWith(directory+path.sep)){res.writeHead(403);res.end();return;}
  // Reproduce the existing Vercel homepage fallback, not application code or secrets.
  if(pathname==='/' || (!fs.existsSync(file) && !path.extname(file))) file=path.join(directory,'index.html');
  if(!types[path.extname(file)] || !fs.existsSync(file) || !fs.statSync(file).isFile()){res.writeHead(404);res.end('Not found');return;}
  const headers=Object.fromEntries(config.headers[0].headers.map(h=>[h.key,h.value]));
  res.writeHead(200,{...headers,'Content-Type':types[path.extname(file)],'Cache-Control':'no-store'});
  if(req.method==='HEAD')res.end();else fs.createReadStream(file).pipe(res);
});
const port=Number(process.env.PORT || 3000);
server.listen(port,'127.0.0.1',()=>console.log('Preview: http://127.0.0.1:'+port));
