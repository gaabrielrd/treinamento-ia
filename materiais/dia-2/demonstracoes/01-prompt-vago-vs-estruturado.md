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
Entrada por e-mail, sem senha.

Escopo:
Campo de e-mail, validação, sessão local, logout
e dados separados por e-mail.

Fora do escopo:
Senha, cadastro e backend.

Restrições:
Não instalar dependências e não alterar tarefas.

Critérios:
E-mail válido entra; inválido mostra erro;
sessão permanece; logout encerra;
tarefas de um e-mail não vão para outro.

Processo:
Analise, apresente o plano, implemente e revise.

Validação:
Execute testes, lint e build.
```

### O que apontar

Percorra bloco por bloco mostrando **qual decisão saiu do agente e voltou para você**:

| Bloco            | Decisão que deixou de ser do agente             |
| ---------------- | ---------------------------------------------- |
| Objetivo         | identificação por e-mail, sem senha             |
| Fora do escopo   | sem senha, sem cadastro, sem backend            |
| Restrições       | sem biblioteca nova, sem tocar em tarefas       |
| Critérios        | o que significa "funcionar", inclusive no erro  |
| Processo         | plano antes de código                            |
| Validação        | o que comprova que terminou                      |

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

### A decisão que o pedido vago esconde

Vale parar um instante na linha **"sem senha"**. Ela não é um detalhe técnico: é uma decisão de produto que o pedido original — "faça um login moderno" — deixava totalmente em aberto.

Sem ela escrita, o agente resolve sozinho, e o caminho natural é construir senha, cadastro e recuperação de senha. Três funcionalidades que ninguém pediu, cada uma com tela, teste e mensagem de erro própria.

Os critérios completos desta funcionalidade estão em [`docs/prd.md`](../../dia-1/02-taskweather-organizado/docs/prd.md). É lá que eles moram — não no prompt de uma conversa.

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
