# Geração dos decks

Os três decks do treinamento (`apresentacao-dia-1`, `-2` e `-3`, na raiz do repositório) são gerados por script, não editados à mão no Keynote. Isso mantém os três consistentes e torna qualquer alteração rastreável.

## Arquivos

| Arquivo         | O que é                                                                       |
| --------------- | ----------------------------------------------------------------------------- |
| `build1.js`     | conteúdo do deck do Dia 1 — 17 slides                                          |
| `build2.js`     | conteúdo do deck do Dia 2 — 16 slides                                          |
| `build3.js`     | conteúdo do deck do Dia 3 — 13 slides                                          |
| `build-gerencia.js` | deck de motivação e objetivos, para apresentar a proposta — 9 slides       |
| `common.js`     | padrões de layout desta série (cards, checklists, blocos de código, colunas)   |
| `export_pdf.sh` | exporta um `.key` para `.pdf` via Keynote                                       |

A identidade visual (paleta, tipografia, grid, animações) vem da skill `analytics-report-deck`, que o `common.js` carrega. **Não recalcule cores nem coordenadas:** use as primitivas.

## Pré-requisitos

- macOS com Keynote
- Node e Python 3

## Como alterar um slide

1. Localize o slide no `build*.js` — os comentários marcam cada um (`// ---------------- 05 · Escopo ----------------`).
2. Edite o conteúdo.
3. Reconstrua:

```bash
cd materiais/decks-build
npm install pptxgenjs
S=/Users/gaabrielrd/Dev/vitru/analytics/.claude/skills/analytics-report-deck

node build1.js                                              # gera deck1.pptx
python3 $S/scripts/animate.py deck1.pptx deck1_anim.pptx     # injeta as animações
bash $S/scripts/to_keynote.sh "$PWD/deck1_anim.pptx" "$PWD/deck1.key" "$PWD/qa1"
bash export_pdf.sh "$PWD/deck1.key" "$PWD/deck1.pdf"
```

4. Confira as imagens em `qa1/` — uma por slide — procurando texto cortado, sobreposição ou estouro de card.
5. Copie o resultado para a raiz:

```bash
cp deck1.key ../../apresentacao-dia-1.key
cp deck1.pdf ../../apresentacao-dia-1.pdf
```

Troque `1` por `2` ou `3` para os outros dias. O `.pptx` e o `.pptx` animado são intermediários — não precisam ser versionados.

## Por que o caminho passa por PPTX

O `.key` é o formato final, mas a automação do Keynote não cria animações. Então o deck é montado em PPTX, as animações são injetadas no OOXML e o Keynote as **importa** ao converter para `.key`. É a única rota confiável.

Para confirmar que as animações sobreviveram, procure nós `<p:animEffect>` no `.pptx` animado e verifique que não há `nodeType="onClick"` — a entrada deve ser automática ao abrir o slide.

## Ajustes locais de contraste

O `common.js` sobrescreve duas cores da skill, para esta série apenas:

| O que                          | Cor        | Contraste sobre o fundo |
| ------------------------------ | ---------- | ----------------------- |
| rodapé, strip da capa e data   | `#60606A`  | 5,76:1                  |
| células "muted" de tabela      | `#5A5A64`  | 6,82:1                  |

O mínimo do WCAG AA para texto normal é 4,5:1. A skill compartilhada não foi alterada.

> Ao medir contraste, use a cor especificada — não o pixel de uma imagem exportada. Nas imagens de QA (72 DPI), texto de 9pt fica mais fino que um pixel e o antialiasing o mistura com o fundo, o que subestima o contraste real em mais de um ponto.

## Sobre editar direto no Keynote

Funciona, mas a alteração se perde na próxima regeneração. Se você editar um `.key` à mão, replique a mudança no `build*.js` correspondente.
