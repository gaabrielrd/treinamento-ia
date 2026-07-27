# Atividade — transformar uma ideia em um plano

**Formato:** duplas ou trios · **Tempo:** 7 minutos para preencher, 5 para discutir

---

## A demanda que vocês receberam

> "Crie uma página para registrar tarefas e mostrar o clima."

É tudo o que foi dito. Como em quase todo pedido real.

## Preencham os seis campos

**1. Problema** — qual dificuldade isso resolve, hoje?

```


```

**2. Público** — quem exatamente vai usar?

```


```

**3. Escopo** — o que entra nesta primeira versão? (máximo 6 itens)

```
-
-
-
-
-
-
```

**4. Não escopo** — o que fica explicitamente de fora, e por quê?

```
-
-
-
-
-
```

**5. Critérios de aceite** — no mínimo **dois por funcionalidade**, observáveis.

| Funcionalidade | Critérios |
| -------------- | --------- |
|                |           |
|                |           |
|                |           |

**6. Tarefas** — em que ordem isso seria construído?

```
1.
2.
3.
4.
5.
6.
7.
```

---

## Antes de apresentar, confiram

- [ ] O não escopo não está vazio.
- [ ] Nenhum critério usa "fácil", "rápido", "bonito" ou "seguro".
- [ ] Existe pelo menos um critério para quando algo dá errado.
- [ ] Cada tarefa tem um objetivo único.
- [ ] Vocês não escreveram nada sobre qual tecnologia usar. **Isso não era necessário.**

---

## Versão de referência

Não confira antes de tentar. O objetivo não é acertar igual — é perceber o que ficou implícito.

**Problema:** organizar tarefas pessoais e consultar o clima em uma única página, sem alternar entre aplicativos.

**Público:** usuário individual, em demonstração interna. Uma pessoa por navegador.

**Escopo:** identificação por e-mail (sem senha); dados separados por usuário; criar tarefas; concluir tarefas; persistência local; clima atual por cidade.

**Não escopo:** cadastro real (exigiria servidor e dados pessoais); colaboração (exigiria backend e permissões); banco de dados (o navegador basta); notificações (não é necessário para o resultado); previsão estendida (o clima atual já resolve).

**Critérios:**

| Funcionalidade | Critérios                                                                                            |
| -------------- | ---------------------------------------------------------------------------------------------------- |
| identificação por e-mail | e-mail válido entra; e-mail inválido mostra mensagem; recarregar mantém a sessão; "Sair" volta à tela de entrada; as tarefas de um e-mail não aparecem para outro |
| tarefas        | título vazio é rejeitado com aviso; tarefa aparece imediatamente; permanece após recarregar; dá para concluir e reabrir; lista vazia mostra orientação |
| clima          | cidade válida mostra temperatura; cidade inexistente mostra erro; falha de rede mostra erro; a busca indica que está carregando |

**Tarefas:** 1. preparar projeto · 2. identificação por e-mail · 3. criar tarefas · 4. concluir tarefas · 5. consultar clima · 6. revisar e validar · 7. documentar.

---

## Onde ver isso pronto

Esta mesma definição, aplicada em um projeto de verdade:

- [`02-taskweather-organizado/docs/prd.md`](../02-taskweather-organizado/docs/prd.md) — problema, escopo, não escopo e critérios
- [`02-taskweather-organizado/docs/tasks.md`](../02-taskweather-organizado/docs/tasks.md) — as sete tarefas
- Os testes do projeto citam, em comentário, o critério de aceite que verificam

> Repare no que **não** foi decidido nesta folha: nenhuma tecnologia, nenhuma pasta, nenhuma biblioteca. Tudo isso ainda pode mudar. O que está aqui é o que não deveria mudar por acidente.

E repare em uma decisão que **está** aqui: como a pessoa entra. A escolha foi "informa só o e-mail, sem senha, e o e-mail separa os dados de cada usuário". Poderia ter sido outra — mas se ninguém decidisse, o agente decidiria, e provavelmente construiria cadastro, senha e recuperação de senha sem que ninguém pedisse.
