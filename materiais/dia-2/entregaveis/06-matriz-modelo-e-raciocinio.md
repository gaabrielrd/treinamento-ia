# Matriz — escolha de modelo e raciocínio

> Não existe um único modelo ideal para tudo.

## As três perguntas

1. **A tarefa é ambígua?**
2. **Um erro teria impacto relevante?**
3. **Envolve muitas etapas ou ferramentas?**

Quanto mais respostas positivas, maior deve ser a capacidade **e o nível de revisão humana**.

## A matriz

```
            ALTO
             │
  I M P A C T O          forte              forte
             │        capacidade         + revisão
             │                             humana
             │
             │        rápido               geral
             │      baixo custo         capacidade
             │                          intermediária
            BAIXO
             └──────────────────────────────────────
              BAIXA        AMBIGUIDADE        ALTA
```

| Quadrante                      | Exemplos de tarefa                                                        |
| ------------------------------ | ------------------------------------------------------------------------- |
| **Baixo impacto / baixa ambiguidade** — rápido | renomear variável, formatar arquivo, ajustar texto de interface, escrever mensagem de commit |
| **Baixo impacto / alta ambiguidade** — capacidade intermediária | "organizar melhor esta pasta", escrever documentação de algo existente |
| **Alto impacto / baixa ambiguidade** — capacidade forte | implementar uma funcionalidade bem especificada em vários arquivos, migrar um padrão |
| **Alto impacto / alta ambiguidade** — capacidade forte **+ revisão humana obrigatória** | decisão de arquitetura, investigação de erro difícil, mudança que afeta autenticação ou dados |

## Tabela prática

| Tipo de tarefa                              | Capacidade      | Raciocínio | Revisão humana |
| ------------------------------------------- | --------------- | ---------- | -------------- |
| formatar, renomear, ajustar texto            | rápida          | baixo      | leve           |
| escrever ou atualizar documentação           | intermediária   | baixo      | leitura        |
| gerar testes de comportamento conhecido      | intermediária   | médio      | conferir casos |
| implementar funcionalidade especificada      | forte           | médio      | revisar diff   |
| planejar uma funcionalidade                  | forte           | alto       | aprovar plano  |
| investigar um erro que ninguém entende       | forte           | alto       | acompanhar     |
| decisão de arquitetura                       | forte           | alto       | **obrigatória** |
| qualquer coisa envolvendo dados sensíveis    | forte           | alto       | **obrigatória** |

## O alerta que importa

> **Raciocínio maior não corrige prompt incompleto nem substitui critérios de aceite.**

Um modelo mais capaz com um pedido vago produz uma solução mais elaborada para o problema errado. Ele preenche as lacunas com mais competência — e com mais confiança.

Antes de subir a capacidade do modelo, verifique se o problema não é o prompt:

- [ ] O objetivo é único e claro?
- [ ] O escopo e o não escopo estão escritos?
- [ ] Existem critérios de aceite observáveis?
- [ ] O agente tem acesso aos documentos do projeto?

Se algum destes estiver faltando, **corrija o prompt primeiro.** É mais barato e resolve mais.

## Sinais de que você deveria subir a capacidade

- o agente refez a mesma coisa três vezes sem convergir
- ele propôs uma solução que ignora uma restrição que você deu
- a tarefa envolve mais de cinco arquivos relacionados
- você não consegue prever quais arquivos serão afetados
- o erro aparece só em certas situações e ninguém sabe por quê

## Sinais de que você deveria **descer**

- a tarefa é mecânica e você sabe exatamente o resultado esperado
- você já fez isso dez vezes neste projeto
- é só formatação, renomeação ou texto

Custo e tempo também contam. Usar a maior capacidade para renomear um arquivo é desperdício, não cuidado.
