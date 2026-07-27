# TaskWeather

Aplicação de demonstração que reúne, em uma única página, o registro de tarefas pessoais e a consulta do clima atual.

Este é o **exemplo organizado** do Dia 1 do treinamento. O par desorganizado, com o mesmo produto, está em [`../01-taskweather-desorganizado`](../01-taskweather-desorganizado).

## Problema que resolve

Quem organiza tarefas do dia costuma precisar também de uma informação de contexto — o clima — e acaba alternando entre aplicativos. O TaskWeather junta as duas coisas em uma tela.

Definição completa de problema, público, escopo, não escopo e critérios de aceite: [docs/prd.md](docs/prd.md).

## O que esta versão faz

- identificação por e-mail, sem senha;
- separação das tarefas por e-mail: cada pessoa vê apenas as suas;
- criar, concluir e remover tarefas;
- manter as tarefas e a sessão no navegador;
- consultar o clima atual por cidade.

## O que esta versão não faz

Autenticação de verdade, senha, cadastro, colaboração entre pessoas, banco de dados, notificações e previsão de vários dias. O motivo de cada exclusão está em [docs/prd.md](docs/prd.md).

> ⚠️ **O e-mail identifica, não autentica.** Não há senha nem verificação: qualquer pessoa pode digitar qualquer e-mail e entrar. A separação por e-mail evita **confusão** entre pessoas que compartilham o navegador — ela não protege segredo. Não guarde aqui nada que não possa ser lido por quem tem acesso à mesma máquina.

## Pré-requisitos

- Node.js 22 (o arquivo `.nvmrc` indica a versão; com `nvm`, rode `nvm use`)
- npm

## Instalação

```bash
npm install
```

## Execução

```bash
npm run dev
```

O Vite mostra no terminal o endereço local (algo como `http://localhost:5173`). Informe qualquer e-mail válido, por exemplo `voce@empresa.com`.

Para ver a separação de dados: crie uma tarefa, clique em **Sair**, entre com outro e-mail e repare que a lista está vazia. Voltando ao primeiro e-mail, a tarefa está lá.

## Validação

Antes de considerar qualquer alteração pronta:

```bash
npm run validate
```

Esse comando roda, em sequência: checagem de formatação, lint, checagem de tipos, testes e build. Se todos passarem, a alteração está saudável.

## Comandos

| Comando                | O que faz                                                 |
| ---------------------- | --------------------------------------------------------- |
| `npm run dev`          | Sobe o servidor de desenvolvimento com recarga automática |
| `npm run build`        | Confere os tipos e gera a versão de produção              |
| `npm run lint`         | Procura problemas de padrão no código                     |
| `npm run format`       | Formata os arquivos                                       |
| `npm run format:check` | Confere se os arquivos estão formatados                   |
| `npm run typecheck`    | Verifica os tipos do TypeScript                           |
| `npm run test`         | Roda os testes uma vez                                    |
| `npm run test:watch`   | Roda os testes em modo contínuo                           |
| `npm run validate`     | Roda tudo: format:check, lint, typecheck, test e build    |

## Estrutura

```
src/
├── app/          # montagem geral da aplicação — sem regra de negócio
├── features/     # uma pasta por funcionalidade
│   ├── auth/     # identificação por e-mail e sessão
│   ├── todos/    # tarefas
│   └── weather/  # clima
├── shared/       # reutilizável e neutro (Button, estilos, tipos)
├── test/         # configuração e utilitários de teste
└── main.tsx      # ponto de entrada
```

Para achar um arquivo: **primeiro procure a funcionalidade, depois o tipo de arquivo dentro dela.** Se o problema é no login, ele está em `features/auth`.

Detalhes e regras em [docs/architecture.md](docs/architecture.md).

## Dados externos

O clima vem da [Open-Meteo](https://open-meteo.com), uma API pública que não exige chave de acesso. Sem internet, a consulta falha e a tela mostra uma mensagem de erro — os testes não dependem da rede.

## Documentação

- [docs/prd.md](docs/prd.md) — problema, escopo, não escopo e critérios de aceite
- [docs/architecture.md](docs/architecture.md) — como o projeto está organizado e por quê
- [docs/tasks.md](docs/tasks.md) — a entrega dividida em tarefas
- [AGENTS.md](AGENTS.md) — regras para agentes de código
- [CLAUDE.md](CLAUDE.md) — orientações para o Claude Code

## Limitações conhecidas

- Sem backend: os dados vivem no navegador do usuário.
- Não há autenticação: o e-mail identifica e separa dados, mas não protege nada.
- A separação vale por navegador: em outra máquina, o mesmo e-mail começa vazio.
- Limpar os dados do navegador apaga as tarefas de todos os e-mails.
