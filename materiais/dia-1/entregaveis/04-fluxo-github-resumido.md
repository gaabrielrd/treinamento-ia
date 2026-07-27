# Fluxo GitHub resumido

O projeto não pode existir apenas na conversa com o agente. Uma conversa é perdida, encerrada ou substituída. O repositório permanece.

## Os cinco conceitos

| Conceito         | O que é                              | Analogia                                     |
| ---------------- | ------------------------------------ | -------------------------------------------- |
| **repositório**  | o projeto inteiro, com histórico      | o arquivo do projeto                          |
| **issue**        | um trabalho a realizar               | um item da lista de tarefas da equipe         |
| **branch**       | uma cópia de trabalho separada        | um rascunho que não mexe no documento oficial |
| **commit**       | um ponto registrado no histórico      | um "salvar como" com descrição do que mudou   |
| **pull request** | pedido de revisão antes de incorporar | pedir para alguém conferir antes de publicar  |
| **merge**        | incorporar a mudança revisada         | publicar o rascunho aprovado                  |

## O fluxo

```
main  ──────────●────────────────────────────●──────────►
                 \                          /
                  \                        /
feat/todo-list     ●───●───●───●──────────/
                   commit  commit    pull request → revisão → merge
```

1. **`main`** é a versão estável. Não trabalhe direto nela.
2. Ao iniciar um trabalho, crie uma **branch** a partir da `main`.
3. Vá registrando **commits** conforme avança.
4. Quando estiver pronto e validado, abra um **pull request**.
5. Alguém revisa. Depois, **merge** na `main`.

## Nomes de branch

```text
feat/login-fake
feat/todo-list
feat/weather-widget
fix/erro-consulta-clima
docs/instrucoes-execucao
```

Padrão: `tipo/assunto-curto`, sem espaços, sem acentos.

| Tipo    | Quando usar                       |
| ------- | --------------------------------- |
| `feat`  | funcionalidade nova               |
| `fix`   | correção de um problema           |
| `docs`  | só documentação                   |
| `chore` | configuração, organização, limpeza |
| `test`  | só testes                         |

## Mensagens de commit

```text
feat: adiciona identificação por e-mail
feat: permite criar e concluir tarefas
fix: trata erro na consulta meteorológica
docs: atualiza instruções de execução
```

Padrão: `tipo: o que mudou`, em uma linha, no presente.

**Um commit = uma ideia.** Se a mensagem precisa de "e" no meio ("adiciona login e corrige clima"), provavelmente deveriam ser dois commits.

## O que faz um bom pull request

- [ ] Título diz o que muda, não em que arquivo.
- [ ] Descrição responde: **o que**, **por quê**, **como testar**.
- [ ] Mostra que as validações passaram.
- [ ] É pequeno o suficiente para alguém revisar de verdade.

Um pull request com 40 arquivos alterados não é revisado — é aprovado no escuro.

## O que pedir ao agente

Você não precisa decorar comandos de Git. Precisa saber o que pedir:

```text
Crie uma branch feat/nome-da-funcionalidade a partir da main.
```

```text
Registre um commit com as alterações desta etapa, usando a
mensagem no padrão "tipo: descrição".
```

```text
Abra um pull request descrevendo o objetivo, as funcionalidades,
como testar e as limitações conhecidas.
```

## Exemplos prontos

- Issue: [`../github-exemplos/issue-exemplo.md`](../github-exemplos/issue-exemplo.md)
- Pull request: [`../github-exemplos/pull-request-exemplo.md`](../github-exemplos/pull-request-exemplo.md)

> Não precisamos dominar Git avançado. Precisamos seguir um fluxo consistente.
