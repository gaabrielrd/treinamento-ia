# Referências — Dia 3

Documentação do stack usado na prática. Deixe estes links à mão: são o que você consulta quando um grupo trava numa dúvida técnica pontual.

## Para enviar à turma antes da sessão

Duas leituras, e nenhuma delas é obrigatória para acompanhar — a prática funciona com os prompts prontos.

| Recurso | Por que este |
| ------- | ------------ |
| [Começar](https://pt.vite.dev/guide/) — Vite Docs PT | Como uma aplicação web sobe, sem detalhe desnecessário de bundler. Em português. |
| [Usando a API Web Storage](https://developer.mozilla.org/pt-BR/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API) — MDN PT-BR | Persistência local de forma concreta. Explica por que os dados sobrevivem ao recarregar — que é um critério de aceite da Etapa 4. |

## Por etapa da prática

### Etapa 1 — Criar e executar o projeto

- [Creating a repository from a template](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template) — GitHub Docs. A experiência de uso do template, que é o primeiro passo dos grupos.
- [Creating a template repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-template-repository) — GitHub Docs. A mecânica de transformar um repositório em template. Necessária se você for preparar o repositório-modelo.
- [Começar](https://pt.vite.dev/guide/) — Vite Docs PT.

### Etapa 3 — Entrada por e-mail

- [Quick Start](https://react.dev/learn) — React Docs. Estado, eventos e formulários.
- [Usando a API Web Storage](https://developer.mozilla.org/pt-BR/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API) — MDN PT-BR. Onde a sessão é guardada.

### Etapa 4 — Lista de tarefas

- [Window.localStorage](https://developer.mozilla.org/pt-BR/docs/Web/API/Window/localStorage) — MDN PT-BR. Referência curta, para consulta rápida. Útil quando um grupo perguntar por que a chave por usuário funciona.
- [TypeScript for JavaScript Programmers](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html) — TypeScript Docs. Mais acessível que o handbook completo. Suficiente para entender as mensagens do editor e do agente.

### Etapa 5 — Widget meteorológico

- [Weather Forecast API](https://open-meteo.com/en/docs) — Open-Meteo Docs. O endpoint de clima atual. Sem SDK, sem chave.
- [Geocoding API](https://open-meteo.com/en/docs/geocoding-api) — Open-Meteo Docs. Converte nome de cidade em coordenadas. É a primeira das duas chamadas.
- [Open-Meteo — página inicial e licença](https://open-meteo.com/) — Open-Meteo. Registra os limites de uso: não exige chave para prototipagem e uso não comercial, mas há limites de requisição e exigência de atribuição. Vale mencionar em voz alta — é um bom exemplo de que "sem chave" não significa "sem condições".
- [Usando Fetch](https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API/Using_Fetch) — MDN PT-BR. Chamadas HTTP no navegador.

### Etapa 6 — Validar e revisar

- [Getting Started](https://vitest.dev/guide/) — Vitest Docs.
- [Example Quickstart](https://testing-library.com/docs/react-testing-library/example-intro/) — Testing Library Docs. Exemplo mínimo e anotado. Útil se um grupo precisar de um teste do zero.
- [React Testing Library — Intro](https://testing-library.com/docs/react-testing-library/intro/) — Testing Library Docs. O princípio: testar o comportamento observável, como uma pessoa usando o software.

## Para quem quiser continuar depois

- [Tic-Tac-Toe Tutorial](https://react.dev/learn/tutorial-tic-tac-toe) — React Docs. Não é uma lista de tarefas, mas é o melhor tutorial oficial para consolidar estado, eventos e composição de componentes.
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html) — TypeScript Docs. Para quem quiser entender por que os tipos evitam erro.
- [starter-workflows](https://github.com/actions/starter-workflows) — GitHub Actions. O treinamento não cobre CI, mas é o caminho natural de evolução do template quando a área quiser validação automática no pull request.
