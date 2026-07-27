# Demonstração — MCP somente leitura

**Slide 11** · 10 minutos (ou 20 no Bloco opcional B)

> ⚠️ **Teste isto na sua máquina antes da sessão.** Configuração de MCP é o item da lista de "erros que não devem consumir o treinamento". Se não tiver testado, use a alternativa sem MCP no fim deste arquivo.

## Objetivo da demonstração

Mostrar três coisas, nesta ordem:

1. o agente **ganhando** uma capacidade que não tinha;
2. o **limite** dessa capacidade (o que ele pode e não pode acessar);
3. a **revogação** do acesso.

O que a turma precisa levar: *MCP entrega ferramentas e dados; não substitui regras de acesso.*

## A demonstração escolhida: sistema de arquivos, somente leitura

Escolhida porque **não exige credencial nenhuma**. Nada de token na tela, nada de conta, nada que possa vazar em uma projeção.

O servidor recebe uma pasta específica e só consegue ler dentro dela. É o exemplo mais didático de "menor acesso possível".

### Configuração

No Claude Code, os servidores MCP são gerenciados pela linha de comando:

```bash
claude mcp list
```

```bash
claude mcp add docs-treinamento -- npx -y @modelcontextprotocol/server-filesystem /caminho/para/treinamento-ia/materiais
```

```bash
claude mcp remove docs-treinamento
```

Ajuste o caminho para o seu. Confirme a sintaxe da sua versão com `claude mcp --help` ao testar — é justamente o tipo de detalhe que você não quer descobrir na frente da turma.

> `claude mcp` precisa de um terminal interativo. Deixe configurado **antes** da aula e comece a sessão já com o servidor disponível.

### O roteiro na tela

**1. Mostre o que foi concedido**

Aponte o comando: uma pasta, nomeada explicitamente. Pergunte: **"o que este servidor consegue ler?"** Resposta: só o que está dentro daquele caminho. Nada acima, nada em outro disco.

**2. Faça uma consulta somente leitura**

```text
Usando as ferramentas de arquivo disponíveis, liste os documentos
de materiais/dia-1/entregaveis e resuma em uma linha o que cada um entrega.
Não altere nenhum arquivo.
```

O agente lê e responde. Mostre que ele conseguiu **sem você colar o conteúdo no chat** — é isso que o MCP acrescentou.

**3. Mostre o limite**

```text
Liste os arquivos da minha pasta de Documentos.
```

Deve falhar ou informar que não tem acesso. **Este é o momento mais importante da demonstração.** O acesso é o que você concedeu, nada além.

**4. Revogue**

```bash
claude mcp remove docs-treinamento
```

E diga a frase: *"acesso que ninguém usa é acesso esquecido. Servidor conectado e esquecido é acesso permanente sem supervisão."*

## As perguntas para a turma

1. **"O que aconteceria se eu tivesse apontado para a raiz do disco em vez de uma pasta?"** — o agente leria qualquer arquivo da máquina, incluindo credenciais salvas.
2. **"E se este servidor também pudesse escrever?"** — ele poderia alterar ou apagar arquivos; por isso começamos com leitura.
3. **"De quem é o código deste servidor?"** — servidor MCP é código executando na sua máquina, com os seus acessos. Origem conhecida não é formalidade.

## Ligação com o checklist

Percorra [`../entregaveis/05-checklist-seguranca-mcp.md`](../entregaveis/05-checklist-seguranca-mcp.md) apontando o que a demonstração cumpriu:

- ✅ origem conhecida (servidor oficial de referência do protocolo)
- ✅ começou com leitura
- ✅ menor acesso possível (uma pasta)
- ✅ nenhuma credencial em prompt ou na tela
- ✅ ferramentas expostas conhecidas
- ✅ acesso removido no fim

## Se envolver GitHub ou banco de dados

Não é o caso desta demonstração, mas alguém vai perguntar. As regras:

- token em **variável de ambiente**, nunca no prompt, nunca visível na projeção;
- token com o **menor escopo** possível e criado só para a demonstração;
- **revogado** ao final;
- em banco de dados: usuário **somente leitura**, e **nunca** produção.

## Alternativa sem MCP (contingência)

Se a configuração falhar, **não gaste os 10 minutos depurando.** Faça a versão conceitual:

1. Projete o diagrama do Slide 11: o agente no centro, conectado a GitHub, arquivos, banco, documentação.
2. Percorra o checklist de segurança item por item — é o entregável que a turma leva, e ele não depende da demonstração.
3. Use um exemplo que a turma já viu funcionar: *"quando o agente leu o `AGENTS.md` do projeto, ele usou a ferramenta de leitura de arquivos. MCP é o mesmo princípio, estendido a sistemas fora do projeto."*
4. Feche com a escada de risco do checklist.

O conceito que precisa ficar é **"o que ele pode acessar e alterar?"** — e isso se ensina sem nenhuma configuração funcionando.
