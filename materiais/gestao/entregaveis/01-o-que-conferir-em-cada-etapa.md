# O que conferir em cada etapa

Para a gestão. Cinco etapas, um artefato em cada. A coluna da direita é o que fazer quando o artefato não existe ou não convence.

| Etapa              | O que a equipe produz                                 | A pergunta que a gestão faz                    | Sinal de alerta                                              |
| ------------------ | ----------------------------------------------------- | ---------------------------------------------- | ------------------------------------------------------------ |
| **1. Definir**     | Problema, público e limite, escritos em poucas linhas | "Qual problema isso resolve e de quem?"        | A resposta descreve uma tela, não um problema                |
| **2. Especificar** | Funcionalidades e critérios de aceite verificáveis    | "Como saberemos que terminou?"                 | Critérios do tipo "ficar bom", "ser rápido", "funcionar bem" |
| **3. Dividir**     | Tarefas pequenas, cada uma com validação própria      | "Qual é a menor entrega que já tem valor?"     | Uma tarefa única chamada "fazer o sistema"                   |
| **4. Implementar** | Incrementos, um por vez, com registro do que mudou    | "O que está pronto e o que está em andamento?" | Só há resposta verbal; nada escrito desde a última conversa  |
| **5. Validar**     | Evidência de que os critérios foram atendidos         | "O que foi validado, e como?"                  | "Testei aqui e funcionou"                                    |

## Os quatro artefatos que passam a existir

Não são documentos novos criados para a gestão: são produzidos durante o próprio trabalho, e o agente ajuda a escrever cada um.

**Escopo e não escopo** — o que entra agora e, principalmente, o que fica de fora. É o artefato que impede o projeto de crescer sem decisão de ninguém. _Confira:_ a lista de não escopo existe e não está vazia.

**Critérios de aceite** — cada funcionalidade descrita de forma verificável, antes de a implementação começar. _Confira:_ dá para responder "sim" ou "não" a cada critério, sem interpretação.

**Regras do projeto** (`AGENTS.md`) — as instruções que o agente é obrigado a seguir naquele repositório: estrutura, padrões, o que nunca fazer. _Confira:_ existe e foi lido por alguém além de quem escreveu.

**Registro de entrega** (Github/docs/entregas) — o que mudou, por quê, e a evidência de validação. _Confira:_ traz a evidência, não só a descrição.

## Como acompanhar sem virar gargalo

| Faça                                                            | Evite                                                           |
| --------------------------------------------------------------- | --------------------------------------------------------------- |
| Aprovar escopo e critérios **antes** de a implementação começar | Revisar código                                                  |
| Pedir a evidência junto com a entrega                           | Pedir relatório de status em reunião                            |
| Ler o não escopo e questionar o que ficou de fora               | Reabrir escopo no meio da execução sem registrar a decisão      |
| Perguntar quem mais consegue continuar aquele projeto           | Aceitar "só o fulano sabe mexer nisso" como resposta definitiva |

A regra prática: **a gestão entra no começo e no fim de cada incremento**, não no meio. Se um projeto precisa de aprovação a cada passo, o escopo estava grande demais.

## Uma linha para levar

> Se a única prova de que está pronto é ver funcionando, ainda não está pronto — a demonstração do encontro existe justamente para mostrar o que ela não pega.
