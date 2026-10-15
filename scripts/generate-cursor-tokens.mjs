// Generates src/app/cursor-tokens.css: one set of SVG cursors per accent color and appearance.
// Cursor images cannot read CSS variables, so accent and background are baked into each image.
// Run `npm run cursors` after changing an accent in globals.css.

import { writeFileSync } from 'node:fs';

const OUTPUT = new URL('../src/app/cursor-tokens.css', import.meta.url);

const BLACK = '#000';
const WHITE = '#fff';
const SIZE = 32;
const CENTER = SIZE / 2;

// Keep in sync with --primary, --blue, --violett and --orange in globals.css.
const ACCENTS = {
  primary: [0.582, 0.231, 288.6],
  blue: [0.546, 0.245, 262.9],
  violett: [0.543, 0.252, 285.9],
  orange: [0.634, 0.237, 31.3],
  wireframe: [0, 0, 0]
};

// Keep in sync with --background in globals.css. The ring between core and outer
// ring uses it, so the cursor looks cut out of the page.
const BACKGROUNDS = {
  light: [1, 0, 0],
  dark: [0.193, 0, 0]
};

const SELECTORS = {
  primary: ':root',
  blue: ":root[data-theme-color='blue']",
  violett: ":root[data-theme-color='violett']",
  orange: ":root[data-theme-color='orange']",
  wireframe: ":root[data-theme='wireframe']"
};

// Set per block before drawing: ring = page background, glyph = color on the core.
let ring = WHITE;
let glyph = WHITE;

function oklchToHex([l, c, hDeg]) {
  const h = (hDeg * Math.PI) / 180;
  const a = c * Math.cos(h);
  const b = c * Math.sin(h);
  const l_ = (l + 0.3963377774 * a + 0.2158037573 * b) ** 3;
  const m_ = (l - 0.1055613458 * a - 0.0638541728 * b) ** 3;
  const s_ = (l - 0.0894841775 * a - 1.291485548 * b) ** 3;
  const linear = [
    4.0767416621 * l_ - 3.3077115913 * m_ + 0.2309699292 * s_,
    -1.2684380046 * l_ + 2.6097574011 * m_ - 0.3413193965 * s_,
    -0.0041960863 * l_ - 0.7034186147 * m_ + 1.707614701 * s_
  ];
  return (
    '#' +
    linear
      .map((v) => {
        const clamped = Math.min(1, Math.max(0, v));
        const gamma =
          clamped <= 0.0031308
            ? 12.92 * clamped
            : 1.055 * clamped ** (1 / 2.4) - 0.055;
        return Math.round(gamma * 255)
          .toString(16)
          .padStart(2, '0');
      })
      .join('')
  );
}

// Every shape gets the same outline: a 2.5px background-colored ring inside a 1.5px
// accent ring.
function circle(r, fill) {
  return `<circle cx='${CENTER}' cy='${CENTER}' r='${r}' fill='${fill}'/>`;
}

function rect(w, h, rx, fill) {
  return `<rect x='${CENTER - w / 2}' y='${CENTER - h / 2}' width='${w}' height='${h}' rx='${rx}' fill='${fill}'/>`;
}

function outlined(shape, core) {
  return shape(4, core, 4) + shape(2.5, ring, 2.5) + shape(0, core, 0);
}

function dot(r, accent) {
  return outlined((grow, fill) => circle(r + grow, fill), accent);
}

function pill(w, h, accent) {
  return outlined(
    (grow, fill) => rect(w + grow * 2, h + grow * 2, (w + grow * 2) / 2, fill),
    accent
  );
}

function tile(w, h, rx, accent) {
  return outlined(
    (grow, fill) => rect(w + grow * 2, h + grow * 2, rx + grow, fill),
    accent
  );
}

function donut(r, accent) {
  const stroke = (width, color) =>
    `<circle cx='${CENTER}' cy='${CENTER}' r='${r}' fill='none' stroke='${color}' stroke-width='${width}'/>`;
  return stroke(11, accent) + stroke(8, ring) + stroke(3, accent);
}

const plus = () =>
  `<path d='M11.5 16H20.5M16 11.5V20.5' stroke='${glyph}' stroke-width='2.5' stroke-linecap='round' fill='none'/>`;
const minus = () =>
  `<path d='M11.5 16H20.5' stroke='${glyph}' stroke-width='2.5' stroke-linecap='round' fill='none'/>`;

// Each state has its own silhouette, so it never relies on color alone.
function states(accent) {
  return {
    default: [dot(5, accent), 'auto'],
    pointer: [dot(8, accent), 'pointer'],
    pressed: [dot(2.5, accent), 'auto'],
    text: [pill(4, 20, accent), 'text'],
    disabled: [
      `<g opacity='.6'>${tile(18, 12, 4, accent)}${rect(12, 3, 1.5, glyph)}</g>`,
      'not-allowed'
    ],
    busy: [donut(7.5, accent), 'progress'],
    'zoom-in': [dot(8, accent) + plus(), 'zoom-in'],
    'zoom-out': [dot(8, accent) + minus(), 'zoom-out'],
    grab: [tile(14, 14, 5, accent), 'grab'],
    grabbing: [tile(9, 9, 3.5, accent), 'grabbing']
  };
}

function toUrl(body) {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='${SIZE}' height='${SIZE}' viewBox='0 0 ${SIZE} ${SIZE}'>${body}</svg>`;
  const encoded = svg
    .replace(/</g, '%3C')
    .replace(/>/g, '%3E')
    .replace(/#/g, '%23');
  return `url("data:image/svg+xml,${encoded}")`;
}

function block(name, appearance) {
  const isWireframe = name === 'wireframe';
  const background = oklchToHex(BACKGROUNDS[appearance]);
  // Wireframe accent is the foreground: black on light, white on dark.
  const accent = isWireframe
    ? appearance === 'dark'
      ? WHITE
      : BLACK
    : oklchToHex(ACCENTS[name]);
  ring = background;
  glyph = isWireframe && appearance === 'dark' ? BLACK : WHITE;
  const selector =
    appearance === 'dark'
      ? SELECTORS[name].replace(/^:root/, ':root.theme-appearance-dark')
      : SELECTORS[name];
  const declarations = Object.entries(states(accent))
    .map(
      ([state, [body, fallback]]) =>
        `  --cursor-${state}: ${toUrl(body)} ${CENTER} ${CENTER}, ${fallback};`
    )
    .join('\n');
  return `${selector} {\n${declarations}\n}`;
}

// Order matters: later blocks win ties in specificity (wireframe last per appearance).
const blocks = ['light', 'dark'].flatMap((appearance) =>
  Object.keys(SELECTORS).map((name) => block(name, appearance))
);

writeFileSync(
  OUTPUT,
  `/* Generated by scripts/generate-cursor-tokens.mjs. Do not edit. Run \`npm run cursors\`. */\n\n${blocks.join('\n\n')}\n`
);
