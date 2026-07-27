# Referências — Dia 1

Fontes para aprofundar processo, versionamento, organização de projeto e validação local. Todas oficiais, e as em português foram priorizadas.

## Para enviar à turma antes da sessão

Três leituras curtas, nesta ordem. São o mínimo suficiente para acompanhar o dia.

| Recurso | Por que este |
| ------- | ------------ |
| [Olá, Mundo](https://docs.github.com/pt/get-started/start-your-journey/hello-world) — GitHub Docs PT | Repositório, branch, commit e pull request num roteiro visual, sem jargão. É o melhor material introdutório para quem nunca usou GitHub. |
| [Introdução ao GitHub Desktop](https://docs.github.com/pt/desktop/overview/getting-started-with-github-desktop) — GitHub Docs PT | Permite operar Git por interface, sem terminal. Reduz a barreira para quem não programa. |
| [Primeiros passos com o Git](https://docs.github.com/pt/get-started/learning-to-code/getting-started-with-git) — GitHub Docs PT | Conecta a ideia de "máquina do tempo do código" às ações do dia a dia. |

## Por bloco do dia

### Slides 8 e 9 — GitHub e versionamento

- [Guia de início rápido para repositórios](https://docs.github.com/pt/repositories/creating-and-managing-repositories/quickstart-for-repositories) — GitHub Docs PT. Criar repositório e primeiro commit, sem linha de comando.
- [O Básico do Git](https://git-scm.com/book/pt-br/v2/Começando-O-Básico-do-Git) — Pro Git. Working tree, staging e commit explicados de forma didática. Boa fonte para transformar em diagrama no slide.
- [Criar o primeiro repositório usando o GitHub Desktop](https://docs.github.com/pt/desktop/overview/creating-your-first-repository-using-github-desktop) — GitHub Docs PT. Cobre criar branch, editar, commitar, publicar e abrir pull request. Serve de roteiro para o Bloco opcional B.
- [Connecting to your code locally](https://docs.github.com/pt/get-started/start-your-journey/connecting-to-your-code-locally) — GitHub Docs PT. A transição do navegador para a máquina, que é onde o público iniciante costuma travar.

### Slide 10 — Estrutura por funcionalidades

- [Quick Start](https://react.dev/learn) — React Docs. Componentes, props, estado e listas: o núcleo do que os dois projetos de exemplo usam.
- [bulletproof-react](https://github.com/alan2207/bulletproof-react) — alan2207. Arquitetura de referência para React. Não é ponto de partida para iniciantes, mas é boa inspiração de organização de pastas e padrões. Referência do instrutor.

### Slide 12 — Validação local

- [Getting Started](https://vitest.dev/guide/) — Vitest Docs. O runner usado no projeto organizado.
- [React Testing Library — Intro](https://testing-library.com/docs/react-testing-library/intro/) — Testing Library Docs. Sustenta o argumento pedagógico central: **testes devem se parecer com o uso real do software.** Bom para o slide.
- [Getting Started with ESLint](https://eslint.org/docs/latest/use/getting-started) — ESLint Docs. Explica lint como verificação automática de consistência.
- [Install](https://prettier.io/docs/install) — Prettier Docs. O argumento de "deixar a ferramenta cuidar do formato" para evitar discussão de estilo.

### Slide 11 — Documentação mínima

- [Custom instructions with AGENTS.md](https://developers.openai.com/codex/agent-configuration/agents-md) — OpenAI Codex Docs. A fonte oficial sobre o papel do `AGENTS.md`.
- [How Claude remembers your project](https://code.claude.com/docs/en/memory) — Claude Code Docs. O papel do `CLAUDE.md` e do contexto persistente.

## Para embasar a fala do instrutor

A tese do dia — "funcionar não é o mesmo que estar pronto para continuar" — tem respaldo em pesquisa:

- **Contexto de repositório importa para o resultado.** [REPOEXEC](https://arxiv.org/abs/2406.11927) (arXiv, 2024) mostra que dependências entre arquivos e contexto do repositório são decisivos para código gerado ser útil, não apenas sintaticamente correto. É o argumento acadêmico para estrutura e arquivos de instrução.
- **Código funcional não é código sustentável.** Vale conhecer a linha de pesquisa sobre *code smells* em software gerado por IA, que dá respaldo à ênfase em revisão e modularização. Confirme a referência específica antes de citar em slide.

> Para o Dia 1, essas duas fontes são apoio da sua fala, não leitura da turma. O que a turma leva são os três materiais do topo.
