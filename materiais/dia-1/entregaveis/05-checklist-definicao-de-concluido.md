# Checklist — definição de concluído

> O agente dizer "concluído" não encerra a tarefa.

Uma tarefa está pronta quando **você** consegue comprovar. Esta lista é a mesma para todos os projetos da área.

## A lista

- [ ] **Critérios de aceite atendidos** — você verificou cada um na tela, clicando.
- [ ] **A aplicação abre** — `npm run dev` e o fluxo principal funciona.
- [ ] **Os testes passam** — `npm run test` sem falhas.
- [ ] **O lint passa** — `npm run lint` sem apontamentos.
- [ ] **Os tipos passam** — `npm run typecheck` sem erros.
- [ ] **O build passa** — `npm run build` conclui.
- [ ] **A documentação está atualizada** — ver as quatro perguntas abaixo.
- [ ] **A mudança está registrada** — commit criado com mensagem clara.
- [ ] **O diff foi revisado** — você olhou o que mudou, arquivo por arquivo.
- [ ] **Nada fora do escopo entrou** — nenhuma funcionalidade "de brinde".
- [ ] **Nenhuma dependência nova sem justificativa.**
- [ ] **Nenhum segredo ou credencial real no código.**

Em projetos com o comando pronto, os seis itens técnicos viram um só:

```bash
npm run validate
```

## As quatro perguntas de documentação

Toda mudança relevante deve responder:

1. A documentação de **execução** mudou? → `README.md`
2. Uma decisão **arquitetural** mudou? → `docs/architecture.md`
3. Uma nova **restrição** precisa ser registrada? → `AGENTS.md`
4. O agente precisará **saber disso no futuro**? → `CLAUDE.md` ou `docs/`

## Sinais de que a tarefa não está pronta

Pare se qualquer um destes for verdade:

- ❌ "Os testes falham, mas é um problema antigo, não meu."
- ❌ "Funcionou aqui, não conferi os outros fluxos."
- ❌ "O agente disse que está tudo certo."
- ❌ "Vou documentar depois."
- ❌ "Aproveitei e já melhorei outras coisas."
- ❌ "Deixei um teste desligado para passar."

## A frase para o agente

Quando o agente disser que terminou:

```text
Rode as validações do projeto e me mostre a saída.
Depois, liste cada critério de aceite e diga como você
verificou cada um. Se algum não foi verificado, diga isso
explicitamente.
```

> Não é o agente que decide se acabou. É a evidência.
