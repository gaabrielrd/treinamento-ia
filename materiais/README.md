# Materiais do treinamento

Materiais de apoio dos três dias, organizados por dia. Cada pasta tem um `README.md` que é o guia do instrutor daquele dia.

| Dia                     | Tema                                              | Guia                       |
| ----------------------- | ------------------------------------------------- | -------------------------- |
| [Dia 1](dia-1/)         | Processo, organização do projeto e qualidade local | [dia-1/README.md](dia-1/README.md) |
| [Dia 2](dia-2/)         | Prompts, contexto persistente, skills e MCP        | [dia-2/README.md](dia-2/README.md) |
| [Dia 3](dia-3/)         | Prática: criar o TaskWeather com agentes           | [dia-3/README.md](dia-3/README.md) |

## Estrutura

```
materiais/
├── dia-1/
│   ├── 01-taskweather-desorganizado/   aplicação propositalmente desorganizada
│   ├── 02-taskweather-organizado/      mesma aplicação, organizada por funcionalidades
│   ├── entregaveis/                    7 checklists e modelos para a turma
│   ├── atividades/                     folha do PRD da dupla + atividade final
│   ├── github-exemplos/                issue e pull request de exemplo
│   └── referencias.md                  fontes oficiais do dia
├── dia-2/
│   ├── entregaveis/                    template de prompt, catálogos e checklists
│   ├── demonstracoes/                  4 demonstrações, com prompt reserva
│   ├── atividades/                     2 práticas com o agente + criar uma skill
│   └── referencias.md                  fontes oficiais do dia
├── dia-3/
│   ├── preparacao/                     checklist, checkpoints e erros comuns
│   ├── prompts/                        todos os prompts da prática, para copiar
│   ├── entregaveis/                    roteiro do participante, checkpoints, modelo de PR
│   ├── atividades/                     os 4 blocos opcionais
│   └── referencias.md                  fontes oficiais do dia
└── decks-build/                        scripts que geram os slides dos três dias
```

## O fio que atravessa os três dias

Cada dupla trabalha uma demanda pequena e real da área, e cada dia produz um artefato que é a entrada do próximo:

```
Dia 1  →  docs/prd.md          problema, escopo, não escopo, critérios, tarefas
Dia 2  →  AGENTS.md + plano    regras do projeto + plano gerado e revisado
Dia 3  →  a aplicação          construída a partir do PRD e do plano
```

É isso que faz a transição entre dias ser um arquivo, não uma frase — e o que torna o resultado de cada dia conferível. O checklist de resultado observável está no fim da seção "Agenda" de cada guia.

Se a primeira turma parecer arriscada para projetos próprios, use um único projeto fictício para todas as duplas: você mantém os artefatos e a observabilidade, sem escopos imprevisíveis.

## Os dois projetos de exemplo

Os únicos artefatos de código estão no Dia 1. São o **mesmo produto** com a mesma funcionalidade — a diferença é só a organização. Nos dois, entra-se informando **apenas um e-mail**.

| Projeto                                                          | `install` / `dev` / `build` | `test`               | `lint`               |
| ---------------------------------------------------------------- | --------------------------- | -------------------- | -------------------- |
| [01-taskweather-desorganizado](dia-1/01-taskweather-desorganizado) | funciona — 330 KB           | **não existe**       | **não existe**       |
| [02-taskweather-organizado](dia-1/02-taskweather-organizado)      | funciona — 199 KB           | 47 testes passam     | passa sem apontamentos |

Instalação antes da sessão:

```bash
cd materiais/dia-1/01-taskweather-desorganizado && npm install
cd ../02-taskweather-organizado && npm install && npm run validate
```

O projeto organizado é reusado nos três dias: no Dia 1 como contraste, no Dia 2 como repositório das demonstrações, no Dia 3 como solução de referência.

## O que a turma leva em cada dia

**Dia 1** — [`dia-1/entregaveis/`](dia-1/entregaveis/): checklist de definição do problema · modelo de escopo e não escopo · modelo de critérios de aceite · fluxo GitHub resumido · checklist de definição de concluído · lista de comandos locais · glossário. A atividade final está em [`dia-1/atividades/`](dia-1/atividades/) e os exemplos de issue e pull request em [`dia-1/github-exemplos/`](dia-1/github-exemplos/).

**Dia 2** — [`dia-2/entregaveis/`](dia-2/entregaveis/): template de prompt · checklist de revisão de prompt · resumo de `AGENTS.md` e `CLAUDE.md` · catálogo de skills · checklist de segurança MCP · matriz de modelo e raciocínio. As demonstrações para projetar estão em [`dia-2/demonstracoes/`](dia-2/demonstracoes/) e as duas atividades em [`dia-2/atividades/`](dia-2/atividades/).

**Dia 3** — [`dia-3/entregaveis/`](dia-3/entregaveis/): roteiro do participante · checkpoints e critérios · modelo de pull request. A preparação da sessão está em [`dia-3/preparacao/`](dia-3/preparacao/), os prompts em [`dia-3/prompts/`](dia-3/prompts/) e os blocos de extensão em [`dia-3/atividades/`](dia-3/atividades/).

## Referências

Cada dia tem um `referencias.md` com as fontes oficiais organizadas por bloco, as leituras curtas para enviar à turma antes da sessão e — no Dia 2 — os estudos de produtividade que sustentam a mensagem do treinamento.

- [dia-1/referencias.md](dia-1/referencias.md) — GitHub, Git, estrutura e validação local
- [dia-2/referencias.md](dia-2/referencias.md) — prompting, `AGENTS.md`, skills, MCP e escolha de modelo
- [dia-3/referencias.md](dia-3/referencias.md) — o stack da prática, etapa por etapa

## Entrada da aplicação: e-mail, sem senha

Decisão de produto que vale para os três dias: **a pessoa informa apenas o e-mail**, e esse e-mail é usado para **separar os dados de cada usuário** no `localStorage`. Não há senha em nenhum momento.

As chaves de armazenamento do projeto organizado:

```
taskweather:session                    → e-mail da sessão atual
taskweather:todos:ana@empresa.com      → tarefas da Ana
taskweather:todos:joao@empresa.com     → tarefas do João
```

> ⚠️ **Isto identifica, não autentica.** Qualquer pessoa pode digitar qualquer e-mail. A separação evita confusão entre pessoas que compartilham o navegador — ela não protege segredo. O ponto está explícito no `docs/prd.md`, no `README.md` e no `CLAUDE.md` do projeto organizado, e vale ser dito em voz alta na abertura de cada dia.

## Slides

Os três decks estão na raiz do repositório, em `.key` e `.pdf`: `apresentacao-dia-1`, `apresentacao-dia-2` e `apresentacao-dia-3`.

Eles são gerados por script, com a identidade visual da skill `analytics-report-deck`. Para alterar um slide, edite o `build*.js` correspondente em [`decks-build/`](decks-build/) e reconstrua — o passo a passo está no [README de lá](decks-build/README.md).
