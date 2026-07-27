# Demonstração — análise, plano, implementação e validação

**Slide 2** · 12 a 15 minutos · a demonstração central do dia

O objetivo é mostrar o ciclo completo do Slide 2 em uma alteração pequena o suficiente para caber na aula: **ler contexto → explorar → planejar → alterar → executar → revisar**.

## A alteração escolhida

**Adicionar filtro de tarefas** (todas / abertas / concluídas) no exemplo organizado do Dia 1.

Por que esta:

- é pequena — uma feature já existente, nenhum arquivo novo obrigatório;
- é real — está na lista de opcionais do Dia 3;
- tem critérios óbvios de verificar na tela;
- **não** está no escopo atual, então serve para mostrar o agente respeitando um limite;
- o projeto tem 47 testes passando, então uma quebra aparece na hora.

## Onde rodar

```bash
cd materiais/dia-1/02-taskweather-organizado
npm run validate   # confirme que está verde ANTES de começar
```

> Trabalhe em uma branch ou tenha `git checkout materiais/dia-1` à mão para desfazer depois da aula.

---

## Etapa 1 — Planejamento (sem alterar nada)

```text
Use a skill plan-feature para planejar um filtro de tarefas.

Contexto:
Aplicação React + TypeScript organizada por features.
Leia AGENTS.md, docs/architecture.md e docs/prd.md antes de começar.

Objetivo:
Permitir filtrar a lista de tarefas entre todas, abertas e concluídas.

Escopo:
Apenas a feature de tarefas (src/features/todos).

Fora do escopo:
Não altere auth nem weather.
Não mude a forma como as tarefas são guardadas.
Não adicione ordenação, busca por texto ou categorias.

Restrições:
Não instale dependências.
Não altere arquivos durante o planejamento.

Saída:
- arquivos que serão afetados;
- suposições que você está fazendo;
- etapas em ordem;
- riscos;
- critérios de aceite propostos.
```

### O que mostrar na resposta

Aponte na tela os quatro elementos do Slide 2:

- [ ] **arquivos identificados** — deve citar `TodoList.tsx` e o `model/todo.ts`, não o projeto inteiro
- [ ] **suposições** — por exemplo, "o filtro não precisa ser lembrado após recarregar"
- [ ] **etapas** — em ordem, uma coisa por vez
- [ ] **riscos** — por exemplo, o estado vazio precisar de mensagem diferente quando o filtro esconde tudo

E confirme o principal: **nenhum arquivo foi alterado.** Rode `git status` na frente da turma. Essa é a prova de que "não altere arquivos" foi obedecido.

Aproveite para perguntar: **"alguma suposição dele está errada?"** É aqui que o planejamento paga o próprio custo — corrigir uma suposição agora custa uma frase; depois da implementação, custa refazer.

---

## Etapa 2 — Implementação

```text
O plano está aprovado. Implemente apenas a etapa 1 do plano.

Critérios de aceite:
- três opções visíveis: todas, abertas e concluídas;
- "abertas" mostra somente tarefas não concluídas;
- "concluídas" mostra somente tarefas concluídas;
- "todas" volta à lista completa;
- a contagem de pendentes continua correta;
- quando o filtro não encontra nada, a tela explica o motivo;
- os 47 testes existentes continuam passando.

Restrições:
Não instale dependências.
Não altere src/features/auth nem src/features/weather.
Não altere a forma de armazenamento.

Processo:
1. informe os arquivos que vai alterar;
2. implemente;
3. adicione testes para os novos critérios;
4. execute npm run validate;
5. resuma o que mudou e o que ficou de fora.
```

### O que verificar junto com a turma

- [ ] Ele avisou quais arquivos ia mexer **antes** de mexer?
- [ ] Mexeu só em `features/todos`?
- [ ] Instalou alguma dependência? (não deveria)
- [ ] Adicionou testes, ou só mudou a tela?
- [ ] Rodou `npm run validate` e **mostrou a saída**?

---

## Etapa 3 — Validação e revisão

```bash
npm run validate
```

Depois, no navegador: criar duas tarefas, concluir uma, testar os três filtros, recarregar a página.

E a revisão pelo agente:

```text
Use a skill review-changes para revisar esta alteração.
Verifique escopo, organização, testes, acessibilidade e código não utilizado.
Não altere arquivos. Liste os problemas por prioridade.
```

Mostre `git diff --stat`: poucos arquivos, todos na pasta esperada. **Esse é o resultado visível de ter dado um escopo.**

---

## Prompt reserva — se a demonstração ao vivo falhar

Se a rede cair, o agente travar ou a resposta sair muito longa, **não insista mais de dois minutos.** Troque por este pedido menor, que quase sempre conclui rápido:

```text
Leia src/features/todos/components/TodoList.tsx e src/features/todos/model/todo.ts.
Não altere nada.
Explique em cinco linhas o que precisaria mudar para adicionar
um filtro entre todas, abertas e concluídas — e diga qual
arquivo NÃO precisaria ser tocado.
```

Isso ainda demonstra o essencial do dia — o agente lê o contexto antes de agir e respeita um limite — sem depender de uma implementação completa.

### Plano de referência (se nem isso funcionar)

Projete este plano como se fosse a saída do agente. É o que uma boa resposta deveria conter:

> **Arquivos afetados**
> - `src/features/todos/model/todo.ts` — adicionar o tipo do filtro e uma função que filtra a lista
> - `src/features/todos/components/TodoList.tsx` — os três botões e o estado do filtro selecionado
> - `src/features/todos/tests/todo.test.ts` — testes da função de filtro
> - `src/features/todos/tests/TodoList.test.tsx` — testes dos três botões na tela
>
> **Não afetados:** `services/todoStorage.ts` (o filtro é só de exibição, não muda o que é guardado), `features/auth`, `features/weather`, `shared`.
>
> **Suposições**
> - o filtro escolhido não precisa sobreviver ao recarregamento da página;
> - "abertas" é o mesmo que "não concluídas" — não existe terceiro estado.
>
> **Etapas**
> 1. função de filtro no `model`, com testes;
> 2. botões e estado no componente, com testes;
> 3. mensagem própria para quando o filtro não encontra nada.
>
> **Riscos**
> - a mensagem de lista vazia atual ("Nenhuma tarefa ainda. Crie a primeira!") fica errada quando existem tarefas mas o filtro esconde todas — precisa de texto diferente;
> - a contagem "X de Y pendentes" deve continuar contando a lista inteira, não a filtrada.
>
> **Critérios de aceite:** os seis listados na Etapa 2.

O risco da mensagem de lista vazia é um bom detalhe para comentar: **é exatamente o tipo de coisa que um plano revela antes de custar caro.**

---

## Depois da aula

```bash
cd materiais/dia-1/02-taskweather-organizado
npm run validate     # confirme que voltou ao estado original
```

Se a implementação ficou, desfaça:

```bash
git checkout materiais/dia-1
```
