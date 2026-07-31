// Helpers compartilhados pelos builds dos decks de treinamento.
// Usa o motor de identidade da skill (deck_kit.js) e adiciona alguns padrões
// de layout recorrentes (cards com título, linha de passos, checklist, bloco
// de código escuro, duas colunas). Nada aqui muda a identidade visual.
const K = require("/Users/gaabrielrd/Dev/vitru/analytics/.claude/skills/analytics-report-deck/scripts/deck_kit.js");
const T = K.T;
const AREA = 12.1;               // área útil horizontal (MX..MX+12.1)

// Rodapé desta série (substitui a marca de analytics).
T.FOOT = "USANDO IA: DA CONCEPÇÃO À ENTREGA";

// Ajustes de contraste, locais a esta série — não alteram a skill compartilhada.
// O material do treinamento ensina a verificar contraste (Dia 3, bloco de
// acessibilidade); o próprio deck precisa passar no teste.
//
// GRAY2 é usado no rodapé (9pt), na strip da capa e na data. Em 8C8C96 dava
// ~3,1:1 nominal sobre o fundo F6F6F8 — abaixo dos 4,5:1 do WCAG AA, e pior
// ainda renderizado em corpo pequeno.
T.GRAY2 = "60606A";              // ~5,8:1 sobre T.BG

// Células "muted" de tabela (coluna "Duração" das agendas) são 11pt em T.GRAY,
// que renderizava fraco. Escurecemos só elas, sem mexer no texto de corpo.
const TABLE_MUTED = "5A5A64";    // ~6,3:1 sobre branco
K.TABLE.muted = (t) => ({ text: t, options: {
  fill: { color: T.CARD }, color: TABLE_MUTED, fontSize: 11, valign: "middle" } });

// Card branco com título e linha(s) de texto em bullets. accent=true põe barra roxa no topo.
function infoCard(s, x, y, w, h, heading, lines, opts = {}) {
  K.card(s, x, y, w, h, opts.fill || T.CARD, opts.line || T.BORDER);
  let ty = y + 0.22;
  if (opts.accent) { K.accentBar(s, x, y, w, 0.09); ty = y + 0.3; }
  if (opts.tag) {
    s.addText(opts.tag.toUpperCase(), { x: x + 0.25, y: ty, w: w - 0.5, h: 0.28,
      fontFace: T.FONT, fontSize: 10, bold: true, color: T.PURPLE, charSpacing: 1.5 });
    ty += 0.34;
  }
  if (heading) {
    s.addText(heading, { x: x + 0.25, y: ty, w: w - 0.5, h: 0.42,
      fontFace: T.FONT, fontSize: opts.headSize || 15.5, bold: true, color: opts.headColor || T.DARK });
    ty += (opts.headSize && opts.headSize > 18) ? 0.6 : 0.48;
  }
  if (lines && lines.length) {
    s.addText(lines.map(t => ({ text: t, options: { bullet: { code: "2022", indent: 14 }, breakLine: true } })),
      { x: x + 0.28, y: ty, w: w - 0.55, h: y + h - ty - 0.2,
        fontFace: T.FONT, fontSize: opts.bodySize || 13, color: opts.bodyColor || T.GRAY,
        paraSpaceAfter: opts.gap != null ? opts.gap : 7, valign: "top" });
  }
  return { x, y, w, h };
}

// Linha de N cards numerados (01,02,...). items = [{t, d}].
function stepRow(s, items, y, opts = {}) {
  const n = items.length, gap = opts.gap != null ? opts.gap : 0.25;
  const w = (AREA - gap * (n - 1)) / n, h = opts.h || 2.4;
  items.forEach((it, i) => {
    const x = T.MX + i * (w + gap);
    K.card(s, x, y, w, h);
    K.accentBar(s, x, y, w, 0.09);
    s.addText(String(i + 1).padStart(2, "0"), { x: x + 0.22, y: y + 0.24, w: w - 0.4, h: 0.55,
      fontFace: T.FONT, fontSize: 26, bold: true, color: T.PURPLE });
    s.addText(it.t, { x: x + 0.22, y: y + 0.86, w: w - 0.4, h: 0.7,
      fontFace: T.FONT, fontSize: 14, bold: true, color: T.DARK, valign: "top" });
    if (it.d) s.addText(it.d, { x: x + 0.22, y: y + 1.5, w: w - 0.42, h: h - 1.65,
      fontFace: T.FONT, fontSize: 11.5, color: T.GRAY, valign: "top" });
  });
  return { y, h };
}

// Bloco de código escuro (Fira Code). Retorna a altura usada.
function codeCard(s, x, y, w, h, code, opts = {}) {
  K.card(s, x, y, w, h, T.DARK, T.DARK);
  if (opts.tag) s.addText(opts.tag.toUpperCase(), { x: x + 0.3, y: y + 0.2, w: w - 0.6, h: 0.28,
    fontFace: T.FONT, fontSize: 10, bold: true, color: T.PURPLE2, charSpacing: 1.5 });
  s.addText(code, { x: x + 0.32, y: y + (opts.tag ? 0.56 : 0.24), w: w - 0.6, h: h - (opts.tag ? 0.76 : 0.44),
    fontFace: T.MONO, fontSize: opts.size || 12.5, color: "E8E0FF", valign: "top",
    lineSpacing: opts.ls || 19 });
  return h;
}

// Checklist dentro de um card. Retorna a altura total do card.
function checklist(s, x, y, w, items, opts = {}) {
  const ih = opts.ih || 0.46;
  const h = items.length * ih + 0.44;
  K.card(s, x, y, w, h);
  items.forEach((it, i) => {
    const cy = y + 0.24 + i * ih;
    K.accentBar(s, x + 0.3, cy + 0.05, 0.17, 0.17);
    s.addText(it, { x: x + 0.62, y: cy, w: w - 0.9, h: ih,
      fontFace: T.FONT, fontSize: opts.size || 13, color: T.DARK, valign: "middle" });
  });
  return h;
}

// Duas colunas de cards lado a lado (esq/dir). Retorna larguras/x.
function twoCol(y, opts = {}) {
  const gap = opts.gap != null ? opts.gap : 0.4;
  const w = (AREA - gap) / 2;
  return { xL: T.MX, xR: T.MX + w + gap, w, y };
}

module.exports = { K, T, AREA, infoCard, stepRow, codeCard, checklist, twoCol };
