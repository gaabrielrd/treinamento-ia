# Modelo — critérios de aceite

**Funcionalidade** descreve uma capacidade. **Critério de aceite** descreve como verificamos essa capacidade.

> Critérios de aceite são o contrato entre a intenção e a implementação.

## A regra

Um critério de aceite é observável: uma pessoa executa a aplicação e consegue dizer **sim** ou **não**. Sem discussão.

| Não é critério                 | É critério                                          |
| ------------------------------ | --------------------------------------------------- |
| "o login deve ser seguro"      | "credencial incorreta mostra a mensagem X na tela"  |
| "a lista deve ser rápida"      | "a lista aparece sem recarregar a página"           |
| "deve ser fácil de usar"       | "o campo vazio mostra o erro antes de salvar"       |
| "o clima deve funcionar"       | "cidade inexistente mostra mensagem de erro"        |

Se para responder "sim ou não" você precisar de uma opinião, ainda não é um critério.

## Formulário

**Funcionalidade:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

| #   | Critério (observável) | Como verificar na tela |
| --- | --------------------- | ---------------------- |
| 1   |                       |                        |
| 2   |                       |                        |
| 3   |                       |                        |
| 4   |                       |                        |

Mínimo: **dois critérios por funcionalidade**. Um só quase nunca cobre o caso de erro.

## As quatro perguntas que revelam critérios esquecidos

Para qualquer funcionalidade, pergunte:

1. **E se o campo estiver vazio?**
2. **E se der erro?** (rede caiu, dado não existe, serviço fora do ar)
3. **E se a pessoa recarregar a página?**
4. **E se ainda não houver nenhum dado?** (a primeira vez que alguém abre)

A maioria dos defeitos que aparecem em demonstração está em uma dessas quatro.

## Exemplo guiado — identificação por e-mail

| #   | Critério                                        | Como verificar                              |
| --- | ----------------------------------------------- | ------------------------------------------- |
| 1   | e-mail válido dá acesso                          | entrar com `ana@empresa.com`                |
| 2   | e-mail inválido mostra mensagem e não dá acesso  | entrar com `ana` e ler a tela               |
| 3   | atualizar a página mantém a sessão               | apertar F5 depois de entrar                 |
| 4   | "Sair" retorna à tela de login                   | clicar em "Sair"                            |
| 5   | as tarefas de um e-mail não aparecem para outro  | criar tarefa, sair, entrar com outro e-mail |

## Exemplo guiado — criar tarefa

| #   | Critério                                | Como verificar                          |
| --- | --------------------------------------- | --------------------------------------- |
| 1   | título vazio não cria tarefa e avisa    | clicar em "Adicionar" com o campo vazio |
| 2   | tarefa válida aparece imediatamente     | digitar e adicionar                     |
| 3   | tarefa permanece após recarregar        | criar, apertar F5                       |
| 4   | lista vazia mostra uma orientação       | abrir sem nenhuma tarefa                |

## Verificação final

- [ ] Cada funcionalidade tem no mínimo dois critérios.
- [ ] Existe pelo menos um critério de erro.
- [ ] Nenhum critério usa "fácil", "rápido", "bonito", "moderno" ou "seguro".
- [ ] Você consegue testar cada critério clicando, sem abrir o código.

> Onde isso já está feito de verdade: os critérios do exemplo organizado estão em
> [`02-taskweather-organizado/docs/prd.md`](../02-taskweather-organizado/docs/prd.md), e cada teste
> automatizado do projeto cita em comentário o critério que verifica.
