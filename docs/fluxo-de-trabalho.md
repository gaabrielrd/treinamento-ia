# Fluxo de trabalho

Como alterar este repositório. O processo é o mesmo que a formação ensina, aplicado aqui: definir o que muda, fazer em incremento pequeno, validar, registrar.

## O ciclo

```
definir o que muda  →  alterar  →  validar  →  registrar a entrega
```

**Definir.** Antes de mexer, diga em uma frase o que muda e quais arquivos serão tocados. Alteração de conteúdo em geral toca três lugares: o material, o roteiro do instrutor e o slide correspondente.

**Alterar.** Um assunto por vez. Se a mudança abre outra, anote e faça depois.

**Validar.** `python3 scripts/validar.py`, mais o que o tipo de alteração exigir (abaixo).

**Registrar.** Commit com uma frase que diz o que muda e por quê. Decisão estrutural entra em [decisoes.md](decisoes.md).

## Por tipo de alteração

### Alterar um material de sala

1. Edite o arquivo em `materiais/<encontro>/`.
2. Confira se o [roteiro](../materiais/gestao/roteiro.md) daquele encontro ainda descreve o que o material diz — os dois se contradizem com facilidade.
3. Se o material é novo, liste em `downloads.md` e em `_sidebar.md`.
4. `python3 scripts/validar.py`.

### Alterar um slide

Nunca no Keynote — a alteração se perde na próxima geração.

1. Edite o `slides/build/build*.js` correspondente. Os comentários marcam cada slide (`// ---------------- 05 · Escopo ----------------`).
2. Regenere:

```bash
bash slides/build/gerar.sh dia-1
```

3. Abra as imagens de QA que o script indica — uma por slide — e procure texto cortado, sobreposição ou estouro de card.
4. Confira se o roteiro do encontro ainda bate com o slide (número, título e o que está na tela).
5. `python3 scripts/validar.py`.

Detalhes do pipeline e dos ajustes de contraste: [`slides/build/README.md`](../slides/build/README.md).

### Adicionar um encontro ou reorganizar a formação

1. Atualize [`docs/plano.md`](plano.md) primeiro — é o escopo escrito da formação.
2. Crie `materiais/<encontro>/` com `README.md`, `roteiro.md`, `referencias.md` e `entregaveis/`.
3. Acrescente a pasta em `ESPERADO`, dentro de `scripts/validar.py`.
4. Se tiver deck, crie o script em `slides/build/` e registre o par no `MAPA_DECK` do validador.
5. Atualize `_sidebar.md`, `downloads.md`, `README.md` e `materiais/README.md`.
6. Registre a decisão em [decisoes.md](decisoes.md).

### Alterar o site

O site não tem build: o docsify lê os `.md`. Para ver local:

```bash
python3 -m http.server 8080
```

Configuração em `index.html`, menu em `_sidebar.md`, cabeçalhos em `_headers`. Publicação em [publicacao.md](publicacao.md).

### Alterar um projeto de exemplo ou template

Os projetos em `materiais/dia-1/` e os dois templates têm validação própria:

```bash
cd materiais/dia-1/02-taskweather-organizado && npm install && npm run validate
```

O projeto desorganizado é desorganizado de propósito — não conserte.

## Antes de dizer que terminou

Percorra a [definição de concluído](definicao-de-concluido.md).
