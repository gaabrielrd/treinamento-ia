# Template de prompt

Um bom prompt não precisa ser sofisticado. Precisa ser **completo**.

Preencha como formulário. Você não precisa escrever texto corrido.

---

## O template

```text
Contexto:
[Onde estamos e quais documentos o agente deve ler antes de começar.]

Objetivo:
[Um único resultado esperado. Se tiver "e", talvez sejam duas tarefas.]

Escopo:
[O que deve ser alterado.]

Fora do escopo:
[O que NÃO deve ser alterado. Seja explícito.]

Restrições:
[Bibliotecas, padrões, limites, o que não instalar, o que não tocar.]

Critérios de aceite:
[Como verificar o resultado. Observáveis. Mínimo dois.]

Processo:
[Analise, apresente o plano, implemente, revise. Nesta ordem.]

Validação:
[Quais comandos executar e o que fazer se falharem.]
```

---

## O que colocar em cada bloco

| Bloco                 | Pergunta que ele responde                | Exemplo curto                                                  |
| --------------------- | ---------------------------------------- | -------------------------------------------------------------- |
| **Contexto**          | Onde estamos? O que ler primeiro?        | "App React organizada por features. Leia AGENTS.md e docs/architecture.md." |
| **Objetivo**          | Qual resultado único esperamos?          | "Implementar um fluxo de login simulado."                       |
| **Escopo**            | O que deve mudar?                        | "Formulário, validação, sessão local e logout."                 |
| **Fora do escopo**    | O que não deve mudar?                    | "Cadastro, backend e recuperação de senha."                     |
| **Restrições**        | Quais são os limites?                    | "Não instalar dependências. Não alterar tarefas."               |
| **Critérios**         | Como sabemos que funcionou?              | "Credencial correta acessa; incorreta mostra erro."             |
| **Processo**          | Em que ordem trabalhar?                  | "Analise, apresente o plano, implemente e revise."              |
| **Validação**         | Como comprovar?                          | "Execute testes, lint e build."                                 |

---

## Exemplo completo

```text
Contexto:
Aplicação React organizada por features.
Leia AGENTS.md e docs/architecture.md antes de começar.

Objetivo:
Implementar um fluxo de login simulado.

Escopo:
Formulário, validação, sessão local e logout.

Fora do escopo:
Cadastro, backend e recuperação de senha.

Restrições:
Não instalar dependências e não alterar a feature de tarefas.

Critérios:
Credencial correta acessa; incorreta mostra erro;
sessão permanece após recarregar; logout encerra a sessão.

Processo:
Analise, apresente o plano, implemente e revise.

Validação:
Execute testes, lint e build.
```

---

## Versão curta, para tarefas pequenas

Renomear algo, ajustar um texto, corrigir um detalhe: três blocos bastam.

```text
Objetivo:
[o que fazer]

Fora do escopo:
Não altere nada além de [arquivo/área].

Validação:
Execute npm run validate.
```

O que **nunca** pode faltar, mesmo na versão curta: **fora do escopo** e **validação**. São os dois blocos que impedem uma tarefa pequena de virar uma mudança grande.

---

## Frases que valem guardar

Para fechar portas que o agente costuma abrir sozinho:

- "Não instale nenhuma biblioteca nova."
- "Não altere arquivos fora de `[pasta]`."
- "Se você achar que algo fora do escopo é necessário, **pergunte antes de fazer**."
- "Apresente o plano e aguarde minha aprovação antes de alterar arquivos."
- "Não desative nem apague testes para fazer a validação passar."
- "Ao terminar, liste cada critério de aceite e diga como verificou cada um."
- "Se algum critério não foi verificado, diga isso explicitamente."

---

## O que **não** colocar no prompt

Regras que valem para todas as tarefas não pertencem ao prompt. Elas moram no repositório:

| Isto vai no prompt        | Isto vai no `AGENTS.md`          |
| ------------------------- | -------------------------------- |
| o objetivo de hoje        | a organização das pastas          |
| o escopo desta tarefa     | os comandos de validação          |
| os critérios desta entrega | a política de dependências        |
| o que não tocar agora     | a definição de concluído          |

Se você está repetindo a mesma frase em todo prompt, ela está no lugar errado. Ver [`03-agents-e-claude-md.md`](03-agents-e-claude-md.md).

> Quanto mais importante a decisão, menos ela deve ficar implícita.
