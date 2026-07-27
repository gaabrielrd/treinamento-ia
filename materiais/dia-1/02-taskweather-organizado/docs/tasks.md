# Divisão do trabalho

A entrega "criar o TaskWeather" foi quebrada em tarefas pequenas. Cada uma tem um objetivo único, cabe em uma sessão de trabalho, altera um conjunto limitado de arquivos e tem critérios próprios.

Este arquivo mostra o resultado do exercício de divisão. Em um projeto real, cada linha viraria uma issue no GitHub e uma branch.

| #   | Tarefa                     | Branch sugerida       | Arquivos principais              | Status    |
| --- | -------------------------- | --------------------- | -------------------------------- | --------- |
| 1   | Preparar projeto e padrões | `chore/setup`         | configurações, `app/`, `shared/` | concluída |
| 2   | Identificação por e-mail   | `feat/login-email`    | `features/auth/`                 | concluída |
| 3   | Criar tarefas              | `feat/todo-list`      | `features/todos/`                | concluída |
| 4   | Concluir e remover tarefas | `feat/todo-complete`  | `features/todos/`                | concluída |
| 5   | Consultar clima            | `feat/weather-widget` | `features/weather/`              | concluída |
| 6   | Revisar e validar          | —                     | todo o projeto                   | concluída |
| 7   | Documentar                 | `docs/initial-docs`   | `README.md`, `docs/`             | concluída |

## Detalhe das tarefas

### 1. Preparar projeto e padrões

Estrutura de pastas, comandos de validação e o componente `Button` compartilhado.
**Pronto quando:** `npm run validate` passa em um projeto ainda sem funcionalidades.

### 2. Identificação por e-mail

Formulário com um único campo, validação do formato do e-mail e sessão guardada no navegador.
**Critérios:** ver "Funcionalidade: identificação por e-mail" em [prd.md](prd.md).

### 3. Criar tarefas

Campo de texto, botão de adicionar, lista na tela, estado vazio e persistência **separada por e-mail**.
**Critérios:** título vazio é rejeitado; a tarefa aparece; a tarefa sobrevive ao recarregar; as tarefas de um e-mail não aparecem para outro.

### 4. Concluir e remover tarefas

Caixa de seleção por tarefa, contagem de pendentes e remoção.
**Critérios:** concluir e reabrir funcionam; a contagem acompanha; remover tira a tarefa da lista.

### 5. Consultar clima

Campo de cidade, serviço de consulta à Open-Meteo e os quatro estados de tela.
**Critérios:** cidade válida mostra temperatura; cidade inexistente e falha de rede mostram mensagem.

### 6. Revisar e validar

Rodar `npm run validate`, conferir cada critério do PRD na tela e revisar a mudança antes de integrar.

### 7. Documentar

`README.md` (como usar), `docs/architecture.md` (como está organizado), `AGENTS.md` e `CLAUDE.md` (regras para agentes).

## Por que dividir assim

- Se algo falha, sabe-se em qual etapa procurar.
- Uma revisão pequena é uma revisão que realmente acontece.
- Se o agente desvia do escopo, o desvio é pequeno e fácil de descartar.
