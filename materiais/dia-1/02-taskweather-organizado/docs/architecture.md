# Arquitetura

Este documento explica **como** o TaskWeather está organizado e por quê. O produto em si está descrito em [prd.md](prd.md).

## Princípios

- Organização por funcionalidades, não por camadas técnicas.
- Cada parte tem uma responsabilidade reconhecível.
- Simplicidade primeiro: abstração só quando houver necessidade real.
- Regra de negócio fica nas funcionalidades; a base (`app` e `shared`) permanece neutra.

## Árvore de pastas

```
src/
├── app/          # montagem geral da aplicação — sem regra de negócio
├── features/     # uma pasta por funcionalidade
│   ├── auth/     # identificação por e-mail e sessão
│   ├── todos/    # tarefas
│   └── weather/  # clima
├── shared/       # reutilizável e neutro: components, styles, types
├── test/         # setup.ts e render.tsx (utilitários de teste)
└── main.tsx      # ponto de entrada
```

Cada funcionalidade tem a mesma forma interna:

```
features/todos/
├── components/   # a tela desta funcionalidade
├── model/        # tipos e regras de negócio (sem React, sem armazenamento)
├── services/     # acesso a APIs e persistência
├── tests/        # testes desta funcionalidade
└── index.ts      # interface pública: o que outras partes podem importar
```

## Como encontrar um arquivo

> Primeiro procure a funcionalidade. Depois procure o tipo de arquivo dentro dela.

| Preciso mudar…                          | Procuro em                                     |
| --------------------------------------- | ---------------------------------------------- |
| a regra de e-mail válido                | `features/auth/model/session.ts`               |
| o desenho do formulário de login        | `features/auth/components/LoginForm.tsx`       |
| a regra de título vazio das tarefas     | `features/todos/model/todo.ts`                 |
| onde as tarefas são guardadas           | `features/todos/services/todoStorage.ts`       |
| a API de clima ou o tratamento de falha | `features/weather/services/weatherApi.ts`      |
| o texto exibido no painel de clima      | `features/weather/components/WeatherPanel.tsx` |
| o botão usado em toda a aplicação       | `shared/components/Button.tsx`                 |

## Responsabilidades

- **app/**: monta a aplicação e decide o que aparece quando há ou não sessão. Não contém regra de negócio.
- **features/**: cada capacidade do produto, com tudo o que ela precisa.
- **shared/**: peças reutilizáveis e neutras. Não conhece nenhuma funcionalidade específica.
- **test/**: configuração e utilitários compartilhados de teste.

## Regras de dependência

1. Cada funcionalidade tem sua própria pasta em `features/`.
2. Uma funcionalidade não importa arquivos internos de outra.
3. Uma funcionalidade expõe sua interface pública pelo `index.ts`.
4. Chamadas HTTP ficam em `services/`, nunca dentro de componentes.
5. Acesso ao `localStorage` fica em `services/`, nunca dentro de componentes.
6. `model/` não conhece React nem armazenamento.
7. `shared` é neutro: não depende de nenhuma funcionalidade.
8. Nada de credenciais reais no código.
9. Estados de tela explícitos: inicial, carregando, sucesso e erro.
10. Toda mudança de comportamento considera os testes.

## Acesso a APIs

A consulta de clima usa a API pública [Open-Meteo](https://open-meteo.com), que não exige chave de acesso. Todo o `fetch` fica em `features/weather/services/weatherApi.ts`:

- o componente chama o serviço e não conhece URLs nem formatos de resposta;
- o serviço valida a resposta antes de devolvê-la e traduz qualquer falha em uma mensagem exibível;
- nos testes, o `fetch` é substituído por um duplo — **os testes não acessam a internet**.

## Armazenamento

Tarefas e sessão ficam no `localStorage`, isolados em serviços, com uma chave por assunto:

| Chave                        | Conteúdo                   | Definida em                                |
| ---------------------------- | -------------------------- | ------------------------------------------ |
| `taskweather:session`        | e-mail da sessão atual     | `features/auth/services/sessionStorage.ts` |
| `taskweather:todos:<e-mail>` | tarefas **daquele** e-mail | `features/todos/services/todoStorage.ts`   |

Cada chave é lida e escrita em um único arquivo. Trocar o meio de armazenamento não afeta as telas. Dados corrompidos são ignorados sem quebrar a aplicação.

### Separação de dados por usuário

O e-mail da sessão compõe a chave das tarefas. Duas pessoas usando o mesmo navegador têm listas independentes:

```
taskweather:session                    → { "email": "ana@empresa.com", ... }
taskweather:todos:ana@empresa.com      → [ tarefas da Ana ]
taskweather:todos:joao@empresa.com     → [ tarefas do João ]
```

Três decisões sustentam isso:

1. **O e-mail é normalizado** (`trim` + minúsculas) em `auth/model/session.ts` antes de virar chave. Sem isso, `Ana@Empresa.com` e `ana@empresa.com` criariam dois conjuntos de dados para a mesma pessoa.
2. **Somente `todoStorage` monta a chave**, na função `storageKeyFor`. Nenhum componente conhece o formato.
3. **`App` passa `key={session.email}` para `TodoList`**, o que faz o React remontar a lista quando o e-mail muda. É isso que garante que a troca de usuário recarregue as tarefas certas.

> Isto separa dados, **não os protege**. Não há autenticação: qualquer pessoa pode digitar qualquer e-mail. Ver o alerta em [prd.md](prd.md).

## Estado

O estado é local aos componentes ou às funcionalidades. Não há gerenciador global de estado — a aplicação é pequena e não justifica um.

A sessão é lida do armazenamento na primeira renderização, pelo hook `useSession`. É isso que faz a pessoa continuar logada depois de atualizar a página.

A feature `todos` não conhece a `auth`: ela recebe o e-mail por propriedade (`userEmail`). Quem liga as duas é o `app`, que é o único lugar autorizado a compor features.

## Testes

Os testes ficam dentro da funcionalidade, em `tests/`, e verificam o comportamento observável. Cada teste referencia, em um comentário, o critério de aceite correspondente em [prd.md](prd.md).

## Decisões e limites

| Decisão                                 | Motivo                                                   |
| --------------------------------------- | -------------------------------------------------------- |
| React + TypeScript + Vite               | mesmo padrão dos outros projetos da área                 |
| sem backend                             | a demonstração não precisa; ver não escopo no PRD        |
| identificação por e-mail, sem senha     | evita tratar senha e dados pessoais; ver o alerta no PRD |
| `localStorage` em vez de banco de dados | suficiente para várias pessoas no mesmo navegador        |
| sem biblioteca de requisições           | o `fetch` do navegador resolve                           |
| sem gerenciador global de estado        | o estado é pequeno e local                               |
| e-mail como chave dos dados             | separa as tarefas de cada pessoa sem exigir servidor     |
| API de clima sem chave de acesso        | não há segredo para proteger no front-end                |
