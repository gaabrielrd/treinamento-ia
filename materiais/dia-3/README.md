# Materiais do Momento 2 · Dia 3 — guia do instrutor

Roteiro slide a slide deste dia: [`roteiro.md`](roteiro.md). Regras do repositório: [`AGENTS.md`](../../AGENTS.md).

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

| Etapa | Atividade | Duração | Checkpoint |
| ----- | --------- | ------: | ---------- |
| 1 | Abertura e regras | 8 min | — |
| 2 | Criar projeto e executar template | 10 min | 0 |
| 3 | Planejar — reusando o plano do Dia 2 | 8 min | 1 |
| 4 | Entrada por e-mail | 20 min | 2 |
| 5 | Lista de tarefas | 25 min | 3 |
| 6 | **Separação de dados por usuário** | 15 min | 4 |
| 7 | Validar, revisar e documentar | 20 min | 5 |
| 8 | **Demonstração cruzada** e retrospectiva | 14 min | — |

**O clima saiu do escopo obrigatório** e virou o Bloco opcional 5. Custava 20 minutos e uma dependência de rede, e a lição que trazia — chamada externa isolada em serviço — é a mesma do armazenamento isolado que a turma acabou de fazer. Entregue-a em três minutos projetando o `weatherApi.ts` da solução de referência.

**A separação de dados virou incremento próprio.** É o único momento em que a turma vê uma decisão de arquitetura ter consequência visível: o mesmo vazamento que abriu o Dia 1, agora prevenido por ela.

Os 20 minutos ganhos foram para validação, revisão e fechamento — onde o processo se consolida.

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

## Demonstração cruzada e retrospectiva (14 min)

**Demonstração cruzada (9 min).** Em vez de um ou dois voluntários apresentarem para a sala, cada dupla mostra a aplicação para a dupla vizinha, em 3 minutos, seguindo o fluxo manual final. Depois trocam. Todos apresentam, todos revisam, e você observa mais circulando entre pares do que assistindo a dois voluntários.

**O teste que fecha o treinamento (5 min).** Passe em cada dupla e pergunte, sem deixar abrir o código:

1. Onde fica a regra de e-mail válido?
2. Onde fica a chave que separa os dados de cada usuário?
3. Se trocássemos o `localStorage` por um banco, quantos arquivos mudariam?

Quem responde as três, aprendeu a estrutura. Quem não responde tem uma aplicação que o agente construiu — melhor descobrir agora que na próxima demanda.

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
