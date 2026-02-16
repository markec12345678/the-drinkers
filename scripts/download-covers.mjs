import { writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, '..', 'public');

const urls = [
  ['album-zadnja-vecerja.jpg', 'https://i.discogs.com/riT7gDKGqaCo37BPrfQdbKd6xxMkdE61x1-OLH5ISyo/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE2Mjgw/ODI1LTE2MDY1MDIw/MDktODAwNy5qcGVn.jpeg'],
  ['album-de-best-of.jpg', 'https://i.discogs.com/QsjGL5QYz_Qv1zNb61E5U_AdWK9q1hpM9oQQdRm_z_0/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTMzOTcz/OTMtMTMyODgyMDk4/OS5qcGVn.jpeg'],
];

for (const [filename, url] of urls) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = await res.arrayBuffer();
    writeFileSync(join(publicDir, filename), Buffer.from(buf));
    console.log(`OK: ${filename} (${buf.byteLength} bytes)`);
  } catch (e) {
    console.error(`FAIL: ${filename} - ${e.message}`);
  }
}
