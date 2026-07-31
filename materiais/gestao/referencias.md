# Referências — Momento 1 · Gestão

Poucas fontes, escolhidas para sustentar os três argumentos do encontro. As referências completas do treinamento estão nos materiais do Momento 2: [Dia 1](../dia-1/referencias.md) · [Dia 2](../dia-2/referencias.md) · [Dia 3](../dia-3/referencias.md).

## O ganho depende do contexto

| Fonte | O que mostra | Como usar no encontro |
| ----- | ------------ | --------------------- |
| [The Impact of AI on Developer Productivity](https://arxiv.org/abs/2302.06590) — arXiv, 2023 | Em experimento controlado, quem tinha assistente de IA concluiu a tarefa **55,8% mais rápido** | O ganho é real quando a tarefa está bem definida |
| [Measuring the Impact of Early-2025 AI on Experienced Open-Source Developers](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/) — METR, 2025 | Pessoas experientes, nos próprios repositórios, ficaram **19% mais lentas** com IA | Sem processo, a aceleração vira custo de revisão |

Usar os dois juntos é o que evita tanto o discurso de hype quanto o de rejeição. A diferença entre os dois resultados — clareza do pedido, familiaridade com o código, custo de revisar — é exatamente o que o Momento 2 trata.

## Estrutura do projeto muda o resultado

- [REPOEXEC](https://arxiv.org/abs/2406.11927) — arXiv, 2024. Dependências entre arquivos e contexto do repositório são decisivos para o código gerado ser útil, não apenas sintaticamente correto. É o argumento para exigir estrutura e arquivos de instrução.
- [SWE-bench](https://arxiv.org/abs/2310.06770) — arXiv, 2023. "Gerar código" e "resolver um problema de software real" são coisas diferentes. Útil quando alguém pergunta por que não basta pedir o app pronto.

## Governança e risco

- [OWASP Top 10 for LLM Applications](https://owasp.org/www-project-top-10-for-large-language-model-applications/) — o catálogo de referência de riscos em aplicações com IA. Para a gestão, interessam os itens de vazamento de dado e de permissão excessiva em integrações.
- [Model Context Protocol — documentação oficial](https://modelcontextprotocol.io) — o que é uma conexão MCP e o que ela autoriza. Basta a página inicial para entender a pergunta "isso é só leitura?".

## Da própria demonstração

A falha mostrada no encontro está documentada nos materiais do projeto de exemplo — vale como leitura de apoio se alguém quiser ver o detalhe depois:

- [Comparação dos dois projetos](../dia-1/README.md) — o mesmo produto, organizado e desorganizado
- [Definição do produto (PRD)](../dia-1/02-taskweather-organizado/docs/prd.md) — como escopo, não escopo e critérios ficam escritos na prática
- [Regras do projeto (`AGENTS.md`)](../dia-1/02-taskweather-organizado/AGENTS.md) — o que significa "o padrão da área vira instrução"
