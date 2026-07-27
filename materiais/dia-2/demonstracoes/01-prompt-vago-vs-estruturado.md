# Demonstração — do pedido vago ao pedido executável

**Slide 5** · 10 minutos · projete as duas colunas lado a lado

---

## Antes

```text
Faça um login moderno para o sistema.
```

### Conduza a turma

Leia em voz alta e pergunte: **"o que ficou indefinido aqui?"**

Deixe a turma listar. Anote no flipchart. As respostas que costumam aparecer:

| O que ficou indefinido       | O que o agente vai decidir sozinho             |
| ---------------------------- | ---------------------------------------------- |
| login de verdade ou simulado? | provavelmente vai tentar autenticação real     |
| onde ficam os usuários?       | pode criar banco, servidor, tabela de usuários |
| o que é "moderno"?           | vai escolher um estilo, talvez instalar uma biblioteca de UI |
| tem cadastro? recuperação de senha? | pode incluir as duas coisas "por completude" |
| como se sabe que funcionou?   | vai dizer que está pronto                       |
| pode mexer em quê?           | em qualquer arquivo                             |

Feche o bloco assim: **este pedido tem uma intenção, não um produto.** Duas pessoas mandando isso recebem duas coisas diferentes.

---

## Depois

```text
Contexto:
Aplicação React organizada por features.

Objetivo:
Implementar um fluxo de login simulado.

Escopo:
Formulário, validação, sessão local e logout.

Fora do escopo:
Cadastro, backend e recuperação de senha.

Restrições:
Não instalar dependências e não alterar tarefas.

Critérios:
Credencial correta acessa; incorreta mostra erro;
sessão permanece; logout encerra sessão.

Processo:
Analise, apresente o plano, implemente e revise.

Validação:
Execute testes, lint e build.
```

### O que apontar

Percorra bloco por bloco mostrando **qual decisão saiu do agente e voltou para você**:

| Bloco            | Decisão que deixou de ser do agente         |
| ---------------- | ------------------------------------------- |
| Objetivo         | simulado, não real                          |
| Fora do escopo   | sem cadastro, sem backend, sem senha        |
| Restrições       | sem biblioteca nova, sem tocar em tarefas   |
| Critérios        | o que significa "funcionar"                 |
| Processo         | plano antes de código                        |
| Validação        | o que comprova que terminou                  |

Diga o número: **oito linhas de contexto** substituíram uma dúzia de suposições.

---

## O resultado, pronto para comparar

Abra a feature `auth` do exemplo organizado do Dia 1:

```
dia-1/02-taskweather-organizado/src/features/auth/
├── components/LoginForm.tsx
├── hooks/useSession.ts
├── model/session.ts           ← a regra: e-mail válido ou erro
├── services/sessionStorage.ts ← a sessão que sobrevive ao F5
├── tests/                     ← um teste por critério de aceite
└── index.ts
```

E abra [`session.test.ts`](../../dia-1/02-taskweather-organizado/src/features/auth/tests/session.test.ts): cada teste tem, em comentário, **o critério de aceite correspondente**. É a linha reta entre o que foi pedido e o que foi verificado.

### Um detalhe que vale muito apontar

O prompt acima fala em "credencial correta" e "incorreta" — porque foi escrito **antes** da decisão de produto. No TaskWeather, a decisão final foi diferente: **a pessoa informa apenas o e-mail, sem senha**, e o e-mail também separa os dados de cada usuário.

Use isso: **o prompt não é sagrado, a decisão de produto é.** Quando a decisão muda, os critérios mudam com ela — e é por isso que critérios moram no `docs/prd.md` do projeto, não só no prompt de uma conversa. Compare a linha do prompt com os critérios reais em [`docs/prd.md`](../../dia-1/02-taskweather-organizado/docs/prd.md).

---

## Mensagem-chave

> **Quanto mais importante a decisão, menos ela deve ficar implícita.**

---

## Se sobrar tempo

Peça à turma para transformar em prompt estruturado, oralmente, um destes:

- "deixa a lista de tarefas mais rápida"
- "arruma o layout no celular"
- "coloca um filtro nas tarefas"

Corrija apenas **escopo** e **critérios**. Não entre em discussão técnica.
