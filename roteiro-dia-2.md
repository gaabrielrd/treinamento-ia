# Roteiro completo — Dia 2  
## Prompts, instruções persistentes, skills, MCP e escolha de modelo

## 1. Informações gerais

- **Público:** pessoas não desenvolvedoras que utilizam agentes de código.
- **Duração-base:** 2 horas.
- **Duração máxima:** 3 horas com demonstrações adicionais.
- **Formato:** exposição guiada, comparação de exemplos e uma atividade curta.
- **Objetivo do dia:** ensinar como orientar agentes de código, fornecer contexto persistente e escolher ferramentas de forma proporcional à tarefa.

## 2. Resultados esperados

Ao final do dia, o participante deverá conseguir:

1. explicar o ciclo de trabalho de um agente;
2. reconhecer solicitações vagas e perigosas;
3. montar um prompt com contexto, objetivo, escopo, restrições e critérios;
4. compreender a função de `AGENTS.md` e `CLAUDE.md`;
5. entender o que é uma skill e quando utilizá-la;
6. reconhecer o papel de um servidor MCP;
7. aplicar regras básicas de segurança a integrações;
8. escolher capacidade de modelo e raciocínio conforme ambiguidade e impacto.

## 3. Preparação do instrutor

- abrir um agente de código em um repositório de demonstração;
- preparar um prompt ruim e uma versão estruturada;
- deixar `AGENTS.md`, `CLAUDE.md` e uma skill abertos;
- preparar uma demonstração MCP segura e preferencialmente somente leitura;
- preparar uma pequena alteração que permita mostrar análise, plano, implementação e validação;
- garantir que nenhuma credencial real seja exibida;
- deixar um prompt reserva caso a demonstração ao vivo falhe.

## 4. Agenda-base

| Bloco | Tema | Duração |
|---|---|---:|
| 1 | Como agentes trabalham e por que erram | 20 min |
| 2 | Prompts eficientes | 22 min |
| 3 | Contexto persistente | 22 min |
| 4 | Skills | 20 min |
| 5 | MCP e segurança | 10 min |
| 6 | Modelos e raciocínio | 8 min |
| 7 | Exercício e encerramento | 18 min |
| **Total** |  | **120 min** |

---

# 5. Roteiro slide a slide

## Slide 1 — O agente não conhece o projeto por padrão

**Tempo:** 5 minutos

### Descrição visual do slide

Um agente no centro, cercado por caixas vazias:

- objetivo;
- regras;
- arquitetura;
- restrições;
- testes;
- ferramentas.

Título: **“Contexto não informado não pode ser seguido.”**

### Roteiro de fala

“No primeiro dia, definimos um processo. Hoje vamos aprender a comunicar esse processo ao agente.

Um agente pode ser muito capaz e ainda assim produzir uma solução inadequada se não conhecer o projeto, as regras ou os limites.

Capacidade de modelo não substitui contexto.”

### Transição

“Para orientar melhor, primeiro precisamos entender como o agente trabalha.”

---

## Slide 2 — Ciclo de trabalho do agente

**Tempo:** 8 minutos

### Descrição visual do slide

Fluxo circular:

`Ler contexto → Explorar arquivos → Planejar → Alterar → Executar → Revisar`

No centro: **“Repetir até atender ao objetivo”**

### Roteiro de fala

“Em uma tarefa bem conduzida, o agente deve:

1. ler instruções;
2. explorar os arquivos relacionados;
3. formar um plano;
4. alterar um conjunto limitado de arquivos;
5. executar comandos;
6. revisar o resultado.

Quando pedimos diretamente a implementação, incentivamos o agente a reduzir ou pular as primeiras etapas.

Por isso, em mudanças maiores, pediremos explicitamente: analise, apresente um plano e só então implemente.”

### Demonstração curta

Mostrar uma resposta em modo de planejamento, destacando:

- arquivos identificados;
- suposições;
- etapas;
- riscos.

### Transição

“Mesmo seguindo esse ciclo, alguns padrões de solicitação aumentam muito o risco.”

---

## Slide 3 — Por que agentes erram

**Tempo:** 7 minutos

### Descrição visual do slide

Seis cartões de risco:

- objetivo vago;
- escopo aberto;
- contexto insuficiente;
- muitas tarefas juntas;
- permissão excessiva;
- ausência de validação.

### Roteiro de fala

“Erros de agentes nem sempre são erros de programação. Muitas vezes são erros de direcionamento.

Exemplos:

- ‘Melhore o projeto’ não define objetivo;
- ‘Crie tudo o que for necessário’ abre o escopo;
- ‘Instale qualquer biblioteca necessária’ delega decisões de dependência;
- ‘Corrija todos os problemas’ mistura tarefas não relacionadas;
- ‘Está pronto?’ aceita uma declaração sem validação.

Nosso prompt precisa reduzir essas zonas de interpretação.”

### Transição

“Vamos usar uma estrutura padrão para isso.”

---

## Slide 4 — Anatomia de um prompt eficiente

**Tempo:** 12 minutos

### Descrição visual do slide

Oito blocos empilhados:

1. Contexto
2. Objetivo
3. Escopo
4. Fora do escopo
5. Restrições
6. Critérios de aceite
7. Processo esperado
8. Validação

Cada bloco com uma frase curta de explicação.

### Roteiro de fala

“Um bom prompt não precisa ser sofisticado. Precisa ser completo.

**Contexto:** onde estamos e quais documentos devem ser lidos.

**Objetivo:** qual resultado único esperamos.

**Escopo:** o que deve ser alterado.

**Fora do escopo:** o que não deve ser alterado.

**Restrições:** bibliotecas, padrões e limites.

**Critérios:** como verificar o resultado.

**Processo:** analisar, planejar, implementar e revisar.

**Validação:** quais comandos e verificações executar.”

### Orientação

Mostrar que o prompt pode ser preenchido como formulário. O participante não precisa escrever tudo em texto corrido.

### Transição

“Vamos comparar uma solicitação vaga com uma solicitação controlada.”

---

## Slide 5 — Do pedido vago ao pedido executável

**Tempo:** 10 minutos

### Descrição visual do slide

Duas colunas.

**Antes**

> “Faça um login moderno para o sistema.”

**Depois**

Prompt estruturado, resumido em oito linhas.

Usar setas destacando a transformação.

### Roteiro de fala

Ler o prompt ruim e perguntar o que ficou indefinido.

Depois apresentar:

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

### Mensagem-chave

> “Quanto mais importante a decisão, menos ela deve ficar implícita.”

### Transição

“Repetir esse contexto em toda conversa seria ineficiente. Parte dele deve morar no repositório.”

---

## Slide 6 — Contexto temporário e contexto persistente

**Tempo:** 8 minutos

### Descrição visual do slide

Duas áreas:

**Prompt da tarefa**
- objetivo específico;
- escopo atual;
- critérios atuais.

**Arquivos do projeto**
- arquitetura;
- comandos;
- padrões;
- regras duráveis.

### Roteiro de fala

“Nem toda instrução pertence ao prompt.

O prompt contém informações da tarefa atual.

As regras que se repetem devem estar no projeto:

- organização das pastas;
- comandos;
- limites arquiteturais;
- política de testes;
- definição de concluído;
- dependências permitidas.

Essa separação reduz prompts longos e evita que cada pessoa explique o projeto de uma maneira diferente.”

### Transição

“O arquivo principal dessas regras será o `AGENTS.md`.”

---

## Slide 7 — `AGENTS.md`: contrato geral com agentes

**Tempo:** 7 minutos

### Descrição visual do slide

Mockup de um arquivo com cinco seções destacadas:

- workflow;
- arquitetura;
- testes;
- dependências;
- conclusão.

### Roteiro de fala

“O `AGENTS.md` é o contrato geral do projeto com agentes de código.

Ele deve responder:

- o que ler antes de começar;
- como o projeto está organizado;
- o que não pode ser feito;
- quais comandos executar;
- quando uma tarefa pode ser considerada concluída.

Ele não deve ser um manual enorme. Instruções detalhadas podem ficar em documentos ou skills.”

### Exemplo de regra

> “Não instale dependências sem justificar. Não altere funcionalidades fora do escopo. Execute `npm run validate` antes de concluir.”

### Transição

“Para o Claude Code, teremos também um arquivo específico.”

---

## Slide 8 — `CLAUDE.md`: orientação específica da ferramenta

**Tempo:** 7 minutos

### Descrição visual do slide

Diagrama:

`CLAUDE.md` aponta para:
- `AGENTS.md`;
- arquitetura;
- processo;
- testes;
- `.claude/skills`.

### Roteiro de fala

“O `CLAUDE.md` não deve criar um segundo conjunto de regras contraditórias.

Ele deve orientar o Claude Code a:

- ler o `AGENTS.md`;
- consultar documentos na ordem correta;
- localizar skills;
- planejar mudanças maiores;
- executar os comandos do projeto.

A regra geral fica no `AGENTS.md`. O `CLAUDE.md` é uma adaptação de uso.”

### Alerta

Se os arquivos repetirem grandes blocos, podem divergir com o tempo. Preferir referências e instruções curtas.

### Transição

“Alguns procedimentos são específicos demais para permanecer sempre no contexto. Para isso usamos skills.”

---

## Slide 9 — O que é uma skill

**Tempo:** 10 minutos

### Descrição visual do slide

Uma caixa “Skill” contendo:

- quando usar;
- passos;
- regras;
- formato de saída.

Ao redor, exemplos:

- planejar;
- revisar;
- gerar testes;
- documentar.

### Roteiro de fala

“Uma skill é um procedimento reutilizável.

Ela ensina ao agente como executar um tipo específico de tarefa.

Por exemplo, a skill `plan-feature` pode instruir o agente a:

- ler a arquitetura;
- identificar requisitos;
- listar arquivos afetados;
- dividir a execução;
- apontar riscos;
- não alterar código.

Em vez de repetir esse processo em cada prompt, solicitamos o uso da skill.”

### Analogia

> “O prompt diz o que precisamos agora. A skill descreve como executar um tipo de trabalho.”

### Transição

“Vamos olhar a estrutura mínima de uma skill.”

---

## Slide 10 — Anatomia e uso de uma skill

**Tempo:** 10 minutos

### Descrição visual do slide

Árvore:

```text
plan-feature/
├── SKILL.md
└── references/
```

Ao lado, trechos destacados:

- `name`;
- `description`;
- instruções;
- saída obrigatória.

### Roteiro de fala

“O arquivo `SKILL.md` possui uma descrição que ajuda a ferramenta a identificar quando a skill é relevante e um conjunto de instruções.

Uma skill útil deve ser específica.

Ruim: ‘ajude no projeto’.

Melhor: ‘analise uma funcionalidade e gere requisitos, proposta, tarefas, riscos e critérios, sem alterar código’.”

### Demonstração

Executar:

> “Use a skill `plan-feature` para planejar a criação do widget meteorológico. Não altere arquivos.”

Mostrar o formato da resposta e conferir se houve mudança no repositório.

### Skills iniciais

- `plan-feature`;
- `implement-feature`;
- `review-changes`;
- `generate-tests`;
- `update-documentation`;
- `prepare-pull-request`.

### Transição

“Skills orientam procedimentos. MCP amplia o conjunto de ferramentas disponíveis ao agente.”

---

## Slide 11 — MCP: conexão com ferramentas externas

**Tempo:** 10 minutos

### Descrição visual do slide

Agente no centro conectado a:

- GitHub;
- arquivos;
- banco;
- documentação;
- ferramenta interna.

Título: **“MCP entrega ferramentas e dados; não substitui regras de acesso.”**

### Roteiro de fala

“Um servidor MCP permite que o agente acesse uma ferramenta externa de forma padronizada.

Ele pode permitir leitura de repositórios, consulta a bancos, acesso a documentos ou interação com sistemas internos.

A pergunta principal não é apenas ‘o que o MCP consegue fazer?’. É também ‘o que ele pode acessar e alterar?’”

### Regras de segurança

- usar servidores de origem conhecida;
- começar com leitura;
- conceder o menor acesso possível;
- não colocar credenciais em prompts;
- usar variáveis de ambiente;
- confirmar operações destrutivas;
- remover acessos não utilizados.

### Demonstração sugerida

Executar uma ação somente leitura, como listar informações de um repositório ou consultar documentação.

### Transição

“Além de escolher ferramentas, precisamos escolher uma capacidade de modelo proporcional à tarefa.”

---

## Slide 12 — Modelo e raciocínio conforme a tarefa

**Tempo:** 8 minutos

### Descrição visual do slide

Matriz 2 × 2:

Eixo horizontal: baixa → alta ambiguidade  
Eixo vertical: baixo → alto impacto

Quadrantes:

- rápido/baixo;
- geral/médio;
- forte/alto;
- forte + revisão humana.

### Roteiro de fala

“Não existe um único modelo ideal para tudo.

Para renomear, formatar ou documentar, um modelo mais rápido com baixo raciocínio pode ser suficiente.

Para uma funcionalidade envolvendo vários arquivos, usamos capacidade intermediária ou alta.

Para arquitetura, investigação de erro difícil ou mudança de alto impacto, usamos maior raciocínio e revisão humana.

Três perguntas ajudam:

1. a tarefa é ambígua?
2. um erro teria impacto relevante?
3. envolve muitas etapas ou ferramentas?

Quanto mais respostas positivas, maior deve ser a capacidade e o nível de revisão.”

### Alerta

Raciocínio maior não corrige prompt incompleto nem substitui critérios de aceite.

### Transição

“Vamos aplicar esses conceitos melhorando uma solicitação.”

---

## Slide 13 — Exercício: reescrever um prompt

**Tempo:** 13 minutos

### Descrição visual do slide

Prompt inicial:

> “Adicione clima no sistema e deixe bonito.”

Campos de apoio:

- contexto;
- objetivo;
- escopo;
- não escopo;
- restrições;
- critérios;
- validação.

### Roteiro do instrutor

1. Formar duplas.
2. Dar 7 minutos para reescrever o prompt.
3. Solicitar uma leitura.
4. Corrigir primeiro escopo e critérios.
5. Mostrar uma versão de referência.

### Versão de referência

```text
Contexto:
Aplicação React organizada por features.
Leia AGENTS.md e docs/architecture.md.

Objetivo:
Adicionar consulta de clima atual por cidade.

Escopo:
Campo de cidade, ação de busca, temperatura,
condição atual e estados de carregamento e erro.

Fora do escopo:
Previsão semanal, geolocalização automática,
favoritos e alteração do design global.

Restrições:
Usar o serviço já definido no projeto.
Não instalar dependências.
Não alterar login ou tarefas.

Critérios:
Cidade válida mostra dados.
Busca exibe carregamento.
Falha mostra mensagem.
Nova busca pode ser realizada.

Processo:
Apresente plano antes de alterar arquivos.

Validação:
Execute testes, lint e build.
```

### Transição

“Este será o padrão usado na prática do terceiro dia.”

---

## Slide 14 — Encerramento do Dia 2

**Tempo:** 5 minutos

### Descrição visual do slide

Cinco blocos:

- prompt;
- `AGENTS.md`;
- `CLAUDE.md`;
- skills;
- MCP.

No rodapé:

> “Modelo forte + contexto fraco continua sendo contexto fraco.”

### Roteiro de fala

“Hoje criamos cinco camadas de orientação:

- o prompt descreve a tarefa;
- o `AGENTS.md` registra regras gerais;
- o `CLAUDE.md` orienta uma ferramenta específica;
- as skills registram procedimentos;
- o MCP entrega ferramentas externas.

Amanhã vamos utilizar essas camadas para criar uma aplicação a partir do template oficial.”

---

# 6. Blocos opcionais para ampliar até 3 horas

## Opção A — Criação colaborativa de uma skill — 20 minutos

Criar uma skill simples de `review-changes` com:

- gatilho;
- verificações;
- proibições;
- formato de saída.

## Opção B — Demonstração completa de MCP — 20 minutos

Mostrar configuração, variável de ambiente, ferramentas expostas, consulta e revogação.

## Opção C — Comparação de três níveis de prompt — 20 minutos

Executar:

1. pedido vago;
2. pedido com objetivo;
3. pedido completo.

Comparar planos, arquivos alterados e qualidade da validação.

---

# 7. Materiais para entrega

- template de prompt;
- checklist de revisão de prompt;
- resumo de `AGENTS.md` e `CLAUDE.md`;
- catálogo inicial de skills;
- checklist de segurança MCP;
- matriz de escolha de modelo e raciocínio;
- prompts utilizados na demonstração.

# 8. Indicadores de compreensão

Perguntar ao final:

1. Que informação deve ficar no prompt e qual deve ficar no repositório?
2. Qual a diferença entre prompt e skill?
3. O que um servidor MCP acrescenta?
4. Por que começar com acesso somente leitura?
5. Quando usar maior raciocínio?
6. Qual é o risco de dizer apenas “melhore o projeto”?
