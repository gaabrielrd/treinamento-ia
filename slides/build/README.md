# Geração dos decks

Os decks publicados em [`slides/`](../) são gerados por script, não editados à mão no Keynote. Isso mantém todos consistentes e torna qualquer alteração rastreável.

## Arquivos

| Arquivo         | O que é                                                                       |
| --------------- | ----------------------------------------------------------------------------- |
| `gerar.sh`      | gera um deck do começo ao fim e publica em `slides/`                           |
| `build-gestao.js` | deck do **Momento 1 · Gestão** — 10 slides                                   |
| `build1.js`     | **Momento 2 · Dia 1** — 17 slides                                              |
| `build2.js`     | **Momento 2 · Dia 2** — 16 slides                                              |
| `build3.js`     | **Momento 2 · Dia 3** — 13 slides                                              |
| `build-lideres.js` | deck de motivação e objetivos, para apresentar a proposta — 9 slides            |
| `build-lideres-areas.js` | deck de proposta aos líderes de cada área, para validação — 14 slides     |
| `common.js`     | padrões de layout desta série (cards, checklists, blocos de código, colunas)   |
| `export_pdf.sh` | exporta um `.key` para `.pdf` via Keynote                                       |

A identidade visual (paleta, tipografia, grid, animações) vem da skill `analytics-report-deck`, que o `common.js` carrega. **Não recalcule cores nem coordenadas:** use as primitivas.

## Pré-requisitos

- macOS com Keynote
- Node e Python 3

## Como alterar um slide

1. Localize o slide no `build*.js` — os comentários marcam cada um (`// ---------------- 05 · Escopo ----------------`).
2. Edite o conteúdo.
3. Regenere, da raiz do repositório:

```bash
bash slides/build/gerar.sh dia-1
```

Nomes aceitos: `dia-1`, `dia-2`, `dia-3`, `gestao`, `lideres`, `lideres-areas`.

O script monta o PPTX, injeta as animações, converte para Keynote, exporta o PDF, publica os dois em `slides/` e informa quantos slides saíram e onde estão as imagens de QA. Os intermediários são apagados no fim; `npm install pptxgenjs` roda sozinho na primeira vez.

4. Confira as imagens em `qa-<nome>/` — uma por slide — procurando texto cortado, sobreposição ou estouro de card.
5. Confira se o roteiro daquele encontro ainda bate com o slide, e rode `python3 scripts/validar.py`.

As etapas individuais continuam disponíveis, se precisar depurar uma delas: leia o `gerar.sh`, que é curto e comentado.

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
