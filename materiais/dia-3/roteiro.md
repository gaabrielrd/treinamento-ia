# Roteiro completo — Momento 2 · Dia 3  
## Prática: criação da aplicação TaskWeather com agentes de código

## 1. Informações gerais

- **Público:** pessoas não desenvolvedoras que participaram dos dois primeiros dias.
- **Duração-base:** 2 horas.
- **Duração recomendada quando possível:** 2 horas e 30 minutos.
- **Duração máxima:** 3 horas.
- **Formato:** introdução curta e execução prática guiada.
- **Objetivo do dia:** criar uma aplicação web simples a partir do repositório-template, usando planejamento, prompts estruturados, skills, validação local e versionamento.

## 2. Escopo da aplicação

A aplicação **TaskWeather** terá:

### Obrigatório

- entrada informando **apenas o e-mail**, sem senha;
- sessão local;
- logout;
- criação de tarefas;
- listagem de tarefas;
- conclusão de tarefas;
- persistência local;
- **separação dos dados por usuário**: as tarefas de um e-mail não aparecem para outro;
- validação local;
- documentação mínima.

### Opcional, somente se houver tempo

- busca de clima atual por cidade, com estados de carregamento e erro;
- editar tarefa;
- excluir tarefa;
- filtrar tarefas;
- testes adicionais;
- melhoria visual;
- pull request revisado por outro grupo.

### Fora do escopo

- backend;
- banco de dados;
- autenticação real;
- senha;
- cadastro;
- recuperação de senha;
- informações sensíveis;
- geolocalização automática;
- previsão meteorológica avançada;
- publicação em produção.

## 3. Pré-requisitos do ambiente

Cada participante ou grupo deve possuir:

- acesso ao GitHub;
- agente de código instalado e autenticado;
- Node.js na versão definida pelo template;
- Git instalado ou integração equivalente;
- editor ou interface do agente;
- navegador moderno;
- acesso à internet;
- permissão para criar repositórios a partir do template.

## 4. Preparação do instrutor

- validar o template em uma máquina limpa;
- criar uma solução final de referência;
- criar tags ou branches de checkpoint;
- preparar um arquivo compactado do projeto inicial como contingência;
- manter prompts prontos para copiar;
- testar previamente a API meteorológica;
- garantir que a API não exija segredo no navegador;
- confirmar que cada dupla chega com o `docs/prd.md`, o `AGENTS.md` e o plano dos Dias 1 e 2;
- preparar uma lista de erros comuns;
- ter uma branch pronta após cada etapa caso algum grupo fique bloqueado.

## 5. Agenda-base de 120 minutos

| Etapa | Atividade | Duração | Checkpoint |
|---|---|---:|---|
| 1 | Abertura e regras | 8 min | — |
| 2 | Criar projeto e executar template | 10 min | 0 |
| 3 | Planejar — reusando o plano do Dia 2 | 8 min | 1 |
| 4 | Entrada por e-mail | 20 min | 2 |
| 5 | Lista de tarefas | 25 min | 3 |
| 6 | **Separação de dados por usuário** | 15 min | 4 |
| 7 | Validar, revisar e documentar | 20 min | 5 |
| 8 | **Demonstração cruzada** e retrospectiva | 14 min | — |
| **Total** |  | **120 min** |  |

Três mudanças em relação a uma agenda com três features obrigatórias:

1. **O clima saiu do escopo obrigatório** e virou o Bloco opcional 5. Ele custava 20 minutos e uma dependência de rede, e a lição que trazia — chamada externa isolada em um serviço, com estados de erro — é conceitualmente a mesma do armazenamento isolado que a turma acabou de fazer nas tarefas. Você entrega essa lição em três minutos projetando o `weatherApi.ts` da solução de referência.
2. **A separação de dados por usuário virou incremento próprio.** É o único momento em que a turma vê uma decisão de arquitetura ter consequência visível — o mesmo vazamento que abriu o Dia 1, agora prevenido por ela.
3. **A etapa 3 encurtou porque o plano já existe.** As duplas chegam com o plano gerado e revisado no Dia 2; aqui apenas o confirmam contra o template.

Os 20 minutos ganhos foram para **validar, revisar e documentar** e para a **demonstração cruzada** — onde o processo se consolida, e onde antes havia 20 minutos para os dois.

---

# 6. Organização da sala

## Formação dos grupos

- preferir duplas;
- evitar grupos com mais de três pessoas;
- uma pessoa conduz o agente;
- outra lê critérios e acompanha o escopo;
- alternar papéis após o login.

## Regra de acompanhamento

Todos os grupos devem parar em checkpoints comuns. Quem terminar antes:

- revisa o diff;
- melhora critérios;
- adiciona testes;
- ajuda outro grupo sem assumir o teclado.

## Regra de contingência

Se um grupo permanecer bloqueado por mais de cinco minutos:

1. conferir erro de ambiente;
2. comparar com o checkpoint;
3. aplicar a correção mínima;
4. se necessário, avançar usando a branch de referência.

O objetivo é praticar o processo, não resolver problemas de ambiente durante toda a sessão.

---

# 7. Roteiro slide a slide e execução prática

## Slide 1 — Resultado do workshop

**Tempo:** 5 minutos

### Descrição visual do slide

Mockup da aplicação final contendo:

- tela de login;
- lista de tarefas;
- cartão de clima.

Ao lado, o fluxo:

`Template → Plano → Incrementos → Testes → Revisão`

### Roteiro de fala

“Hoje construiremos uma aplicação pequena. O objetivo não é criar o sistema mais completo ou o design mais sofisticado.

O objetivo é aplicar o processo:

- começar pelo template;
- orientar o agente;
- trabalhar em incrementos;
- validar cada etapa;
- registrar o resultado.

Ao final, precisamos de uma aplicação simples, compreensível e executável.”

### Regra principal

> “Não pedir a aplicação inteira de uma vez.”

### Transição

“Primeiro vamos criar o projeto e confirmar que o ponto de partida funciona.”

---

## Slide 2 — Etapa 1: criar e executar o projeto

**Tempo:** 15 minutos no total, incluindo a abertura

### Descrição visual do slide

Checklist grande:

1. usar template;
2. nomear repositório;
3. abrir no agente;
4. instalar;
5. executar;
6. ler instruções.

Comandos no rodapé:

```bash
npm install
npm run dev
```

### Instrução aos participantes

1. Criar um repositório usando o template.
2. Nome sugerido: `taskweather-nome-do-grupo`.
3. Abrir o projeto no agente.
4. Instalar dependências.
5. Executar a aplicação.
6. Abrir:
   - `README.md`;
   - `AGENTS.md`;
   - `CLAUDE.md`;
   - `docs/architecture.md`.

### Prompt de apoio

```text
Leia README.md, AGENTS.md, CLAUDE.md e docs/architecture.md.
Não altere arquivos.
Resuma:
1. objetivo do template;
2. estrutura;
3. comandos disponíveis;
4. regras obrigatórias para mudanças.
```

### Checkpoint esperado

- aplicação inicial aberta no navegador;
- agente confirmou as regras;
- nenhum arquivo alterado.

### Fala do instrutor

“Antes de construir qualquer coisa, confirmamos que o projeto inicia e que o agente leu as regras.

Se o ponto de partida já estiver com erro, não devemos começar a funcionalidade.”

### Contingência

Fornecer o projeto inicial compactado ou uma branch pronta.

### Transição

“Agora vamos transformar o exercício em um plano.”

---

## Slide 3 — Etapa 2: planejar antes de implementar

**Tempo:** 10 minutos

### Descrição visual do slide

Três colunas:

- funcionalidades;
- tarefas;
- critérios.

No centro, o comando:

> “Use `plan-feature`. Não altere arquivos.”

### Prompt completo

```text
Use a skill plan-feature para planejar a aplicação TaskWeather.

Contexto:
Aplicação web React e TypeScript criada a partir do template da área.

Objetivo:
Criar uma aplicação com login simulado, lista de tarefas e clima atual.

Escopo obrigatório:
- login com credenciais fake;
- sessão local e logout;
- criar, listar e concluir tarefas;
- persistir tarefas localmente;
- consultar clima atual por cidade;
- loading e erro na consulta.

Fora do escopo:
- backend;
- autenticação real;
- cadastro;
- edição ou exclusão de tarefas;
- geolocalização;
- previsão estendida;
- alteração da arquitetura-base.

Restrições:
- não instalar dependências;
- seguir AGENTS.md e docs/architecture.md;
- organizar por features;
- não alterar arquivos durante o planejamento.

Saída:
- requisitos;
- suposições;
- proposta;
- tarefas em ordem;
- riscos;
- critérios de aceite por etapa.
```

### Atividade

Os grupos devem verificar:

- o plano respeita o não escopo?
- cada funcionalidade está separada?
- existem critérios observáveis?
- o agente tentou incluir bibliotecas?
- a ordem permite validar um incremento por vez?

### Checkpoint esperado

Plano aceito com três incrementos principais:

1. autenticação;
2. tarefas;
3. clima.

### Transição

“Vamos implementar apenas o primeiro incremento.”

---

## Slide 4 — Etapa 3: login simulado

**Tempo:** 20 minutos

### Descrição visual do slide

À esquerda, checklist:

- formulário;
- credencial fake;
- erro;
- sessão;
- logout.

À direita, credenciais:

```text
demo@empresa.com
demo123
```

### Prompt de implementação

```text
Implemente apenas o incremento de autenticação simulada aprovado no plano.

Credenciais:
- usuário: demo@empresa.com
- senha: demo123

Critérios de aceite:
- a tela inicial solicita usuário e senha;
- credenciais corretas permitem acesso;
- credenciais incorretas mostram mensagem clara;
- atualizar a página mantém a sessão;
- logout encerra a sessão;
- nenhuma autenticação real é criada.

Restrições:
- não instalar dependências;
- não implementar tarefas;
- não implementar clima;
- manter a feature isolada em src/features/auth;
- acessar armazenamento por um serviço, não diretamente em componentes.

Processo:
1. informe os arquivos que serão alterados;
2. implemente;
3. crie ou atualize testes relevantes;
4. execute os comandos locais;
5. resuma o resultado e limitações.
```

### Papel do instrutor

Circular e verificar:

- o agente não começou tarefas;
- a sessão está isolada;
- credenciais estão claramente identificadas como demonstração;
- não há segredo real;
- o grupo executa a aplicação, não apenas lê a resposta.

### Teste manual

1. tentar entrar com dados incorretos;
2. entrar com credenciais corretas;
3. atualizar a página;
4. sair;
5. atualizar novamente.

### Checkpoint de Git

Criar commit:

```text
feat: adiciona fluxo de login simulado
```

### Contingência

Disponibilizar uma branch `checkpoint/auth`.

### Transição

“Com a entrada da aplicação funcionando, vamos adicionar a funcionalidade central.”

---

## Slide 5 — Etapa 4: lista de tarefas

**Tempo:** 30 minutos

### Descrição visual do slide

Wireframe com:

- campo de título;
- botão adicionar;
- lista;
- checkbox;
- estado vazio.

Critérios no rodapé.

### Prompt de implementação

```text
Implemente apenas a funcionalidade básica de tarefas.

Escopo:
- criar tarefa com título;
- listar tarefas;
- marcar tarefa como concluída ou ativa;
- persistir tarefas após atualizar a página;
- mostrar estado vazio.

Fora do escopo:
- editar;
- excluir;
- categorias;
- datas;
- compartilhamento;
- backend.

Critérios de aceite:
- título vazio não cria tarefa;
- tarefa válida aparece imediatamente;
- o usuário consegue concluir e reabrir;
- o estado permanece após recarregar;
- lista vazia mostra orientação;
- login existente continua funcionando.

Restrições:
- não instalar dependências;
- não alterar a feature de autenticação;
- manter a feature em src/features/todos;
- encapsular armazenamento em um repositório ou serviço;
- seguir os padrões existentes.

Processo:
1. analise o plano e os padrões atuais;
2. informe os arquivos;
3. implemente;
4. adicione testes;
5. execute validações;
6. revise o diff.
```

### Orientação aos grupos

Dividir internamente:

- uma pessoa acompanha o prompt e o escopo;
- outra testa os critérios;
- trocar funções depois de 15 minutos.

### Teste manual

- abrir com lista vazia;
- tentar título vazio;
- criar duas tarefas;
- concluir uma;
- reabrir;
- atualizar a página;
- confirmar persistência;
- sair e entrar novamente.

### Checkpoint de Git

```text
feat: adiciona criação e conclusão de tarefas
```

### Problemas comuns

- armazenamento acessado diretamente em vários componentes;
- lógica de tarefa dentro do componente principal;
- edição e exclusão adicionadas sem pedido;
- estado perdido no recarregamento;
- autenticação quebrada.

### Contingência

Branch `checkpoint/todos`.

### Transição

“Agora adicionaremos uma integração externa pequena e controlada.”

---

## Slide 6 — Etapa 5: widget meteorológico

**Tempo:** 20 minutos

### Descrição visual do slide

Fluxo:

`Cidade → Coordenadas → Clima atual → Exibição`

Estados visuais:

- inicial;
- carregando;
- sucesso;
- erro.

### Contexto técnico para o exercício

Utilizar a API gratuita definida no template ou na documentação do workshop. A integração deve funcionar no navegador e não exigir segredo.

### Prompt de implementação

```text
Implemente apenas a feature de clima atual.

Escopo:
- campo para informar cidade;
- ação para buscar;
- obter as informações necessárias para consultar o clima;
- exibir cidade, temperatura e condição atual;
- exibir estado de carregamento;
- exibir mensagem de erro;
- permitir uma nova busca.

Fora do escopo:
- previsão semanal;
- geolocalização automática;
- favoritos;
- histórico;
- alteração global do design.

Restrições:
- usar o serviço meteorológico indicado em docs;
- não adicionar segredo ao projeto;
- não instalar dependências;
- não alterar auth ou todos;
- manter chamadas externas em src/features/weather.

Critérios de aceite:
- cidade válida exibe clima;
- busca mostra carregamento;
- falha mostra mensagem compreensível;
- uma nova cidade pode ser consultada;
- login e tarefas continuam funcionando.

Processo:
1. leia a documentação da integração;
2. apresente um plano curto;
3. implemente;
4. teste sucesso e erro;
5. execute validações;
6. resuma o diff.
```

### Papel do instrutor

- lembrar que APIs podem falhar;
- impedir uso de chave real;
- verificar tratamento de erro;
- reforçar que a interface não deve travar;
- evitar discussão profunda sobre protocolo HTTP.

### Checkpoint de Git

```text
feat: adiciona consulta de clima atual
```

### Contingência

- usar resposta fake por adaptador;
- disponibilizar branch `checkpoint/weather`;
- manter a interface de serviço para trocar fake por real.

### Transição

“A aplicação possui as três funcionalidades. Agora precisamos comprovar e registrar a entrega.”

---

## Slide 7 — Etapa 6: validar e revisar

**Tempo:** 15 minutos

### Descrição visual do slide

Tela com quatro comandos:

```bash
npm run test
npm run lint
npm run typecheck
npm run build
```

Ao lado, checklist de revisão:

- escopo;
- testes;
- organização;
- documentação;
- segredos.

### Prompt de revisão

```text
Use a skill review-changes para revisar todo o trabalho desta sessão.

Verifique:
- critérios de aceite;
- alterações fora do escopo;
- dependências adicionadas;
- segredos ou credenciais inadequadas;
- separação entre auth, todos e weather;
- acesso direto a armazenamento ou APIs em componentes;
- testes ausentes;
- problemas de acessibilidade;
- documentação desatualizada;
- código não utilizado.

Não altere arquivos inicialmente.
Apresente os problemas por prioridade e proponha correções mínimas.
```

### Execução

1. revisar os problemas;
2. autorizar apenas correções necessárias;
3. executar os quatro comandos;
4. testar manualmente o fluxo principal;
5. atualizar `README.md` se necessário.

### Fluxo manual final

- login incorreto;
- login correto;
- criar tarefa;
- concluir tarefa;
- consultar clima;
- recarregar;
- logout.

### Pull request

Descrição mínima:

- objetivo;
- funcionalidades;
- como testar;
- limitações;
- evidência das validações.

### Transição

“Vamos encerrar comparando resultado e processo.”

---

## Slide 8 — Demonstração e retrospectiva

**Tempo:** 5 minutos

### Descrição visual do slide

Três perguntas:

1. O que o agente fez bem?
2. Onde o processo evitou um problema?
3. O que deve ser melhorado no template?

### Roteiro — demonstração cruzada (9 min)

Em vez de um ou dois voluntários apresentarem para a sala, **cada dupla mostra a aplicação para a dupla vizinha, em 3 minutos**, seguindo o fluxo manual final. Depois trocam.

Todos apresentam, todos revisam, e você observa muito mais circulando entre pares do que assistindo a dois voluntários.

### O teste que fecha o treinamento (5 min)

Passe em cada dupla e pergunte, **sem deixar abrir o código**:

1. Onde fica a regra de e-mail válido?
2. Onde fica a chave que separa os dados de cada usuário?
3. Se trocássemos o `localStorage` por um banco de dados, quantos arquivos mudariam?

Quem responde as três, aprendeu a estrutura. Quem não responde tem uma aplicação que o agente construiu — e é melhor descobrir isso agora do que na próxima demanda.

Conduzir a retrospectiva:

- houve tentativa de expandir escopo?
- o plano foi útil?
- qual instrução precisou ser reforçada?
- qual skill trouxe mais valor?
- qual melhoria deve entrar no template?

### Encerramento

“O principal artefato não é apenas a aplicação. É a capacidade de repetir este processo em outros projetos.”

---

# 8. Extensão para 2h30 ou 3h

## Bloco opcional 1 — Edição e exclusão de tarefas — 15 minutos

Criar uma nova tarefa e aplicar o mesmo processo:

- planejar;
- definir critérios;
- implementar;
- testar;
- revisar.

## Bloco opcional 2 — Revisão cruzada — 15 minutos

Cada grupo revisa o pull request de outro grupo com checklist.

## Bloco opcional 3 — Melhoria de acessibilidade — 15 minutos

Usar a skill `accessibility-review` para verificar:

- labels;
- foco;
- teclado;
- mensagens;
- contraste;
- semântica.

## Bloco opcional 5 — Widget meteorológico — 20 minutos

A integração externa, agora fora do escopo obrigatório. Prompt e critérios seguem em `materiais/dia-3/prompts/prompts-para-copiar.md`.

Se não houver tempo, entregue a lição em três minutos projetando `features/weather/services/weatherApi.ts` da solução de referência: a chamada externa isolada em um serviço, a resposta validada antes de ser devolvida e os quatro estados de tela.

## Bloco opcional 4 — Teste adicional — 15 minutos

Adicionar um teste de integração para o fluxo crítico de tarefas.

---

# 9. Checkpoints do instrutor

## Checkpoint 0 — Ambiente

- projeto inicia;
- agente lê instruções;
- nenhum arquivo alterado.

## Checkpoint 1 — Planejamento

- três incrementos;
- critérios por incremento;
- não escopo preservado.

## Checkpoint 2 — Entrada por e-mail

- e-mail válido entra; vazio ou inválido é recusado com mensagem;
- a tela não pede senha;
- persistência da sessão e logout funcionando;
- commit criado.

## Checkpoint 3 — Tarefas

- criar, concluir e persistir;
- login preservado;
- commit criado.

## Checkpoint 4 — Separação de dados

- tarefas de um e-mail não aparecem para outro;
- ao voltar ao e-mail anterior, as tarefas dele reaparecem;
- a chave de armazenamento inclui o e-mail e é montada em um único arquivo;
- sair não apaga dados de ninguém;
- commit criado.

## Checkpoint 4b — Clima (apenas se o bloco opcional for feito)

- loading, sucesso e erro;
- nenhuma credencial real;
- commit criado.

## Checkpoint 5 — Entrega

- testes, lint, typecheck e build;
- documentação;
- pull request ou resumo final.

# 10. Critérios de sucesso

A prática é considerada concluída quando o grupo:

- utilizou o template;
- pediu planejamento antes de implementar;
- trabalhou em incrementos;
- respeitou o não escopo;
- executou validações locais;
- revisou alterações;
- registrou commits;
- documentou como executar e testar;
- consegue explicar a estrutura do projeto;
- **responde às três perguntas de arquitetura sem abrir o código.**

# 11. Erros que não devem consumir o treinamento

Se ocorrer um destes casos, aplicar contingência rapidamente:

- versão incorreta do Node;
- instalação de dependências falhando;
- indisponibilidade da API externa;
- conflito de porta;
- agente sem acesso ao terminal;
- autenticação do GitHub;
- configuração MCP;
- diferenças de sistema operacional.

O aprendizado prioritário é o processo de trabalho com agentes.
