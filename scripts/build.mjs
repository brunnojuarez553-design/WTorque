import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {check, root} from './check.mjs';

check();
const output = path.join(root, 'dist');
// Only this project's generated output may be cleaned.
if (path.dirname(output) !== path.resolve(root) || path.basename(output) !== 'dist') throw new Error('Invalid output directory');
fs.rmSync(output, {recursive:true, force:true});
fs.mkdirSync(output, {recursive:true});
let html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
for (const [, asset] of [...html.matchAll(/(?:src|href)="(\/assets\/[^"?]+)"/g)]) {
  const data = fs.readFileSync(path.join(root,asset));
  const hash = crypto.createHash('sha256').update(data).digest('hex').slice(0,12);
  const ext = path.extname(asset);
  const versioned = asset.slice(0,-ext.length)+'.'+hash+ext;
  const destination = path.join(output,versioned);
  fs.mkdirSync(path.dirname(destination),{recursive:true});
  fs.writeFileSync(destination,data);
  html = html.replaceAll('"'+asset+'"','"'+versioned+'"');
}
fs.writeFileSync(path.join(output,'index.html'),html);
for (const file of ['robots.txt','sitemap.xml']) fs.copyFileSync(path.join(root,file),path.join(output,file));
console.log('Build ready in dist/: HTML, fingerprinted CSS/JS, robots.txt and sitemap.xml. Vercel serves api/chat.js separately.');
