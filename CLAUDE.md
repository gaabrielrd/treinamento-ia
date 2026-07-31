# Orientações para o Claude Code

As regras deste projeto estão em [AGENTS.md](AGENTS.md) — leia antes de qualquer alteração. Este arquivo tem só o que é específico do Claude Code.

## Antes de propor uma mudança

Diga em uma frase o que vai mudar e em quais arquivos. Este repositório é material de treinamento: uma alteração de conteúdo quase sempre toca três lugares — o material, o roteiro do instrutor e o slide.

## Ao terminar

Rode a validação e mostre a saída:

```bash
python3 scripts/validar.py
```

Se um deck foi alterado, regenere e confira as imagens de QA antes de dizer que está pronto:

```bash
bash slides/build/gerar.sh dia-1
```

## Limites

- Não edite `.key` pelo Keynote para "resolver rápido": corrija no script de build.
- Não altere a skill `analytics-report-deck` (fora deste repositório) sem pedir.
- Não invente números, fontes ou estudos nos materiais. As referências existentes estão nos `referencias.md` de cada encontro.
