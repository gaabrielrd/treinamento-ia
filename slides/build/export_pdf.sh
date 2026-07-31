#!/bin/bash
# Exporta um .key para .pdf via Keynote. Uso: export_pdf.sh entrada.key saida.pdf
set -e
KEY="$1"; PDF="$2"
[ -z "$KEY" ] || [ -z "$PDF" ] && { echo "uso: export_pdf.sh entrada.key saida.pdf"; exit 1; }
open -a Keynote 2>/dev/null || true
sleep 2
osascript <<EOF
tell application "Keynote"
  activate
  delay 1
  repeat while (count of documents) > 0
    close front document saving no
  end repeat
  open (POSIX file "$KEY")
  repeat 60 times
    if (count of documents) > 0 then exit repeat
    delay 0.5
  end repeat
  delay 1
  export front document to (POSIX file "$PDF") as PDF with properties {PDF image quality:Best, skipped slides:false}
  delay 2
  close front document saving no
end tell
EOF
echo "pdf: $PDF"
