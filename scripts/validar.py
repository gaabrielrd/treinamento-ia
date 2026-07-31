#!/usr/bin/env python3
"""Validação local do repositório.

O treinamento cobra validação antes de considerar algo pronto. Este script é
a validação deste repositório: roda sem dependências, em segundos, e falha
com uma lista do que corrigir.

    python3 scripts/validar.py

Verifica:
  1. links de markdown e href de HTML que apontam para arquivos locais;
  2. entradas do menu lateral (_sidebar.md);
  3. cada momento/dia tem guia, roteiro e referências;
  4. cada script de deck tem o .key e o .pdf correspondentes em slides/;
  5. nenhum arquivo grande fora de slides/ e dos projetos de exemplo.
"""

import os
import re
import sys

RAIZ = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
IGNORAR_DIR = {".git", "node_modules", "dist", "coverage", ".venv", "__pycache__"}
# Pastas cujo conteúdo é código de exemplo/template: têm regras próprias e não
# entram na verificação de links deste repositório.
IGNORAR_RAIZ = {"template-ia-web", "template-ia-python"}

LINK_MD = re.compile(r"\[[^\]]*\]\(([^)\s]+?)(?:\s+\"[^\"]*\")?\)")
LINK_HTML = re.compile(r'href="([^"]+)"')

problemas = []


def erro(arquivo, msg):
    problemas.append(f"{arquivo}: {msg}")


def arquivos_markdown():
    for base, dirs, nomes in os.walk(RAIZ):
        dirs[:] = [
            d
            for d in dirs
            if d not in IGNORAR_DIR
            and not (base == RAIZ and d in IGNORAR_RAIZ)
            and not d.startswith("qa")
        ]
        for nome in nomes:
            if nome.endswith((".md", ".html")):
                yield os.path.join(base, nome)


def resolver(alvo, arquivo):
    """Caminho absoluto de um link local, ou None se o link não for local."""
    if alvo.startswith(("http://", "https://", "mailto:", "#", "data:")):
        return None
    alvo = alvo.split("#")[0].split("?")[0]
    if not alvo or alvo == "/":
        return None
    if alvo.startswith("/"):
        return os.path.join(RAIZ, alvo.lstrip("/"))
    return os.path.normpath(os.path.join(os.path.dirname(arquivo), alvo))


# 1 e 2 — links
for arquivo in arquivos_markdown():
    rel = os.path.relpath(arquivo, RAIZ)
    texto = open(arquivo, encoding="utf-8").read()
    padroes = [LINK_MD] if arquivo.endswith(".md") else [LINK_HTML]
    if arquivo.endswith(".md"):
        padroes.append(LINK_HTML)  # downloads.md usa <a href> nos cartões
    for padrao in padroes:
        for m in padrao.finditer(texto):
            destino = resolver(m.group(1), arquivo)
            if destino and not os.path.exists(destino):
                erro(rel, f"link quebrado → {m.group(1)}")

# 3 — cada momento/dia completo
ESPERADO = {
    "materiais/gestao": ["README.md", "roteiro.md", "referencias.md"],
    "materiais/dia-1": ["README.md", "roteiro.md", "referencias.md"],
    "materiais/dia-2": ["README.md", "roteiro.md", "referencias.md"],
    "materiais/dia-3": ["README.md", "roteiro.md", "referencias.md"],
}
for pasta, obrigatorios in ESPERADO.items():
    for nome in obrigatorios:
        if not os.path.exists(os.path.join(RAIZ, pasta, nome)):
            erro(pasta, f"falta {nome}")

# 4 — todo script de deck tem saída publicada
MAPA_DECK = {
    "build1.js": "apresentacao-dia-1",
    "build2.js": "apresentacao-dia-2",
    "build3.js": "apresentacao-dia-3",
    "build-gestao.js": "apresentacao-gestao",
    "build-lideres.js": "apresentacao-lideres",
    "build-lideres-areas.js": "apresentacao-lideres-areas",
}
build = os.path.join(RAIZ, "slides", "build")
for script in sorted(os.listdir(build)) if os.path.isdir(build) else []:
    if not script.startswith("build") or not script.endswith(".js"):
        continue
    if script not in MAPA_DECK:
        erro("slides/build", f"{script} não está no mapa de decks de scripts/validar.py")
        continue
    for ext in (".key", ".pdf"):
        saida = os.path.join(RAIZ, "slides", MAPA_DECK[script] + ext)
        if not os.path.exists(saida):
            erro("slides", f"falta {MAPA_DECK[script]}{ext} (gerado por {script})")

# 5 — binário grande no lugar errado
LIMITE_MB = 1.0
for base, dirs, nomes in os.walk(RAIZ):
    dirs[:] = [d for d in dirs if d not in IGNORAR_DIR and not d.startswith("qa")]
    rel_base = os.path.relpath(base, RAIZ)
    if rel_base.split(os.sep)[0] in IGNORAR_RAIZ | {"slides", "materiais"}:
        continue
    for nome in nomes:
        caminho = os.path.join(base, nome)
        if os.path.getsize(caminho) > LIMITE_MB * 1024 * 1024:
            erro(os.path.relpath(caminho, RAIZ), f"arquivo grande fora de slides/ ({os.path.getsize(caminho) // 1024} KB)")

if problemas:
    print(f"✗ {len(problemas)} problema(s):\n")
    for p in problemas:
        print("  " + p)
    sys.exit(1)

print("✓ repositório válido: links, estrutura dos momentos e decks publicados")
