# Demonstração — três níveis de prompt

**Bloco opcional C** · 20 minutos

Mesma demanda, três formulações. Compare **planos, arquivos alterados e qualidade da validação**.

Rode no exemplo organizado do Dia 1 (`materiais/dia-1/02-taskweather-organizado`), em uma branch descartável. Confirme `npm run validate` verde antes de começar.

> Rode os três em **conversas separadas**. Se usar a mesma, o agente carrega o contexto do pedido anterior e a comparação perde o sentido.

---

## Nível 1 — pedido vago

```text
Melhora a parte de tarefas.
```

**O que observar e anotar no flipchart:**

| Observação                        | Anote |
| --------------------------------- | ----- |
| Ele perguntou algo antes de agir?  |       |
| Quantos arquivos alterou?          |       |
| Instalou alguma dependência?       |       |
| O que ele decidiu que você não pediu? |    |
| Rodou alguma validação?            |       |

Resultado típico: ele escolhe sozinho o que "melhorar" — pode ser estilo, pode ser ordenação, pode ser refatorar tudo. **O trabalho pode até ser bom. Só não é o que você queria.**

---

## Nível 2 — pedido com objetivo

```text
Adicione um filtro na lista de tarefas para ver todas, abertas ou concluídas.
```

Melhor: agora existe um objetivo. Mas ainda falta muito.

**O que observar:**

| Observação                              | Anote |
| --------------------------------------- | ----- |
| Ele mexeu em arquivos fora de `todos`?   |       |
| Adicionou testes por conta própria?      |       |
| Adicionou algo extra (ordenação, busca)? |       |
| Rodou as validações sem você pedir?      |       |
| Como ele tratou a lista vazia filtrada?  |       |

Resultado típico: a funcionalidade aparece e funciona. Mas costuma vir sem teste, e frequentemente com um "brinde" que ninguém pediu.

---

## Nível 3 — pedido completo

```text
Contexto:
Aplicação React + TypeScript organizada por features.
Leia AGENTS.md e docs/architecture.md.

Objetivo:
Permitir filtrar a lista de tarefas entre todas, abertas e concluídas.

Escopo:
Apenas src/features/todos.

Fora do escopo:
Não altere auth nem weather.
Não altere a forma de armazenamento.
Não adicione ordenação, busca por texto ou categorias.

Restrições:
Não instale dependências.

Critérios de aceite:
- três opções visíveis: todas, abertas e concluídas;
- "abertas" mostra somente as não concluídas;
- "concluídas" mostra somente as concluídas;
- "todas" volta à lista completa;
- a contagem de pendentes continua correta;
- quando o filtro não encontra nada, a tela explica o motivo;
- os 47 testes existentes continuam passando.

Processo:
Apresente o plano antes de alterar arquivos.

Validação:
Execute npm run validate e mostre a saída.
```

**O que observar:**

| Observação                          | Anote |
| ----------------------------------- | ----- |
| Ele apresentou o plano antes?        |       |
| Ficou dentro de `features/todos`?    |       |
| Criou teste para cada critério?      |       |
| Tratou a lista vazia filtrada?       |       |
| Mostrou a saída da validação?        |       |

---

## O quadro comparativo

Preencha ao vivo, com a turma:

|                              | Nível 1 | Nível 2 | Nível 3 |
| ---------------------------- | ------- | ------- | ------- |
| Apresentou plano?            |         |         |         |
| Arquivos alterados           |         |         |         |
| Saiu do escopo?              |         |         |         |
| Dependência nova             |         |         |         |
| Testes adicionados           |         |         |         |
| Validação executada          |         |         |         |
| Você usaria o resultado?      |         |         |         |
| Tempo até um resultado útil   |         |         |         |

---

## A conclusão a puxar

Duas perguntas para fechar:

**1. "Qual nível deu mais trabalho para escrever?"**

O nível 3, claramente. Umas 20 linhas.

**2. "Qual deu mais trabalho para *revisar*?"**

O nível 1 — e é aí que está o ponto. O tempo que você economiza escrevendo um pedido vago você paga com juros na revisão, e às vezes paga duas vezes, porque refaz.

> O prompt do nível 3 não é mais difícil. É mais **longo**. E ele é reutilizável: mude o objetivo e os critérios e você tem o próximo.

---

## Depois

```bash
git checkout materiais/dia-1     # descarta as três tentativas
npm run validate                  # confirma que voltou ao estado original
```
