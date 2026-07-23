# Formação prática: desenvolvimento de aplicações com agentes de código

## 1. Objetivo da formação

A formação tem como objetivo ensinar pessoas não desenvolvedoras a utilizar agentes de código de maneira organizada, previsível e segura.

O foco não será aprofundar conceitos de programação, mas estabelecer um processo comum para que aplicações criadas com inteligência artificial:

- tenham um objetivo claramente definido;
- sigam uma estrutura mínima;
- sejam documentadas;
- utilizem controle de versão;
- possam ser entendidas e continuadas por outras pessoas;
- não dependam exclusivamente da conversa mantida com o agente;
- sejam testadas antes de serem consideradas concluídas.

Ao final dos três dias, os participantes deverão ser capazes de:

1. planejar uma aplicação antes de pedir que o agente escreva código;
2. organizar requisitos, tarefas e critérios de aceite;
3. utilizar GitHub para armazenar e versionar o projeto;
4. orientar agentes utilizando prompts e arquivos de instrução;
5. compreender o papel de skills e servidores MCP;
6. escolher um modelo adequado para cada tipo de tarefa;
7. iniciar um projeto utilizando o template oficial da área;
8. desenvolver e testar uma aplicação web simples com apoio de agentes.

---

# Estrutura geral

## Duração

- Duração planejada: **2 horas por dia**.
- Duração máxima: **3 horas por dia**.
- Dias 1 e 2: predominantemente expositivos, com pequenas demonstrações.
- Dia 3: breve introdução e maior parte do tempo dedicada à prática.

## Público

Pessoas que utilizam ou pretendem utilizar agentes de código, mesmo sem formação ou experiência prévia em desenvolvimento de software.

## Abordagem

Os conceitos técnicos deverão ser apresentados de maneira aplicada, evitando aprofundamento excessivo em sintaxe, algoritmos ou detalhes internos das ferramentas.

O treinamento deve priorizar perguntas como:

- O que preciso definir antes de começar?
- Como saber se o agente entendeu corretamente?
- Como evitar que cada projeto tenha uma estrutura diferente?
- Como registrar as decisões tomadas?
- Como continuar um projeto criado por outra pessoa?
- Como verificar se a aplicação realmente funciona?

---

# Dia 1 — Como organizar um projeto antes de gerar código

## Objetivo do dia

Apresentar um processo simples para transformar uma ideia em um projeto organizado, evitando que o agente comece a programar sem contexto, escopo ou padrão definido.

## Duração sugerida

**2 horas**

| Tempo  | Conteúdo                                                  |
| ------ | --------------------------------------------------------- |
| 20 min | Por que projetos gerados por agentes ficam desorganizados |
| 35 min | Como transformar uma ideia em um plano                    |
| 25 min | GitHub, repositórios e versionamento                      |
| 25 min | Estrutura de projeto, documentação e modularização        |
| 15 min | Testes locais e definição de concluído                    |

---

## 1. O problema de começar diretamente pelo código

Apresentar exemplos de solicitações inadequadas:

> Crie um sistema de tarefas completo.

> Faça uma aplicação moderna para minha equipe.

> Crie um login e um dashboard.

Explicar que essas solicitações permitem que o agente tome decisões importantes sem supervisão, como:

- tecnologia utilizada;
- estrutura de pastas;
- arquitetura;
- bibliotecas;
- aparência;
- armazenamento dos dados;
- regras de negócio;
- critérios de conclusão.

O agente pode produzir uma aplicação funcional, mas difícil de manter, testar ou continuar.

### Princípio central

> Primeiro definimos o problema e o processo. Depois pedimos a implementação.

---

## 2. Processo simplificado de desenvolvimento

Todo projeto deverá seguir cinco etapas.

### Etapa 1 — Definir o problema

Responder:

- Para quem a aplicação será criada?
- Qual problema ela resolve?
- Qual é o resultado esperado?
- O que não será desenvolvido neste momento?

### Etapa 2 — Definir as funcionalidades

Exemplo para uma aplicação de tarefas:

- realizar login;
- visualizar tarefas;
- criar tarefa;
- concluir tarefa;
- excluir tarefa;
- visualizar informações meteorológicas.

### Etapa 3 — Definir critérios de aceite

Critérios de aceite descrevem como saberemos que algo funciona.

Exemplo:

- o usuário consegue criar uma tarefa preenchendo um título;
- tarefas sem título não são aceitas;
- uma tarefa pode ser marcada como concluída;
- as tarefas permanecem disponíveis após atualizar a página;
- uma mensagem é exibida quando a consulta meteorológica falha.

### Etapa 4 — Dividir em tarefas menores

Em vez de pedir a aplicação inteira:

1. criar estrutura inicial;
2. criar tela de login;
3. simular autenticação;
4. criar lista de tarefas;
5. permitir criação de tarefas;
6. permitir conclusão e exclusão;
7. integrar dados meteorológicos;
8. revisar e testar a aplicação;
9. atualizar documentação.

### Etapa 5 — Implementar, revisar e testar

Para cada tarefa:

1. pedir um plano ao agente;
2. revisar o plano;
3. autorizar a implementação;
4. executar a aplicação;
5. testar o comportamento;
6. revisar os arquivos alterados;
7. registrar a alteração no Git.

---

## 3. GitHub e versionamento

O GitHub deverá ser apresentado como o local oficial onde o projeto fica armazenado e organizado.

### Conceitos essenciais

#### Repositório

É a pasta oficial do projeto, com código, documentos e histórico de alterações.

#### Commit

É um registro de uma alteração realizada.

Exemplos:

```text
feat: adiciona tela de login
feat: adiciona criação de tarefas
fix: corrige erro ao excluir tarefa
docs: atualiza instruções de execução
```

#### Branch

É uma linha de trabalho separada utilizada para desenvolver uma funcionalidade sem alterar imediatamente a versão principal.

Exemplos:

```text
feat/login
feat/todo-list
feat/weather
```

#### Pull request

É o momento em que uma alteração é apresentada para revisão antes de entrar na versão principal.

### Fluxo simplificado

```text
Criar tarefa
→ Criar branch
→ Pedir implementação ao agente
→ Testar localmente
→ Registrar commits
→ Abrir pull request
→ Revisar
→ Integrar na branch principal
```

O treinamento não deverá aprofundar comandos avançados de Git. O objetivo é que os participantes entendam o processo e consigam utilizar as operações básicas por meio da interface da ferramenta ou do próprio agente.

---

## 4. Documentação mínima

Todo projeto deverá conter:

### `README.md`

Explica:

- o que é o projeto;
- qual problema resolve;
- como instalar;
- como executar;
- quais funcionalidades existem;
- quais limitações são conhecidas.

### `AGENTS.md`

Contém as regras que os agentes devem seguir ao trabalhar no projeto.

### `CLAUDE.md`

Contém orientações específicas para o Claude Code, quando utilizado.

### `docs/architecture.md`

Registra:

- organização das pastas;
- responsabilidades das principais partes;
- decisões técnicas;
- limites entre funcionalidades.

### `docs/tasks/`

Pode conter o planejamento das funcionalidades e tarefas.

---

## 5. Modularização para pessoas não desenvolvedoras

Modularização deverá ser explicada como:

> Separar a aplicação em partes menores, cada uma responsável por uma função.

Exemplo:

```text
src/
├── app/
├── features/
│   ├── auth/
│   ├── todos/
│   └── weather/
└── shared/
```

- `auth`: login e sessão;
- `todos`: tarefas;
- `weather`: informações meteorológicas;
- `shared`: elementos utilizados por mais de uma funcionalidade;
- `app`: estrutura geral da aplicação.

### Regra simples

Cada funcionalidade deverá possuir sua própria pasta.

Evitar:

```text
components/
hooks/
services/
pages/
utils/
```

como única organização do projeto, pois essa estrutura espalha uma mesma funcionalidade por várias pastas.

---

## 6. Bons princípios para o dia a dia

Os participantes deverão aplicar as seguintes regras:

- pedir uma funcionalidade por vez;
- evitar alterações sem relação com a tarefa;
- não permitir instalação de bibliotecas sem justificativa;
- não colocar senhas ou tokens no código;
- manter arquivos pequenos e com finalidade clara;
- registrar decisões importantes;
- revisar o que o agente alterou;
- executar a aplicação após cada mudança relevante;
- não considerar uma tarefa concluída apenas porque o agente afirmou que terminou.

---

## 7. Testes locais

Neste momento, o treinamento não abordará integração contínua.

O foco será ensinar os participantes a validar localmente:

- se a aplicação inicia;
- se não existem erros visíveis;
- se a funcionalidade atende aos critérios de aceite;
- se os testes automatizados existentes passam;
- se uma funcionalidade não quebrou outra.

### Comandos esperados

```bash
npm run dev
npm run test
npm run lint
npm run build
```

Não será necessário aprofundar como os testes são programados. O participante deverá entender:

- para que servem;
- quando devem ser executados;
- como identificar falhas;
- como pedir ao agente para corrigir ou ampliar os testes.

### Definição de concluído

Uma tarefa está concluída quando:

- atende aos critérios de aceite;
- funciona localmente;
- os testes passam;
- não apresenta erros de lint ou build;
- a documentação necessária foi atualizada;
- as alterações foram registradas no Git.

---

# Dia 2 — Como orientar e configurar agentes de código

## Objetivo do dia

Ensinar como fornecer instruções claras aos agentes, utilizar contexto persistente e compreender recursos como skills, MCP, modelos e níveis de raciocínio.

## Duração sugerida

**2 horas**

| Tempo  | Conteúdo                                       |
| ------ | ---------------------------------------------- |
| 20 min | Como agentes trabalham e por que cometem erros |
| 30 min | Estrutura de prompts eficientes                |
| 25 min | `AGENTS.md` e `CLAUDE.md`                      |
| 25 min | Skills: o que são e como utilizar              |
| 15 min | Servidores MCP                                 |
| 5 min  | Como escolher modelo e raciocínio              |

---

## 1. Como agentes trabalham

Apresentar o seguinte ciclo:

```text
Receber contexto
→ Analisar arquivos
→ Criar plano
→ Alterar código
→ Executar comandos
→ Revisar o resultado
```

Explicar que agentes podem cometer erros quando:

- recebem pouco contexto;
- a solicitação é ampla;
- não conhecem as regras do projeto;
- tentam resolver muitas funcionalidades ao mesmo tempo;
- não executam testes;
- não revisam as próprias alterações;
- assumem requisitos que não foram informados.

### Processo recomendado

```text
Analisar
→ Planejar
→ Implementar
→ Testar
→ Revisar
```

---

## 2. Prompts eficientes

Utilizar um modelo simples de prompt.

```text
Contexto
Objetivo
Escopo
Fora do escopo
Restrições
Critérios de aceite
Etapas esperadas
Validação
```

### Exemplo

```text
Contexto:
Estamos desenvolvendo uma aplicação web de tarefas.
Leia AGENTS.md e docs/architecture.md antes de começar.

Objetivo:
Permitir que o usuário crie e conclua tarefas.

Escopo:
- campo para título;
- botão para criar;
- lista de tarefas;
- ação para concluir.

Fora do escopo:
- edição;
- categorias;
- compartilhamento;
- integração com backend.

Restrições:
- não instalar novas bibliotecas;
- seguir a estrutura atual;
- não alterar a funcionalidade de login.

Critérios de aceite:
- não permitir tarefa vazia;
- exibir a tarefa criada;
- permitir marcar como concluída;
- manter os dados após atualizar a página.

Etapas:
1. Analise o projeto.
2. Apresente um plano.
3. Implemente somente após validar o plano.
4. Execute testes, lint e build.
5. Resuma as alterações realizadas.
```

### Solicitações que devem ser evitadas

```text
Melhore o projeto.
```

```text
Crie tudo o que for necessário.
```

```text
Faça uma aplicação profissional.
```

```text
Corrija todos os problemas que encontrar.
```

Essas instruções deixam o escopo aberto e aumentam o risco de mudanças desnecessárias.

---

## 3. Arquivos de instrução

### `AGENTS.md`

Arquivo principal com regras gerais para agentes.

Deverá conter:

- estrutura do projeto;
- comandos disponíveis;
- regras de organização;
- processo obrigatório;
- limitações;
- política de testes;
- definição de concluído.

### `CLAUDE.md`

Arquivo utilizado para orientar o Claude Code.

Deverá indicar:

- quais documentos devem ser lidos;
- onde estão as skills;
- como iniciar uma tarefa;
- quais comandos executar;
- quais alterações exigem planejamento prévio.

### Exemplo de regra

```markdown
Antes de alterar código:

1. Leia os arquivos de instrução.
2. Analise os arquivos relacionados.
3. Apresente um plano.
4. Não altere funcionalidades fora do escopo.
5. Execute testes, lint e build.
6. Revise o diff final.
```

---

## 4. Skills

Skills são instruções reutilizáveis para tarefas específicas.

Em vez de explicar novamente como planejar uma funcionalidade em cada conversa, o procedimento pode ser armazenado em uma skill.

### Skills recomendadas

| Skill                  | Uso                                |
| ---------------------- | ---------------------------------- |
| `plan-feature`         | Planejar uma funcionalidade        |
| `implement-feature`    | Implementar uma tarefa planejada   |
| `review-changes`       | Revisar alterações                 |
| `generate-tests`       | Criar ou atualizar testes          |
| `update-documentation` | Atualizar documentação             |
| `prepare-pull-request` | Preparar descrição de pull request |
| `accessibility-review` | Verificar acessibilidade básica    |

### Estrutura

```text
skills/
└── plan-feature/
    ├── SKILL.md
    └── references/
```

### Exemplo simplificado

```markdown
---
name: plan-feature
description: Planeja uma nova funcionalidade antes da implementação.
---

# Instruções

1. Leia AGENTS.md.
2. Entenda o objetivo da funcionalidade.
3. Identifique arquivos envolvidos.
4. Liste requisitos e restrições.
5. Proponha tarefas pequenas.
6. Liste riscos.
7. Não altere código.

# Resultado esperado

- resumo;
- requisitos;
- plano;
- tarefas;
- riscos;
- critérios de validação.
```

### Como utilizar

O participante deverá aprender a solicitar:

```text
Use a skill plan-feature para planejar esta funcionalidade.
```

Ou:

```text
Execute a revisão utilizando a skill review-changes.
```

O treinamento não precisa aprofundar automação de distribuição de skills. O foco será compreender como utilizá-las e como alterar um `SKILL.md`.

---

## 5. Servidores MCP

MCP deverá ser explicado como uma forma de permitir que o agente acesse ferramentas externas.

Exemplos:

- GitHub;
- banco de dados;
- arquivos;
- ferramentas de gestão;
- documentação;
- sistemas internos.

### Analogia

> O agente é a pessoa executando o trabalho. O servidor MCP é uma ferramenta ou acesso adicional entregue a ela.

### Regras de segurança

- instalar somente servidores confiáveis;
- verificar quais permissões são solicitadas;
- começar com acesso de leitura;
- não compartilhar credenciais em prompts;
- utilizar variáveis de ambiente;
- evitar acesso amplo quando um acesso restrito for suficiente;
- confirmar ações que alterem ou removam informações.

### Demonstração sugerida

Realizar uma demonstração simples:

1. instalar ou configurar um servidor MCP;
2. listar as ferramentas disponíveis;
3. executar uma consulta;
4. mostrar quais dados foram acessados;
5. explicar como remover ou revogar o acesso.

---

## 6. Escolha de modelo e raciocínio

Apresentar uma regra prática.

| Tarefa                                         | Capacidade recomendada                      |
| ---------------------------------------------- | ------------------------------------------- |
| Renomear, formatar ou documentar               | Modelo rápido, raciocínio baixo             |
| Criar componente simples                       | Modelo intermediário, raciocínio médio      |
| Implementar funcionalidade com vários arquivos | Modelo mais capaz, raciocínio médio ou alto |
| Planejar arquitetura                           | Modelo mais capaz, raciocínio alto          |
| Investigar erro difícil                        | Modelo mais capaz, raciocínio alto          |
| Revisar alterações simples                     | Modelo intermediário                        |
| Revisar segurança ou decisões críticas         | Modelo mais capaz e revisão humana          |

### Regra geral

Quanto maior a ambiguidade, o impacto e a quantidade de arquivos envolvidos, maior deverá ser a capacidade de raciocínio utilizada.

---

# Dia 3 — Construção prática de uma aplicação

## Objetivo do dia

Criar uma aplicação web utilizando o repositório-template e aplicando o processo apresentado nos dias anteriores.

## Duração

**2 a 3 horas**

| Tempo  | Atividade                               |
| ------ | --------------------------------------- |
| 15 min | Apresentação do exercício e do template |
| 20 min | Criação do projeto e planejamento       |
| 30 min | Fluxo de login simulado                 |
| 45 min | Lista de tarefas                        |
| 30 min | Integração meteorológica                |
| 20 min | Testes, revisão e documentação          |
| 10 min | Apresentação dos resultados             |

Caso existam apenas duas horas disponíveis, a edição e exclusão de tarefas poderão ser tratadas como atividades opcionais.

---

## Aplicação proposta

Nome sugerido:

```text
TaskWeather
```

A aplicação terá três funcionalidades principais.

### 1. Login simulado

- formulário de login;
- usuário e senha fake;
- mensagem de erro;
- sessão local;
- logout;
- nenhuma autenticação real.

Exemplo de credenciais:

```text
Usuário: demo@empresa.com
Senha: demo123
```

### 2. Lista de tarefas

Funcionalidades obrigatórias:

- criar tarefa;
- listar tarefas;
- concluir tarefa;
- manter tarefas após atualizar a página;
- exibir estado vazio.

Funcionalidades opcionais:

- editar;
- excluir;
- filtrar por situação.

### 3. Widget meteorológico

- informar uma cidade;
- consultar dados de uma API gratuita;
- exibir temperatura;
- exibir condição atual;
- mostrar carregamento;
- mostrar mensagem de erro.

A integração deverá utilizar uma API que não exija backend ou armazenamento de credenciais, como Open-Meteo.

---

## Fluxo prático do participante

### Etapa 1 — Criar o projeto

1. Criar um novo repositório a partir do template oficial.
2. Clonar ou abrir o repositório no agente.
3. Instalar as dependências.
4. Executar a aplicação.
5. Ler `README.md`, `AGENTS.md` e `CLAUDE.md`.

### Etapa 2 — Planejar

Solicitar ao agente:

```text
Use a skill plan-feature para analisar o exercício e dividir a implementação em tarefas pequenas. Não altere arquivos.
```

Revisar:

- funcionalidades;
- sequência;
- arquivos afetados;
- riscos;
- critérios de aceite.

### Etapa 3 — Implementar o login

```text
Implemente apenas o fluxo de autenticação simulada descrito no planejamento.

Não implemente tarefas ou clima.
Execute os testes locais ao finalizar.
```

Depois:

- iniciar aplicação;
- testar login correto;
- testar login incorreto;
- testar logout;
- atualizar a página;
- revisar alterações.

### Etapa 4 — Implementar tarefas

```text
Implemente apenas a criação, listagem e conclusão de tarefas.

Utilize armazenamento local.
Não altere a autenticação.
Não implemente recursos opcionais.
```

Depois:

- criar tarefa;
- tentar criar tarefa vazia;
- concluir tarefa;
- atualizar página;
- confirmar persistência.

### Etapa 5 — Integrar clima

```text
Implemente a consulta meteorológica utilizando a API definida.

Inclua estados de carregamento, sucesso e erro.
Não altere login ou tarefas.
```

### Etapa 6 — Revisar

Solicitar:

```text
Use a skill review-changes.

Verifique:
- alterações fora do escopo;
- código duplicado;
- erros de organização;
- ausência de testes;
- problemas de acessibilidade;
- documentação desatualizada.
```

### Etapa 7 — Validar

Executar:

```bash
npm run test
npm run lint
npm run build
```

### Etapa 8 — Registrar

- criar commits;
- abrir pull request;
- explicar o que foi desenvolvido;
- informar como testar;
- registrar limitações.

---

# Repositório-template da área

## Objetivo

Fornecer um ponto de partida comum para novos projetos, reduzindo decisões repetidas e evitando que cada agente crie uma estrutura diferente.

## Escopo inicial

O template deverá ser direcionado prioritariamente a aplicações web com foco em front-end.

Esse tipo de projeto é mais adequado para o início porque:

- funciona em diferentes plataformas;
- pode ser aberto em qualquer navegador moderno;
- não exige loja de aplicativos;
- não exige emuladores;
- possui menos dependências específicas de ambiente;
- permite publicação simples;
- facilita a demonstração;
- possui grande compatibilidade com agentes de código.

O template não deverá tentar atender, neste primeiro momento:

- aplicativos móveis nativos;
- sistemas desktop nativos;
- backends complexos;
- microsserviços;
- infraestrutura em nuvem;
- aplicações com autenticação real;
- dados sensíveis;
- sistemas críticos.

---

## Stack recomendada

- React;
- TypeScript;
- Vite;
- CSS Modules ou CSS convencional;
- Vitest;
- React Testing Library;
- ESLint;
- Prettier.

Playwright poderá ser adicionado futuramente, quando a equipe já estiver confortável com testes locais básicos.

---

## Estrutura recomendada

```text
web-project-template/
├── .agents/
│   └── skills/
├── .claude/
│   └── skills/
├── .github/
│   ├── ISSUE_TEMPLATE/
│   └── pull_request_template.md
├── docs/
│   ├── architecture.md
│   ├── development-process.md
│   ├── testing.md
│   ├── decisions/
│   └── tasks/
├── skills/
│   ├── plan-feature/
│   ├── implement-feature/
│   ├── review-changes/
│   ├── generate-tests/
│   ├── update-documentation/
│   └── prepare-pull-request/
├── src/
│   ├── app/
│   ├── features/
│   ├── shared/
│   ├── test/
│   └── main.tsx
├── .editorconfig
├── .env.example
├── .gitignore
├── .nvmrc
├── AGENTS.md
├── CLAUDE.md
├── CONTRIBUTING.md
├── README.md
├── eslint.config.js
├── package.json
├── tsconfig.json
├── vite.config.ts
└── vitest.config.ts
```

---

## Scripts essenciais

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "typecheck": "tsc --noEmit",
    "test": "vitest run",
    "test:watch": "vitest",
    "validate": "npm run lint && npm run typecheck && npm run test && npm run build"
  }
}
```

---

## Skills iniciais

Para não sobrecarregar o template, a primeira versão deverá conter apenas seis skills.

### `plan-feature`

Transforma uma solicitação em plano, tarefas e critérios.

### `implement-feature`

Orienta a implementação controlada de uma tarefa.

### `review-changes`

Revisa arquivos alterados e procura problemas.

### `generate-tests`

Cria testes para comportamentos implementados.

### `update-documentation`

Atualiza documentos afetados por uma mudança.

### `prepare-pull-request`

Gera um resumo das alterações e instruções de teste.

---

# Critérios de sucesso da formação

Ao final, o participante deverá demonstrar que consegue:

- explicar o objetivo do projeto antes de gerar código;
- dividir uma funcionalidade em tarefas menores;
- utilizar um repositório-template;
- entender a finalidade de branch, commit e pull request;
- escrever um prompt com contexto e critérios de aceite;
- utilizar um arquivo de instruções do projeto;
- utilizar pelo menos uma skill;
- executar a aplicação localmente;
- executar testes, lint e build;
- revisar as mudanças realizadas pelo agente;
- registrar limitações e próximos passos.

O objetivo não será avaliar qualidade avançada de programação, mas a capacidade de conduzir um processo organizado com apoio dos agentes.

---

# Preparação do instrutor

Antes da formação:

1. criar o repositório-template;
2. configurar a estrutura inicial;
3. criar `AGENTS.md` e `CLAUDE.md`;
4. criar as seis skills iniciais;
5. criar o projeto-base em React e TypeScript;
6. configurar testes, lint e build locais;
7. criar templates simples de issue e pull request;
8. testar o projeto em Windows e macOS;
9. definir a versão de Node utilizada;
10. validar a API meteorológica;
11. preparar as credenciais fake;
12. criar uma versão final da aplicação para referência;
13. criar uma versão propositalmente desorganizada para demonstração;
14. preparar prompts ruins e suas versões corrigidas;
15. garantir que todos tenham acesso ao GitHub e ao agente utilizado.

---

# Resultado esperado

A formação deverá estabelecer um padrão mínimo para projetos criados com agentes:

```text
Ideia
→ Planejamento
→ Repositório-template
→ Tarefas pequenas
→ Implementação orientada
→ Testes locais
→ Revisão
→ Documentação
→ Versionamento
```

O principal resultado não será a aplicação criada no terceiro dia, mas a adoção de um processo comum que possa ser reutilizado no trabalho cotidiano.
