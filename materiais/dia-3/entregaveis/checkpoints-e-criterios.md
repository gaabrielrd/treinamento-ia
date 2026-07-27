# Checkpoints e critérios de aceite

Folha do instrutor. Mantenha aberta durante a prática e circule pelos grupos com ela.

**Regra de acompanhamento:** todos os grupos param nos checkpoints comuns. Ninguém avança de etapa antes do checkpoint fechar.

---

## Checkpoint 0 — Ambiente · após a Etapa 1

- [ ] o projeto inicia (`npm run dev` e a tela abre)
- [ ] o agente leu e resumiu as instruções
- [ ] **nenhum arquivo alterado** — confirmar com `git status`

**O que verificar circulando:** grupos que já começaram a implementar. Se alguém alterou arquivo aqui, o agente ignorou "não altere arquivos" — e isso vale comentar em voz alta.

---

## Checkpoint 1 — Planejamento · após a Etapa 2

- [ ] o plano tem **três incrementos** (autenticação, tarefas, clima)
- [ ] existem critérios por incremento
- [ ] o não escopo foi preservado
- [ ] nenhuma dependência nova proposta
- [ ] nenhum arquivo alterado

**Sinais de plano ruim:** um único bloco "implementar a aplicação" · nenhuma menção a testes · propõe biblioteca de UI ou de estado · inclui edição/exclusão de tarefas (está fora do escopo) · critérios do tipo "funcionar corretamente".

---

## Checkpoint 2 — Identificação por e-mail · após a Etapa 3

- [ ] a tela pede **apenas** o e-mail, sem senha
- [ ] e-mail válido permite acesso
- [ ] e-mail vazio ou inválido mostra mensagem clara e não dá acesso
- [ ] o e-mail é normalizado (minúsculas, sem espaços) antes de ser guardado
- [ ] atualizar a página mantém a sessão
- [ ] logout encerra a sessão sem apagar dados
- [ ] o e-mail da sessão aparece na tela
- [ ] nenhuma autenticação real foi criada
- [ ] a feature está isolada em `src/features/auth`
- [ ] o armazenamento é acessado por um serviço, não direto no componente
- [ ] existem testes
- [ ] `npm run validate` passa
- [ ] commit criado: `feat: adiciona identificação por e-mail`

**O que verificar circulando:** o agente começou tarefas sem pedir? · **criou senha mesmo sem ser pedido?** · o código deixa claro que isto identifica mas não autentica? · tem `localStorage` dentro do componente? · o grupo **executou** a aplicação, ou só leu a resposta do agente?

**Achado frequente:** se o agente usou `<input type="email">`, o navegador bloqueia o envio e mostra a mensagem **dele** — a validação da aplicação nunca roda, e o comportamento muda de navegador para navegador. Pergunte: *"de quem é essa mensagem?"*

---

## Checkpoint 3 — Tarefas · após a Etapa 4

- [ ] título vazio não cria tarefa e avisa
- [ ] tarefa válida aparece imediatamente
- [ ] concluir e reabrir funcionam
- [ ] o estado permanece após recarregar
- [ ] lista vazia mostra orientação
- [ ] **as tarefas de um e-mail não aparecem para outro**
- [ ] ao voltar ao e-mail anterior, as tarefas dele reaparecem
- [ ] sair não apaga as tarefas de ninguém
- [ ] **a identificação continua funcionando**
- [ ] a feature está em `src/features/todos`
- [ ] o armazenamento está encapsulado em serviço — só ele monta a chave
- [ ] a feature de tarefas recebe o e-mail por propriedade, sem importar arquivos internos da `auth`
- [ ] existem testes, incluindo um da separação entre usuários
- [ ] `npm run validate` passa
- [ ] commit criado: `feat: adiciona criação e conclusão de tarefas`

**O teste que decide esta etapa:** criar tarefa com um e-mail, sair, entrar com outro. Se a tarefa aparecer, o armazenamento está usando chave global.

**Problemas comuns nesta etapa:** chave global em vez de chave por usuário · armazenamento acessado direto em vários componentes · lógica de tarefa dentro do componente principal · edição e exclusão adicionadas sem pedido · estado perdido no recarregamento · **identificação quebrada**.

O último é o mais instrutivo: pergunte ao grupo *"o que deveria ter percebido isso antes de você?"*. A resposta é: os testes.

---

## Checkpoint 4 — Clima · após a Etapa 5

- [ ] cidade válida exibe o clima
- [ ] a busca mostra carregamento
- [ ] falha mostra mensagem compreensível
- [ ] **sem internet, a tela não fica em branco nem carregando para sempre**
- [ ] é possível consultar outra cidade em seguida
- [ ] **nenhuma credencial ou chave real no projeto**
- [ ] as chamadas externas estão em `src/features/weather`, dentro de um serviço
- [ ] identificação e tarefas continuam funcionando
- [ ] `npm run validate` passa
- [ ] commit criado: `feat: adiciona consulta de clima atual`

**O que verificar circulando:** tem `fetch` dentro do componente? · o erro está tratado ou só vai para o console? · alguém tentou usar uma API com chave? · **cidade inexistente** foi tratada? (a API omite o campo `results` em vez de devolver lista vazia — quem tratou só "lista vazia" quebra aqui)

---

## Checkpoint 5 — Entrega · após a Etapa 6

- [ ] `npm run test` passa
- [ ] `npm run lint` passa
- [ ] `npm run typecheck` passa
- [ ] `npm run build` passa
- [ ] o fluxo manual completo funciona
- [ ] a documentação está atualizada
- [ ] pull request aberto ou resumo final escrito
- [ ] a revisão foi feita **antes** das correções, e só o necessário foi corrigido

---

## Critérios de sucesso da prática (§10)

O grupo concluiu quando:

- [ ] utilizou o template
- [ ] pediu planejamento antes de implementar
- [ ] trabalhou em incrementos
- [ ] respeitou o não escopo
- [ ] executou validações locais
- [ ] revisou alterações
- [ ] registrou commits
- [ ] documentou como executar e testar
- [ ] **consegue explicar a estrutura do projeto**

O último é o que realmente importa. Se o grupo tem uma aplicação funcionando mas não sabe dizer onde fica o quê, o objetivo do treinamento não foi atingido — e vale mais tempo nisso que em qualquer funcionalidade opcional.

---

## Mapa rápido para conferência

O que você deve ver ao abrir o `src/` de qualquer grupo no fim:

```
src/
├── app/
├── features/
│   ├── auth/       ← identificação por e-mail, sessão, logout
│   ├── todos/      ← tarefas
│   └── weather/    ← clima
├── shared/
└── main.tsx
```

Cada feature com `components/`, `model/`, `services/`, `tests/` e `index.ts`.

**Quatro perguntas que revelam tudo, quase sem ler código:**

1. Existem **três** pastas em `features/`?
2. Existe `services/` em `todos` e em `weather`?
3. Existe `tests/` em todas as três?
4. No `todoStorage`, a chave de armazenamento inclui o e-mail?

Se as quatro respostas forem sim, o processo foi seguido.
