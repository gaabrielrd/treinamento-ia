# Materiais do Dia 1 — guia do instrutor

Dois projetos com **exatamente o mesmo produto** e as mesmas funcionalidades. A única diferença é a organização. Isso é intencional: o contraste que a turma vê não é "um faz mais coisas", é "um dá para continuar, o outro não".

| Pasta                                                                 | O que é                                                     | Usado em                          |
| --------------------------------------------------------------------- | ----------------------------------------------------------- | --------------------------------- |
| [`01-taskweather-desorganizado/`](01-taskweather-desorganizado)        | O que sai quando se pede "crie um app de tarefas com clima" | Slide 2, Slide 10, Bloco opcional A |
| [`02-taskweather-organizado/`](02-taskweather-organizado)              | O mesmo produto seguindo o processo do treinamento          | Slides 4–13                       |

O produto é o TaskWeather do roteiro: identificação por e-mail, tarefas e clima atual. Nos dois projetos entra-se informando **apenas um e-mail** — não há senha.

## Preparação antes da sessão

```bash
cd materiais/dia-1/01-taskweather-desorganizado && npm install
cd ../02-taskweather-organizado && npm install
```

Deixe **dois terminais e duas janelas do navegador** abertos, um projeto em cada. O Vite usa a porta 5173 para o primeiro que subir e 5174 para o segundo — subir os dois antes da aula evita procurar endereço no meio da explicação.

Estado verificado nesta preparação:

| Comando            | 01 desorganizado                 | 02 organizado          |
| ------------------ | -------------------------------- | ---------------------- |
| `npm install`      | funciona                         | funciona               |
| `npm run dev`      | funciona                         | funciona               |
| `npm run build`    | funciona — 330 KB                | funciona — 199 KB      |
| `npm run test`     | **não existe** (`Missing script`) | 47 testes passam       |
| `npm run lint`     | **não existe** (`Missing script`) | passa sem apontamentos |
| `npm run validate` | não existe                       | passa por inteiro      |

O projeto desorganizado **funciona**. Esse é o ponto: funcionar não é o mesmo que estar pronto para continuar.

## Slide 2 — "Tudo o que não definimos vira uma decisão do agente"

A demonstração pedida no roteiro é mostrar duas estruturas contrastantes. Coloque as duas árvores lado a lado:

```
01-desorganizado/src/          02-organizado/src/
├── App.jsx      (257 linhas)  ├── app/
├── components/                ├── features/
│   └── Coisas.jsx             │   ├── auth/
├── helpers.js                 │   ├── todos/
├── utils.js                   │   └── weather/
├── main.jsx                   ├── shared/
└── style.css                  ├── test/
                               └── main.tsx
```

Pergunta para a turma: **"em qual dos dois você sabe onde mexer para alterar o login?"**

À direita, `features/auth`. À esquerda, é preciso abrir `App.jsx` e procurar.

## Slide 10 — Estrutura por funcionalidades

Use o projeto organizado. A tabela "Como encontrar um arquivo" em [`02-.../docs/architecture.md`](02-taskweather-organizado/docs/architecture.md) já está pronta para projetar na tela.

Depois mostre a comparação pedida no roteiro: no projeto desorganizado, a funcionalidade "tarefas" está espalhada por `App.jsx`, `utils.js`, `helpers.js` e `components/Coisas.jsx` — quatro arquivos, nenhum com esse nome.

## Slides 11 a 13 — Documentação e validação

Tudo no projeto organizado:

- `README.md` — objetivo e como executar
- `AGENTS.md` — regras para agentes
- `CLAUDE.md` — orientações para o Claude Code
- `docs/architecture.md` — organização e decisões
- `docs/prd.md` — problema, escopo, não escopo e critérios de aceite
- `docs/tasks.md` — a entrega dividida em 7 tarefas

O projeto desorganizado não tem nenhum desses arquivos. Vale dizer em voz alta: **quem herdar aquele projeto só tem o código.**

Para o Slide 12, rode no projeto organizado:

```bash
npm run test
```

E, para mostrar uma falha e sua mensagem, rode no desorganizado:

```bash
npm run test
```

A resposta é `npm error Missing script: "test"`. É a demonstração mais legível possível para quem não programa: não é que os testes falharam — não existe como testar.

Se preferir mostrar um teste quebrando de verdade, abra `02-.../src/features/todos/model/todo.ts` e apague as três linhas que recusam o título vazio:

```ts
if (!trimmed) {
  throw new Error(EMPTY_TITLE_MESSAGE);
}
```

Rode `npm run test`. Dois testes falham com `expected [Function] to throw an error`, e o Vitest aponta o arquivo e a linha:

```
× recusa título vazio
× recusa título vazio e mantém a lista intacta
Tests  2 failed | 45 passed (47)
```

É a hora de dizer que o teste não estava ali para agradar a ferramenta: ele guarda um critério de aceite que alguém decidiu antes de existir código. Desfaça com `git checkout materiais/dia-1`.

(Trocar apenas o **texto** da mensagem não quebra nada — os testes citam a mesma constante de propósito, para que a mensagem possa ser reescrita sem invalidar a regra.)

## Bloco opcional A — Análise do projeto desorganizado (20 min)

Projete os arquivos de `01-taskweather-desorganizado` e conduza com perguntas de organização. A turma não precisa saber programar para responder nenhuma delas.

| Pergunta para a turma                                              | O que ela vai encontrar                                                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| Onde eu mexo para mudar o login?                                   | `App.jsx`, misturado com tarefas e clima no mesmo arquivo de 257 linhas                                             |
| Qual arquivo cuida das tarefas?                                    | quatro arquivos ao mesmo tempo, nenhum chamado "tarefas"                                                            |
| O que faz o arquivo `Coisas.jsx`?                                  | resumo, exportação e dicas de clima — o nome não diz nada                                                            |
| Qual a diferença entre `utils.js` e `helpers.js`?                  | nenhuma regra clara; os dois têm funções de data e duas versões de "contar tarefas feitas"                           |
| Onde os dados são salvos?                                          | 22 chamadas ao armazenamento, em 4 arquivos, com 7 chaves: `tasks`, `todo_list`, `backup_tasks`, `tw:user`, `logado`, `ultimo_clima`, `export_csv` |
| Qual dessas chaves é a verdadeira?                                 | ninguém sabe — `tasks` e `todo_list` são gravadas juntas "por segurança", e `backup_tasks` está em código que nunca roda |
| O que é `WEATHER_TOKEN` no começo do `App.jsx`?                    | uma credencial escrita no código, com um `TODO` dizendo para arrumar depois — e que nem é usada                      |
| Este projeto usa todas as bibliotecas que instalou?                | não: `axios` é importado e nunca usado, `uuid` nunca é importado, e `moment` e `lodash` duplicam código já existente |
| Por que o build do desorganizado é maior?                          | ele carrega bibliotecas que não precisava — 330 KB contra 199 KB, cerca de 66% a mais                                |
| As tarefas de uma pessoa aparecem para outra?                       | **sim** — as tarefas são gravadas em chaves globais, sem nenhuma relação com quem entrou. Ver a demonstração abaixo   |
| Como eu sei se uma mudança quebrou algo?                           | não há testes nem lint; só abrindo e clicando                                                                        |
| Se a pessoa que criou isso sair da empresa, o que sobra?            | só o código: nenhum README, nenhuma decisão registrada, nenhum critério de aceite                                     |

### Duas demonstrações de defeito, para fechar o bloco

**1. Desligue o wi-fi e recarregue o projeto desorganizado.** O clima fica em "carregando..." para sempre, porque a falha da consulta só vai para o console. No projeto organizado, a mesma situação mostra "Não foi possível consultar o clima agora. Tente novamente." Foi o mesmo problema nos dois — a diferença é que um deles previu o erro.

**2. Troque de usuário no projeto desorganizado.** Esta é a mais forte:

1. entre com `ana@empresa.com`;
2. crie uma tarefa chamada **"consulta médica"**;
3. clique em `sair`;
4. entre com `joao@empresa.com`.

A tarefa da Ana está lá. **O João está vendo a agenda médica da Ana.**

Faça o mesmo no projeto organizado: a lista do João aparece vazia, e ao voltar para o e-mail da Ana a tarefa dela reaparece.

Ninguém programou esse vazamento de propósito. Ele é consequência direta da desorganização: com sete chaves espalhadas por quatro arquivos e nenhuma fonte única da verdade, **ninguém tinha onde escrever a regra "as tarefas são de quem entrou"**. No projeto organizado, essa regra tem um endereço — `features/todos/services/todoStorage.ts`, na função `storageKeyFor` — e um teste que a protege.

A pergunta para a turma: **"em que arquivo você consertaria isso, em cada um dos dois projetos?"**

## O que corresponde ao quê

Se alguém perguntar "e como ficaria isso organizado?", este é o mapa entre os dois projetos:

| No desorganizado                                    | No organizado                                  |
| --------------------------------------------------- | ---------------------------------------------- |
| login dentro de `App.jsx`                           | `features/auth/`                               |
| tarefas em `App.jsx` + `utils.js` + `helpers.js`     | `features/todos/`                              |
| `fetch` do clima dentro do componente               | `features/weather/services/weatherApi.ts`      |
| `localStorage` em 4 arquivos, com 7 chaves           | dois serviços, uma chave por assunto            |
| tarefas em chave global — dados vazam entre usuários | chave por e-mail: `taskweather:todos:<e-mail>`  |
| `utils.js` e `helpers.js`                           | `model/` de cada funcionalidade                |
| `Coisas.jsx`                                        | não existe — cada parte foi para sua feature   |
| nenhuma documentação                                | `README.md`, `AGENTS.md`, `CLAUDE.md`, `docs/` |
| nenhum teste                                        | 47 testes citando os critérios de aceite       |

## Observações

- O clima usa a API pública [Open-Meteo](https://open-meteo.com), sem chave de acesso. **Confirme a internet da sala antes.** Sem rede, o projeto organizado mostra erro tratado e o desorganizado fica carregando — o que, como descrito acima, também serve de demonstração.
- Os testes do projeto organizado não acessam a internet: a rede é substituída por um duplo.
- Os dois projetos usam a porta 5173 por padrão. Ao subir o segundo, o Vite avisa que mudou para 5174.
- Cada teste do projeto organizado tem, em comentário, o critério de aceite que ele verifica — os critérios estão em [`02-.../docs/prd.md`](02-taskweather-organizado/docs/prd.md). Isso torna concreta a mensagem do Slide 6: critério de aceite é o contrato entre a intenção e a implementação.
- Para restaurar qualquer um dos projetos depois de mexer neles durante a aula: `git checkout materiais/dia-1`.
