# Roteiro completo — Momento 2 · Dia 1  
## Processo de software, organização do projeto e qualidade local

## 1. Informações gerais

- **Público:** pessoas não desenvolvedoras que utilizam agentes de código.
- **Duração-base:** 2 horas.
- **Duração máxima:** 3 horas, utilizando os blocos opcionais.
- **Formato:** predominantemente expositivo, com demonstrações curtas e um exercício guiado.
- **Objetivo do dia:** ensinar um processo simples para transformar uma ideia em um projeto organizado antes de solicitar a geração de código.
- **Pré-requisito:** o [Momento 1](../gestao/roteiro.md) já aconteceu e o [combinado da área](../gestao/entregaveis/03-combinado-da-area.md) está preenchido e compartilhado com a turma. É ele que diz quais artefatos são obrigatórios, quem aprova escopo e como a evidência chega até a gestão.

## 2. Resultados esperados

Ao final do dia, o participante deverá conseguir:

1. explicar por que começar diretamente pelo código aumenta o risco do projeto;
2. definir problema, público, objetivo, escopo e não escopo;
3. transformar funcionalidades em critérios de aceite;
4. dividir uma entrega grande em tarefas menores;
5. compreender repositório, branch, commit e pull request;
6. reconhecer uma estrutura modular básica;
7. identificar a documentação mínima de um projeto;
8. executar e interpretar validações locais básicas.

## 3. Preparação do instrutor

Antes da sessão:

- abrir o repositório de demonstração;
- deixar preparada uma aplicação propositalmente desorganizada;
- deixar pronto um segundo exemplo organizado por funcionalidades;
- confirmar que `npm install`, `npm run dev`, `npm run test`, `npm run lint` e `npm run build` funcionam;
- preparar uma issue e um pull request de exemplo;
- garantir que os slides tragam pouco texto e diagramas grandes;
- manter um arquivo com a atividade final para copiar e distribuir;
- reler o combinado da área e ter em mãos o que ficou obrigatório — a turma vai perguntar, e a resposta precisa ser a da própria gestão;
- pedir a cada dupla, com antecedência, **uma demanda pequena e real da área** para servir de projeto ao longo dos três dias — no combinado do Momento 1 essas demandas já costumam estar listadas;
- criar um repositório vazio por dupla, ou orientar como criar a partir do template.

## 4. Agenda-base

| Bloco | Tema | Duração | Slides |
|---|---|---:|---|
| 1 | Abertura + **demonstração do vazamento de dados** | 13 min | 1–2 |
| 2 | Processo, definir problema, escopo e não escopo | 23 min | 3–5 |
| 3 | **Prática A — escrever o PRD do próprio projeto** | 15 min | — |
| 4 | Critérios de aceite e dividir em tarefas | 18 min | 6–7 |
| 5 | **Prática B — completar o PRD** com critérios e tarefas | 12 min | — |
| 6 | Estrutura, documentação e validação local | 22 min | 10–13 |
| 7 | **Versionar o PRD + primeiro contato com o agente** | 17 min | 8–9, 14–15 |
| **Total** |  | **120 min** |  |

Três mudanças em relação a uma agenda puramente expositiva:

1. **O bloco de processo foi partido em dois, com prática entre eles.** Vinte e três minutos de exposição, quinze de produção, dezoito de exposição, doze de produção. Nenhum trecho de fala passa de 25 minutos.
2. **O GitHub deixou de ser bloco teórico.** Branch, commit e pull request são operados no Bloco 7, sobre um arquivo que a dupla acabou de escrever. Ensina-se fazendo, não explicando.
3. **A demonstração de vazamento de dados abre o dia.** É o gancho concreto que sustenta os quarenta minutos de processo seguintes.

O dia inteiro converge para um artefato: **o `docs/prd.md` de um projeto real da dupla**, commitado. Ele é a entrada do Dia 2.

---

# 5. Roteiro slide a slide

## Slide 1 — O que queremos evitar

**Tempo:** 5 minutos

### Objetivo da fala

Abrir o treinamento conectando o conteúdo ao problema real da equipe.

### Descrição visual do slide

Tela dividida ao meio:

- à esquerda, vários projetos com pastas e tecnologias diferentes, representados por blocos desalinhados;
- à direita, um único fluxo organizado: ideia → plano → template → tarefas → validação;
- título grande: **“Agentes aceleram o código. O processo mantém o controle.”**
- pouco texto; usar ícones simples.

### Roteiro de fala

“Hoje não vamos começar falando de código. Vamos começar falando do que acontece antes dele.

Quando uma pessoa pede a um agente que crie uma aplicação completa, o agente precisa preencher sozinho tudo o que não foi informado: tecnologia, organização das pastas, bibliotecas, arquitetura, armazenamento e critérios de conclusão.

O resultado pode até funcionar em uma demonstração, mas normalmente não segue o mesmo padrão de outros projetos, não é fácil de continuar e depende demais da conversa original.

Nosso objetivo nestes três dias é criar um processo comum. O agente continua fazendo parte do trabalho, mas deixa de tomar sozinho as decisões importantes.”

### Interação

Perguntar:

> “Qual foi o problema mais comum que vocês já encontraram em uma aplicação criada com IA?”

Ouvir duas ou três respostas, sem aprofundar tecnicamente.

### Demonstração de abertura — o vazamento de dados (6 minutos)

**Faça isto antes de qualquer slide de processo.** É o gancho do dia.

Abra `materiais/dia-1/01-taskweather-desorganizado` no navegador e execute, narrando:

1. entre com `ana@empresa.com`;
2. crie uma tarefa chamada **“consulta médica”**;
3. clique em `sair`;
4. entre com `joao@empresa.com`.

A tarefa da Ana aparece. **O João está vendo a agenda médica da Ana.**

Repita no projeto organizado: a lista do João vem vazia, e ao voltar para o e-mail da Ana a tarefa dela reaparece.

Então diga a frase que organiza o dia:

> “Ninguém programou esse vazamento. Ele é consequência de desorganização — com sete chaves de armazenamento espalhadas por quatro arquivos, não havia onde escrever a regra ‘as tarefas são de quem entrou’. O dia de hoje é sobre o que evita isso.”

Roteiro completo da demonstração em `materiais/dia-1/README.md`.

### Transição

“Vamos transformar esses problemas em um fluxo de trabalho simples.”

---

## Slide 2 — Por que os projetos ficam diferentes

**Tempo:** 8 minutos

### Descrição visual do slide

Título: **“Tudo o que não definimos vira uma decisão do agente”**

No centro, um prompt curto:

> “Crie um sistema de tarefas moderno.”

Ao redor, balões com decisões implícitas:

- React ou outra tecnologia?
- Onde salvar os dados?
- Login real ou simulado?
- Quais telas?
- Quais bibliotecas?
- Como testar?
- Quando está pronto?

### Roteiro de fala

“Este pedido parece claro, mas contém apenas uma intenção. Ele não define o produto.

Quando faltam informações, o agente não para necessariamente para perguntar. Muitas vezes ele assume uma solução plausível. O problema é que duas pessoas podem receber duas soluções completamente diferentes para a mesma demanda.

A primeira mudança de comportamento é esta: antes de pedir código, precisamos retirar do agente as decisões que são nossas.”

Apresentar três categorias:

1. **Decisões de negócio:** quem usa, o que resolve, o que é obrigatório.
2. **Decisões de escopo:** o que entra agora e o que fica para depois.
3. **Decisões técnicas:** estrutura, ferramentas permitidas e forma de validar.

### Demonstração curta

Mostrar dois resultados diferentes gerados a partir de um mesmo prompt vago, ou duas estruturas de pastas contrastantes.

### Transição

“Para não depender dessas suposições, vamos usar um processo em cinco etapas.”

---

## Slide 3 — Processo em cinco etapas

**Tempo:** 7 minutos

### Descrição visual do slide

Fluxo horizontal com cinco blocos numerados:

1. Definir
2. Especificar
3. Dividir
4. Implementar
5. Validar

Abaixo, uma frase:

> “Uma etapa produz a entrada da próxima.”

### Roteiro de fala

“Não precisamos transformar todos em engenheiros de software. Precisamos de um processo suficientemente claro para o dia a dia.

O fluxo será:

1. definir o problema;
2. especificar funcionalidades e critérios;
3. dividir o trabalho;
4. implementar um incremento por vez;
5. validar antes de registrar como concluído.

O agente pode ajudar em todas as etapas, mas não devemos pular diretamente para a quarta.”

Explicar que planejamento não significa escrever um documento longo. Para pequenos projetos, uma ou duas páginas podem ser suficientes.

### Transição

“Começamos definindo o problema de forma que outra pessoa consiga entendê-lo.”

---

## Slide 4 — Definir o problema

**Tempo:** 8 minutos

### Descrição visual do slide

Cartão central com quatro perguntas grandes:

- Para quem?
- Qual problema?
- Qual resultado?
- Qual limite?

Ao lado, exemplo preenchido da aplicação TaskWeather.

### Roteiro de fala

“Uma definição útil de problema responde quatro perguntas.

**Para quem:** quem utilizará a aplicação?

**Qual problema:** qual dificuldade ela resolve?

**Qual resultado:** o que a pessoa deve conseguir fazer ao final?

**Qual limite:** o que não precisa ser resolvido nesta versão?

Exemplo:

- para pessoas que desejam organizar tarefas pessoais;
- problema: registrar tarefas e consultar o clima sem alternar de tela;
- resultado: acessar a aplicação, criar tarefas e visualizar o clima;
- limite: não haverá cadastro real, compartilhamento ou sincronização com servidor.”

### Miniatividade

Pedir que os participantes reformulem oralmente:

> “Criar um dashboard para minha área.”

Conduzir até chegar a uma versão com público, objetivo e limite.

### Transição

“Depois de entender o problema, precisamos controlar o tamanho da primeira versão.”

---

## Slide 5 — Escopo e não escopo

**Tempo:** 8 minutos

### Descrição visual do slide

Duas colunas:

**Entra agora**
- login simulado;
- tarefas locais;
- clima atual.

**Não entra agora**
- cadastro;
- recuperação de senha;
- colaboração;
- banco de dados;
- previsão de sete dias.

Na parte inferior: **“Dizer não agora evita retrabalho depois.”**

### Roteiro de fala

“O não escopo é tão importante quanto o escopo.

Quando informamos apenas o que queremos, o agente pode acrescentar recursos que parecem úteis. Isso aumenta arquivos, dependências e possibilidades de erro.

No TaskWeather, a primeira versão terá login simulado. Isso significa que não teremos cadastro, envio de e-mail, recuperação de senha ou serviço de autenticação.

Não estamos dizendo que esses recursos nunca existirão. Estamos dizendo que não fazem parte desta entrega.”

### Orientação prática

Ensinar a usar frases explícitas:

- “Não implemente…”
- “Não altere…”
- “Não instale…”
- “Considere como etapa futura…”

### Transição

“Com o escopo controlado, transformamos cada funcionalidade em algo verificável.”

---

## Slide 6 — Funcionalidade não é critério de aceite

**Tempo:** 10 minutos

### Descrição visual do slide

À esquerda:

> Funcionalidade: “Criar tarefa”

À direita, três critérios:

- rejeitar título vazio;
- mostrar a tarefa criada;
- manter a tarefa após recarregar.

Usar um símbolo de interrogação na funcionalidade e marcas de verificação nos critérios.

### Roteiro de fala

“Uma funcionalidade descreve uma capacidade. Um critério de aceite descreve como verificamos essa capacidade.

‘Criar tarefa’ ainda deixa dúvidas:

- o título pode estar vazio?
- quando a tarefa aparece?
- ela permanece depois que a página é atualizada?
- o usuário recebe alguma mensagem de erro?

Critérios de aceite devem ser observáveis. Uma pessoa deve conseguir executar a aplicação e dizer se o critério foi atendido.”

### Exemplo guiado

Funcionalidade: login simulado.

Construir com a turma:

- credencial correta permite acesso;
- credencial incorreta mostra mensagem;
- atualizar a página mantém a sessão;
- logout retorna à tela de login.

### Mensagem-chave

> “Critérios de aceite são o contrato entre a intenção e a implementação.”

### Transição

“Agora já sabemos o que construir. Ainda precisamos impedir que tudo seja feito de uma vez.”

---

## Slide 7 — Dividir para controlar

**Tempo:** 8 minutos

### Descrição visual do slide

Uma caixa grande “Criar TaskWeather” sendo quebrada em cartões menores:

1. preparar projeto;
2. login fake;
3. criar tarefas;
4. concluir tarefas;
5. consultar clima;
6. revisar;
7. documentar.

### Roteiro de fala

“Projetos grandes são difíceis de revisar porque muitas coisas mudam ao mesmo tempo.

A unidade ideal de trabalho é uma alteração pequena, com objetivo claro e validação própria.

Em vez de pedir ‘crie a aplicação’, podemos trabalhar assim:

- primeiro a estrutura;
- depois o login;
- depois tarefas;
- depois clima;
- por último revisão e documentação.

Se algo falha, sabemos em qual etapa procurar. Se o agente desvia do escopo, o desvio é menor.”

### Regra prática

Uma tarefa deve, sempre que possível:

- ter um único objetivo;
- caber em uma sessão de trabalho;
- alterar um conjunto limitado de arquivos;
- possuir critérios de aceite próprios.

### Transição

“Essas tarefas precisam existir em um local compartilhado. É aí que entra o GitHub.”

---

## Slide 8 — GitHub como memória do projeto

**Tempo:** 8 minutos

### Descrição visual do slide

Diagrama de um repositório contendo:

- código;
- documentação;
- tarefas;
- histórico;
- revisões.

Título: **“O projeto não pode existir apenas na conversa com o agente.”**

### Roteiro de fala

“O GitHub não é apenas um lugar para guardar código.

Ele funciona como a memória oficial do projeto:

- contém os arquivos;
- registra quem alterou o quê;
- guarda decisões e documentação;
- organiza tarefas;
- permite revisar antes de integrar uma mudança.

Uma conversa com o agente pode ser perdida, encerrada ou substituída. O repositório permanece.”

Explicar sem entrar em comandos:

- repositório = projeto;
- issue = trabalho a realizar;
- histórico = mudanças registradas;
- pull request = revisão antes de incorporar.

### Transição

“Para usar esse histórico, precisamos entender três operações básicas.”

---

## Slide 9 — Branch, commit e pull request

**Tempo:** 10 minutos

### Descrição visual do slide

Fluxo visual:

`main` → `feat/todo-list` → commits → pull request → revisão → merge

Cada conceito com uma analogia:

- branch: cópia de trabalho;
- commit: ponto registrado;
- pull request: pedido de revisão.

### Roteiro de fala

“Vamos usar um fluxo simples.

A branch principal, chamada `main`, representa a versão estável.

Ao iniciar uma funcionalidade, criamos uma branch separada. Nela, podemos trabalhar sem alterar imediatamente a versão principal.

Cada conjunto coerente de mudanças é registrado em um commit.

Quando a funcionalidade está pronta e testada, abrimos um pull request. Esse é o momento de revisar o que mudou e confirmar se a alteração pode entrar na versão principal.”

### Exemplo de nomes

```text
feat/login-fake
feat/todo-list
feat/weather-widget
```

### Exemplo de commits

```text
feat: adiciona fluxo de login simulado
feat: permite criar e concluir tarefas
fix: trata erro na consulta meteorológica
docs: atualiza instruções de execução
```

### Mensagem-chave

> “Não precisamos dominar Git avançado; precisamos seguir um fluxo consistente.”

### Transição

“Além do histórico, todos os projetos precisam começar com uma organização reconhecível.”

---

## Slide 10 — Estrutura por funcionalidades

**Tempo:** 10 minutos

### Descrição visual do slide

Árvore grande:

```text
src/
├── app/
├── features/
│   ├── auth/
│   ├── todos/
│   └── weather/
└── shared/
```

Cada pasta com uma cor ou ícone diferente. Ao lado, uma legenda simples.

### Roteiro de fala

“Modularizar significa separar a aplicação em partes menores, cada uma com uma responsabilidade reconhecível.

Para pessoas não desenvolvedoras, a organização por funcionalidade é mais fácil de compreender.

Se precisamos alterar o login, procuramos em `auth`.

Se precisamos alterar tarefas, procuramos em `todos`.

Se precisamos alterar a consulta de clima, procuramos em `weather`.

A pasta `shared` deve conter somente elementos realmente reutilizados. A pasta `app` contém a montagem geral da aplicação.”

### Comparação curta

Mostrar uma estrutura alternativa espalhada por `components`, `services`, `hooks` e `pages`, destacando que uma única funcionalidade aparece em vários lugares.

### Regra simples

> “Primeiro procure a funcionalidade. Depois procure o tipo de arquivo dentro dela.”

### Transição

“A estrutura explica onde o código está. A documentação explica por que ele está assim.”

---

## Slide 11 — Documentação mínima

**Tempo:** 8 minutos

### Descrição visual do slide

Quatro cartões:

- `README.md` — como usar;
- `AGENTS.md` — regras para agentes;
- `CLAUDE.md` — orientações para Claude Code;
- `docs/architecture.md` — como o projeto está organizado.

### Roteiro de fala

“Um projeto organizado deve ser compreendido sem depender da pessoa que o criou.

O `README.md` explica o objetivo e como executar.

O `AGENTS.md` registra regras gerais para agentes de código.

O `CLAUDE.md` adapta essas orientações ao Claude Code.

O documento de arquitetura explica a organização, as responsabilidades e as decisões principais.

Esses arquivos não precisam ser longos. Precisam estar corretos e atualizados.”

### Orientação

Toda mudança relevante deve responder:

- a documentação de execução mudou?
- uma decisão arquitetural mudou?
- uma nova restrição precisa ser registrada?
- o agente precisará saber disso no futuro?

### Transição

“Mesmo com planejamento e documentação, ainda precisamos comprovar que a mudança funciona.”

---

## Slide 12 — Validação local

**Tempo:** 7 minutos

### Descrição visual do slide

Quatro blocos com comandos e significado:

- `npm run dev` — abrir e testar;
- `npm run test` — verificar comportamentos;
- `npm run lint` — encontrar problemas de padrão;
- `npm run build` — confirmar que o projeto pode ser gerado.

### Roteiro de fala

“Neste primeiro momento, não vamos configurar automações de servidor ou CI. O foco será validar localmente.

Cada comando responde a uma pergunta:

- a aplicação abre?
- os comportamentos testados continuam funcionando?
- existem problemas básicos no código?
- o projeto consegue gerar uma versão final?

Não é necessário entender internamente cada ferramenta. É necessário executar os comandos, reconhecer uma falha e não considerar a tarefa concluída enquanto houver erro.”

### Demonstração

Executar um teste passando e, se possível, mostrar rapidamente um erro simples e sua mensagem.

### Transição

“Esses comandos fazem parte da nossa definição comum de concluído.”

---

## Slide 13 — Quando uma tarefa está pronta?

**Tempo:** 5 minutos

### Descrição visual do slide

Checklist grande:

- critérios atendidos;
- aplicação funciona;
- testes passam;
- lint passa;
- build passa;
- documentação atualizada;
- commit criado;
- revisão realizada.

### Roteiro de fala

“O agente dizer ‘concluído’ não encerra a tarefa.

A tarefa só está pronta quando conseguimos comprovar os critérios de aceite, executar as validações e registrar a mudança.

Essa lista será reutilizada em todos os projetos da área.”

### Transição

“Vamos aplicar o processo a uma demanda curta.”

---

## Slide 14 — Exercício: transformar ideia em plano

**Tempo:** 12 minutos

### Descrição visual do slide

Título: **“Atividade em duplas”**

Demanda central:

> “Crie uma página para registrar tarefas e mostrar o clima.”

À direita, campos a preencher:

1. problema;
2. público;
3. escopo;
4. não escopo;
5. critérios;
6. tarefas.

### Roteiro do instrutor

1. Formar duplas ou trios.
2. Dar 7 minutos para preencher os seis campos.
3. Pedir a um grupo para apresentar.
4. Corrigir apenas lacunas de escopo e critérios, sem discutir código.
5. Mostrar a versão de referência.

### Resposta de referência

**Problema:** organizar tarefas pessoais e consultar o clima em uma única página.

**Público:** usuário individual em uma demonstração interna.

**Escopo:** login simulado, criação e conclusão de tarefas, persistência local e clima atual por cidade.

**Não escopo:** cadastro real, colaboração, banco de dados, notificações e previsão estendida.

**Critérios:** detalhar pelo menos dois por funcionalidade.

**Tarefas:** estrutura, login, tarefas, clima, testes, documentação e revisão.

### Transição

“Hoje organizamos o trabalho. Amanhã vamos aprender a transmitir essas regras ao agente.”

---

## Slide 15 — Encerramento do Dia 1

**Tempo:** 6 minutos

### Descrição visual do slide

Fluxo final:

`Ideia → Problema → Escopo → Critérios → Tarefas → Implementação → Validação`

Abaixo, três frases:

- Não começar pelo código.
- Não delegar decisões implícitas.
- Não concluir sem validar.

### Roteiro de fala

“Os três hábitos principais de hoje são:

Primeiro: não começar pelo código.

Segundo: deixar explícitos escopo, não escopo e critérios.

Terceiro: validar localmente antes de considerar uma mudança pronta.

No próximo encontro, vamos transformar esse processo em instruções que o agente consegue seguir de forma consistente.”

---

---

# 5b. Blocos de prática

Os slides descrevem o que é falado. Estes três blocos descrevem o que a turma **produz**. São eles que fazem o dia terminar em um artefato.

## Prática A — Escrever o PRD do próprio projeto

**Bloco 3 · 15 minutos · em duplas**

Cada dupla recebe uma demanda real e pequena da área. O objetivo não é resolvê-la — é **defini-la**.

Distribua [`materiais/dia-1/atividades/pratica-prd-da-dupla.md`](atividades/pratica-prd-da-dupla.md) e peça que preencham as três primeiras seções: **problema**, **escopo** e **não escopo**.

### Como conduzir

1. Dois minutos explicando o formulário. Não mais que isso.
2. Dez minutos de produção. Circule e leia por cima do ombro.
3. Três minutos: peça a **uma** dupla que leia o não escopo em voz alta — não o escopo. O não escopo é onde está o aprendizado.

### O que corrigir circulando

- não escopo vazio, ou com menos de três linhas;
- escopo com mais de seis itens — não é uma primeira versão;
- problema escrito como solução (“preciso de um dashboard” em vez de “levo 20 minutos juntando três planilhas”);
- decisão de tecnologia aparecendo. Corte: **não é necessária nesta folha.**

### Transição para o Bloco 4

“Vocês definiram o que entra. Agora falta a parte que decide se está pronto.”

---

## Prática B — Completar o PRD com critérios e tarefas

**Bloco 5 · 12 minutos · em duplas**

Mesma folha, seções 4 e 5: **critérios de aceite** e **tarefas**.

### Como conduzir

1. Um minuto relembrando as quatro perguntas que revelam critérios esquecidos: campo vazio, erro, recarregar a página, nenhum dado ainda.
2. Oito minutos de produção.
3. Três minutos: cada dupla troca a folha com a dupla vizinha e marca **um** critério que não é verificável.

A troca é o melhor uso destes três minutos. Ler o critério de outra pessoa e não conseguir dizer “sim ou não” ensina mais rápido que qualquer explicação.

### O que corrigir circulando

- critérios com “fácil”, “rápido”, “bonito”, “moderno”, “intuitivo” ou “seguro”;
- nenhum critério de erro;
- menos de dois critérios por funcionalidade;
- tarefas que na verdade são a entrega inteira em uma linha.

### Transição para o Bloco 6

“Vocês têm o que construir e como verificar. Falta onde isso mora.”

---

## Bloco 7 — Versionar o PRD e o primeiro contato com o agente

**17 minutos**

Este bloco substitui o bloco teórico de GitHub. Os conceitos são os mesmos — branch, commit, pull request — mas são **operados**, sobre o arquivo que a dupla escreveu.

### Parte 1 — Versionar (7 minutos)

Com o repositório da dupla aberto:

1. transcrevam o PRD da folha para `docs/prd.md`;
2. criem a branch `docs/prd`;
3. commitem com `docs: adiciona definição do produto`;
4. abram um pull request.

Nomeie cada operação em voz alta enquanto eles fazem. É a diferença entre ouvir “o que é um commit” e ter feito um.

Quem não tiver ambiente pronto trabalha em dupla com quem tiver. Ninguém fica parado resolvendo instalação.

### Parte 2 — Primeiro contato com o agente (10 minutos)

O primeiro contato é **somente leitura**. Não há risco de estragar nada, e o resultado é o melhor fecho possível para o dia.

```text
Leia docs/prd.md. Não altere nenhum arquivo.
Liste:
1. o que ficou ambíguo;
2. o que você teria de decidir sozinho para implementar isso;
3. quais critérios de aceite não são verificáveis.
```

### A pergunta de fechamento

Depois que as respostas voltarem:

> **“O agente encontrou uma lacuna que vocês não tinham visto?”**

Quase sempre a resposta é sim. E aí a mensagem do dia se fecha sozinha: cada lacuna que ficou nessa folha seria uma decisão que o agente tomaria sozinho — e vocês descobriram isso **antes** de existir uma linha de código.

Confirme com a turma que `git status` não mostra nenhuma alteração. O agente leu, analisou e não tocou em nada, porque foi instruído a não tocar. É a primeira demonstração prática de que **restrição escrita é restrição obedecida**.

### Resultado observável do Dia 1

Confira, por dupla, antes de encerrar:

- [ ] `docs/prd.md` commitado, com problema, escopo, não escopo, critérios e tarefas;
- [ ] pelo menos dois critérios por funcionalidade;
- [ ] nenhum critério com “fácil”, “rápido”, “bonito”, “moderno” ou “seguro”;
- [ ] ao menos um critério de caso de erro;
- [ ] a dupla rodou os comandos de validação e sabe reconhecer uma falha;
- [ ] a dupla consegue nomear uma lacuna que o agente apontou no PRD.

Quem fecha os seis está pronto para o Dia 2 — e leva um arquivo, não uma sensação.

# 6. Blocos opcionais para ampliar até 3 horas

## Opção A — Análise de projeto desorganizado — 20 minutos

> A demonstração de vazamento de dados, que era o centro deste bloco, passou para a abertura do Dia 1. O que resta aqui é a análise guiada por perguntas, que continua valendo como bloco de extensão.

Mostrar uma aplicação com:

- arquivo principal muito grande;
- chamadas externas dentro do componente;
- ausência de documentação;
- bibliotecas sem uso;
- armazenamento espalhado.

Pedir que os participantes identifiquem problemas usando apenas perguntas de organização, sem exigir conhecimento de código.

## Opção B — Demonstração completa de GitHub — 20 minutos

Criar uma branch, alterar um arquivo, registrar um commit e abrir um pull request pela interface ou pelo agente.

## Opção C — Oficina de critérios de aceite — 20 minutos

Distribuir três funcionalidades vagas:

- filtro de tarefas;
- logout;
- busca de cidade.

Cada grupo escreve três critérios observáveis.

---

# 7. Materiais para entrega aos participantes

- checklist de definição do problema;
- modelo de escopo e não escopo;
- modelo de critérios de aceite;
- fluxo GitHub resumido;
- checklist de definição de concluído;
- lista de comandos locais;
- glossário: repositório, issue, branch, commit, pull request e merge;
- folha de prática do PRD da dupla.

# 8. Indicadores de compreensão

A verificação principal é o artefato: o checklist de resultado observável no fim do Bloco 7. Ele é conferível, ao contrário de uma resposta oral.

Como complemento, verificar se os participantes conseguem responder:

1. O que precisa ser definido antes de pedir código?
2. Qual a diferença entre funcionalidade e critério de aceite?
3. Por que dividir uma entrega em tarefas?
4. Onde o projeto deve manter sua documentação?
5. O que precisa acontecer antes de uma tarefa ser considerada concluída?
