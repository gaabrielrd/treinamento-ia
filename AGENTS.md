# Regras do projeto

Instruções para qualquer agente de código que trabalhe neste repositório. Vale também para pessoas: é o contrato do projeto.

Este repositório ensina um processo. Ele precisa seguir o próprio processo — um material que prega escopo escrito, estrutura previsível e validação antes da entrega, e que não faz nada disso, não sustenta o argumento em sala.

## O que é este repositório

Material completo de uma formação em dois momentos sobre desenvolvimento de aplicações com agentes de código:

- **Momento 1 · Gestão** — 1 hora, com os líderes de área. Termina no *combinado da área*.
- **Momento 2 · Execução** — 3 encontros de 2 horas, com quem vai implementar.

O site público é gerado por docsify a partir dos próprios `.md`, sem etapa de build. Ver [docs/estrutura.md](docs/estrutura.md).

## Antes de começar

1. Leia [docs/estrutura.md](docs/estrutura.md) para saber onde mexer.
2. Leia [docs/fluxo-de-trabalho.md](docs/fluxo-de-trabalho.md) para o passo a passo do tipo de alteração que vai fazer.
3. Ao terminar, percorra [docs/definicao-de-concluido.md](docs/definicao-de-concluido.md).

## Regras

**Valide antes de concluir.** Rode `python3 scripts/validar.py`. Nenhuma alteração é considerada pronta com o validador falhando.

**Slides não se editam à mão.** Todo deck é gerado por um script em [`slides/build/`](slides/build/README.md). Editar o `.key` no Keynote funciona, mas a alteração se perde na próxima regeneração — se editar, replique no script.

**Não recalcule a identidade visual.** Cores, tipografia, grid e animações vêm da skill `analytics-report-deck`, carregada por `slides/build/common.js`. Use as primitivas (`infoCard`, `stepRow`, `checklist`, `codeCard`, `K.table`); não invente coordenadas nem cores.

**Um assunto por pasta.** Material de um encontro fica na pasta daquele encontro — guia, roteiro, entregáveis e referências juntos. Documentação sobre *o repositório* fica em `docs/`.

**Links relativos ao arquivo.** O docsify usa `relativePath: true`. Um link de `materiais/gestao/roteiro.md` para o Dia 1 é `../dia-1/...`, não `materiais/dia-1/...`. O validador pega isso.

**Português do Brasil, sem jargão desnecessário.** O público não é de desenvolvedores. Prefira "registro de entrega" a "PR" na primeira menção, e explique a sigla uma vez.

**Termos padronizados.** "líderes de área" (não "gerentes"); "Momento 1 · Gestão" e "Momento 2 · Execução"; "combinado da área"; "critérios de aceite"; "registro de entrega".

**Nada de dado real.** Os exemplos usam `ana@empresa.com` e `joao@empresa.com`. Não coloque credenciais, nomes de clientes ou dados internos em material que vai para o site público.

**Não versione intermediários.** `.pptx`, `.pptx` animado e pastas `qa*/` são descartáveis — o `.gitignore` de `slides/build/` cuida disso.

## Comandos

```bash
python3 scripts/validar.py                 # validação do repositório
python3 -m http.server 8080                # site local em http://localhost:8080
bash slides/build/gerar.sh dia-1           # regenera um deck (.key + .pdf) e publica em slides/
```

Os nomes aceitos por `gerar.sh` são `dia-1`, `dia-2`, `dia-3`, `gestao`, `lideres` e `lideres-areas`.

## O que não fazer

- Criar uma pasta nova na raiz sem registrar a decisão em [docs/decisoes.md](docs/decisoes.md).
- Renomear `template-ia-web/` ou `template-ia-python/`: os nomes são citados literalmente no material do Dia 2 e do Dia 3.
- Publicar um `.pdf` de deck sem regenerar o `.key` correspondente — os dois andam juntos e o validador confere.
- Alterar a skill de geração de slides a partir daqui. Ela é compartilhada com outro repositório; os ajustes locais de contraste ficam em `slides/build/common.js`.
