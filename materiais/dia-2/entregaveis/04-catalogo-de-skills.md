# Catálogo de skills

> O prompt diz o que precisamos agora. A skill descreve **como** executar um tipo de trabalho.

Uma skill é um procedimento reutilizável. Em vez de repetir o mesmo processo em cada prompt, você pede o uso da skill.

## As skills do template

Estas são as skills que existem hoje em [`template-ia-web/skills/`](../../../template-ia-web/skills/) — verificadas no repositório, não uma lista desejada.

| Skill                     | Quando usar                                                                 |
| ------------------------- | --------------------------------------------------------------------------- |
| **`plan-app`**            | No início de um aplicativo, quando a ideia ainda é vaga. Conduz uma entrevista curta e cria `docs/prd.md`. Não escreve código. |
| **`plan-feature`**        | Antes de implementar: transforma uma solicitação em plano. Para funcionalidade nova, mudança em vários arquivos, demanda ambígua ou integração externa. |
| **`implement-feature`**   | Para implementar uma tarefa **já planejada**, mantendo o escopo e validando o resultado. |
| **`generate-tests`**      | Para criar ou atualizar testes com base no comportamento observável.         |
| **`review-changes`**      | Para revisar antes de concluir: escopo, arquitetura, testes, segurança e qualidade. |
| **`update-documentation`**| Para manter a documentação coerente após mudanças de comandos, arquitetura, funcionalidades ou decisões. |
| **`prepare-pull-request`**| Para preparar a descrição do PR depois de concluir e revisar.                |
| **`frontend-skill`**      | Quando a tarefa pede uma interface visualmente forte (landing page, protótipo, demo). |

## A ordem natural de uso

```
plan-app ──► plan-feature ──► implement-feature ──► generate-tests
                                                          │
                        prepare-pull-request ◄── review-changes
                                    ▲                     │
                                    └── update-documentation
```

Na prática do Dia 3, usaremos `plan-feature` → `implement-feature` → `review-changes`.

## Como acionar

```text
Use a skill plan-feature para planejar a criação do widget meteorológico.
Não altere arquivos.
```

Duas partes que importam: **o nome da skill** e **o limite** ("não altere arquivos"). A skill descreve o procedimento; você ainda diz o que e até onde.

## Anatomia de uma skill

```text
plan-feature/
├── SKILL.md          # descrição + instruções
└── references/       # material de apoio, se necessário
```

Dentro do `SKILL.md`:

| Parte           | Para que serve                                                      |
| --------------- | ------------------------------------------------------------------- |
| `name`          | o nome pelo qual você aciona                                        |
| `description`   | ajuda a ferramenta a **identificar quando** a skill é relevante      |
| instruções      | os passos do procedimento                                            |
| saída obrigatória | o formato do resultado esperado                                    |

A `description` é a parte mais importante e a mais negligenciada: é ela que faz a skill ser encontrada na hora certa.

## Específica vence genérica

| Ruim                     | Melhor                                                                                        |
| ------------------------ | --------------------------------------------------------------------------------------------- |
| "ajude no projeto"       | "analise uma funcionalidade e gere requisitos, proposta, tarefas, riscos e critérios, sem alterar código" |
| "revise o código"        | "verifique escopo, arquitetura, testes, segredos e código não utilizado; liste por prioridade; não altere arquivos" |
| "escreva testes"         | "crie testes do comportamento observável, um por critério de aceite, sem testar detalhes internos" |

## Quando **não** criar uma skill

- A tarefa acontece uma vez só → é prompt, não skill.
- O procedimento muda em cada projeto → é documentação, não skill.
- Você não consegue descrever os passos → ainda não é um procedimento.

## Sobre a `accessibility-review`

O Dia 3 (Bloco opcional 3) menciona uma skill `accessibility-review`. **Ela não existe no template** — as oito acima são todas as que existem, e o template é a fonte de verdade.

O bloco de acessibilidade do Dia 3 usa, em vez dela, um prompt estruturado e um teste manual de teclado. Se quiser transformá-la em skill de verdade, a atividade [opcao-a-criar-uma-skill.md](../atividades/opcao-a-criar-uma-skill.md) ensina exatamente esse processo.
