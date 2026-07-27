# TaskWeather — roteiro da prática

**Formato:** duplas (no máximo trios) · **Duração:** 2 horas

## A regra principal

> **Não pedir a aplicação inteira de uma vez.**

O objetivo de hoje não é a aplicação mais completa nem o design mais bonito. É aplicar o processo: template → plano → incrementos → validação → registro.

## Divisão de papéis

- **Uma pessoa conduz o agente** (digita, envia os prompts).
- **A outra lê os critérios e acompanha o escopo** — é quem pergunta "isso estava no escopo?".
- **Trocar os papéis depois do login.**

Quem não está no teclado tem o papel mais difícil e mais importante.

---

## O que vamos construir

### Obrigatório

identificação por e-mail · sessão local · logout · dados separados por usuário · criar tarefas · listar tarefas · concluir tarefas · persistência local · clima atual por cidade · estados de carregamento e erro · validação local · documentação mínima

### Só se sobrar tempo

editar tarefa · excluir tarefa · filtrar tarefas · testes adicionais · melhoria visual

### Fora do escopo — não implemente

backend · banco de dados · autenticação real · senha · cadastro · recuperação de senha · dados sensíveis · geolocalização automática · previsão meteorológica avançada · publicação em produção

**Como se entra:** informando **apenas o e-mail** — não há senha. Use o seu, ou `demo@empresa.com`.

O e-mail identifica a sessão e separa as tarefas de cada pessoa. ⚠️ Isto **não é autenticação**: qualquer pessoa pode digitar qualquer e-mail. A separação evita confusão, não protege segredo — não guardem nada sensível aqui.

---

## As etapas

Todos os prompts estão em [`../prompts/prompts-para-copiar.md`](../prompts/prompts-para-copiar.md).

### Etapa 1 — Criar e executar o projeto · 10 min

1. Criar um repositório usando o template.
2. Nome sugerido: `taskweather-nome-do-grupo`.
3. Abrir o projeto no agente.
4. `npm install`
5. `npm run dev`
6. Abrir e ler: `README.md`, `AGENTS.md`, `CLAUDE.md`, `docs/architecture.md`.
7. Rodar o prompt de exploração da Etapa 1.

- [ ] a aplicação abriu no navegador
- [ ] o agente resumiu as regras do projeto
- [ ] **nenhum arquivo foi alterado** (confirme com `git status`)

> Se o ponto de partida já estiver com erro, não comece a funcionalidade. Chame o instrutor.

### Etapa 2 — Planejar · 10 min

Rode o prompt de planejamento. Depois **verifiquem juntos:**

- [ ] o plano respeita o não escopo?
- [ ] cada funcionalidade está separada?
- [ ] os critérios são observáveis?
- [ ] o agente tentou incluir bibliotecas?
- [ ] a ordem permite validar um incremento por vez?
- [ ] **nenhum arquivo foi alterado?**

- [ ] plano aceito, com três incrementos: autenticação, tarefas, clima

### Etapa 3 — Identificação por e-mail · 20 min

Rode o prompt de identificação. Depois **teste na tela, nesta ordem:**

1. entrar com o campo vazio → deve mostrar mensagem
2. entrar com `ana` → deve mostrar mensagem (formato inválido)
3. entrar com `ana@empresa.com` → deve entrar
4. atualizar a página (F5) → deve continuar logado
5. sair → deve voltar à tela de entrada
6. atualizar de novo → deve continuar fora

- [ ] os seis passos funcionam
- [ ] a tela **não** pede senha
- [ ] o e-mail aparece na tela depois de entrar
- [ ] `npm run validate` passa
- [ ] commit: `feat: adiciona identificação por e-mail`

**Trocar os papéis agora.**

### Etapa 4 — Lista de tarefas · 30 min

Rode o prompt de tarefas. Depois **teste na tela:**

1. abrir com a lista vazia → deve haver uma orientação
2. tentar adicionar com o título vazio → deve avisar e não criar
3. criar duas tarefas → devem aparecer na hora
4. concluir uma → deve marcar
5. reabrir → deve desmarcar
6. atualizar a página → tudo deve continuar lá
7. sair e entrar com **outro** e-mail → a lista deve estar **vazia**
8. sair e voltar ao primeiro e-mail → as tarefas devem estar lá

- [ ] os oito passos funcionam
- [ ] as tarefas de um e-mail não aparecem para outro
- [ ] a identificação continua funcionando
- [ ] `npm run validate` passa
- [ ] commit: `feat: adiciona criação e conclusão de tarefas`

### Etapa 5 — Clima · 20 min

Rode o prompt de clima. Depois **teste na tela:**

1. consultar "Curitiba" → deve mostrar a temperatura
2. consultar "zzzznaoexiste" → deve mostrar mensagem de erro
3. **desligar o wi-fi e consultar** → deve mostrar mensagem de erro, **não** tela branca nem carregando para sempre
4. religar e consultar outra cidade → deve funcionar

- [ ] os quatro passos funcionam
- [ ] nenhuma chave de acesso ou senha foi adicionada ao projeto
- [ ] a identificação e as tarefas continuam funcionando
- [ ] `npm run validate` passa
- [ ] commit: `feat: adiciona consulta de clima atual`

### Etapa 6 — Validar, revisar e documentar · 15 min

Rode o prompt de revisão. **Autorize apenas as correções necessárias** — não deixe o agente reescrever o que está funcionando.

```bash
npm run test
npm run lint
npm run typecheck
npm run build
```

**Fluxo manual final, do começo ao fim:**

e-mail inválido → e-mail válido → criar tarefa → concluir tarefa → consultar clima → recarregar → logout → entrar com outro e-mail e confirmar que a lista está vazia

- [ ] os quatro comandos passam
- [ ] o fluxo manual completo funciona
- [ ] `README.md` atualizado, se necessário
- [ ] pull request aberto ou resumo final escrito

---

## Se terminarem antes

**Não comecem funcionalidade nova.** Nesta ordem:

1. revisem o diff, arquivo por arquivo — o que vocês mudaram mesmo?
2. melhorem os critérios de aceite que ficaram vagos;
3. adicionem um teste que esteja faltando;
4. ajudem outro grupo — **sem assumir o teclado.**

---

## Se travarem

Cinco minutos no mesmo erro: chamem o instrutor. Existe uma branch de referência para cada etapa.

Perder tempo com ambiente não é o objetivo da prática.

---

## No fim, vocês devem conseguir explicar

- [ ] onde fica o código da identificação, das tarefas e do clima — e por quê
- [ ] como as tarefas de uma pessoa ficam separadas das de outra
- [ ] por que a chamada da API não fica dentro do componente
- [ ] o que aconteceria se um teste falhasse
- [ ] o que ficou fora do escopo, e por quê
- [ ] o que vocês pediriam diferente na próxima vez

> O principal artefato não é a aplicação. É a capacidade de repetir este processo em outros projetos.
