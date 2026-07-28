# Baixar os materiais

Tudo que é apresentado no treinamento está aqui. Os slides abrem em PDF; os entregáveis podem ser lidos no site ou impressos direto do navegador.

## Slides

<div class="downloads">
  <a href="/apresentacao-dia-1.pdf" download>
    <strong>Dia 1 — PDF</strong>
    <span>Processo, organização e qualidade local · 17 slides</span>
  </a>
  <a href="/apresentacao-dia-2.pdf" download>
    <strong>Dia 2 — PDF</strong>
    <span>Prompts, contexto persistente, skills e MCP · 16 slides</span>
  </a>
  <a href="/apresentacao-dia-3.pdf" download>
    <strong>Dia 3 — PDF</strong>
    <span>Prática: construir o TaskWeather · 13 slides</span>
  </a>
</div>

As versões editáveis em Keynote estão no repositório: `apresentacao-dia-1.key`, `-2` e `-3`.

### Apresentação da proposta

<div class="downloads">
  <a href="/apresentacao-gerencia.pdf" download>
    <strong>Motivação e objetivos — PDF</strong>
    <span>Para apresentar a proposta do treinamento · 9 slides</span>
  </a>
</div>

## Entregáveis do Dia 1

O que você leva para aplicar no próximo projeto.

| Material | Para que serve |
| -------- | -------------- |
| [Checklist de definição do problema](/materiais/dia-1/entregaveis/01-checklist-definicao-problema.md) | as quatro perguntas antes de pedir qualquer código |
| [Modelo de escopo e não escopo](/materiais/dia-1/entregaveis/02-modelo-escopo-e-nao-escopo.md) | decidir o que entra agora e o que fica de fora |
| [Modelo de critérios de aceite](/materiais/dia-1/entregaveis/03-modelo-criterios-de-aceite.md) | transformar funcionalidade em algo verificável |
| [Fluxo GitHub resumido](/materiais/dia-1/entregaveis/04-fluxo-github-resumido.md) | branch, commit, pull request e merge sem jargão |
| [Checklist de definição de concluído](/materiais/dia-1/entregaveis/05-checklist-definicao-de-concluido.md) | quando uma tarefa está realmente pronta |
| [Lista de comandos locais](/materiais/dia-1/entregaveis/06-comandos-locais.md) | o que rodar, e como ler uma falha |
| [Glossário](/materiais/dia-1/entregaveis/07-glossario.md) | os termos do dia a dia, em linguagem direta |

Folha da prática do dia: [PRD da dupla](/materiais/dia-1/atividades/pratica-prd-da-dupla.md).

## Entregáveis do Dia 2

| Material | Para que serve |
| -------- | -------------- |
| [Template de prompt](/materiais/dia-2/entregaveis/01-template-de-prompt.md) | os oito blocos, com versão curta para tarefas pequenas |
| [Checklist de revisão de prompt](/materiais/dia-2/entregaveis/02-checklist-revisao-de-prompt.md) | conferir antes de enviar e depois da resposta |
| [`AGENTS.md` e `CLAUDE.md`](/materiais/dia-2/entregaveis/03-agents-e-claude-md.md) | o que vai no prompt e o que vai no repositório |
| [Catálogo de skills](/materiais/dia-2/entregaveis/04-catalogo-de-skills.md) | as oito skills do template e quando usar cada uma |
| [Checklist de segurança em MCP](/materiais/dia-2/entregaveis/05-checklist-seguranca-mcp.md) | o que autorizar, e a escada de risco |
| [Matriz de modelo e raciocínio](/materiais/dia-2/entregaveis/06-matriz-modelo-e-raciocinio.md) | escolher capacidade conforme ambiguidade e impacto |

Folhas das práticas: [prompt executado](/materiais/dia-2/atividades/pratica-prompt-executado.md) · [`AGENTS.md` do projeto](/materiais/dia-2/atividades/pratica-agents-md.md).

## Entregáveis do Dia 3

| Material | Para que serve |
| -------- | -------------- |
| [Roteiro do participante](/materiais/dia-3/entregaveis/roteiro-do-participante.md) | o passo a passo da prática, etapa por etapa |
| [Prompts para copiar](/materiais/dia-3/prompts/prompts-para-copiar.md) | todos os prompts da prática, em ordem |
| [Modelo de pull request](/materiais/dia-3/entregaveis/modelo-pull-request.md) | como descrever a entrega no fim |
| [Checkpoints e critérios](/materiais/dia-3/entregaveis/checkpoints-e-criterios.md) | o que precisa estar pronto em cada etapa |

## Referências por dia

As fontes oficiais para aprofundar, organizadas por bloco do dia.

- [Dia 1](/materiais/dia-1/referencias.md) — GitHub, Git, estrutura de projeto e validação local
- [Dia 2](/materiais/dia-2/referencias.md) — prompting, `AGENTS.md`, skills, MCP e escolha de modelo
- [Dia 3](/materiais/dia-3/referencias.md) — Vite, React, TypeScript, Open-Meteo, testes

## Projetos de exemplo

Os dois projetos do Dia 1 — o mesmo produto, um desorganizado e um organizado — são código. Para rodá-los, baixe o repositório:

```bash
git clone https://github.com/gaabrielrd/treinamento-ia.git
cd treinamento-ia/materiais/dia-1/02-taskweather-organizado
npm install
npm run dev
```

Ou baixe tudo em um arquivo: **[repositório completo em .zip](https://github.com/gaabrielrd/treinamento-ia/archive/refs/heads/master.zip)**.

A documentação do projeto organizado dá para ler aqui mesmo: [README](/materiais/dia-1/02-taskweather-organizado/README.md) · [definição do produto](/materiais/dia-1/02-taskweather-organizado/docs/prd.md) · [arquitetura](/materiais/dia-1/02-taskweather-organizado/docs/architecture.md).

## Templates para começar um projeto

Os pontos de partida usados no Dia 3, com estrutura, padrões de qualidade e instruções para agentes já prontos:

- `template-ia-web` — React + TypeScript + Vite
- `template-ia-python` — projetos em Python

Os dois estão no [repositório](https://github.com/gaabrielrd/treinamento-ia).

---

> **Como imprimir um entregável:** abra a página e use a impressão do navegador (`Ctrl`/`Cmd` + `P`). O menu lateral não sai na impressão.
