# Regras para agentes de código

Estas regras valem para qualquer agente que trabalhe neste projeto.

## Antes de escrever código

1. Leia [docs/prd.md](docs/prd.md): problema, escopo, não escopo e critérios de aceite.
2. Leia [docs/architecture.md](docs/architecture.md): onde cada coisa mora e as regras de dependência.
3. Se a solicitação estiver fora do escopo definido, **pergunte antes de implementar**.

## Organização

- Toda funcionalidade nova vira uma pasta em `src/features/<nome>` com `components/`, `model/`, `services/`, `tests/` e `index.ts`.
- Uma funcionalidade não importa arquivos internos de outra: use o `index.ts`.
- `shared/` é neutro. Só entra ali o que for realmente reutilizado e não pertencer a nenhuma funcionalidade.
- `app/` só monta a aplicação. Não coloque regra de negócio nele.

## Restrições

- Não faça `fetch` dentro de componentes. Chamadas externas ficam em `services/`.
- Não acesse `localStorage` dentro de componentes. Persistência fica em `services/`.
- Não instale bibliotecas novas sem justificar a necessidade e registrar a decisão em [docs/architecture.md](docs/architecture.md).
- Não adicione gerenciador global de estado, biblioteca de requisições ou framework de CSS.
- Não coloque credenciais no código. Tudo no front-end é público.
- Não implemente itens listados no não escopo do PRD.
- Não deixe uma tela sem os estados de carregando, sucesso e erro.

## Ao concluir uma tarefa

1. Rode `npm run validate` e corrija o que falhar.
2. Confira na tela cada critério de aceite da funcionalidade.
3. Atualize a documentação afetada:
   - mudou como executar? → `README.md`
   - mudou a organização ou uma decisão técnica? → `docs/architecture.md`
   - mudou o escopo ou os critérios? → `docs/prd.md`
4. Descreva o que mudou e o que ficou de fora.

Não relate uma tarefa como concluída enquanto qualquer verificação estiver falhando.
