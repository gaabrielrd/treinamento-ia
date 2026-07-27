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
│   ├── atividades/                     a atividade final (Slide 14)
│   └── github-exemplos/                issue e pull request de exemplo
├── dia-2/
│   ├── entregaveis/                    template de prompt, catálogos e checklists
│   ├── demonstracoes/                  4 demonstrações, com prompt reserva
│   └── atividades/                     reescrever prompt e criar uma skill
└── dia-3/
    ├── preparacao/                     checklist, checkpoints e erros comuns
    ├── prompts/                        todos os prompts da prática, para copiar
    ├── entregaveis/                    roteiro do participante, checkpoints, modelo de PR
    └── atividades/                     os 4 blocos opcionais
```

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

## Onde cada entregável do roteiro foi atendido

**Dia 1 (§7)** — todos em [`dia-1/entregaveis/`](dia-1/entregaveis/): checklist de definição do problema · modelo de escopo e não escopo · modelo de critérios de aceite · fluxo GitHub resumido · checklist de definição de concluído · lista de comandos locais · glossário.

**Dia 2 (§7)** — todos em [`dia-2/entregaveis/`](dia-2/entregaveis/): template de prompt · checklist de revisão de prompt · resumo de `AGENTS.md` e `CLAUDE.md` · catálogo de skills · checklist de segurança MCP · matriz de modelo e raciocínio. Os prompts das demonstrações estão em [`dia-2/demonstracoes/`](dia-2/demonstracoes/).

**Dia 3 (§4)** — a preparação está em [`dia-3/preparacao/`](dia-3/preparacao/) e os prompts em [`dia-3/prompts/`](dia-3/prompts/).

## Slides

Os três decks (`apresentacao-dia-*.key` e `.pdf`, na raiz do repositório) **já estão atualizados** com as decisões atuais — 13 slides de 46 mudaram, principalmente a entrada por e-mail sem senha. O registro slide a slide está em [slides-a-atualizar.md](slides-a-atualizar.md).

Os decks são gerados por script: os `build*.js` ficam em [decks-build/](decks-build/) e usam a identidade visual da skill `analytics-report-deck`. Para alterar um slide, edite o `build*.js` e reconstrua — as instruções estão no fim do documento acima.

## Pendências que dependem de você

Duas coisas não podem ser preparadas aqui:

1. **As branches de checkpoint do Dia 3** (`checkpoint/inicio`, `auth`, `todos`, `weather`) — precisam da sua conta do GitHub. Passo a passo em [dia-3/preparacao/02](dia-3/preparacao/02-repositorio-e-checkpoints.md).
2. **A demonstração de MCP do Dia 2** — `claude mcp add` exige terminal interativo. Roteiro e alternativa sem MCP em [dia-2/demonstracoes/04](dia-2/demonstracoes/04-mcp-somente-leitura.md).

## Divergências entre roteiro e template — resolvidas

**O template é a fonte de verdade.** Onde o roteiro divergia do que existe em `template-ia-web`, os materiais seguem o template:

| Onde o roteiro diverge     | O que os materiais fazem                                                                            |
| -------------------------- | --------------------------------------------------------------------------------------------------- |
| Dia 3, Bloco opcional 3 pede a skill `accessibility-review` | ela não existe no template, então **não é usada**. O bloco de acessibilidade usa um prompt estruturado e um teste manual de teclado. |
| Dia 2, Slide 10 lista 6 skills | o catálogo traz as **8** que existem no template, incluindo `plan-app` e `frontend-skill`.        |

### Entrada da aplicação: e-mail, sem senha

Decisão de produto que vale para os três dias: **a pessoa informa apenas o e-mail** e esse e-mail é usado para **separar os dados de cada usuário** no `localStorage`. Não há senha em nenhum momento.

Os dois projetos de exemplo e todos os materiais dos três dias seguem isso. As chaves de armazenamento do projeto organizado:

```
taskweather:session                    → e-mail da sessão atual
taskweather:todos:ana@empresa.com      → tarefas da Ana
taskweather:todos:joao@empresa.com     → tarefas do João
```

> ⚠️ **Isto identifica, não autentica.** Qualquer pessoa pode digitar qualquer e-mail. A separação evita confusão entre pessoas que compartilham o navegador — ela não protege segredo. O ponto está explícito no `docs/prd.md`, no `README.md` e no `CLAUDE.md` do projeto organizado, e vale ser dito em voz alta na abertura de cada dia.

### Pendência não relacionada

Não há `.gitignore` na raiz do repositório. Existe um em `materiais/dia-1/` cobrindo os projetos de exemplo, mas o resto do repositório segue sem.
