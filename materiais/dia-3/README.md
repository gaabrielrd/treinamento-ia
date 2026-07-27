# Materiais do Dia 3 — guia do instrutor

**Tema:** prática — criação da aplicação TaskWeather com agentes de código.

O dia é quase todo execução dos grupos. Seu trabalho é **circular, verificar checkpoints e desbloquear rápido**. Este guia existe para você não precisar pensar em logística durante a sessão.

## O que tem nesta pasta

### `preparacao/` — antes da sessão

| Arquivo                                                                            | O que é                                                        |
| ---------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| [01-checklist-preparacao.md](preparacao/01-checklist-preparacao.md)                 | o que preparar antes da prática, e o que já está pronto          |
| [02-repositorio-e-checkpoints.md](preparacao/02-repositorio-e-checkpoints.md)        | passo a passo do repositório-modelo, das 4 branches e do `.zip` |
| [03-erros-comuns-e-contingencias.md](preparacao/03-erros-comuns-e-contingencias.md) | tabelas de erro por categoria e o que fazer em cada caso        |

### `prompts/` — a folha de cópia

| Arquivo                                                          | O que é                                                       |
| ---------------------------------------------------------------- | ------------------------------------------------------------- |
| [prompts-para-copiar.md](prompts/prompts-para-copiar.md)          | **todos** os prompts das 6 etapas, em ordem, mais 5 prompts de apoio para quando algo sai do trilho |

Mantenha este arquivo aberto durante toda a sessão.

### `entregaveis/` — para os grupos e para você

| Arquivo                                                                  | Para quem     |
| ------------------------------------------------------------------------ | ------------- |
| [roteiro-do-participante.md](entregaveis/roteiro-do-participante.md)      | os grupos     |
| [checkpoints-e-criterios.md](entregaveis/checkpoints-e-criterios.md)      | **você**      |
| [modelo-pull-request.md](entregaveis/modelo-pull-request.md)              | os grupos     |

### `referencias.md`

Documentação do stack por etapa da prática: Vite, React, TypeScript, Open-Meteo, Fetch, Web Storage, Vitest e Testing Library. Deixe à mão para dúvidas técnicas pontuais. Ver [referencias.md](referencias.md).

### `atividades/`

| Arquivo                                                | O que é                                    |
| ------------------------------------------------------ | ------------------------------------------ |
| [blocos-opcionais.md](atividades/blocos-opcionais.md)   | os 4 blocos de extensão para 2h30 ou 3h    |

---

## Agenda

| Etapa | Atividade                          | Duração | Checkpoint |
| ----- | ---------------------------------- | ------: | ---------- |
| 1     | Abertura, resultado e regras        | 10 min  | —          |
| 2     | Criar projeto e executar template   | 10 min  | 0          |
| 3     | Planejar a implementação            | 10 min  | 1          |
| 4     | Implementar identificação por e-mail | 20 min  | 2          |
| 5     | Implementar lista de tarefas        | 30 min  | 3          |
| 6     | Integrar widget meteorológico       | 20 min  | 4          |
| 7     | Validar, revisar e documentar       | 15 min  | 5          |
| 8     | Demonstração e retrospectiva        | 5 min   | —          |

---

## Organização da sala

- **Duplas**, no máximo trios.
- Uma pessoa conduz o agente; a outra lê os critérios e acompanha o escopo.
- **Trocar os papéis depois do login.**
- Todos param nos checkpoints comuns.

Quem terminar antes: revisa o diff, melhora critérios, adiciona testes, ajuda outro grupo — **sem assumir o teclado.**

## A regra dos cinco minutos

Grupo parado há mais de cinco minutos no mesmo erro:

1. conferir erro de ambiente
2. comparar com o checkpoint
3. aplicar a correção mínima
4. se necessário, avançar com a branch de referência

> O objetivo é praticar o processo, não resolver problemas de ambiente durante toda a sessão.

---

## O que **não** deixar passar

Estes três merecem parar a turma inteira por dois minutos:

1. **O agente implementou as três features de uma vez.** É a lição do Dia 1 acontecendo ao vivo. Reverta com o grupo e comente em voz alta — vale mais que dez slides.
2. **Alguém tentou usar uma credencial real.** Corte na hora. A API escolhida não precisa de chave; a credencial da aplicação é fake e pública.
3. **Um grupo aceitou "concluído" sem rodar nada.** Pergunte: *"como você sabe?"*

---

## Retrospectiva final (5 min)

Selecione um ou dois grupos para mostrar rapidamente: a aplicação, a estrutura das features, um commit e o resultado dos testes.

Depois conduza:

- houve tentativa de expandir escopo?
- o plano foi útil?
- qual instrução precisou ser reforçada?
- qual skill trouxe mais valor?
- **qual melhoria deve entrar no template?**

A última pergunta é a mais valiosa do treinamento inteiro. Anote as respostas — elas são a lista de melhorias do `AGENTS.md` da área, escrita por quem acabou de usar.

> O principal artefato não é a aplicação. É a capacidade de repetir este processo em outros projetos.

---

## Observações

- **Entrada da aplicação:** a pessoa informa **apenas o e-mail**, sem senha, e o e-mail separa os dados de cada usuário no `localStorage`. Isto identifica, mas **não autentica** — diga isso na abertura. A solução de referência do Dia 1 segue a mesma regra.
- **API de clima:** Open-Meteo, verificada, sem chave de acesso. Detalhe útil: cidade inexistente devolve resposta **sem** o campo `results`, não uma lista vazia. Quem tratou só "lista vazia" quebra nesse caso — bom achado para a revisão.
- **Solução de referência:** [`dia-1/02-taskweather-organizado`](../dia-1/02-taskweather-organizado) já é a aplicação completa, com 47 testes passando. Serve de referência sem você precisar construí-la de novo.
- **Branches de checkpoint:** crie-as na sua conta antes da sessão — são o que desbloqueia um grupo em segundos. Passo a passo em [preparacao/02](preparacao/02-repositorio-e-checkpoints.md). Se o tempo for curto, priorize validar o template em máquina limpa e gerar o `.zip`.
