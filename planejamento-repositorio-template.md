# Planejamento de implementação — Repositório-template para projetos web com agentes

## 1. Nome provisório

`web-project-template`

O nome pode ser adaptado ao padrão da organização, mas deve indicar claramente que o repositório é um template para aplicações web.

## 2. Objetivo

Fornecer um ponto de partida oficial para novos projetos da área, reduzindo decisões repetidas e garantindo um padrão mínimo de:

- arquitetura;
- estrutura de pastas;
- documentação;
- instruções para agentes;
- skills;
- scripts;
- testes locais;
- versionamento;
- revisão.

O template deve permitir que uma pessoa não desenvolvedora inicie um projeto com apoio de agentes sem precisar decidir sozinha toda a base técnica.

## 3. Princípios

1. **Simplicidade:** a primeira versão deve conter apenas o necessário.
2. **Web primeiro:** priorizar aplicações web com foco em front-end.
3. **Sem backend obrigatório:** o template deve funcionar sem infraestrutura adicional.
4. **Sem credenciais:** o projeto inicial não deve exigir segredos.
5. **Organização por funcionalidades:** facilitar a localização do código.
6. **Agentes orientados por arquivos:** regras importantes permanecem no repositório.
7. **Validação local:** lint, tipagem, testes e build executáveis por um único comando.
8. **Dependências controladas:** poucas bibliotecas e justificativa para novas inclusões.
9. **Documentação curta e atualizada:** evitar documentos extensos e abandonados.
10. **Evolução incremental:** recursos avançados entram apenas quando houver necessidade.

## 4. Público e casos de uso

### Público principal

- pessoas não desenvolvedoras;
- analistas;
- designers;
- profissionais de produto;
- equipes que prototipam ferramentas internas;
- pessoas que utilizam agentes de código para criar aplicações pequenas.

### Projetos mais indicados

- ferramentas internas simples;
- dashboards leves;
- formulários;
- protótipos;
- páginas de consulta;
- pequenas aplicações CRUD locais;
- demonstrações;
- interfaces que consomem APIs públicas ou internas controladas.

### Projetos não indicados para a primeira versão

- aplicativos móveis nativos;
- aplicações desktop nativas;
- backends complexos;
- microsserviços;
- sistemas financeiros;
- aplicações com dados sensíveis;
- autenticação real;
- infraestrutura de produção;
- processamento intensivo;
- sistemas com alta criticidade.

## 5. Stack recomendada

### Base

- React;
- TypeScript;
- Vite;
- npm;
- CSS Modules ou CSS convencional.

### Qualidade

- ESLint;
- Prettier;
- Vitest;
- React Testing Library;
- TypeScript em modo estrito.

### Recursos que ficam para uma versão futura

- Playwright;
- CI;
- deploy automatizado;
- Storybook;
- biblioteca de componentes externa;
- gerenciamento global de estado;
- framework de backend;
- banco de dados;
- autenticação;
- observabilidade.

A ausência desses recursos na primeira versão é intencional. O template deve ser fácil de entender e executar.

## 6. Arquitetura inicial

### Organização por funcionalidades

```text
src/
├── app/
│   ├── App.tsx
│   ├── providers/
│   └── routes/
├── features/
│   └── example/
│       ├── components/
│       ├── model/
│       ├── services/
│       ├── tests/
│       └── index.ts
├── shared/
│   ├── components/
│   ├── hooks/
│   ├── lib/
│   ├── styles/
│   └── types/
├── test/
│   ├── setup.ts
│   └── render.tsx
└── main.tsx
```

### Responsabilidades

#### `src/app`

Composição geral da aplicação:

- ponto principal;
- providers;
- rotas;
- layout global;
- configuração de inicialização.

Não deve conter regras específicas de negócio.

#### `src/features`

Cada pasta representa uma capacidade reconhecível do produto.

Exemplos:

- `auth`;
- `todos`;
- `weather`;
- `reports`;
- `settings`.

Uma feature pode conter componentes, regras, serviços e testes próprios.

#### `src/shared`

Elementos reutilizáveis e neutros em relação ao negócio:

- botões;
- campos;
- utilitários;
- tipos genéricos;
- hooks realmente compartilhados;
- estilos comuns.

Não utilizar `shared` como local genérico para qualquer arquivo.

#### `src/test`

Configuração e utilitários de testes usados por várias features.

## 7. Regras arquiteturais

1. Cada funcionalidade deve possuir sua própria pasta.
2. Features não devem importar arquivos internos de outras features.
3. Toda feature deve expor sua interface pública por `index.ts`.
4. Chamadas HTTP devem ficar em serviços ou clientes.
5. Acesso a `localStorage` deve ficar em adaptadores ou repositórios.
6. Componentes de apresentação não devem conhecer detalhes de persistência.
7. `shared` deve permanecer neutro em relação ao domínio.
8. Não criar abstrações sem necessidade concreta.
9. Não instalar gerenciador global de estado por padrão.
10. Não instalar biblioteca de requisições se `fetch` for suficiente.
11. Não colocar credenciais ou tokens no código.
12. Estados de loading, vazio, sucesso e erro devem ser explícitos.
13. Toda mudança de comportamento deve considerar testes.
14. Toda decisão relevante deve atualizar documentação ou ADR.

## 8. Estrutura completa do repositório

```text
web-project-template/
├── .agents/
│   └── skills/
├── .claude/
│   ├── skills/
│   └── settings.example.json
├── .github/
│   ├── ISSUE_TEMPLATE/
│   │   ├── feature.yml
│   │   ├── bug.yml
│   │   └── technical-task.yml
│   └── pull_request_template.md
├── docs/
│   ├── decisions/
│   │   └── 0001-initial-architecture.md
│   ├── tasks/
│   │   └── README.md
│   ├── architecture.md
│   ├── development-process.md
│   ├── testing.md
│   ├── agents.md
│   └── integrations.md
├── scripts/
│   ├── setup.mjs
│   ├── sync-skills.mjs
│   └── check-skills.mjs
├── skills/
│   ├── plan-feature/
│   │   └── SKILL.md
│   ├── implement-feature/
│   │   └── SKILL.md
│   ├── review-changes/
│   │   └── SKILL.md
│   ├── generate-tests/
│   │   └── SKILL.md
│   ├── update-documentation/
│   │   └── SKILL.md
│   └── prepare-pull-request/
│       └── SKILL.md
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
├── index.html
├── package-lock.json
├── package.json
├── prettier.config.mjs
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── vitest.config.ts
```

## 9. Estratégia para skills

### Fonte oficial

A pasta `/skills` será a fonte canônica.

As pastas:

- `.agents/skills`;
- `.claude/skills`;

serão geradas por script.

Evitar editar as cópias diretamente.

### Scripts

#### `npm run sync:skills`

- remove cópias antigas;
- copia cada skill da pasta canônica;
- mantém a mesma estrutura;
- informa quais skills foram sincronizadas.

#### `npm run check:skills`

- verifica se todas as skills possuem `SKILL.md`;
- valida os metadados mínimos;
- compara a fonte com as cópias;
- retorna erro se houver divergência.

### Motivo

Essa abordagem evita manter manualmente três versões de cada skill e reduz divergência entre ferramentas.

## 10. Skills da primeira versão

### 10.1 `plan-feature`

**Finalidade:** transformar uma solicitação em plano antes da implementação.

**Quando usar:**

- nova funcionalidade;
- mudança que envolve vários arquivos;
- demanda ambígua;
- integração externa;
- alteração arquitetural.

**Processo:**

1. ler instruções e arquitetura;
2. identificar objetivo;
3. listar requisitos e lacunas;
4. declarar suposições;
5. identificar módulos;
6. propor solução mínima;
7. dividir em tarefas;
8. listar riscos;
9. não alterar arquivos.

**Saída:**

- resumo;
- requisitos;
- não escopo;
- suposições;
- proposta;
- tarefas;
- riscos;
- critérios de aceite.

### 10.2 `implement-feature`

**Finalidade:** implementar uma tarefa já planejada.

**Regras:**

- confirmar critérios;
- declarar arquivos;
- limitar alterações;
- não expandir escopo;
- reutilizar padrões;
- adicionar testes;
- executar validações;
- revisar diff.

### 10.3 `review-changes`

**Finalidade:** revisar alterações antes de concluir.

**Verificações:**

- critérios;
- escopo;
- arquitetura;
- duplicação;
- dependências;
- erros;
- acessibilidade;
- testes;
- documentação;
- segredos;
- código não utilizado.

**Saída por prioridade:**

- bloqueador;
- importante;
- melhoria;
- observação.

### 10.4 `generate-tests`

**Finalidade:** criar ou atualizar testes com base em comportamento.

**Regras:**

- testar resultado observável;
- evitar testar detalhes internos;
- cobrir sucesso e falha;
- não remover testes;
- manter testes próximos da feature;
- executar a suíte.

### 10.5 `update-documentation`

**Finalidade:** manter documentos coerentes com o código.

**Verificações:**

- comandos;
- variáveis;
- arquitetura;
- funcionalidades;
- limitações;
- decisões;
- integrações.

### 10.6 `prepare-pull-request`

**Finalidade:** preparar uma descrição clara da alteração.

**Saída:**

- contexto;
- objetivo;
- alterações;
- como testar;
- evidências;
- limitações;
- riscos;
- checklist.

## 11. Planejamento do `AGENTS.md`

O arquivo deve ser curto, direto e normativo.

### Seções

1. ordem de leitura;
2. processo obrigatório;
3. arquitetura;
4. escopo;
5. dependências;
6. armazenamento e APIs;
7. testes;
8. documentação;
9. segurança;
10. conclusão.

### Conteúdo-base

```markdown
# Project instructions

## Read first

1. README.md
2. docs/architecture.md
3. docs/development-process.md
4. docs/testing.md

## Required workflow

1. Understand the request and acceptance criteria.
2. Inspect relevant files and existing tests.
3. Present a plan for multi-file changes.
4. Keep changes inside the requested scope.
5. Add or update tests for behavior changes.
6. Run `npm run validate`.
7. Review the final diff.
8. Update affected documentation.

## Architecture

- Organize product capabilities under `src/features`.
- Do not import internal files from another feature.
- Use feature public exports.
- Keep external APIs and browser storage behind services.
- Keep `shared` domain-neutral.
- Do not add abstractions without a demonstrated need.

## Dependencies

- Do not add dependencies without explaining the need.
- Prefer platform APIs and existing dependencies.
- Never commit secrets.

## Completion

A task is complete only when acceptance criteria, tests,
lint, typecheck, build and documentation are satisfied.
```

O conteúdo final deve ser escrito em inglês ou português conforme o padrão da área, mas não misturar idiomas no mesmo arquivo sem necessidade.

## 12. Planejamento do `CLAUDE.md`

### Objetivo

Orientar o Claude Code sem duplicar integralmente o `AGENTS.md`.

### Conteúdo-base

```markdown
# Claude Code project context

Read and follow `AGENTS.md`.

Then read, when relevant:

1. `docs/architecture.md`
2. `docs/development-process.md`
3. `docs/testing.md`
4. the relevant files under `docs/decisions`

Project skills are available under `.claude/skills`.

For multi-file or ambiguous work:

1. inspect the relevant modules;
2. use the planning skill;
3. present the plan;
4. implement one increment at a time;
5. run `npm run validate`;
6. review the final diff.

Do not expand scope, add dependencies, expose secrets,
or change architecture without explaining the need first.
```

## 13. Documentação

### `README.md`

Deve conter:

- objetivo do template;
- quando usar;
- quando não usar;
- pré-requisitos;
- criação de novo projeto;
- instalação;
- execução;
- validação;
- estrutura resumida;
- como usar agentes;
- como criar uma feature;
- como registrar uma decisão;
- limitações.

### `docs/architecture.md`

- princípios;
- árvore;
- responsabilidades;
- regras de dependência;
- acesso a APIs;
- armazenamento;
- estado;
- testes;
- evolução.

### `docs/development-process.md`

- demanda;
- especificação;
- critérios;
- planejamento;
- branch;
- implementação;
- validação;
- commit;
- pull request;
- revisão.

### `docs/testing.md`

- filosofia;
- tipos de teste utilizados;
- localização;
- comandos;
- exemplos;
- o que não testar;
- como tratar falhas.

### `docs/agents.md`

- função de prompts;
- função de arquivos persistentes;
- skills disponíveis;
- como solicitar planejamento;
- como solicitar revisão;
- limites de autonomia.

### `docs/integrations.md`

- regras para APIs;
- variáveis de ambiente;
- CORS;
- erros;
- timeouts;
- dados fake;
- proibição de segredos no front-end.

### ADR inicial

`docs/decisions/0001-initial-architecture.md`

Deve registrar:

- decisão de usar React, TypeScript e Vite;
- organização por features;
- ausência inicial de backend;
- validações locais;
- alternativas consideradas;
- consequências.

## 14. Templates do GitHub

### Feature

Campos:

- contexto;
- problema;
- objetivo;
- escopo;
- não escopo;
- critérios de aceite;
- restrições;
- referências.

### Bug

Campos:

- comportamento atual;
- comportamento esperado;
- passos;
- evidência;
- ambiente;
- impacto.

### Tarefa técnica

Campos:

- contexto;
- objetivo;
- passos;
- arquivos ou módulos;
- riscos;
- critérios de conclusão.

### Pull request

```markdown
## Contexto

## Objetivo

## Alterações

## Como validar

## Evidências

## Fora do escopo

## Limitações e riscos

## Checklist

- [ ] Critérios de aceite atendidos
- [ ] Testes executados
- [ ] Lint executado
- [ ] Typecheck executado
- [ ] Build executado
- [ ] Documentação atualizada
- [ ] Nenhum segredo incluído
- [ ] Diff revisado
```

## 15. Scripts do projeto

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "format": "prettier --write .",
    "format:check": "prettier --check .",
    "typecheck": "tsc --noEmit",
    "test": "vitest run",
    "test:watch": "vitest",
    "sync:skills": "node scripts/sync-skills.mjs",
    "check:skills": "node scripts/check-skills.mjs",
    "validate": "npm run check:skills && npm run format:check && npm run lint && npm run typecheck && npm run test && npm run build"
  }
}
```

## 16. Projeto inicial exibido pelo template

A tela inicial deve ser simples e neutra.

Conteúdo sugerido:

- nome do projeto;
- indicação de que o template está funcionando;
- links internos para documentação;
- lista dos comandos;
- botão ou componente de exemplo mínimo;
- teste simples correspondente.

Evitar manter uma feature de negócio completa, pois ela pode confundir novos projetos.

Alternativa:

- incluir `src/features/example`;
- documentar que a pasta deve ser removida ou renomeada no setup;
- fornecer um script que substitui nome e descrição.

## 17. Script de setup

### Objetivo

Reduzir alterações manuais ao criar um projeto.

### Fluxo

```bash
npm run setup
```

Perguntas:

- nome do projeto;
- descrição;
- nome da organização;
- remover feature de exemplo?
- inicializar documentação?
- sincronizar skills?

Alterações:

- `package.json`;
- título do HTML;
- README;
- metadados;
- arquivos de exemplo;
- execução de `sync:skills`;
- execução final de `validate`.

A primeira versão pode usar um script simples em Node, sem bibliotecas adicionais.

## 18. Estratégia para treinamento

O template oficial deve permanecer genérico.

Para o treinamento, criar uma destas opções:

### Opção recomendada — branch de treinamento

- `main`: template genérico;
- `training/taskweather-starter`: documentação e exercício;
- tags:
  - `training-start`;
  - `checkpoint-auth`;
  - `checkpoint-todos`;
  - `checkpoint-weather`;
  - `training-complete`.

### Alternativa — repositório separado

- `web-project-template`;
- `taskweather-workshop`.

A opção separada evita misturar checkpoints com o template oficial, mas exige manter dois repositórios.

## 19. Plano de implementação por tarefas

### Tarefa 1 — Inicializar o projeto

**Objetivo:** criar a base React, TypeScript e Vite.

**Passos:**

1. inicializar;
2. configurar versão do Node;
3. remover conteúdo padrão;
4. configurar TypeScript estrito;
5. confirmar execução e build.

**Critérios:**

- instalação limpa;
- `npm run dev` funciona;
- `npm run build` funciona;
- nenhum código de demonstração desnecessário.

### Tarefa 2 — Configurar qualidade local

**Objetivo:** configurar lint, formatação, tipagem e testes.

**Passos:**

1. ESLint;
2. Prettier;
3. Vitest;
4. React Testing Library;
5. setup de testes;
6. scripts;
7. comando `validate`.

**Critérios:**

- todos os comandos funcionam;
- existe ao menos um teste;
- uma falha retorna código de erro;
- `validate` executa a sequência completa.

### Tarefa 3 — Criar arquitetura de pastas

**Objetivo:** estabelecer estrutura inicial.

**Passos:**

1. criar `app`;
2. criar `features/example`;
3. criar `shared`;
4. criar `test`;
5. adicionar arquivos de índice;
6. criar exemplo mínimo.

**Critérios:**

- aplicação compila;
- estrutura corresponde à documentação;
- não existe regra de negócio em `app`;
- exemplo pode ser removido sem quebrar a base.

### Tarefa 4 — Criar documentação principal

**Objetivo:** documentar uso e arquitetura.

**Passos:**

1. README;
2. architecture;
3. process;
4. testing;
5. agents;
6. integrations;
7. ADR inicial.

**Critérios:**

- novo usuário consegue executar;
- estrutura e scripts estão corretos;
- não existem comandos inexistentes;
- limitações estão explícitas.

### Tarefa 5 — Criar `AGENTS.md`

**Objetivo:** registrar regras gerais.

**Critérios:**

- curto;
- normativo;
- aponta para documentação;
- exige planejamento para mudanças maiores;
- exige validações;
- proíbe segredos e expansão de escopo.

### Tarefa 6 — Criar `CLAUDE.md`

**Objetivo:** orientar Claude Code.

**Critérios:**

- referencia `AGENTS.md`;
- aponta para `.claude/skills`;
- não contradiz regras gerais;
- define processo de planejamento e validação.

### Tarefa 7 — Implementar skills

**Objetivo:** criar as seis skills iniciais.

**Critérios:**

- cada pasta possui `SKILL.md`;
- metadados válidos;
- finalidade específica;
- saída esperada explícita;
- instruções não conflitam com `AGENTS.md`.

### Tarefa 8 — Sincronizar skills

**Objetivo:** gerar cópias compatíveis.

**Critérios:**

- `sync:skills` copia corretamente;
- `check:skills` detecta divergência;
- cópias não são editadas manualmente;
- funciona em Windows e macOS.

### Tarefa 9 — Criar templates GitHub

**Objetivo:** padronizar tarefas e revisão.

**Critérios:**

- feature, bug e tarefa técnica disponíveis;
- PR possui checklist local;
- linguagem acessível;
- nenhum campo exige conhecimento avançado.

### Tarefa 10 — Criar script de setup

**Objetivo:** personalizar um novo projeto.

**Critérios:**

- altera nome e descrição;
- não quebra JSON;
- pode ser executado mais de uma vez com segurança ou documenta limitação;
- executa sincronização;
- orienta os próximos passos.

### Tarefa 11 — Validar em ambientes

**Objetivo:** reduzir problemas no treinamento.

**Matriz mínima:**

- macOS;
- Windows;
- versão oficial do Node;
- clone limpo;
- criação por template;
- execução com agente.

**Critérios:**

- setup documentado;
- todos os comandos passam;
- caminhos funcionam nos dois sistemas;
- scripts não dependem de shell específico.

### Tarefa 12 — Preparar workshop

**Objetivo:** criar material TaskWeather.

**Passos:**

1. criar exercício;
2. criar solução;
3. criar checkpoints;
4. validar API;
5. preparar fallback fake;
6. testar prompts;
7. criar guia do instrutor.

**Critérios:**

- sessão pode ser concluída em duas horas;
- cada checkpoint é utilizável;
- falha da API não bloqueia;
- não há credenciais reais;
- solução final passa em `validate`.

## 20. Critérios de aceite do template

O template está pronto para primeira adoção quando:

- pode criar um novo repositório pelo GitHub;
- instalação limpa funciona;
- aplicação inicial abre;
- `npm run validate` passa;
- documentação corresponde ao código;
- `AGENTS.md` e `CLAUDE.md` estão presentes;
- seis skills funcionam;
- sincronização de skills funciona;
- templates GitHub estão disponíveis;
- estrutura por features está demonstrada;
- nenhum segredo é necessário;
- funciona em Windows e macOS;
- uma pessoa externa consegue seguir o README;
- um agente consegue resumir corretamente as regras;
- o workshop TaskWeather foi executado com sucesso.

## 21. Governança e manutenção

### Responsável

Definir um mantenedor ou pequeno grupo responsável por:

- aprovar mudanças;
- revisar dependências;
- atualizar versões;
- manter skills;
- validar documentação;
- receber feedback.

### Versionamento

Usar releases do template:

- `v1.0.0`: primeira versão estável;
- `v1.1.0`: novas skills ou melhorias compatíveis;
- `v2.0.0`: mudanças estruturais.

### Frequência de revisão

Revisão trimestral ou quando houver:

- mudança relevante nas ferramentas;
- nova necessidade recorrente;
- falha de segurança;
- dependência descontinuada;
- aprendizado do treinamento.

### Registro de mudanças

Manter `CHANGELOG.md` a partir da primeira versão publicada.

## 22. Melhorias futuras

Somente após adoção da base:

- CI;
- deploy;
- testes E2E;
- skill de acessibilidade;
- skill de segurança;
- MCPs aprovados;
- catálogo de componentes;
- templates para outros tipos de aplicação;
- telemetria de uso;
- atualização automática de dependências;
- gerador de documentação;
- integração com gestão de tarefas.

## 23. Sequência recomendada

```text
Base React
→ Qualidade local
→ Arquitetura
→ Documentação
→ AGENTS.md
→ CLAUDE.md
→ Skills
→ Sincronização
→ Templates GitHub
→ Setup
→ Validação multiplataforma
→ Workshop
→ Release v1.0.0
```

## 24. Resultado esperado

Ao criar um projeto pelo template, o usuário deve encontrar:

- uma aplicação funcional;
- uma estrutura previsível;
- comandos claros;
- documentação mínima;
- regras para agentes;
- procedimentos reutilizáveis;
- validações locais;
- um fluxo de trabalho orientado.

O template deve reduzir a liberdade desnecessária do agente sem impedir a evolução do projeto.
