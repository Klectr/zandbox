import { Resvg } from "@resvg/resvg-js";
import { writeFileSync } from "node:fs";

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 180 180">
  <rect width="180" height="180" rx="40" fill="#fb923c"/>
  <text x="90" y="128" font-family="Montserrat" font-weight="700" font-size="104" fill="#442100" text-anchor="middle">Z</text>
</svg>`;
writeFileSync(new URL("../docs/favicon.svg", import.meta.url), svg);
for (const size of [180, 32]) {
  const png = new Resvg(svg, {
    fitTo: { mode: "width", value: size },
    font: { fontFiles: ["/home/hatch/workspace/.zlab-qa/og/fonts/Montserrat700.ttf"], loadSystemFonts: false },
  }).render().asPng();
  writeFileSync(new URL(size === 180 ? "../docs/apple-touch-icon.png" : "../docs/favicon-32.png", import.meta.url), png);
}
console.log("favicon set written");
