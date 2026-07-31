# Materiais do Momento 2 · Dia 2 — guia do instrutor

Roteiro slide a slide deste dia: [`roteiro.md`](roteiro.md). Regras do repositório: [`AGENTS.md`](../../AGENTS.md).

**Tema:** prompts, instruções persistentes, skills, MCP e escolha de modelo.

O Dia 1 definiu um processo. O Dia 2 ensina a **comunicar esse processo ao agente**. Por isso quase todo material aqui aponta para os projetos do Dia 1 — a turma já viu aquele código, e reusar reduz a carga cognitiva.

## O que tem nesta pasta

### `entregaveis/` — o que a turma leva

| Arquivo                                                                | Slide | O que é                                            |
| ---------------------------------------------------------------------- | ----- | -------------------------------------------------- |
| [01-template-de-prompt.md](entregaveis/01-template-de-prompt.md)        | 4     | os oito blocos, com versão curta para tarefas pequenas |
| [02-checklist-revisao-de-prompt.md](entregaveis/02-checklist-revisao-de-prompt.md) | 4 e 13 | conferência antes de enviar e depois da resposta |
| [03-agents-e-claude-md.md](entregaveis/03-agents-e-claude-md.md)        | 7 e 8 | o que vai no prompt e o que vai no repositório      |
| [04-catalogo-de-skills.md](entregaveis/04-catalogo-de-skills.md)        | 9 e 10 | as 8 skills que existem no template, com quando usar |
| [05-checklist-seguranca-mcp.md](entregaveis/05-checklist-seguranca-mcp.md) | 11 | checklist e a escada de risco                     |
| [06-matriz-modelo-e-raciocinio.md](entregaveis/06-matriz-modelo-e-raciocinio.md) | 12 | a matriz 2×2 e a tabela prática                 |

### `demonstracoes/` — para projetar

| Arquivo                                                                    | Slide | Duração |
| -------------------------------------------------------------------------- | ----- | ------- |
| [01-prompt-vago-vs-estruturado.md](demonstracoes/01-prompt-vago-vs-estruturado.md) | 5 | 10 min |
| [02-tres-niveis-de-prompt.md](demonstracoes/02-tres-niveis-de-prompt.md)    | Opcional C | 20 min |
| [03-alteracao-guiada.md](demonstracoes/03-alteracao-guiada.md)              | 2 | 12–15 min |
| [04-mcp-somente-leitura.md](demonstracoes/04-mcp-somente-leitura.md)        | 11 | 10 min |

### `referencias.md`

Fontes oficiais por bloco — prompting, `AGENTS.md`, skills, MCP e escolha de modelo — mais os três estudos de produtividade que sustentam a mensagem do dia. Ver [referencias.md](referencias.md).

### `atividades/` — para distribuir

| Arquivo                                                              | Slide      | Duração |
| -------------------------------------------------------------------- | ---------- | ------- |
| [pratica-prompt-executado.md](atividades/pratica-prompt-executado.md) | **Bloco 3** | 25 min |
| [pratica-agents-md.md](atividades/pratica-agents-md.md) | **Bloco 5** | 12 min |
| [slide-13-reescrever-prompt.md](atividades/slide-13-reescrever-prompt.md) | absorvido pela Prática A | — |
| [opcao-a-criar-uma-skill.md](atividades/opcao-a-criar-uma-skill.md)   | Opcional A | 20 min  |

---

## Preparação antes da sessão

- [ ] **Agente aberto em um repositório de demonstração** → use `materiais/dia-1/02-taskweather-organizado`. Rode `npm run validate` antes e confirme os 47 testes verdes.
- [ ] **Prompt ruim e versão estruturada** → [demonstracoes/01](demonstracoes/01-prompt-vago-vs-estruturado.md).
- [ ] **`AGENTS.md`, `CLAUDE.md` e uma skill abertos** → deixe três abas prontas: o `AGENTS.md` e o `CLAUDE.md` do TaskWeather organizado e `template-ia-web/skills/plan-feature/SKILL.md`.
- [ ] **Demonstração MCP segura e somente leitura** → [demonstracoes/04](demonstracoes/04-mcp-somente-leitura.md). **Configure e teste antes**; `claude mcp add` precisa de terminal interativo.
- [ ] **Alteração para mostrar análise, plano, implementação e validação** → [demonstracoes/03](demonstracoes/03-alteracao-guiada.md), o filtro de tarefas.
- [ ] **Nenhuma credencial real exibida** → a demonstração de MCP escolhida não usa credencial nenhuma, de propósito.
- [ ] **Prompt reserva caso a demonstração falhe** → está em [demonstracoes/03](demonstracoes/03-alteracao-guiada.md), com um plano de referência pronto para projetar se nem o reserva funcionar.

### Deixe aberto em abas

1. Terminal em `materiais/dia-1/02-taskweather-organizado`
2. Agente de código na mesma pasta
3. `AGENTS.md` e `CLAUDE.md` do TaskWeather, lado a lado
4. `template-ia-web/skills/plan-feature/SKILL.md`
5. Este guia

---

## Agenda

| Bloco | Tema | Duração |
| ----- | ---- | ------: |
| 1 | Ciclo do agente e por que erram | 18 min |
| 2 | Anatomia do prompt + vago × estruturado | 25 min |
| 3 | **Prática A — escrever o prompt e executar** | 25 min |
| 4 | Contexto persistente: `AGENTS.md` e `CLAUDE.md` | 20 min |
| 5 | **Prática B — escrever o `AGENTS.md`** | 12 min |
| 6 | Skills | 15 min |
| 7 | Além do prompt: MCP e escolha de modelo | 15 min |
| 8 | Encerramento | 10 min |

Duas coisas a saber sobre esta agenda:

- **MCP e escolha de modelo estão juntos, em 15 minutos, em nível de consciência.** Ninguém desta turma vai configurar um servidor MCP no mês seguinte. O que precisa levar é a pergunta *"o que essa integração pode acessar e alterar?"*, o checklist de segurança e a matriz de modelo. **Não faça demonstração de MCP ao vivo** — o custo/benefício não fecha em duas horas.
- **Os minutos liberados viraram prática.** O dia é sobre conduzir um agente; era o único em que ninguém conduzia nenhum. As folhas são [pratica-prompt-executado.md](atividades/pratica-prompt-executado.md) e [pratica-agents-md.md](atividades/pratica-agents-md.md).

## Resultado observável

Confira por dupla antes de encerrar:

- [ ] `AGENTS.md` commitado no repositório do projeto
- [ ] um plano gerado pelo agente, revisado, com arquivos afetados e critérios
- [ ] `git status` confirma que nada foi alterado durante o planejamento
- [ ] **a dupla aponta, no plano, uma suposição do agente que estava errada**

O último item é o que importa: os outros três mostram que seguiram o procedimento, esse mostra que revisaram.

## A espinha dorsal do dia

Cinco camadas de orientação, da mais volátil para a mais durável:

```
prompt        → a tarefa de agora
AGENTS.md     → as regras do projeto
CLAUDE.md     → como usar esta ferramenta aqui
skills        → procedimentos reutilizáveis
MCP           → ferramentas externas
```

A pergunta que amarra o dia inteiro, e vale repetir em cada bloco:

> **"Isto que eu estou digitando agora, eu vou digitar de novo amanhã?"**

Se sim, está no lugar errado — pertence ao repositório.

---

## Ligações com o Dia 1

Vale explicitar para a turma, porque fecha o arco:

| No Dia 1 eles fizeram à mão        | No Dia 2 isso vira                                    |
| ---------------------------------- | ----------------------------------------------------- |
| checklist de definição do problema  | o bloco **Contexto** e **Objetivo** do prompt          |
| modelo de escopo e não escopo       | os blocos **Escopo** e **Fora do escopo**              |
| modelo de critérios de aceite       | o bloco **Critérios**                                  |
| checklist de definição de concluído | o bloco **Validação** — e a skill `review-changes`     |
| lista de comandos locais            | o que o agente deve executar e mostrar                 |

E o inverso, que é o alerta do dia: **um modelo mais capaz não substitui nenhuma dessas linhas.**

> Modelo forte + contexto fraco continua sendo contexto fraco.

---

## Indicadores de compreensão

Ao final, verifique se a turma responde:

1. Que informação deve ficar no prompt e qual deve ficar no repositório?
2. Qual a diferença entre prompt e skill?
3. O que um servidor MCP acrescenta?
4. Por que começar com acesso somente leitura?
5. Quando usar maior raciocínio?
6. Qual é o risco de dizer apenas "melhore o projeto"?

Se travarem na 1, refaça a pergunta assim: *"o que você digitaria de novo amanhã?"*

---

## Observações

- **Entrada da aplicação:** no TaskWeather a pessoa informa **apenas o e-mail**, sem senha, e o e-mail separa os dados de cada usuário. Isso identifica, mas não autentica — vale dizer em voz alta.
- **Se a demonstração ao vivo falhar, não insista mais de dois minutos.** Todos os materiais desta pasta funcionam projetados, sem agente rodando. O conteúdo do dia é o raciocínio, não a execução.
- Depois de qualquer demonstração que altere o projeto do Dia 1: `git checkout materiais/dia-1` e `npm run validate` para confirmar que voltou ao estado original.
