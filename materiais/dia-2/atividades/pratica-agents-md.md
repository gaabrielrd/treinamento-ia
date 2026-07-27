# Prática B — o `AGENTS.md` do projeto da dupla

**Bloco 5 do Dia 2 · 12 minutos · em duplas**

No bloco anterior vocês escreveram um prompt. Boa parte dele vale para **toda** tarefa deste projeto, não só para aquela.

Essa parte está no lugar errado. Ela pertence ao repositório.

## A pergunta que separa as duas coisas

> **Isto que eu escrevi agora, eu vou escrever de novo amanhã?**

Se sim, vai para o `AGENTS.md`.

| Fica no prompt | Vai para o `AGENTS.md` |
| -------------- | ---------------------- |
| o objetivo de hoje | como o projeto se organiza |
| o escopo desta tarefa | os comandos de validação |
| os critérios desta entrega | a política de dependências |
| o que não tocar agora | a definição de concluído |

## Escrevam o de vocês

Responda às cinco perguntas. **Curto.** Se passar de duas telas, virou manual — e manual longo o agente segue pior que instrução curta.

```markdown
# Instruções do projeto

## Leia primeiro
[quais arquivos, em que ordem]

## Como o projeto está organizado
[onde mora cada coisa]

## O que não pode ser feito
[limites: dependências, escopo, o que não alterar]

## Comandos
[o que executar para validar]

## Quando uma tarefa está concluída
[a definição de concluído de vocês]
```

## Antes de commitar

- [ ] caberia em uma tela? Duas, no máximo.
- [ ] toda regra é verificável? "Escreva código de qualidade" não é regra — é desejo.
- [ ] alguma regra contradiz outra?
- [ ] tem grandes blocos copiados de outro arquivo? Prefira referenciar a duplicar — arquivos duplicados divergem com o tempo, e aí o agente recebe duas instruções conflitantes.
- [ ] uma pessoa nova conseguiria responder as cinco perguntas só lendo este arquivo?

Commitem com:

```text
docs: adiciona instruções do projeto para agentes
```

## Referência de tamanho

Compare com dois exemplos reais, os dois curtos de propósito:

- [`02-taskweather-organizado/AGENTS.md`](../../dia-1/02-taskweather-organizado/AGENTS.md) — a versão enxuta de um projeto pequeno
- [`template-ia-web/AGENTS.md`](../../../template-ia-web/AGENTS.md) — a versão do template da área, com as oito seções

Abra os dois lado a lado com o `CLAUDE.md` correspondente e repare: **quase nada está repetido entre eles.** É de propósito.

## O que fica desta prática

O `AGENTS.md` commitado é um dos dois artefatos do Dia 2. No Dia 3, ele é o arquivo que o agente lê **antes** de qualquer implementação — e é o que faz vocês não precisarem repetir as mesmas regras em cada prompt.
