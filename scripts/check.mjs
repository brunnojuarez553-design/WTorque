import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import { fileURLToPath } from 'node:url';

export const root = fileURLToPath(new URL('../', import.meta.url));
export function check() {
  const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
  const scripts = [...html.matchAll(/<script src="(\/assets\/js\/[^"?]+)"[^>]*><\/script>/g)];
  assert.equal(scripts.length, 8, 'All eight classic scripts must load in their original order');
  assert.deepEqual(scripts.map(m=>path.basename(m[1])), ['home.js','reprogramming.js','contact.js','faq.js','services.js','hall-of-fame.js','assistant.js','modal.js']);
  let combined = '';
  for (const [, url] of scripts) {
    const code = fs.readFileSync(path.join(root, url), 'utf8');
    new vm.Script(code, {filename:url});
    combined += code;
  }
  new vm.Script(combined, {filename:'combined-client.js'});
  const schemas = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  assert.equal(schemas.length, 3);
  for (const [, json] of schemas) assert.equal(JSON.parse(json)['@context'], 'https://schema.org');
  assert.match(html, /<link rel="canonical" href="https:\/\/www\.witchertorque\.com\/">/);
  assert.match(html, /<link rel="stylesheet" href="\/assets\/css\/main\.css">/);
  assert.ok(fs.statSync(path.join(root,'assets/css/main.css')).size > 0);
  assert.match(fs.readFileSync(path.join(root, 'robots.txt'),'utf8'), /Sitemap: https:\/\/www\.witchertorque\.com\/sitemap\.xml/);
  const config = JSON.parse(fs.readFileSync(path.join(root, 'vercel.json'),'utf8'));
  assert.equal(config.outputDirectory, 'dist');
  console.log('OK: client syntax, script order, structured data, canonical, stylesheet and crawl files.');
}
if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) check();
