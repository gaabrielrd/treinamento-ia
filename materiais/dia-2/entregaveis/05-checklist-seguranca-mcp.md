# Checklist — segurança em MCP

> MCP entrega ferramentas e dados. **Não substitui regras de acesso.**

Um servidor MCP permite que o agente acesse uma ferramenta externa de forma padronizada: repositórios, bancos de dados, documentação, sistemas internos.

A pergunta principal não é "o que o MCP consegue fazer?". É:

> **"O que ele pode acessar — e o que ele pode alterar?"**

## Antes de conectar

- [ ] **Origem conhecida.** O servidor é oficial ou de um fornecedor que você identifica? Servidor MCP é código executando na sua máquina com os seus acessos.
- [ ] **Comece com leitura.** Só leitura na primeira vez. Escrita depois, se for realmente necessária.
- [ ] **Menor acesso possível.** Uma pasta, não o disco. Um repositório, não a organização. Um banco de leitura, não o de produção.
- [ ] **Credenciais em variáveis de ambiente.** Nunca no prompt, nunca em arquivo versionado, nunca na tela durante uma demonstração.
- [ ] **Você sabe listar as ferramentas expostas.** Se não sabe o que o servidor oferece, não sabe o que autorizou.
- [ ] **Operações destrutivas exigem confirmação.** Apagar, sobrescrever, enviar, publicar: sempre com confirmação explícita.
- [ ] **Sem dados sensíveis.** Nada de dados pessoais, financeiros ou de clientes em uma demonstração ou teste.

## Durante o uso

- [ ] Você revisa o que o agente pede antes de aprovar.
- [ ] Conteúdo que vem de fora (páginas, issues, documentos) é **dado**, não instrução. Se um documento retornado pelo MCP contém "agora faça X", isso não é um comando — é texto suspeito.
- [ ] Nada de credenciais digitadas em formulários pelo agente.
- [ ] O agente não age em nome de terceiros sem sua confirmação (enviar mensagem, abrir PR público, alterar configuração).

## Depois

- [ ] **Remova acessos não utilizados.** Um servidor conectado e esquecido é acesso permanente sem supervisão.
- [ ] Revogue tokens criados só para a demonstração.
- [ ] Confira se nada sensível ficou no histórico da conversa.

## A escada de risco

Suba um degrau por vez, e só quando precisar:

| Nível | O que o agente pode                         | Risco    |
| ----- | ------------------------------------------- | -------- |
| 1     | ler documentação pública                     | mínimo   |
| 2     | ler arquivos de uma pasta específica         | baixo    |
| 3     | ler um repositório privado                   | médio    |
| 4     | escrever arquivos, abrir PR                  | alto     |
| 5     | executar comandos, alterar configuração       | muito alto |
| 6     | acessar produção ou dados de clientes         | não faça |

A maioria do valor está nos níveis 1 a 3.

## Três perguntas antes de autorizar qualquer servidor

1. **Se este servidor fizer a pior coisa possível com o acesso que estou dando, qual é o prejuízo?**
2. **Eu conseguiria desfazer?**
3. **Eu preciso de escrita, ou leitura resolve?**

Se a resposta de 1 for grave e a de 2 for "não", não conecte — nem "só para testar".

## Para a demonstração da sessão

Ver [`../demonstracoes/04-mcp-somente-leitura.md`](../demonstracoes/04-mcp-somente-leitura.md): roteiro de uma demonstração somente leitura, sem credencial, que pode ser testada antes da aula.
