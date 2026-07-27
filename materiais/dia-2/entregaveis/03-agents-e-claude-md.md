# `AGENTS.md` e `CLAUDE.md` — resumo

## A separação

| Onde                  | O que guarda                                     | Muda com que frequência |
| --------------------- | ------------------------------------------------ | ----------------------- |
| **prompt da tarefa**  | objetivo atual, escopo atual, critérios atuais    | toda conversa            |
| **`AGENTS.md`**       | regras gerais do projeto para qualquer agente     | raramente                |
| **`CLAUDE.md`**       | como usar o Claude Code neste projeto             | raramente                |
| **`docs/`**           | arquitetura, processo, decisões, testes            | quando algo é decidido   |
| **skills**            | procedimentos reutilizáveis                       | raramente                |

Regra prática: **se você está repetindo a mesma frase em todo prompt, ela pertence ao repositório.**

---

## `AGENTS.md` — o contrato geral

Vale para **qualquer** agente de código. Deve responder cinco perguntas:

1. **O que ler antes de começar?**
2. **Como o projeto está organizado?**
3. **O que não pode ser feito?**
4. **Quais comandos executar?**
5. **Quando uma tarefa pode ser considerada concluída?**

### Seções típicas

```text
# Instruções do projeto

## Leia primeiro
[ordem dos documentos]

## Processo obrigatório
[entender → inspecionar → planejar → alterar → testar → validar → revisar → documentar]

## Arquitetura
[organização por features, limites de importação, onde ficam APIs e armazenamento]

## Escopo
[não expandir além do solicitado; uma funcionalidade por vez]

## Dependências
[não adicionar sem justificar; nunca commitar segredos]

## Testes
[toda mudança de comportamento considera testes]

## Documentação
[toda decisão relevante atualiza documentação ou gera um ADR]

## Conclusão
[a definição de concluído do projeto]
```

### Exemplo de regra que funciona

> "Não instale dependências sem justificar. Não altere funcionalidades fora do escopo. Execute `npm run validate` antes de concluir."

Curta, verificável, sem ambiguidade.

### O que **não** fazer

- ❌ transformar em manual enorme — instruções detalhadas vão para `docs/` ou skills
- ❌ escrever regras que ninguém verifica
- ❌ deixar desatualizado (pior que não existir: o agente segue a regra errada com confiança)

---

## `CLAUDE.md` — a adaptação de uso

**Não** deve criar um segundo conjunto de regras. Deve orientar o Claude Code a:

- ler o `AGENTS.md`;
- consultar os documentos na ordem correta;
- localizar as skills disponíveis;
- planejar mudanças maiores antes de executar;
- executar os comandos do projeto.

### O alerta importante

> Se os dois arquivos repetirem grandes blocos de texto, eles vão divergir com o tempo.

Quando divergem, o agente recebe duas instruções conflitantes e escolhe uma — geralmente não a que você queria. **Prefira referências curtas a duplicação.**

Assim:

```markdown
As regras gerais do projeto estão em AGENTS.md e valem integralmente aqui.
Este arquivo acrescenta o que é específico do Claude Code.
```

Não assim: copiar as regras de arquitetura, escopo e dependências nos dois arquivos.

---

## Onde ver funcionando

| Arquivo                                                                  | O que observar                                        |
| ------------------------------------------------------------------------ | ----------------------------------------------------- |
| [`template-ia-web/AGENTS.md`](../../../template-ia-web/AGENTS.md)         | o contrato completo, com as oito seções               |
| [`template-ia-web/CLAUDE.md`](../../../template-ia-web/CLAUDE.md)         | como ele referencia em vez de repetir                  |
| [`dia-1/02-taskweather-organizado/AGENTS.md`](../../dia-1/02-taskweather-organizado/AGENTS.md) | a versão enxuta, adaptada a um projeto pequeno |
| [`dia-1/02-taskweather-organizado/CLAUDE.md`](../../dia-1/02-taskweather-organizado/CLAUDE.md) | uma linha delegando ao AGENTS.md, e só o que é específico |

Bom exercício para projetar na tela: abrir os dois arquivos do TaskWeather lado a lado e perguntar **"o que está repetido entre eles?"**. A resposta é: quase nada — de propósito.

---

## Teste de qualidade

Um `AGENTS.md` está bom quando uma pessoa nova (ou um agente) consegue responder, só lendo ele:

- [ ] O que este projeto é?
- [ ] Onde eu coloco uma funcionalidade nova?
- [ ] O que eu não tenho permissão de fazer?
- [ ] Que comando eu rodo antes de dizer que terminei?
- [ ] Como eu sei que terminei?

> Modelo forte + contexto fraco continua sendo contexto fraco.
