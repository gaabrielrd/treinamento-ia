# Blocos opcionais — extensão para 2h30 ou 3h

Use na ordem de valor, não na ordem numerada. Se houver tempo para **um só**, faça o Bloco 2 (revisão cruzada): é o que mais consolida o conteúdo dos três dias.

---

## Bloco 1 — Edição e exclusão de tarefas · 15 min

O ponto aqui é repetir o processo inteiro em uma funcionalidade nova, agora sem prompt pronto. **O grupo escreve o prompt.**

1. planejar
2. definir critérios
3. implementar
4. testar
5. revisar

### Prompt para o grupo escrever

Entregue os campos em branco (o template de prompt do Dia 2) e deixe-os preencher. Depois confira:

- [ ] o escopo diz **editar** ou **excluir**, não os dois?
- [ ] os critérios cobrem o caso de erro (editar para um título vazio)?
- [ ] o "fora do escopo" preserva auth e weather?
- [ ] pediram plano antes da implementação?

### A pergunta que fecha o bloco

> "Isso estava no não escopo desde o começo. Por que agora pode?"

Resposta: porque foi **decidido**, não porque apareceu. A diferença entre escopo que cresce por decisão e escopo que cresce por acidente é o assunto do Dia 1 inteiro.

---

## Bloco 2 — Revisão cruzada · 15 min

Cada grupo revisa o pull request de outro. **O melhor bloco dos quatro** — obriga a olhar código que não é o seu, que é a situação real de qualquer equipe.

### Como conduzir

1. Cada grupo abre o PR (ou o diff) do grupo vizinho.
2. **10 minutos** com o checklist abaixo.
3. **5 minutos** para devolver os achados ao grupo de origem — por escrito, como comentário.

### Checklist de revisão cruzada

**Escopo**

- [ ] tem alguma funcionalidade que não estava no escopo obrigatório?
- [ ] alguma dependência nova foi instalada?
- [ ] alguma coisa do "fora do escopo" foi implementada?

**Organização**

- [ ] existem três pastas em `features/`?
- [ ] cada feature tem `services/` e `tests/`?
- [ ] tem `fetch` ou `localStorage` dentro de algum componente?
- [ ] uma feature importa arquivo interno de outra?

**Critérios**

- [ ] você consegue testar cada critério de aceite clicando na aplicação?
- [ ] existe tratamento para o caso de erro do clima?
- [ ] o estado sobrevive ao recarregamento?

**Qualidade**

- [ ] existem testes para o comportamento novo?
- [ ] `npm run validate` passa na máquina de vocês também?
- [ ] tem código não utilizado, comentado ou sobrando?
- [ ] tem alguma credencial ou chave no código?

**Documentação**

- [ ] o `README.md` explica como executar?
- [ ] o PR tem limitações escritas?
- [ ] a evidência das validações é a saída real dos comandos?

### Regra da revisão

> Descreva o problema e o impacto. **Não reescreva o código do outro grupo.**

"O `fetch` está dentro do componente, então não dá para testar sem internet" é uma revisão útil. "Mudei para um serviço" não é revisão — é reimplementação.

---

## Bloco 3 — Acessibilidade · 15 min

Conduza com o prompt abaixo. Se a revisão de acessibilidade virar rotina na área, ele é um bom candidato a skill — a atividade do Dia 2 (Opção A) ensina o processo.

```text
Revise a acessibilidade desta aplicação. Não altere arquivos.

Verifique:
- todo campo de formulário tem label associado;
- a navegação por teclado alcança todos os controles, em ordem lógica;
- o foco fica visível;
- mensagens de erro são anunciadas para leitores de tela;
- o contraste de texto é suficiente;
- a semântica está correta (botão é button, título é heading);
- imagens e ícones decorativos estão marcados como tais.

Para cada problema: o arquivo, o impacto para a pessoa que usa,
e a correção mínima. Liste por prioridade.
```

### Teste manual, sem ferramenta nenhuma

Vale mais que o relatório do agente:

1. **Guarde o mouse.** Faça o fluxo completo — entrar com o e-mail, criar tarefa, concluir, consultar clima, sair — só com `Tab`, `Shift+Tab`, `Enter` e `Espaço`.
2. Consegue ver onde o foco está, sempre?
3. Consegue chegar em todos os botões?
4. A ordem faz sentido?

Se em algum momento o grupo precisou do mouse, existe um problema de acessibilidade — e eles acabaram de encontrá-lo sem nenhuma ferramenta.

---

## Bloco 4 — Teste adicional · 15 min

Um teste que cobre o **fluxo crítico completo**, não uma função isolada.

```text
Crie um teste que cubra o fluxo principal da aplicação, do início ao fim:
entrar com um e-mail válido, criar uma tarefa, concluí-la e
verificar que ela permanece após remontar a tela.
Inclua também um caso que comprove que as tarefas de um e-mail
não aparecem para outro.

Teste o comportamento observável, como uma pessoa usando a aplicação.
Não teste detalhes internos de implementação.
Não acesse a internet: substitua a chamada externa por um duplo.
```

### O que discutir depois

> "Qual desses testes você removeria se pudesse manter só um?"

Quase sempre a resposta é esse — o de fluxo completo. Ele cobre menos detalhe, mas se ele quebra, a aplicação está inutilizável. É uma boa introdução à ideia de que testes não são todos iguais.

**Referência:** o exemplo organizado do Dia 1 tem exatamente esse teste em [`src/app/tests/App.test.tsx`](../../dia-1/02-taskweather-organizado/src/app/tests/App.test.tsx) — entrada por e-mail, sessão que sobrevive à remontagem, logout e a separação de dados entre dois e-mails.

---

## Se sobrarem 5 minutos, não 15

Não comece bloco nenhum. Faça a pergunta:

> **"Qual instrução vocês precisaram repetir mais para o agente hoje?"**

Anote as respostas. Elas são a lista de melhorias do `AGENTS.md` do template — e é o produto mais valioso do dia.
