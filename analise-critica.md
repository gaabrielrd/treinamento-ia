# Análise crítica do treinamento

Avaliação do desenho dos três dias, com foco em duas perguntas: **a passagem entre assuntos é fluente?** e **o que fica comprovadamente aprendido no fim?**

> As correções descritas aqui já estão aplicadas nos roteiros, nos materiais e nas agendas dos slides. Este documento fica como o raciocínio por trás delas — útil quando alguém perguntar por que a estrutura é assim, ou quando for a hora de revisá-la depois da primeira turma.
>
> Duas recomendações **não** foram aplicadas, porque dependem de decisão sua: o encontro de reforço 2–3 semanas depois, e a demonstração literal do Slide 2 do Dia 1 ("dois resultados do mesmo prompt vago"), para a qual não existe material.

---

## Veredito em uma página

O conteúdo está correto e bem sequenciado no plano conceitual. Os três problemas abaixo não são de conteúdo — são de **arquitetura da experiência**.

| # | Problema | Efeito |
| - | -------- | ------ |
| 1 | **A rampa de prática é um degrau.** Nos Dias 1 e 2 o participante não opera um agente em nenhum momento. No Dia 3, opera por 100 minutos seguidos. | O Dia 3 vira o primeiro contato prático, e é justamente o dia sem folga de tempo |
| 2 | **Os dias são conectados por conceito, não por artefato.** O que o participante produz no Dia 1 (um formulário) e no Dia 2 (um prompt) não entra no Dia 3. | Cada dia recomeça. A sensação de continuidade depende da fala do instrutor, não do material na mão |
| 3 | **Só o Dia 3 tem resultado observável.** Dias 1 e 2 terminam em "indicadores de compreensão" — perguntas verbais. | Não há como saber, ao fim do Dia 1, quem entendeu e quem concordou por educação |

Os três têm a **mesma correção**: um projeto atravessando os três dias, produzindo um artefato por dia, cada um sendo a entrada do próximo.

---

## O problema central: a distribuição da prática

Tempo em que o **participante** está com as mãos no agente:

| Dia | Exposição | Exercício em papel | Operando o agente |
| --- | --------: | -----------------: | ----------------: |
| 1   | 102 min   | 12 min             | **0 min**         |
| 2   | 102 min   | 13 min             | **0 min**         |
| 3   | 15 min    | —                  | **~100 min**      |

O público, segundo o próprio roteiro, **já usa agentes de código** — de forma ad hoc. Isso muda o diagnóstico: o risco não é falta de familiaridade com a ferramenta, é **concordar com o processo e voltar à prática antiga na segunda-feira**. Duas horas de exposição sem produzir nada é o formato mais vulnerável a isso.

E há um efeito colateral no Dia 3: toda a engenharia de contingência que existe hoje — quatro branches de checkpoint, arquivo compactado, regra dos cinco minutos, lista de erros comuns — é uma resposta a um risco que o próprio desenho cria. Ela está bem feita, mas é sintoma.

---

## A correção que resolve os três problemas

**Um projeto real de cada dupla, atravessando os três dias.**

```
Dia 1  →  docs/prd.md          problema, escopo, não escopo, critérios
Dia 2  →  AGENTS.md + plano    regras do projeto + plano gerado pelo agente
Dia 3  →  a aplicação          construída a partir do PRD e do plano
```

O que isso muda:

- **Fluência.** A transição entre dias deixa de ser uma frase ("amanhã vamos…") e passa a ser um arquivo. O Dia 2 abre com "abram o PRD que vocês escreveram ontem".
- **Observabilidade.** Cada dia termina com um arquivo que você consegue abrir e avaliar.
- **Transferência.** Se o projeto for uma demanda real da área — mesmo pequena — o treinamento entrega processo *e* um começo de entrega.

O TaskWeather continua sendo o exemplo do instrutor. O que muda é o participante ter também um projeto próprio, mínimo, correndo em paralelo.

> Se isso parecer arriscado para a primeira turma, há uma versão intermediária: **todas as duplas usam o mesmo projeto fictício**, mas ainda assim produzem os três artefatos. Você ganha fluência e observabilidade sem o risco de escopos imprevisíveis.

---

## Dia 1 — Processo, organização e qualidade local

### O que está forte

A progressão problema → escopo → critérios → tarefas é a espinha correta, e a distinção "funcionalidade não é critério de aceite" (Slide 6) é o melhor momento conceitual dos três dias.

### Problemas

**O Bloco 2 tem 41 minutos de exposição contínua.** Cinco slides sobre abstrações de processo (processo, definir, escopo, critérios, dividir) antes de qualquer produção. Para um público não técnico, é o dobro do que costuma sustentar atenção sem prática intercalada.

**A única prática está no minuto 100.** O exercício do Slide 14 é bom, mas chega quando a energia já caiu — e é o único momento em que alguém produz algo.

**O GitHub (18 min) é uma troca de assunto sem ponte.** Sai-se de "como pensar o produto" e entra-se em "como funciona a ferramenta de versionamento", com uma transição de uma linha. O GitHub está no Dia 1 porque é necessário no Dia 3, não porque decorre do raciocínio do dia.

**O melhor ativo do dia está num bloco opcional.** A demonstração de vazamento de dados no projeto desorganizado — entra como Ana, cria "consulta médica", sai, entra como João, e a tarefa está lá — é o argumento mais visceral do treinamento inteiro para "por que processo". Hoje ela está no Bloco Opcional A, no fim, e pode nunca acontecer.

**Falta material para a demonstração do Slide 2.** O roteiro pede "dois resultados diferentes gerados a partir do mesmo prompt vago". Os dois projetos de exemplo não são isso — são o mesmo produto com organizações diferentes, que é outro argumento (igualmente bom, mas não o pedido).

### Melhorias sugeridas

**1. Abra com o vazamento de dados, não com slides.** Mova a demonstração para os primeiros 10 minutos. A turma vê um app que *funciona* expor a agenda médica de outra pessoa, e só então você diz "isso não é um bug de programação, é uma consequência de desorganização — e é sobre isso que é o dia". Ganha-se um gancho emocional que sustenta os 40 minutos seguintes.

**2. Quebre o Bloco 2 em dois, com prática no meio.** Sugestão de nova agenda:

| Bloco | Conteúdo | Duração |
| ----- | -------- | ------: |
| 1 | Abertura + **demonstração do vazamento** | 13 min |
| 2 | Processo, definir problema, escopo e não escopo | 23 min |
| 3 | **Prática: escrevem o PRD do próprio projeto** (problema, escopo, não escopo) | 15 min |
| 4 | Critérios de aceite + dividir em tarefas | 18 min |
| 5 | **Prática: completam o PRD** com critérios e tarefas | 12 min |
| 6 | Estrutura, documentação e validação local | 22 min |
| 7 | **Primeiro contato com o agente** (só leitura) + encerramento | 17 min |

O GitHub sai do Dia 1 como bloco próprio e vira **operação**, não teoria: no Bloco 7, cada dupla comita o próprio `docs/prd.md`. Aprendem branch/commit/PR fazendo, com um arquivo que lhes interessa, em vez de vê-los explicados.

**3. Encerre com o agente, em modo leitura.** 10 minutos, sem risco:

```text
Leia docs/prd.md. Não altere nenhum arquivo.
Liste: o que ficou ambíguo, o que você teria de decidir sozinho
para implementar isso, e quais critérios não são verificáveis.
```

É o fecho perfeito do dia — o agente aponta as lacunas do PRD que eles acabaram de escrever — e é o primeiro contato prático, sem nenhuma chance de estragar algo.

### Resultado observável ao fim do Dia 1

- [ ] cada dupla tem um `docs/prd.md` commitado, com problema, escopo, não escopo e ≥2 critérios por funcionalidade
- [ ] nenhum critério usa "fácil", "rápido", "bonito", "moderno" ou "seguro"
- [ ] existe ao menos um critério de caso de erro
- [ ] a dupla rodou os quatro comandos de validação em um projeto e sabe ler uma falha

---

## Dia 2 — Prompts, contexto persistente, skills e MCP

### O que está forte

O eixo "o que vai no prompt × o que vai no repositório" é a ideia mais reaproveitável do treinamento. E a matriz de escolha de modelo é boa justamente por ser curta.

### Problemas

**Sete blocos em 120 minutos.** MCP tem 10 minutos e escolha de modelo tem 8. Nesse tempo, os dois são *mencionados*, não ensinados — e ainda assim consomem 18 minutos que faltam nos blocos de maior valor.

**MCP está com o nível errado de profundidade para o público.** Ninguém dessa turma vai configurar um servidor MCP no mês seguinte. O que essas pessoas precisam levar é **uma pergunta** — "o que essa integração pode acessar e alterar?" — e o checklist de segurança. Isso são 6 minutos, não 10 mais uma demonstração ao vivo que pode falhar.

**Segundo dia consecutivo sem operar o agente.** O dia é inteiramente sobre como conduzir um agente, e as demonstrações são todas do instrutor. É a maior inversão de todo o desenho: o assunto mais operacional dos três dias é o menos praticado.

**A atividade final é um prompt em papel que ninguém executa.** Escrever um bom prompt e nunca ver a resposta é como aprender a fazer uma pergunta sem ouvir a resposta — falta o loop de correção, que é onde o aprendizado acontece.

### Melhorias sugeridas

**1. Comprima MCP e escolha de modelo em um bloco só de 15 min:** *"o que existe além do prompt"*. Nível consciência, não operação. Entregue o checklist de segurança e a matriz de modelo como material, faça a pergunta-chave de cada um, e siga. Não faça demonstração de MCP ao vivo — o custo/benefício não fecha em 2 horas.

**2. Use os ~15 min liberados para a turma operar o agente.** Sugestão de nova agenda:

| Bloco | Conteúdo | Duração |
| ----- | -------- | ------: |
| 1 | Ciclo do agente e por que erram | 18 min |
| 2 | Anatomia do prompt + vago × estruturado | 25 min |
| 3 | **Prática: cada dupla escreve o prompt e executa** — plano da 1ª feature do próprio PRD | 25 min |
| 4 | Contexto persistente: `AGENTS.md` e `CLAUDE.md` | 20 min |
| 5 | **Prática: escrevem o `AGENTS.md` do próprio projeto** | 12 min |
| 6 | Skills | 15 min |
| 7 | Além do prompt: MCP e escolha de modelo | 15 min |
| 8 | Encerramento | 10 min |

O Bloco 3 é a mudança que mais importa. Eles escrevem o prompt, **rodam**, e olham o que voltou com o checklist de revisão de prompt na mão. Um plano ruim ali vale mais que qualquer slide sobre prompts ruins.

**3. Dê ao Bloco 3 uma restrição de segurança.** O prompt é sempre de planejamento, com "não altere arquivos". Zero risco de estragar o projeto, e ainda reforça a distinção planejar × implementar que o Dia 3 vai exigir.

### Resultado observável ao fim do Dia 2

- [ ] cada dupla tem um `AGENTS.md` commitado no próprio projeto
- [ ] cada dupla tem um plano gerado pelo agente, revisado, com arquivos afetados e critérios
- [ ] a dupla consegue apontar, no plano recebido, uma suposição que o agente fez e que estava errada
- [ ] `git status` confirma que o agente não alterou arquivos durante o planejamento

O terceiro item é o mais valioso: é a evidência de que passaram de "aceitar o que o agente devolve" para "revisar o que o agente devolve".

---

## Dia 3 — Prática

### O que está forte

A estrutura de checkpoints é excelente, e a decisão de dividir em três incrementos com commit em cada um é exatamente o que ensina o hábito. O sistema de contingência é honesto sobre onde a prática costuma quebrar.

### Problemas

**Escopo agressivo para o tempo.** Três features, revisão, validação e PR em 100 minutos, com público não técnico. As três branches de checkpoint existem porque a chance de atraso é alta — o material está compensando o desenho.

**A terceira feature ensina menos que custa.** O clima adiciona 20 minutos e uma dependência de rede, e a lição nova que traz — chamada externa isolada em serviço + estados de erro — é conceitualmente a mesma coisa que o armazenamento isolado em serviço, que eles já fizeram na feature de tarefas. É a feature com pior relação aprendizado/risco das três.

**A separação de dados por usuário é o melhor conteúdo do dia e está escondida dentro da Etapa 4.** Ela merece ser nomeada como incremento próprio, porque é o único momento em que a turma vê uma decisão de arquitetura ter consequência visível — o mesmo vazamento que abriu o Dia 1, agora prevenido por eles.

**O artefato declarado não é verificável.** "O principal artefato é a capacidade de repetir o processo" é verdadeiro e inspirador, mas não é observável. Hoje isso só aparece na última pergunta dos critérios de sucesso ("consegue explicar a estrutura").

### Melhorias sugeridas

**1. Torne o clima opcional e promova a separação de dados a incremento.** Nova agenda base:

| Etapa | Atividade | Duração |
| ----- | --------- | ------: |
| 1 | Abertura e regras | 8 min |
| 2 | Criar projeto e executar template | 10 min |
| 3 | Planejar (reusando o plano do Dia 2) | 8 min |
| 4 | Identificação por e-mail | 20 min |
| 5 | Lista de tarefas | 25 min |
| 6 | **Separação de dados por usuário** | 15 min |
| 7 | Validar, revisar e documentar | 20 min |
| 8 | **Demonstração cruzada** e retrospectiva | 14 min |

O clima entra como Bloco opcional 5, para quem chegar na frente — e a lição de "chamada externa isolada" você entrega em 3 minutos projetando o `weatherApi.ts` da solução de referência.

Isso dá **20 minutos** a mais para revisão, documentação e fechamento — que é onde o processo realmente se consolida, e onde hoje há 15 minutos apertados.

**2. Troque a demonstração final por demonstração cruzada.** Hoje um ou dois grupos apresentam. Em vez disso, **cada dupla mostra a aplicação para a dupla vizinha em 3 minutos**, seguindo o fluxo manual do roteiro. Todos apresentam, todos revisam, e você observa muito mais em 10 minutos do que com dois voluntários.

**3. Faça o resultado ser explicável, não só funcional.** Feche com um teste de 5 minutos, por dupla, em voz alta:

> Sem abrir o código: onde fica a regra de e-mail válido? Onde fica a chave que separa os dados? Se eu quisesse trocar o `localStorage` por um banco, quantos arquivos mudariam?

Quem responde as três, aprendeu. Quem não responde, tem uma aplicação que o agente construiu — e é bom saber disso antes do fim do treinamento.

### Resultado observável ao fim do Dia 3

- [ ] aplicação rodando, com o fluxo manual completo funcionando
- [ ] `npm run validate` passando
- [ ] três commits, um por incremento
- [ ] pull request com evidência real das validações e limitações escritas
- [ ] `features/` com uma pasta por funcionalidade, cada uma com `services/` e `tests/`
- [ ] a chave de armazenamento inclui o e-mail
- [ ] **a dupla responde às três perguntas de arquitetura sem abrir o código**

---

## O que eu não mudaria

Vale registrar, porque é tão importante quanto a crítica:

- **A ordem dos assuntos.** Processo → comunicação com o agente → prática é a sequência certa. O problema é a densidade dentro de cada dia, não a ordem.
- **Os dois projetos de exemplo.** Mesmo produto, organizações diferentes, um deles com um defeito real e demonstrável. É o melhor material didático do conjunto.
- **A insistência em critérios observáveis.** É o hábito de maior efeito prático que o treinamento ensina.
- **A estrutura de checkpoints do Dia 3.** Mantenha inclusive as branches de contingência, mesmo com o escopo reduzido.
- **A pergunta final da retrospectiva** ("qual melhoria deve entrar no template?"). É o mecanismo que faz o treinamento melhorar sozinho a cada turma.

---

## Se você só puder fazer três mudanças

Em ordem de impacto por esforço:

**1. Mova a demonstração de vazamento de dados para a abertura do Dia 1.** Custo: zero, o material existe. Efeito: a turma passa a ter um motivo concreto para os 40 minutos seguintes de processo.

**2. Coloque 25 minutos de prática com o agente no Dia 2.** Custo: comprimir MCP e escolha de modelo em um bloco. Efeito: elimina o degrau da rampa e transforma o dia mais teórico no mais útil.

**3. Faça cada dia terminar em um arquivo commitado.** Custo: definir que cada dupla tem um projeto próprio mínimo desde o Dia 1. Efeito: resolve fluência e observabilidade de uma vez, e é o que faz o processo sobreviver ao treinamento.

---

## Uma observação sobre o depois

Seis horas em três dias entregam compreensão e uma primeira aplicação. Não entregam hábito. O que costuma converter um treinamento em prática instalada é um encontro curto de reforço — **30 minutos, duas a três semanas depois**, em que cada pessoa mostra um projeto real onde aplicou o processo, e o que travou.

É o bloco de maior retorno que não existe no plano atual, e custa menos que qualquer um dos blocos opcionais.
