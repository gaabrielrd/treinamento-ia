# Orientações para o Claude Code

As regras gerais do projeto estão em [AGENTS.md](AGENTS.md) e valem integralmente aqui. Este arquivo acrescenta o que é específico do Claude Code.

## Contexto rápido

TaskWeather: tarefas pessoais e clima atual em uma página. React + TypeScript + Vite. Sem backend.

A pessoa informa apenas o e-mail — **não há senha nem autenticação**. O e-mail identifica a sessão e compõe a chave que separa as tarefas de cada usuário no `localStorage`. Não trate isso como mecanismo de segurança e não proponha autenticação real sem pedir confirmação.

- O que construir e por quê: [docs/prd.md](docs/prd.md)
- Como está organizado: [docs/architecture.md](docs/architecture.md)
- Como o trabalho foi dividido: [docs/tasks.md](docs/tasks.md)

## Como trabalhar aqui

- Trabalhe uma tarefa por vez, na ordem de [docs/tasks.md](docs/tasks.md).
- Antes de alterar um arquivo, leia-o.
- Prefira alterações pequenas, com um objetivo claro por commit.
- Ao criar uma funcionalidade, copie a forma de uma existente (`features/todos` é o exemplo mais completo).
- Ao escrever um teste, cite no comentário o critério de aceite correspondente do PRD, como nos testes atuais.

## Comando de validação

```bash
npm run validate
```

Roda formatação, lint, tipos, testes e build. É a verificação que decide se a tarefa está pronta.

Para investigar uma falha isoladamente: `npm run test`, `npm run lint`, `npm run typecheck` ou `npm run build`.

## Convenções

- Mensagens de commit no formato `tipo: descrição` (`feat:`, `fix:`, `docs:`, `chore:`, `test:`).
- Branches no formato `feat/nome-curto`, `fix/nome-curto`, `docs/nome-curto`.
- Textos de interface e mensagens de erro em português.
- Mensagens de erro exibíveis ficam no `model/` ou no `services/` da funcionalidade, exportadas como constante, para que os testes citem a mesma mensagem.

## Limites

- Não altere os arquivos de configuração (`vite.config.ts`, `tsconfig*.json`, `eslint.config.js`) sem pedir confirmação.
- Não remova testes para fazer a validação passar.
- Não implemente nada listado no não escopo do PRD sem confirmação explícita.
