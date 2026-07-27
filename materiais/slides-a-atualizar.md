# Slides — o que foi atualizado

> ✅ **Aplicado em 27.07.2026.** Os três decks (`.key` e `.pdf`) já estão atualizados no repositório, gerados com a skill `analytics-report-deck` a partir dos `build*.js` originais. Este documento fica como registro do que mudou. Os pendentes estão marcados no checklist do fim.

Comparação entre o conteúdo atual dos três decks (`apresentacao-dia-*.key`) e as decisões que passaram a valer: **entrada por e-mail sem senha, com dados separados por usuário**, e **o template como fonte de verdade** nas divergências.

**Veredito: atualizar, não recriar.** Foram **13 slides de 46**, quase todos troca de texto em um bloco. Nenhuma mudança de estrutura, de ordem ou de identidade visual.

Os decks são gerados por script (`materiais/decks-build/`) com a identidade visual da skill `analytics-report-deck`, então a edição foi feita no código e o deck reconstruído — não à mão no Keynote. `.key` e `.pdf` estão os dois versionados e foram atualizados.

| Deck  | Slides | Atualizados |
| ----- | -----: | ----------: |
| Dia 1 |     17 |           5 |
| Dia 2 |     16 |           2 |
| Dia 3 |     13 |           6 |

---

## Dia 1 — 5 slides

### Slide 7 · `05 · ESCOPO` — Escopo e não escopo

**Coluna "Entra agora"**

| Está                | Deve ficar                          |
| ------------------- | ----------------------------------- |
| • Login simulado    | • Entrada por e-mail, sem senha     |
| • Tarefas locais    | • Dados separados por usuário       |
| • Clima atual       | • Tarefas locais                    |
|                     | • Clima atual                       |

**Coluna "Não entra agora"** — trocar `Recuperação de senha` por duas linhas:

```
• Autenticação real
• Senha e recuperação de senha
```

> Por que importa: este slide é a referência de escopo do dia inteiro. Se ele disser "login simulado", a turma vai esperar senha nas etapas seguintes.

### Slide 8 · `06 · CRITÉRIOS` — Funcionalidade não é critério de aceite

**O mais importante dos 12.** É o exercício conduzido com a turma, e os critérios atuais descrevem um produto que não existe mais.

Bloco "Exemplo guiado: login simulado" → **"Exemplo guiado: entrada por e-mail"**

| Está                                    | Deve ficar                                              |
| --------------------------------------- | ------------------------------------------------------- |
| • Credencial correta permite acesso     | • E-mail válido permite acesso                          |
| • Credencial incorreta mostra mensagem  | • E-mail vazio ou inválido mostra mensagem e não entra  |
| • Atualizar a página mantém a sessão    | • Atualizar a página mantém a sessão                    |
| • Logout retorna à tela de login        | • "Sair" retorna à tela de entrada                      |
|                                         | • As tarefas de um e-mail não aparecem para outro       |

A última linha é nova e vale o espaço: é o critério que o projeto desorganizado **viola**, e é a demonstração mais forte do Bloco opcional A.

### Slide 9 · `07 · DIVIDIR` — Dividir para controlar

Na lista de 7 tarefas: `2. login fake` → **`2. entrada por e-mail`**

### Slide 11 · `09 · VERSIONAMENTO` — Branch, commit e pull request

| Bloco            | Está                            | Deve ficar                                |
| ---------------- | ------------------------------- | ----------------------------------------- |
| NOMES DE BRANCH  | `feat/login-fake`               | `feat/login-email`                        |
| COMMITS          | `feat: adiciona login simulado` | `feat: adiciona identificação por e-mail` |

Alinha com o entregável [`04-fluxo-github-resumido.md`](dia-1/entregaveis/04-fluxo-github-resumido.md), que a turma leva impresso.

### Slide 16 · `14 · EXERCÍCIO` — Atividade em duplas

Na "Resposta de referência":

| Está                                                                | Deve ficar                                                                                        |
| ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| • Escopo: login fake, tarefas, persistência local, clima por cidade | • Escopo: entrada por e-mail sem senha, dados separados por usuário, tarefas, persistência local, clima por cidade |

### Opcional — dois acréscimos que valem considerar no Dia 1

1. **Slide 14 (`12 · VALIDAÇÃO`)** mostra 4 comandos. Acrescentar um quinto cartão, `npm run validate` — "todos de uma vez", é o comando que os materiais mandam rodar e o que fecha a definição de concluído.
2. **Um slide novo para o Bloco opcional A**, com a demonstração de vazamento de dados: entra como Ana, cria "consulta médica", sai, entra como João — e a tarefa da Ana está lá. Hoje os blocos opcionais não têm slide; se você conduz o Bloco A com frequência, esse é o slide de maior impacto do dia. Roteiro pronto em [`dia-1/README.md`](dia-1/README.md).

---

## Dia 2 — 2 slides

### Slide 7 · `05 · ANTES E DEPOIS` — Do pedido vago ao pedido executável

O bloco "DEPOIS · ESTRUTURADO" descreve login com senha. Atualizar deixa o exemplo **melhor**, não só consistente: a decisão "sem senha, e o e-mail separa os dados" é exatamente o tipo de coisa que, se não for dita, o agente resolve sozinho construindo cadastro e recuperação de senha.

```text
Contexto: React organizado por features.
Objetivo: entrada por e-mail, sem senha.
Escopo: campo de e-mail, validação, sessão, logout,
  dados separados por e-mail.
Fora do escopo: senha, cadastro, backend.
Restrições: não instalar deps.
Critérios: e-mail válido entra; inválido mostra erro;
  sessão permanece; logout encerra;
  tarefas de um e-mail não aparecem para outro.
Processo: analise, planeje, implemente.
Validação: testes, lint e build.
```

O bloco "ANTES · VAGO" (`"Faça um login moderno para o sistema."`) **não muda** — continua sendo o pedido vago ideal, e agora contrasta ainda mais: "moderno" não diz nada sobre a decisão que realmente importava.

> Se preferir **não** mexer neste slide, funciona também: [`dia-2/demonstracoes/01`](dia-2/demonstracoes/01-prompt-vago-vs-estruturado.md) tem uma seção que usa a diferença como material de aula ("o prompt não é sagrado, a decisão de produto é"). Nesse caso, avise a turma em voz alta.

### Slide 12 · `10 · SKILLS` — Anatomia e uso de uma skill

O catálogo lista 6 skills; o template tem **8**. Como o template é a fonte de verdade:

```
• plan-app   ·   plan-feature   ·   implement-feature
• generate-tests   ·   review-changes
• update-documentation   ·   prepare-pull-request
• frontend-skill
```

As duas que faltavam: **`plan-app`** (definir o produto quando a ideia ainda é vaga — cria o `docs/prd.md`) e **`frontend-skill`** (interface visualmente forte).

---

## Dia 3 — 6 slides

### Slide 2 · `00 · ESCOPO` — Escopo da aplicação

**Coluna "Obrigatório"**

| Está                                     | Deve ficar                                            |
| ---------------------------------------- | ----------------------------------------------------- |
| • Login simulado, sessão local, logout   | • Entrada por e-mail sem senha, sessão local, logout  |
|                                          | • Dados separados por usuário                         |

**Coluna "Fora do escopo"** — acrescentar `senha` à linha de autenticação real e cadastro.

### Slide 3 · `00 · AGENDA` — Agenda-base

Etapa 4: `Implementar login simulado` → **`Implementar entrada por e-mail`**

### Slide 7 · `ETAPA 3 · LOGIN` — o slide com mais mudança

Título: `Login simulado` → **`Entrada por e-mail`**
Subtítulo: `...o incremento de autenticação aprovado no plano` → **`...o incremento de identificação aprovado no plano`**

**Bloco "Critérios de aceite"**

| Está                                             | Deve ficar                                                  |
| ------------------------------------------------ | ----------------------------------------------------------- |
| • Correta acessa; incorreta mostra mensagem      | • E-mail válido acessa; vazio ou inválido mostra mensagem   |
| • Atualizar a página mantém a sessão             | • A tela **não** pede senha                                 |
| • Logout encerra; nenhuma auth real              | • Atualizar a página mantém a sessão                        |
|                                                  | • E-mail normalizado (minúsculas, sem espaços)              |
|                                                  | • Logout encerra sem apagar dados; nenhuma auth real        |

**Bloco "CREDENCIAIS DE DEMONSTRAÇÃO"** — deixa de existir como credencial. Vira:

```
ENTRADA SEM SENHA
Informe apenas o e-mail

demo@empresa.com

⚠️ Identifica, não autentica.
```

**Bloco "Restrições e processo"** — o commit no fim:
`feat: adiciona fluxo de login simulado` → **`feat: adiciona identificação por e-mail`**

> Acrescentar uma linha nas restrições: **"não criar senha, cadastro nem recuperação de senha"**. É a restrição que o agente mais tende a violar nesta etapa.

### Slide 8 · `ETAPA 4 · TAREFAS` — Lista de tarefas

No bloco "Escopo", acrescentar:

```
• Guardar as tarefas separadas por usuário,
  usando o e-mail da sessão na chave
```

No bloco "Critérios e restrições":

| Está                                          | Deve ficar                                                     |
| --------------------------------------------- | -------------------------------------------------------------- |
| • Estado permanece após recarregar; login intacto | • Estado permanece após recarregar; identificação intacta  |
| • Não instalar deps; não alterar autenticação | • As tarefas de um e-mail **não** aparecem para outro           |
|                                               | • Não instalar deps; não alterar a identificação                |

### Slide 12 · `INSTRUTOR · CHECKPOINTS`

| Está                                          | Deve ficar                                                       |
| --------------------------------------------- | ---------------------------------------------------------------- |
| • 2 · Login: sucesso, erro, sessão, logout    | • 2 · E-mail: válido entra, inválido recusa, sessão, logout      |
| • 3 · Tarefas: criar, concluir, persistir     | • 3 · Tarefas: criar, concluir, persistir, **separadas por usuário** |

### Opcional — Dia 3

**Slide 4 (`01 · RESULTADO`)** diz "Tela de login" na descrição da aplicação final. Funciona como está; "Tela de entrada" seria mais preciso agora que não há senha.

---

## O que **não** precisa mudar

Vale registrar, para não perder tempo revisando o que já está certo:

| Deck  | Slides corretos                                                                                |
| ----- | ---------------------------------------------------------------------------------------------- |
| Dia 1 | 1–6, 10, 12–15, 17 — a árvore `features/auth/todos/weather` do slide 12 continua exata          |
| Dia 2 | todos os outros 14, incluindo a matriz de modelo, o checklist de MCP e os 8 blocos do prompt     |
| Dia 3 | 1, 4–6, 9–11, 13 — inclusive o slide de clima, que já não menciona chave de acesso               |

Nenhuma decisão de estrutura, ordem, agenda ou identidade visual mudou. **Nada precisa ser recriado.**

---

## Checklist de execução

- [x] Dia 1: slides 7, 8, 9, 11, 16
- [x] Dia 2: slides 7, 12
- [x] Dia 3: slides 2, 3, 4, **6**, 7, 8, 12 — o slide 6 (prompt de planejamento) ainda dizia "login fake" e não estava no levantamento inicial
- [x] Reexportar os três PDFs a partir dos `.key` (17 / 16 / 13 páginas, contagens preservadas)
- [x] Conferir estouro de caixa — QA visual nas imagens exportadas do Keynote, sem sobreposição ou texto cortado
- [x] Animações preservadas: 306 / 317 / 224 efeitos, todos com início automático
- [x] Correções de layout e contraste apontadas no QA (detalhe abaixo)
- [ ] **Pendente:** `npm run validate` como 5º cartão no Dia 1/14 (muda o layout de 4 para 5 cartões)
- [ ] **Pendente:** slide novo para o Bloco opcional A com a demonstração de vazamento de dados

## Correções de layout e contraste

Aplicadas depois do QA visual. Nenhuma delas foi introduzida pelas mudanças de
texto — todas eram características do template que o QA expôs.

| Onde | Problema | Correção |
| ---- | -------- | -------- |
| Dia 1/8 | bases das colunas desalinhadas em 0,28" | card direito de 3,75" → 3,47", fechando junto com o checklist |
| Dia 1/11 | folga inferior de 0,10–0,13" nos cards escuros | cards de 1,55/1,75" → 1,63/1,83" e card direito de 3,45" → 3,61", mantendo as bases alinhadas |
| Dia 2/7 | folga inferior de 0,125" no card "ANTES · VAGO" | card de 1,3" → 1,42" e legenda de y=4,0 → 4,12 |
| Dia 3/8 | títulos das colunas desalinhados em 0,43" | rótulo "COMO VERIFICAR NA TELA" no card direito, que não tinha — resíduo caiu para 0,08" |
| todos os slides | rodapé, strip e data em ~3,1:1 | `T.GRAY2` de `8C8C96` → `60606A` (**5,76:1**) |
| Dia 1/2, Dia 3/3 | coluna "Duração" das agendas fraca | `TABLE.muted` de `T.GRAY` → `5A5A64` (**6,82:1**) |

As duas últimas são de contraste e ficam no `common.js`, **local a esta série** —
a skill compartilhada não foi alterada, para não afetar outros decks que a usam.

> Nota de método: nas imagens de QA (72 DPI) o rodapé mede ~3,4:1 mesmo depois da
> correção, porque em 9pt os traços ficam mais finos que um pixel e se misturam ao
> fundo. A cor especificada é o que vale — confirmada no PDF como `#60606A`. Não
> use a medição das imagens de QA como veredito de contraste em corpo pequeno.

## Como os decks são gerados

Os `build*.js` que produzem os três decks foram recuperados e ficam em
`materiais/decks-build/`. Para uma próxima alteração:

```bash
cd materiais/decks-build && npm install pptxgenjs
node build1.js   # gera deck1.pptx
S=/Users/gaabrielrd/Dev/vitru/analytics/.claude/skills/analytics-report-deck
python3 $S/scripts/animate.py deck1.pptx deck1_anim.pptx
bash $S/scripts/to_keynote.sh "$PWD/deck1_anim.pptx" "$PWD/deck1.key" "$PWD/qa1"
bash export_pdf.sh "$PWD/deck1.key" "$PWD/deck1.pdf"
```

O `common.js` carrega a identidade visual da skill por caminho absoluto e apenas
sobrescreve o rodapé (`T.FOOT = "USANDO IA: DA CONCEPÇÃO À ENTREGA"`).
