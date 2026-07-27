# Prompts para copiar — Dia 3

Todos os prompts da prática, em ordem. Mantenha este arquivo aberto durante a sessão: é a folha de cópia.

**Entrada da aplicação:** a pessoa informa **apenas o e-mail**. Não há senha.

```text
demo@empresa.com
```

O e-mail cumpre dois papéis: identifica a sessão e **separa os dados de cada usuário** no armazenamento local.

> Isto **não é autenticação**: qualquer pessoa pode digitar qualquer e-mail e entrar. A separação evita confusão entre pessoas que compartilham o navegador, não protege segredo. Reforce em voz alta: nenhuma senha real em nenhum momento.

---

## Etapa 1 — Explorar o template (10 min)

Antes disso: criar o repositório a partir do template, abrir no agente, `npm install`, `npm run dev`.

```text
Leia README.md, AGENTS.md, CLAUDE.md e docs/architecture.md.
Não altere arquivos.
Resuma:
1. objetivo do template;
2. estrutura;
3. comandos disponíveis;
4. regras obrigatórias para mudanças.
```

**Checkpoint 0:** aplicação inicial aberta no navegador · agente confirmou as regras · **nenhum arquivo alterado** (confirme com `git status`).

---

## Etapa 2 — Planejar (10 min)

```text
Use a skill plan-feature para planejar a aplicação TaskWeather.

Contexto:
Aplicação web React e TypeScript criada a partir do template da área.

Objetivo:
Criar uma aplicação com identificação por e-mail, lista de tarefas
separadas por usuário e clima atual.

Escopo obrigatório:
- entrada informando apenas o e-mail, sem senha;
- separação dos dados por e-mail;
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

**Os grupos devem verificar:** o plano respeita o não escopo? · cada funcionalidade está separada? · os critérios são observáveis? · o agente tentou incluir bibliotecas? · a ordem permite validar um incremento por vez?

**Checkpoint 1:** plano aceito com três incrementos — autenticação, tarefas, clima.

---

## Etapa 3 — Identificação por e-mail (20 min)

```text
Implemente apenas o incremento de identificação do usuário aprovado no plano.

Como funciona:
- a pessoa informa apenas o e-mail; NÃO há senha;
- o e-mail identifica a sessão;
- o e-mail será usado, na próxima etapa, para separar as tarefas
  de cada usuário no armazenamento local.

Critérios de aceite:
- a tela inicial solicita apenas o e-mail;
- a tela NÃO pede senha;
- um e-mail válido dá acesso à aplicação;
- e-mail vazio ou em formato inválido mostra mensagem clara e não dá acesso;
- o e-mail é normalizado (sem espaços sobrando, em minúsculas) antes de ser
  guardado, para servir como chave estável de dados;
- atualizar a página mantém a sessão;
- logout encerra a sessão sem apagar dados;
- o e-mail da sessão fica visível na tela;
- nenhuma autenticação real é criada.

Restrições:
- não instalar dependências;
- não implementar tarefas;
- não implementar clima;
- não criar senha, cadastro nem recuperação de senha;
- manter a feature isolada em src/features/auth;
- acessar armazenamento por um serviço, não diretamente em componentes;
- deixar registrado no código que isto identifica, mas não autentica.

Processo:
1. informe os arquivos que serão alterados;
2. implemente;
3. crie ou atualize testes relevantes;
4. execute os comandos locais;
5. resuma o resultado e limitações.
```

**Teste manual:** entrar com o campo vazio → entrar com `ana` (formato inválido) → entrar com `ana@empresa.com` → atualizar a página → sair → atualizar de novo.

> **Atenção a um detalhe que costuma escapar:** se o agente usar `<input type="email">`, o navegador bloqueia o envio e mostra a mensagem **dele**, não a da aplicação — o critério "mostra mensagem clara" fica atendido por acidente e de forma diferente em cada navegador. É um ótimo achado para a revisão.

**Commit:**

```text
feat: adiciona identificação por e-mail
```

**Checkpoint 2:** acesso com e-mail válido, recusa de e-mail inválido, persistência e logout funcionando · commit criado.

---

## Etapa 4 — Lista de tarefas (30 min)

```text
Implemente apenas a funcionalidade básica de tarefas.

Escopo:
- criar tarefa com título;
- listar tarefas;
- marcar tarefa como concluída ou ativa;
- persistir tarefas após atualizar a página;
- guardar as tarefas separadas por usuário, usando o e-mail da sessão
  como parte da chave de armazenamento;
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
- as tarefas criadas com um e-mail NÃO aparecem para outro e-mail;
- ao voltar com o e-mail anterior, as tarefas dele reaparecem;
- sair da aplicação não apaga as tarefas de ninguém;
- a identificação por e-mail continua funcionando.

Restrições:
- não instalar dependências;
- não alterar a feature de identificação;
- manter a feature em src/features/todos;
- encapsular armazenamento em um repositório ou serviço — só ele deve
  conhecer o formato da chave;
- a feature de tarefas não deve importar arquivos internos da de
  identificação: receba o e-mail por propriedade;
- seguir os padrões existentes.

Processo:
1. analise o plano e os padrões atuais;
2. informe os arquivos;
3. implemente;
4. adicione testes;
5. execute validações;
6. revise o diff.
```

**Teste manual:** abrir com lista vazia → tentar título vazio → criar duas tarefas → concluir uma → reabrir → atualizar a página → confirmar persistência → **sair, entrar com outro e-mail e confirmar que a lista está vazia** → voltar ao primeiro e-mail e confirmar que as tarefas estão lá.

> **O teste da troca de e-mail é o mais importante desta etapa.** É onde a desorganização aparece: se o armazenamento usa uma chave global, o segundo usuário vê as tarefas do primeiro. Vale comparar com o que acontece no projeto desorganizado do Dia 1.

**Commit:**

```text
feat: adiciona criação e conclusão de tarefas
```

**Checkpoint 3:** criar, concluir e persistir · **dados separados por e-mail** · identificação preservada · commit criado.

---

## Etapa 5 — Widget meteorológico (20 min)

**A API:** [Open-Meteo](https://open-meteo.com), pública e **sem chave de acesso**. Duas chamadas: primeiro o nome da cidade vira coordenadas, depois as coordenadas viram o clima.

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
- usar a API pública Open-Meteo, que não exige chave de acesso;
- não adicionar segredo ao projeto;
- não instalar dependências;
- não alterar auth ou todos;
- manter chamadas externas em src/features/weather, dentro de um serviço.

Critérios de aceite:
- cidade válida exibe clima;
- busca mostra carregamento;
- falha mostra mensagem compreensível;
- uma nova cidade pode ser consultada;
- identificação e tarefas continuam funcionando.

Processo:
1. leia a documentação da integração;
2. apresente um plano curto;
3. implemente;
4. teste sucesso e erro;
5. execute validações;
6. resuma o diff.
```

**Teste manual:** consultar "Curitiba" → consultar "zzzznaoexiste" → **desligar o wi-fi e consultar** → religar e consultar outra cidade.

**Detalhe real da API, verificado:** quando a cidade não existe, a resposta **não traz o campo `results`** — não vem uma lista vazia. Se o grupo tratou apenas "lista vazia", o caso de cidade inexistente pode quebrar. É um ótimo achado para a revisão.

**Commit:**

```text
feat: adiciona consulta de clima atual
```

**Checkpoint 4:** carregando, sucesso e erro · nenhuma credencial real · commit criado.

---

## Etapa 6 — Revisar, validar e documentar (15 min)

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

Depois de revisar e autorizar **apenas as correções necessárias**:

```bash
npm run test
npm run lint
npm run typecheck
npm run build
```

**Fluxo manual final:** login incorreto → login correto → criar tarefa → concluir tarefa → consultar clima → recarregar → logout.

E a descrição do pull request:

```text
Use a skill prepare-pull-request para escrever a descrição do PR
desta sessão, incluindo objetivo, funcionalidades, como testar,
limitações e a evidência das validações.
```

**Checkpoint 5:** testes, lint, typecheck e build passando · documentação atualizada · pull request ou resumo final.

---

## Prompts de apoio (use quando precisar)

**Quando o agente sair do escopo:**

```text
Você alterou arquivos fora do escopo que combinamos.
Reverta as alterações em [arquivo/pasta] e mantenha apenas
o que pertence a [feature]. Não adicione nada novo.
```

**Quando ele disser que terminou sem provar:**

```text
Liste cada critério de aceite e diga como você verificou cada um.
Se algum não foi verificado, diga isso explicitamente.
Depois execute as validações e me mostre a saída completa.
```

**Quando uma validação falhar:**

```text
O comando [comando] falhou com a saída abaixo.
Analise a causa, explique o que aconteceu e corrija.
Não desative nem apague testes para fazer passar.

[cole a saída]
```

**Quando ele quiser instalar uma biblioteca:**

```text
Não instale essa dependência. Resolva com os recursos que o
projeto já tem. Se você acredita que é impossível, explique
por quê antes de qualquer alteração.
```

**Quando o grupo se perder no que já foi feito:**

```text
Não altere nada. Resuma o estado atual do projeto:
quais features existem, o que cada uma faz, quais testes
existem e o que ainda falta em relação ao plano aprovado.
```
