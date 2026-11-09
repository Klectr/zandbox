import { Resvg } from "@resvg/resvg-js";
import { writeFileSync } from "node:fs";

const W = 1200, H = 630;
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <radialGradient id="wash" cx="82%" cy="38%" r="55%">
      <stop offset="0%" stop-color="#fb923c" stop-opacity="0.13"/>
      <stop offset="100%" stop-color="#fb923c" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="#08090a"/>
  <rect width="${W}" height="${H}" fill="url(#wash)"/>
  <rect x="1" y="1" width="${W - 2}" height="${H - 2}" fill="none" stroke="#ffffff" stroke-opacity="0.14" stroke-width="2"/>

  <rect x="64" y="56" width="46" height="46" rx="11" fill="#fb923c"/>
  <text x="87" y="90" font-family="Montserrat" font-weight="700" font-size="27" fill="#442100" text-anchor="middle">Z</text>
  <text x="126" y="90" font-family="Montserrat" font-weight="700" font-size="29" fill="#f5f5f4">Zandbox</text>

  <text x="64" y="238" font-family="Montserrat" font-weight="700" font-size="57" fill="#f5f5f4">Every component.</text>
  <text x="64" y="308" font-family="Montserrat" font-weight="700" font-size="57" fill="#f5f5f4">Every state.</text>
  <text x="64" y="378" font-family="Montserrat" font-weight="700" font-size="57" fill="#f5f5f4">Your real CSS.</text>

  <text x="64" y="448" font-family="DM Sans" font-size="23" fill="#a8a29e">A component lab for Bun + HTMX projects.</text>
  <text x="64" y="484" font-family="DM Sans" font-size="23" fill="#a8a29e">No build step. No rendering library.</text>

  <text x="64" y="568" font-family="Fragment Mono" font-size="20" fill="#fb923c">zandbox.klectr.dev</text>

  <g>
    <rect x="668" y="118" width="468" height="394" rx="16" fill="#0d0d0f" stroke="#ffffff" stroke-opacity="0.14"/>
    <circle cx="696" cy="146" r="6" fill="#fb923c"/>
    <text x="712" y="152" font-family="DM Sans" font-size="16" font-weight="700" fill="#f5f5f4">Zandbox</text>
    <text x="1108" y="152" font-family="DM Sans" font-size="15" fill="#d6d3d1" text-anchor="end">:8935</text>
    <line x1="668" y1="168" x2="1136" y2="168" stroke="#ffffff" stroke-opacity="0.08"/>
    <rect x="668" y="168" width="150" height="344" fill="#101013"/>
    <line x1="818" y1="168" x2="818" y2="512" stroke="#ffffff" stroke-opacity="0.07"/>
    <rect x="680" y="182" width="126" height="26" rx="6" fill="none" stroke="#ffffff" stroke-opacity="0.12"/>
    <text x="690" y="199" font-family="DM Sans" font-size="12" fill="#78716c">Filter stories</text>
    <rect x="676" y="220" width="134" height="28" rx="6" fill="#fb923c" fill-opacity="0.16"/>
    <text x="686" y="239" font-family="DM Sans" font-size="13" font-weight="700" fill="#fb923c">Button — states</text>
    <text x="686" y="271" font-family="DM Sans" font-size="13" fill="#a8a29e">Field — label</text>
    <text x="686" y="299" font-family="DM Sans" font-size="13" fill="#a8a29e">Status chip</text>
    <text x="686" y="327" font-family="DM Sans" font-size="13" fill="#a8a29e">Tokens</text>
    <rect x="838" y="188" width="278" height="300" rx="10" fill="none" stroke="#ffffff" stroke-opacity="0.2" stroke-dasharray="5 5"/>
    <rect x="862" y="216" width="150" height="44" rx="8" fill="#fb923c"/>
    <text x="937" y="245" font-family="DM Sans" font-size="16" font-weight="700" fill="#442100" text-anchor="middle">Save changes</text>
    <rect x="1024" y="216" width="76" height="44" rx="8" fill="none" stroke="#ffffff" stroke-opacity="0.25"/>
    <text x="1062" y="245" font-family="DM Sans" font-size="15" fill="#e7e5e4" text-anchor="middle">Cancel</text>
    <rect x="862" y="282" width="62" height="28" rx="5" fill="#34d399" fill-opacity="0.16"/>
    <text x="893" y="301" font-family="DM Sans" font-size="13" font-weight="700" fill="#34d399" text-anchor="middle">Paid</text>
    <rect x="934" y="282" width="62" height="28" rx="5" fill="#ffffff" fill-opacity="0.08"/>
    <text x="965" y="301" font-family="DM Sans" font-size="13" font-weight="700" fill="#a8a29e" text-anchor="middle">Draft</text>
  </g>
</svg>`;

const resvg = new Resvg(svg, {
  fitTo: { mode: "width", value: W },
  font: {
    fontFiles: [
      "/home/hatch/workspace/.zlab-qa/og/fonts/Montserrat700.ttf",
      "/home/hatch/workspace/.zlab-qa/og/fonts/DMSans400.ttf",
      "/home/hatch/workspace/.zlab-qa/og/fonts/FragmentMono.ttf",
    ],
    loadSystemFonts: false,
    defaultFontFamily: "DM Sans",
  },
});
writeFileSync(new URL("../docs/og-image.png", import.meta.url), resvg.render().asPng());
console.log("og-image.png written");
