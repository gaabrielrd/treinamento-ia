# Roteiro completo — Momento 1 · Gestão
## Como acompanhar e participar de projetos feitos com agentes

## 1. Informações gerais

- **Público:** líderes de área e quem acompanha as entregas do setor.
- **Duração-base:** 1 hora, encontro único.
- **Formato:** exposição curta, uma demonstração ao vivo e um exercício em grupo.
- **Objetivo do encontro:** definir como a área vai acompanhar projetos feitos com agentes de código — o que passa a ser obrigatório, quem decide o quê e como a evidência chega até a gestão.
- **Pré-requisito do Momento 2:** este encontro acontece **antes** da formação de quem vai implementar. Sem o combinado definido aqui, as duplas produzem artefatos que ninguém acordou em usar.

## 2. Resultados esperados

Ao final do encontro, cada líder deve conseguir:

1. explicar por que um aplicativo que funciona na demonstração pode ser inseguro;
2. nomear as cinco etapas do processo e a pergunta de acompanhamento de cada uma;
3. reconhecer os quatro artefatos e dizer o que conferir em cada um;
4. conduzir um aceite de entrega sem fazer perguntas técnicas;
5. apontar onde a gestão entra sem virar gargalo;
6. sair com o **combinado da área** preenchido em grupo.

## 3. Preparação do instrutor

Antes da sessão:

- rodar `npm install && npm run dev` em [`materiais/dia-1/01-taskweather-desorganizado`](../dia-1/01-taskweather-desorganizado) e deixar o navegador aberto;
- usar a aplicação uma vez com `ana@empresa.com`, para que a tarefa da demonstração já exista;
- abrir, em abas separadas, o [PRD](../dia-1/02-taskweather-organizado/docs/prd.md) e o [`AGENTS.md`](../dia-1/02-taskweather-organizado/AGENTS.md) do projeto organizado — são exibidos por 30 segundos no bloco dos artefatos;
- imprimir ou compartilhar os três entregáveis de [`materiais/gestao/entregaveis/`](entregaveis/);
- abrir o [combinado da área](entregaveis/03-combinado-da-area.md) em uma tela editável — ele é preenchido ao vivo;
- confirmar quem da gestão participa: o encontro rende mais com todos os líderes juntos do que repetido área a área.

Não é necessário preparar nada de código além da aplicação desorganizada.

## 4. Agenda-base

| Tempo  | Bloco                                              | Slides |
| ------ | -------------------------------------------------- | ------ |
| 5 min  | Abertura e o que muda para a gestão                | 1–2    |
| 10 min | Demonstração: o aplicativo que vaza dado           | 3      |
| 10 min | O processo em cinco etapas                         | 4      |
| 15 min | Os quatro artefatos, o aceite e o gargalo          | 5–7    |
| 15 min | Exercício: preencher o combinado da área           | 8      |
| 5 min  | O que acontece no Momento 2 e encerramento         | 9–10   |

Se o tempo apertar, corte o bloco 7 (sem virar gargalo) e traga o conteúdo dele para dentro da discussão do combinado — é onde ele naturalmente reaparece. **Não corte o exercício:** sem o combinado, o encontro não tem entregável.

---

# 5. Roteiro slide a slide

## Slide 1 — Capa

### Objetivo da fala

Enquadrar o encontro antes que alguém o enquadre de outro jeito.

### Roteiro de fala

> "Uma hora, um encontro. Não é treinamento de ferramenta: ninguém vai sair daqui escrevendo prompt. E não é prestação de contas do que a área fez até agora.
>
> É o combinado de como vamos trabalhar quando a equipe começar a usar esse processo. Sai daqui um documento preenchido por vocês."

### Transição

> "Começo pelo que muda — e pelo que não muda."

---

## Slide 2 — O que muda

### Descrição visual do slide

Duas colunas: *o que muda para a equipe* e *o que muda para você*. Embaixo, em roxo: o trabalho da gestão não aumenta, muda de lugar.

### Roteiro de fala

> "A equipe já usa agentes. O que falta não é ferramenta — é processo. E tudo o que não é definido antes de pedir vira uma decisão que o agente toma sozinho: qual tecnologia, como organizar, o que fazer quando o pedido está ambíguo.
>
> Para a equipe, a mudança é escrever antes: problema, escopo, critérios. Para vocês, a mudança é aprovar no começo, em vez de descobrir no fim."

### Interação

Pergunte: **"Hoje, em que momento vocês olham para um projeto desses pela primeira vez?"** A resposta quase sempre é "quando está pronto" ou "quando dá problema". É o argumento do slide, dito por eles.

### Antecipar a objeção

Se alguém disser que isso é mais burocracia:

> "Nenhum dos artefatos é documento novo criado para a gestão. Todos saem do próprio trabalho, e o agente ajuda a escrever cada um. O que muda é que passam a existir e a ter um lugar."

### Transição

> "Para mostrar por que isso importa, vou usar uma aplicação de verdade."

---

## Slide 3 — O risco é concreto (demonstração, 10 minutos)

### Objetivo da fala

Produzir a única surpresa do encontro. Este é o slide que sustenta todo o resto.

### Como conduzir a demonstração

1. Mostre a aplicação funcionando. Diga que foi gerada por um agente a partir de um pedido de uma linha.
2. Entre como `ana@empresa.com`. Mostre a tarefa "consulta médica" já criada.
3. Clique em sair.
4. Entre como `joao@empresa.com`.
5. **Pare de falar.** Deixe a tela na tarefa da Ana por alguns segundos.

### Roteiro de fala, depois da pausa

> "Ninguém programou esse vazamento. Não é um erro de programação: é consequência de desorganização.
>
> Nesse projeto há sete chaves de armazenamento espalhadas por quatro arquivos. Não havia um lugar onde escrever a regra 'os dados são de quem entrou'. No projeto organizado, essa regra tem um endereço único — e um teste automático que a protege.
>
> O que interessa para vocês: isso passa por qualquer aceite baseado em ver funcionando. A demonstração estava perfeita."

### Interação

> "Com o que vocês contam hoje para saber que isso não existe em alguma aplicação interna da área?"

Deixe o silêncio. A resposta honesta costuma ser "nada" — e é dela que sai a disposição para o combinado.

### Transição

> "O processo que proponho existe para evitar essa classe de problema. São cinco etapas."

---

## Slide 4 — O processo em cinco etapas

### Descrição visual do slide

Cinco cartões numerados: Definir, Especificar, Dividir, Implementar, Validar. Sob cada um, a **pergunta que a gestão faz** naquela etapa.

### Roteiro de fala

> "Cada etapa produz a entrada da próxima. O agente ajuda em todas — mas não decide sozinho em nenhuma.
>
> Reparem que embaixo de cada etapa não está o que a equipe faz: está a pergunta que vocês fazem. 'Que problema isso resolve, e de quem?' 'Como saberemos que terminou?' 'Qual é a menor entrega que já tem valor?' 'O que está pronto?' 'O que foi validado, e como?'
>
> Essas cinco perguntas são o roteiro de acompanhamento inteiro. Nenhuma exige conhecimento técnico."

### Mensagem-chave

O acompanhamento não depende de a gestão entender de código. Depende de a gestão fazer a pergunta certa no momento certo.

### Transição

> "Cada pergunta dessas tem um artefato por trás. São quatro."

---

## Slide 5 — Os quatro artefatos

### Descrição visual do slide

Tabela: artefato · o que é · o que a gestão confere.

### Roteiro de fala

> "Escopo e não escopo: o que entra agora e o que fica de fora. O que vocês conferem é simples — a lista de não escopo existe e não está vazia. Escopo sem 'não escopo' é lista de desejos.
>
> Critérios de aceite: cada funcionalidade descrita de um jeito verificável, escrita **antes** da implementação. O que vocês conferem: dá para responder sim ou não, sem interpretação.
>
> Regras do projeto: as instruções que o agente é obrigado a seguir naquele repositório. É onde o padrão da área deixa de ser recomendação e vira instrução.
>
> Registro de entrega: o que mudou, por quê, e a prova de que foi validado. É o que vocês leem para aceitar."

### Demonstração curta (30 segundos)

Mostre o PRD e o `AGENTS.md` do projeto organizado. Não leia o conteúdo — role a página. O objetivo é reconhecimento de formato, não compreensão técnica.

### Transição

> "Com os artefatos na mesa, o aceite muda de conversa."

---

## Slide 6 — Aceitar uma entrega

### Descrição visual do slide

À esquerda, as cinco perguntas de aceite. À direita, o que não vale a pena perguntar.

### Roteiro de fala

> "Quando alguém disser 'está pronto', são cinco perguntas — cinco minutos de conversa.
>
> A segunda é a que mais muda o comportamento: 'o que foi validado, e como?'. 'Testei aqui e funcionou' descreve uma demonstração. Vocês acabaram de ver o que uma demonstração não pega.
>
> A quarta — 'se essa pessoa sair de férias, quem continua?' — a resposta certa tem duas partes: o nome de outra pessoa **e** onde está a documentação. Só o nome não basta.
>
> A quinta traz de volta o que mais se perde: 'alguma decisão de negócio foi tomada no caminho?'. Quando o agente encontra ambiguidade, ele decide. Essa pergunta devolve a decisão para a mesa."

### Orientação prática

Quando a aplicação guarda dado de pessoa — mesmo interno, mesmo "só um teste" —, acrescente as quatro perguntas do entregável: o que acontece se outra pessoa entrar no mesmo navegador; onde o dado fica e por quanto tempo; se há credencial escrita dentro do projeto; se a integração externa é só de leitura.

### Transição

> "E para isso não virar reunião semanal, uma regra."

---

## Slide 7 — Sem virar gargalo

### Descrição visual do slide

Duas colunas: *faça* e *evite*. Embaixo, o prazo de resposta da gestão como parte do processo.

### Roteiro de fala

> "A gestão entra no começo e no fim de cada incremento — não no meio. Se um projeto precisa de aprovação a cada passo, o escopo estava grande demais; o problema é o tamanho da fatia, não a frequência da reunião.
>
> Do lado do 'evite', o item que mais custa tempo sem reduzir risco é revisar código. Não é onde vocês agregam. Ler o não escopo e questionar o que ficou de fora agrega muito mais."

### Interação

> "Onde é que hoje a aprovação trava na sua área?"

Anote as respostas: elas alimentam diretamente o bloco 2 do combinado.

### Transição

> "É exatamente isso que vamos combinar agora."

---

## Slide 8 — O combinado da área (exercício, 15 minutos)

### Objetivo do bloco

Sair do encontro com um documento preenchido pelo grupo — não com um modelo enviado depois.

### Como conduzir

Projete o [modelo](entregaveis/03-combinado-da-area.md) e preencha ao vivo, bloco a bloco. Conduza por pergunta, não por leitura:

1. **O que vale para todo projeto** — "dos quatro artefatos, quais passam a ser obrigatórios já na próxima demanda?"
2. **Quem decide o quê** — "quem aprova escopo? em quanto tempo consegue responder?" Insista na coluna do prazo.
3. **Como a evidência chega** — "onde ficam os artefatos, e o que vocês querem receber quando algo fica pronto?"
4. **Limites da área** — "dado de pessoa real em projeto novo: permitido, com aprovação, ou não?"
5. **Quem participa do Momento 2** — nomes, duplas e a demanda real de cada uma.
6. **Como saberemos que valeu** — até três sinais e a data de revisão.

### Regras do bloco

- Onde houver dúvida, **escreva a dúvida** — combinado incompleto e honesto vale mais que combinado inventado.
- Se um bloco travar por mais de dois minutos, registre "a definir" com um responsável e siga.
- Não envie para preencher depois. Um combinado feito em grupo é o que sustenta a cobrança futura.

### Transição

> "Com isso definido, a formação da equipe tem onde se apoiar."

---

## Slide 9 — O que acontece no Momento 2

### Descrição visual do slide

Tabela dos três dias: o que a equipe faz · o que a área recebe.

### Roteiro de fala

> "O segundo momento são três encontros de duas horas, com quem vai implementar. Cada dia termina em um artefato que dá para abrir e conferir — a definição escrita, as regras e o plano revisado, e a aplicação com o registro de entrega.
>
> A demanda que cada dupla leva não é exercício: sai da formação como entrega da área. O material dos três dias está pronto e publicado."

### Transição

> "Fechando."

---

## Slide 10 — Encerramento

### Roteiro de fala

Leia o combinado preenchido em voz alta, bloco a bloco. É o encerramento — não faça um resumo do encontro por cima dele.

### Encaminhamentos

1. Bloco em branco: defina quem completa e até quando.
2. Combinado compartilhado com quem vai participar do Momento 2, **antes** do primeiro encontro.
3. Data de revisão marcada: 2 a 3 semanas depois do último encontro do Momento 2.

### Última frase

> "O que vocês combinaram aqui é o que as duplas vão aplicar. Se depois algo não estiver funcionando, é este documento que a gente revisa — não as pessoas."

---

## 6. Perguntas que costumam aparecer

**"Isso não vai deixar tudo mais lento?"**
Fica mais lento no começo de cada projeto e mais rápido do segundo incremento em diante — porque para de haver retrabalho por escopo mal entendido. O estudo da METR mostra o outro lado: sem processo, pessoas experientes ficaram 19% mais lentas usando IA.

**"Preciso entender de programação para acompanhar?"**
Não. As cinco perguntas do slide 4 e as cinco do slide 6 não têm nenhum termo técnico. O vocabulário mínimo está no entregável 04.

**"E os projetos que já existem?"**
Decisão do bloco 1 do combinado. O caminho mais comum é aplicar aos que continuarem em desenvolvimento, sem retroagir.

**"Se a equipe não seguir o combinado?"**
Na revisão, olhe primeiro para o combinado: o que foi acordado e não aconteceu costuma indicar acordo irreal, não indisciplina.

**"Quem responde se a IA errar?"**
Quem assina a entrega. Isso não muda com a ferramenta — e é por isso que o aceite tem critério escrito.
