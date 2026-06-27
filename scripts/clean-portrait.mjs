// Composite a background-removed cutout onto a dark, theme-matching
// backdrop, cropped to a 4:5 portrait. Run after you place a transparent
// PNG cutout at public/profile-cutout.png (e.g. exported from remove.bg).
//
//   node scripts/clean-portrait.mjs
//
import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";

const PUBLIC = path.resolve("public");
const CUTOUT = path.join(PUBLIC, "profile-cutout.png");
const OUT = path.join(PUBLIC, "profile.png");

const W = 640;
const H = 800; // 4:5 portrait
const BG = { r: 10, g: 10, b: 10, alpha: 1 }; // ~#0A0A0A theme background

async function main() {
  if (!fs.existsSync(CUTOUT)) {
    console.error(
      "Missing public/profile-cutout.png — export a transparent PNG (background removed) and save it there first."
    );
    process.exit(1);
  }

  // Trim transparent edges, then scale the subject to fill most of the width.
  const subjectW = 600;
  const resized = await sharp(fs.readFileSync(CUTOUT))
    .trim()
    .resize({ width: subjectW, withoutEnlargement: false })
    .toBuffer();
  const meta = await sharp(resized).metadata();

  const left = Math.round((W - meta.width) / 2);
  const top = Math.max(0, H - meta.height); // anchor shoulders to the bottom

  const composed = await sharp({
    create: { width: W, height: H, channels: 4, background: BG },
  })
    .composite([{ input: resized, left, top }])
    .png()
    .toBuffer();

  fs.writeFileSync(OUT, composed);
  console.log(`Wrote ${OUT} (${W}x${H}) on a dark theme background.`);
}

main().catch((e) => {
  console.error("FAILED:", e?.message || e);
  process.exit(1);
});
