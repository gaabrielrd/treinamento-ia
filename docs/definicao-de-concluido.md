# Definição de concluído

O Dia 1 entrega um [checklist de definição de concluído](../materiais/dia-1/entregaveis/05-checklist-definicao-de-concluido.md) para os projetos da turma. Esta é a versão deste repositório — o mesmo princípio, aplicado a material de treinamento.

Uma alteração está concluída quando **todos** os itens abaixo valem.

## Sempre

- [ ] `python3 scripts/validar.py` passa
- [ ] a alteração faz uma coisa só, e dá para descrevê-la em uma frase
- [ ] nada de dado real: sem credenciais, nomes de clientes ou informação interna
- [ ] os termos padronizados foram respeitados — "líderes de área", "Momento 1 · Gestão", "Momento 2 · Execução", "combinado da área"

## Se mexeu em material de sala

- [ ] o roteiro do encontro continua descrevendo o que o material diz
- [ ] material novo está listado em `downloads.md` e em `_sidebar.md`
- [ ] o guia do encontro (`README.md` da pasta) menciona o arquivo, se ele é usado em sala
- [ ] o tempo da agenda ainda fecha, se a alteração acrescentou ou tirou bloco

## Se mexeu em slide

- [ ] a alteração está no `build*.js`, não no `.key`
- [ ] o deck foi regenerado com `bash slides/build/gerar.sh <nome>`
- [ ] as imagens de QA foram olhadas — sem texto cortado, sobreposto ou estourando card
- [ ] o `.key` **e** o `.pdf` foram publicados em `slides/`
- [ ] o roteiro continua batendo com o número, o título e o conteúdo do slide

## Se mexeu na estrutura do repositório

- [ ] [`docs/estrutura.md`](estrutura.md) reflete a árvore nova
- [ ] a decisão está registrada em [`docs/decisoes.md`](decisoes.md)
- [ ] `scripts/validar.py` cobre a estrutura nova (pastas esperadas, mapa de decks)
- [ ] nenhum link do site aponta para o caminho antigo — o validador confere

## Se mexeu em código de exemplo ou template

- [ ] `npm run validate` passa na pasta alterada
- [ ] o projeto desorganizado do Dia 1 continua desorganizado: ele é a demonstração

## O que não conta como concluído

"Funciona na minha máquina", "depois eu ajusto o slide", "o link eu arrumo no próximo commit". São exatamente os casos que o treinamento usa como exemplo do que não fazer.
