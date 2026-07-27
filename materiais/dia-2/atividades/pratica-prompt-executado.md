# Prática A — escrever o prompt e executar

**Bloco 3 do Dia 2 · 25 minutos · em duplas**

Até agora vocês viram prompts. Neste bloco escrevem um, **rodam**, e revisam o que voltou. É o loop completo — e é onde o aprendizado sobre prompts acontece de verdade.

## O pedido

Escrevam um prompt de **planejamento** da primeira funcionalidade do PRD que vocês escreveram ontem.

**Planejamento, não implementação.** O prompt precisa conter, obrigatoriamente:

```text
Não altere nenhum arquivo.
```

Isso torna o bloco seguro — nada pode ser estragado — e é a mesma distinção que o Dia 3 vai exigir: primeiro o plano, depois o código.

## Como preencher

Use o [template de prompt](../entregaveis/01-template-de-prompt.md). Os oito blocos, adaptados a planejamento:

```text
Contexto:
[onde estamos; que documentos ler — inclua docs/prd.md]

Objetivo:
[planejar a funcionalidade X]

Escopo:
[que parte do PRD entra neste plano]

Fora do escopo:
[o que não deve ser planejado agora]

Restrições:
Não instale dependências.
Não altere nenhum arquivo.

Saída esperada:
- arquivos que seriam afetados;
- suposições que você está fazendo;
- etapas em ordem;
- riscos;
- critérios de aceite propostos.
```

O bloco **"suposições"** é o mais importante da saída. É ele que revela o que o seu PRD deixou em aberto.

## Depois de rodar — revisem com esta folha

**Primeiro, a checagem que não é sobre o conteúdo:**

- [ ] `git status` está limpo? Se o agente alterou algo, ele ignorou a restrição. Chame o instrutor.

**Depois, o conteúdo da resposta:**

- [ ] ele listou os arquivos que seriam afetados, ou falou genericamente do projeto?
- [ ] ele listou suposições, ou seguiu como se tudo estivesse claro?
- [ ] os critérios que ele propôs são verificáveis?
- [ ] ele propôs alguma biblioteca nova?
- [ ] ele incluiu algo que estava no **não escopo** do PRD?
- [ ] a ordem das etapas permite validar uma por vez?

## A pergunta que vocês precisam responder

> **Qual suposição o agente fez que estava errada?**

Anotem aqui:

```


```

Quase toda dupla encontra uma. Quando encontra, aconteceu a coisa mais importante do dia: vocês pararam de aceitar o que o agente devolve e começaram a **revisar** o que ele devolve.

E há uma segunda pergunta, que costuma doer mais:

> **Essa suposição existia porque o nosso PRD não dizia?**

Se sim, vocês acabaram de descobrir uma lacuna do próprio PRD — de graça, antes de existir código. Corrijam o PRD.

## Se a resposta vier grande demais para ler em 7 minutos

Normal. Não leiam tudo. Vão direto a três lugares: **arquivos afetados**, **suposições** e **critérios propostos**. O resto é detalhe.

## O que fica desta prática

O plano revisado é um dos dois artefatos do Dia 2, e é a entrada da Etapa 3 do Dia 3 — onde vocês vão apenas confirmá-lo, em vez de planejar do zero.
