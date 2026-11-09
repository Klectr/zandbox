import { Resvg } from "@resvg/resvg-js";
import { writeFileSync } from "node:fs";

// The favicon IS the header brand tile, scaled: a 26px tile with radius 8 and
// a mono bold 14px "Z" becomes, at 180, rx 55 and a 97px Z. Colors #fb923c /
// #442100. Keep these numbers in lockstep with .brand-tile in docs/index.html.
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 180 180">
  <rect width="180" height="180" rx="55" fill="#fb923c"/>
  <text x="90" y="92" font-family="ui-monospace, 'Cascadia Code', Menlo, Consolas, monospace" font-weight="700" font-size="97" fill="#442100" text-anchor="middle" dominant-baseline="central">Z</text>
</svg>`;
writeFileSync(new URL("../docs/favicon.svg", import.meta.url), svg);
for (const size of [180, 32]) {
  const png = new Resvg(svg, {
    fitTo: { mode: "width", value: size },
    font: { fontFiles: ["/usr/share/fonts/truetype/dejavu/DejaVuSansMono-Bold.ttf"], loadSystemFonts: false },
  }).render().asPng();
  writeFileSync(new URL(size === 180 ? "../docs/apple-touch-icon.png" : "../docs/favicon-32.png", import.meta.url), png);
}
console.log("favicon set written");
