# Modelo — escopo e não escopo

O não escopo é tão importante quanto o escopo. Sem ele, o agente preenche as lacunas com o que parece útil.

## Formulário

**Projeto:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_
**Versão:** primeira entrega
**Data:** \_\_\_\_ / \_\_\_\_ / \_\_\_\_

### Entra agora

| #   | Funcionalidade | Por que é obrigatória nesta versão |
| --- | -------------- | ---------------------------------- |
| 1   |                |                                    |
| 2   |                |                                    |
| 3   |                |                                    |
| 4   |                |                                    |
| 5   |                |                                    |

### Não entra agora

| #   | Fora desta versão | Por quê | Fica para quando |
| --- | ----------------- | ------- | ---------------- |
| 1   |                   |         |                  |
| 2   |                   |         |                  |
| 3   |                   |         |                  |
| 4   |                   |         |                  |
| 5   |                   |         |                  |

A coluna "por quê" evita a conversa mais cara de todas: alguém reabrir a decisão dois meses depois sem saber o motivo.

## Frases para usar com o agente

Escopo aberto é o que o agente preenche sozinho. Feche com frases explícitas:

- "Não implemente \_\_\_\_\_\_\_\_."
- "Não altere \_\_\_\_\_\_\_\_."
- "Não instale nenhuma biblioteca nova."
- "Considere \_\_\_\_\_\_\_\_ como etapa futura, não faça agora."
- "Se você achar que algo fora deste escopo é necessário, pergunte antes de fazer."

## Exemplo preenchido — TaskWeather

### Entra agora

| #   | Funcionalidade                | Por que é obrigatória                        |
| --- | ----------------------------- | -------------------------------------------- |
| 1   | identificação por e-mail      | identifica quem está usando, sem exigir senha  |
| 2   | dados separados por usuário   | duas pessoas na mesma máquina não podem se confundir |
| 3   | criar tarefas                 | é o centro do problema                        |
| 4   | concluir tarefas              | sem isso a lista só cresce                    |
| 5   | manter tarefas no navegador   | fechar a aba não pode apagar o trabalho       |
| 6   | clima atual por cidade        | é a informação que fazia trocar de aplicativo |

### Não entra agora

| #   | Fora desta versão         | Por quê                                        | Fica para quando          |
| --- | ------------------------- | ---------------------------------------------- | ------------------------- |
| 1   | cadastro real de usuários | exigiria servidor e tratamento de dados pessoais | houver mais de um usuário |
| 2   | senha e recuperação de senha | não há o que proteger nesta versão; o e-mail identifica, não autentica | se os dados virarem sensíveis |
| 3   | colaboração entre pessoas | exigiria backend e permissões                  | segunda versão            |
| 4   | banco de dados            | o navegador basta para um usuário              | quando houver colaboração |
| 5   | previsão de sete dias     | o clima atual já resolve o problema descrito    | se alguém pedir           |

## Verificação final

- [ ] Toda linha do "entra agora" tem um motivo ligado ao problema.
- [ ] Toda linha do "não entra" tem um motivo escrito.
- [ ] O "entra agora" tem no máximo 6 linhas. Mais que isso, não é uma primeira versão.
- [ ] Você conseguiria dizer "não" a um pedido novo apontando para esta folha.

> Dizer não agora evita retrabalho depois.
