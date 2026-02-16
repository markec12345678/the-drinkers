/**
 * Naloži slike iz public/ na GitHub.
 * Uporaba: GITHUB_TOKEN=ghp_xxx node scripts/push-images.js
 * Ali: gh auth login + git push
 */

const fs = require("fs");
const path = require("path");
const https = require("https");

const OWNER = "markec12345678";
const REPO = "the-drinkers";
const BRANCH = "main";
const PUBLIC_DIR = path.join(__dirname, "..", "public");

const IMAGES = [
  "album-lepi-in-trezni.jpg",
  "album-pivolucija.jpg",
  "album-prohibicija.jpg",
  "drinkers-band-photo.jpg",
  "hero-bg.jpg",
  "ko-to-tamo-peva.jpg",
];

async function getFileSha(name) {
  const token = process.env.GITHUB_TOKEN;
  const url = `https://api.github.com/repos/${OWNER}/${REPO}/contents/public/${name}`;
  return new Promise((resolve) => {
    const req = https.request(url, {
      headers: { "User-Agent": "Node", Authorization: `token ${token}` },
    }, (res) => {
      let data = "";
      res.on("data", (c) => (data += c));
      res.on("end", () => {
        try {
          resolve(JSON.parse(data).sha);
        } catch {
          resolve(null);
        }
      });
    });
    req.on("error", () => resolve(null));
    req.end();
  });
}

async function putFile(name, contentBase64, message) {
  const token = process.env.GITHUB_TOKEN;
  const sha = await getFileSha(name);
  const url = `https://api.github.com/repos/${OWNER}/${REPO}/contents/public/${name}`;
  const body = JSON.stringify({
    message,
    content: contentBase64,
    branch: BRANCH,
    ...(sha && { sha }),
  });
  return new Promise((resolve, reject) => {
    const req = https.request(url, {
      method: "PUT",
      headers: {
        "User-Agent": "Node",
        Authorization: `token ${token}`,
        "Content-Type": "application/json",
        "Content-Length": Buffer.byteLength(body),
      },
    }, (res) => {
      let data = "";
      res.on("data", (c) => (data += c));
      res.on("end", () => {
        if (res.statusCode >= 200 && res.statusCode < 300) resolve();
        else reject(new Error(`${res.statusCode}: ${data}`));
      });
    });
    req.on("error", reject);
    req.write(body);
    req.end();
  });
}

async function main() {
  if (!process.env.GITHUB_TOKEN) {
    console.log("Nastavi GITHUB_TOKEN in pozeni: node scripts/push-images.js");
    console.log("Ali: gh auth login, nato git add public/ && git push");
    process.exit(0);
    return;
  }
  for (const name of IMAGES) {
    const p = path.join(PUBLIC_DIR, name);
    if (!fs.existsSync(p)) continue;
    const buf = fs.readFileSync(p);
    const b64 = buf.toString("base64");
    console.log("Nalagam " + name + "...");
    try {
      await putFile(name, b64, "Dodaj " + name);
      console.log("  OK");
    } catch (e) {
      console.error("  Napaka:", e.message);
    }
  }
}

main();
