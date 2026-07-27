# Glossário

Termos que aparecem no dia a dia com agentes de código, em linguagem direta.

## Versionamento

**Repositório** — o projeto inteiro: arquivos, histórico, documentação e tarefas. Costuma ficar no GitHub. É a memória oficial do projeto.

**Issue** — um trabalho a realizar, registrado no repositório. Serve para combinar o que será feito antes de fazer.

**Branch** — uma cópia de trabalho separada. Permite alterar o projeto sem mexer na versão estável. A principal chama-se `main`.

**Commit** — um ponto registrado no histórico, com uma descrição do que mudou. É o "salvar" que fica documentado.

**Pull request (PR)** — pedido para incorporar as mudanças de uma branch. É o momento da revisão: alguém confere antes de entrar na versão principal.

**Merge** — incorporar as mudanças revisadas na `main`.

**Diff** — a lista do que mudou: o que saiu, o que entrou, em quais arquivos. É isso que se revisa em um pull request.

**Clone** — baixar o repositório para a sua máquina.

**Conflito** — duas pessoas mudaram a mesma linha e o Git não sabe qual manter. Alguém precisa decidir.

## Projeto e organização

**Template** — projeto-base já organizado, usado como ponto de partida para novos projetos. Evita que cada projeto invente a própria estrutura.

**Modularizar** — separar a aplicação em partes menores, cada uma com uma responsabilidade reconhecível.

**Feature** — uma capacidade do produto (login, tarefas, clima). Na nossa estrutura, cada uma tem sua própria pasta.

**Componente** — um pedaço de tela reutilizável (um botão, um formulário, uma lista).

**Serviço** — o pedaço de código que conversa com o mundo externo: uma API, o armazenamento do navegador. Fica separado da tela de propósito.

**Dependência (ou biblioteca)** — código de terceiros que o projeto usa. Cada uma adiciona peso e risco; por isso não se instala sem justificar.

**API** — a forma padronizada de um sistema pedir dados a outro. O clima do TaskWeather vem de uma API pública.

**localStorage** — espaço no navegador onde a aplicação guarda dados na máquina da pessoa. Some se ela limpar os dados do navegador.

## Qualidade

**Critério de aceite** — a descrição observável de como verificar que uma funcionalidade está pronta. Dá para responder sim ou não sem opinião.

**Escopo** — o que entra nesta entrega. **Não escopo** — o que fica explicitamente de fora.

**Teste** — código que verifica automaticamente se um comportamento continua funcionando. Quando falha, avisa que algo quebrou.

**Lint** — verificação automática de problemas e padrões no código.

**Typecheck** — verificação de que as peças do código se encaixam (que ninguém está passando um texto onde se espera um número).

**Build** — geração da versão final da aplicação, pronta para publicar.

**Validação local** — rodar testes, lint, typecheck e build na sua máquina antes de considerar algo pronto.

**Definição de concluído** — a lista combinada pela equipe do que precisa acontecer para uma tarefa estar realmente pronta.

## Agentes

**Agente de código** — ferramenta de IA que lê, escreve e executa código no seu projeto (por exemplo, o Claude Code).

**Prompt** — a solicitação que você escreve para o agente. Descreve a tarefa **atual**.

**Contexto** — tudo que o agente sabe sobre o projeto naquele momento. O que não está no contexto, ele não pode seguir.

**`AGENTS.md`** — arquivo do repositório com as regras gerais para qualquer agente de código. Contexto **persistente**: vale em toda conversa.

**`CLAUDE.md`** — o mesmo, mas com orientações específicas para o Claude Code.

**Skill** — um procedimento reutilizável ensinado ao agente ("como planejar uma funcionalidade", "como revisar mudanças"). O prompt diz o que precisamos agora; a skill descreve como executar um tipo de trabalho.

**MCP (Model Context Protocol)** — forma padronizada de dar ao agente acesso a ferramentas e dados externos (GitHub, banco de dados, documentação). Entrega ferramentas; não substitui regras de acesso.

**Alucinação** — quando o agente afirma algo com confiança e está errado: um arquivo que não existe, uma biblioteca inventada, um teste que ele diz ter rodado. É por isso que se pede evidência.

**Modo de planejamento** — pedir análise e plano **antes** de qualquer alteração de arquivo.

## Ambiente

**Node.js** — o programa que executa nossos projetos web fora do navegador. Cada projeto define a versão.

**npm** — o instalador de dependências que vem com o Node. É quem executa `npm run dev`, `npm run test` etc.

**Terminal** — a janela onde se digitam os comandos.

**`localhost`** — sua própria máquina. `http://localhost:5173` é a aplicação rodando só para você, ninguém mais acessa.

**Porta** — o número no fim do endereço (`:5173`). Se já estiver ocupada, a ferramenta usa a seguinte.

**Variável de ambiente** — configuração que fica fora do código, usada para não escrever senhas e chaves nos arquivos do projeto.
