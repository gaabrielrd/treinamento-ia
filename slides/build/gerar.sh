#!/usr/bin/env bash
# Gera um deck do começo ao fim e publica em slides/.
#
#   bash slides/build/gerar.sh dia-1
#
# Nomes aceitos: dia-1 dia-2 dia-3 gestao lideres lideres-areas
#
# O caminho passa por PPTX porque a automação do Keynote não cria animações:
# o deck é montado em PPTX, as animações são injetadas no OOXML e o Keynote
# as importa ao converter. Ver README.md desta pasta.
set -euo pipefail

AQUI="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SLIDES="$(dirname "$AQUI")"
SKILL="/Users/gaabrielrd/Dev/vitru/analytics/.claude/skills/analytics-report-deck"

nome="${1:-}"
case "$nome" in
  dia-1) script="build1.js" ;;
  dia-2) script="build2.js" ;;
  dia-3) script="build3.js" ;;
  gestao|lideres|lideres-areas) script="build-$nome.js" ;;
  *)
    echo "uso: bash slides/build/gerar.sh <dia-1|dia-2|dia-3|gestao|lideres|lideres-areas>" >&2
    exit 2
    ;;
esac

for dep in node python3 osascript; do
  command -v "$dep" >/dev/null || { echo "falta $dep no PATH" >&2; exit 1; }
done
[ -f "$SKILL/scripts/deck_kit.js" ] || { echo "skill analytics-report-deck não encontrada em $SKILL" >&2; exit 1; }
[ -d "$AQUI/node_modules/pptxgenjs" ] || { echo "→ instalando pptxgenjs"; (cd "$AQUI" && npm install --silent pptxgenjs); }

tmp="$AQUI/.tmp-$nome"
qa="$AQUI/qa-$nome"
rm -rf "$tmp" && mkdir -p "$tmp"

echo "→ 1/4 montando o PPTX"
(cd "$AQUI" && node "$script" "$tmp/deck.pptx" >/dev/null)

echo "→ 2/4 injetando as animações"
python3 "$SKILL/scripts/animate.py" "$tmp/deck.pptx" "$tmp/deck-anim.pptx" >/dev/null

echo "→ 3/4 convertendo para Keynote e gerando o QA"
bash "$SKILL/scripts/to_keynote.sh" "$tmp/deck-anim.pptx" "$tmp/deck.key" "$qa" >/dev/null

echo "→ 4/4 exportando o PDF"
bash "$AQUI/export_pdf.sh" "$tmp/deck.key" "$tmp/deck.pdf" >/dev/null

cp "$tmp/deck.key" "$SLIDES/apresentacao-$nome.key"
cp "$tmp/deck.pdf" "$SLIDES/apresentacao-$nome.pdf"
rm -rf "$tmp"

paginas=$(python3 - "$SLIDES/apresentacao-$nome.pdf" <<'PY'
import re, sys
print(len(re.findall(rb'/Type\s*/Page[^s]', open(sys.argv[1], 'rb').read())))
PY
)
logos=$(unzip -l "$SLIDES/apresentacao-$nome.key" | grep -c 'image-.*\.png' || true)

echo
echo "✓ slides/apresentacao-$nome.key e .pdf — $paginas slides, logo em $logos referência(s)"
echo "  confira as imagens de QA, uma por slide: $qa"
echo "  procure texto cortado, sobreposição e estouro de card"
