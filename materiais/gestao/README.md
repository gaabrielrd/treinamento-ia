# Momento 1 · Gestão — guia do instrutor

Roteiro slide a slide deste encontro: [`roteiro.md`](roteiro.md). Regras do repositório: [`AGENTS.md`](../../AGENTS.md).

**Público:** líderes de área e quem acompanha as entregas do setor.
**Duração:** 1 hora, encontro único.
**Quando:** antes do Momento 2, sempre. Sem o combinado da área definido aqui, a equipe produz artefatos que ninguém acordou em usar.

O objetivo deste encontro **não é ensinar a ferramenta**. É responder três perguntas da gestão:

1. o que muda no jeito de a equipe trabalhar;
2. o que passa a existir em cada projeto e o que olhar em cada coisa;
3. onde a gestão entra — e como acompanhar sem virar gargalo.

A saída do encontro é um documento: o **combinado da área**, preenchido pelo próprio grupo.

## Agenda

| Tempo  | Bloco                                                     | Material |
| ------ | --------------------------------------------------------- | -------- |
| 5 min  | Abertura: o que muda para a gestão                        | slides 1–2 |
| 10 min | A demonstração — um aplicativo que funciona e vaza dado    | [`01-taskweather-desorganizado`](../dia-1/01-taskweather-desorganizado) |
| 10 min | O processo em cinco etapas, em linguagem de gestão         | slide 4 |
| 15 min | Os quatro artefatos e o que conferir em cada um            | [`entregaveis/01`](entregaveis/01-o-que-conferir-em-cada-etapa.md) e [`02`](entregaveis/02-perguntas-de-aceite.md) |
| 15 min | Exercício: preencher o combinado da área                   | [`entregaveis/03`](entregaveis/03-combinado-da-area.md) |
| 5 min  | O que acontece no Momento 2 e o que se pede das áreas      | slides 9–10 |

**Resultado observável:** ao final, o grupo tem um combinado preenchido com quem aprova escopo, o que é obrigatório em cada projeto e como a evidência será cobrada. Se o combinado sair em branco, o encontro não atingiu o objetivo — remarque o bloco em vez de seguir para o Momento 2.

## Preparação

Antes da sessão:

```bash
cd materiais/dia-1/01-taskweather-desorganizado && npm install && npm run dev
```

Deixe o navegador aberto na aplicação, já com a conta `ana@empresa.com` usada uma vez. A demonstração é a mesma do Momento 2 e está descrita em [`../dia-1/README.md`](../dia-1/README.md); aqui ela é usada com outra conclusão — não "o código está ruim", e sim "isso passa por qualquer aceite baseado em ver funcionando".

Leve impressos, ou compartilhe o link, dos três entregáveis. O combinado é preenchido no encontro.

## O que tem nesta pasta

### `entregaveis/` — o que a gestão leva

| Arquivo | O que é |
| ------- | ------- |
| [01 · O que conferir em cada etapa](entregaveis/01-o-que-conferir-em-cada-etapa.md) | as cinco etapas, o artefato de cada uma, a pergunta a fazer e o sinal de alerta |
| [02 · Perguntas de aceite](entregaveis/02-perguntas-de-aceite.md) | o que perguntar antes de aceitar uma entrega — e o que não vale a pena perguntar |
| [03 · Combinado da área](entregaveis/03-combinado-da-area.md) | modelo para preencher no encontro: quem aprova o quê, o que é obrigatório, cadência |
| [04 · Vocabulário mínimo](entregaveis/04-vocabulario-minimo.md) | os termos que vão aparecer nas conversas, em linguagem de gestão |

[`referencias.md`](referencias.md) reúne as fontes citadas no encontro.

## Erros comuns de condução

**Explicar a ferramenta.** Se a conversa cair em "qual modelo usar" ou "como se escreve um prompt", registre a pergunta e devolva: isso é conteúdo do Momento 2. O tempo aqui é curto de propósito.

**Prometer que o processo elimina erro.** O processo reduz uma classe de erro — a que vem de desorganização. Continua havendo defeito, e continua sendo necessário revisar.

**Deixar o combinado para depois.** É o único entregável do encontro. Reserve os 15 minutos e conduza pergunta a pergunta; um combinado imperfeito preenchido em grupo vale mais que um modelo perfeito enviado por e-mail.

**Transformar em prestação de contas.** O encontro não é sobre o que a área fez errado até aqui. O diagnóstico da abertura descreve um efeito previsível de trabalhar sem processo, não uma falha de alguém.
