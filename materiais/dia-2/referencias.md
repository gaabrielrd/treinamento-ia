# Referências — Dia 2

Fontes oficiais para prompting, contexto persistente, skills, MCP e escolha de modelo. Este é o dia com a bibliografia mais rica, porque quase tudo aqui tem documentação primária.

## Para enviar à turma antes da sessão

| Recurso | Por que este |
| ------- | ------------ |
| [What are Agents, Skills, and Instructions](https://awesome-copilot.github.com/learning-hub/what-are-agents-skills-instructions/) — Awesome GitHub Copilot | Separa em linguagem simples três conceitos que se confundem sempre. O material mais acessível do dia. |
| [Conectar Claude Code a ferramentas via MCP](https://code.claude.com/docs/pt/mcp) — Claude Code Docs PT | Versão em português, boa como primeiro contato com MCP. |

## Por bloco do dia

### Slides 4 a 7 — Prompts eficientes

- [Prompt engineering](https://developers.openai.com/api/docs/guides/prompt-engineering) — OpenAI API Docs. Guia oficial, direto. Cobre contexto, restrições e critérios — exatamente os blocos do nosso template de prompt.
- [Prompt engineering overview](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview) — Anthropic Docs. Trata prompting como parte de um sistema, não como bala de prata. Bom para a conversa sobre quando trocar de modelo em vez de insistir no prompt.
- [Prompting best practices](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/claude-4-best-practices) — Anthropic Docs. Clareza, exemplos, estrutura e trabalho agentic. É a melhor base para um template de prompt de equipe.

### Slides 7 e 8 — `AGENTS.md` e `CLAUDE.md`

- [Custom instructions with AGENTS.md](https://developers.openai.com/codex/agent-configuration/agents-md) — OpenAI Codex Docs. A fonte oficial: contexto persistente, regras do projeto, instruções lidas antes do trabalho.
- [How Claude remembers your project](https://code.claude.com/docs/en/memory) — Claude Code Docs. Diferencia bem "prompt da conversa" de "regra do projeto".
- [Best practices for Claude Code](https://code.claude.com/docs/en/best-practices) — Claude Code Docs. Disciplina de workflow e organização de contexto.
- [Defining Custom Instructions](https://awesome-copilot.github.com/learning-hub/defining-custom-instructions/) — Awesome GitHub Copilot. Guia acessível sobre instruções persistentes. É do ecossistema Copilot, mas o modelo mental é o mesmo.

### Slides 9 e 10 — Skills

- [Agent Skills specification](https://agentskills.io/specification) — Agent Skills. A referência canônica do formato aberto: diretório, `SKILL.md`, frontmatter YAML, arquivos auxiliares. Essencial para quem for montar skills de verdade.
- [Best practices for skill creators](https://agentskills.io/skill-creation/best-practices) — Agent Skills. De onde vem o conteúdo de uma boa skill: documentação interna, padrões do projeto, PRs, incidentes. Ajuda a evitar skills genéricas demais.
- [Build skills](https://developers.openai.com/codex/build-skills) — OpenAI Codex Docs. Skills como pacotes reutilizáveis de instruções, recursos e scripts.
- [Creating Effective Skills](https://awesome-copilot.github.com/learning-hub/creating-effective-skills/) — Awesome GitHub Copilot. Descrição, gatilhos de uso e requisitos, em linguagem didática.

**Exemplos de skills reais**, úteis para a atividade da Opção A:

- [Skill Creator](https://github.com/anthropics/skills/blob/main/skills/skill-creator/SKILL.md) — anthropics/skills. Uma skill sobre criar skills.
- [Create AGENTS.md](https://github.com/github/awesome-copilot/blob/main/skills/create-agentsmd/SKILL.md) — github/awesome-copilot. Skill orientada a gerar um `AGENTS.md` de qualidade. Bom ponto de partida para uma versão interna.
- [Webapp Testing](https://github.com/anthropics/skills/blob/main/skills/webapp-testing/SKILL.md) — anthropics/skills. Testar apps web locais. Conversa direto com o Dia 3.

### Slide 11 — MCP e segurança

- [Model Context Protocol — Intro](https://modelcontextprotocol.io/docs/getting-started/intro) — MCP Docs. A melhor introdução oficial. Boa para os primeiros slides do bloco.
- [Security Best Practices](https://modelcontextprotocol.io/docs/tutorials/security/security_best_practices) — MCP Docs. **A fonte que deve orientar a sua fala sobre permissões:** autorização, consentimento, proxying e o ataque de *confused deputy*. É a base do nosso checklist de segurança.
- [Architecture overview](https://modelcontextprotocol.io/docs/learn/architecture) — MCP Docs. Host, client, server e a diferença entre servidores locais e remotos. Mais técnico; referência do instrutor.
- [Connect Claude Code to tools via MCP](https://code.claude.com/docs/en/mcp) — Claude Code Docs. Instalação e configuração real, para a demonstração.

### Slide 12 — Escolha de modelo e raciocínio

- [Choosing the right model](https://docs.anthropic.com/en/docs/about-claude/models/choosing-a-model) — Claude Platform Docs. Matriz de capacidade, velocidade e custo, com as estratégias *efficiency-first* e *capability-first*. É a fonte da nossa matriz 2×2.
- [Model guidance](https://developers.openai.com/api/docs/guides/latest-model) — OpenAI API Docs. Seleção de modelo e a relação custo × capacidade.
- [Reasoning best practices](https://developers.openai.com/api/docs/guides/reasoning-best-practices) — OpenAI API Docs. Quando subir o raciocínio e quando não. Sustenta o alerta de que tarefas simples não pedem configuração máxima.

## A evidência sobre produtividade é mista — e isso é conteúdo

Vale levar esses três números para o slide de abertura ou de encerramento, porque juntos eles sustentam a tese do treinamento melhor que qualquer um deles isolado:

| Estudo | Resultado | O que isso ensina |
| ------ | --------- | ----------------- |
| [The Impact of AI on Developer Productivity](https://arxiv.org/abs/2302.06590) — arXiv, 2023 | Em experimento controlado, quem tinha Copilot concluiu a tarefa **55,8% mais rápido** | O ganho é real e mensurável em tarefa bem delimitada |
| [Measuring the Impact of Early-2025 AI on Experienced Open-Source Developers](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/) — METR, 2025 | Desenvolvedores experientes, nos **próprios repositórios**, ficaram **19% mais lentos** com IA | O ganho depende de contexto, familiaridade com o código e custo de revisão |
| [SWE-bench](https://arxiv.org/abs/2310.06770) — arXiv, 2023 | Benchmark de issues reais do GitHub | "Gerar código" e "resolver software real" são coisas diferentes |

A leitura conjunta é a mensagem do dia: **agentes são aceleradores de execução sob processo, não substitutos de arquitetura, validação e responsabilidade.**

## Panorama, para o instrutor

Não são leitura da turma — servem para você responder perguntas com segurança.

- [Evaluating Large Language Models Trained on Code](https://arxiv.org/abs/2107.03374) — OpenAI/arXiv, 2021. O paper fundacional do Codex e do benchmark HumanEval. Contextualização histórica.
- [From LLMs to LLM-based Agents for Software Engineering](https://arxiv.org/abs/2408.02479) — arXiv, 2024. Survey que organiza o campo: requisitos, design, geração, testes, manutenção e autonomia.
- [A Survey on Code Generation with LLM-based Agents](https://arxiv.org/abs/2508.00083) — arXiv, 2025. Survey focado em agentes de geração de código; mostra a virada do campo para confiabilidade e workflow.

> Existe uma linha de pesquisa recente sobre o efeito de arquivos `AGENTS.md` na eficiência dos agentes, incluindo resultados que apontam que arquivos de contexto **inflados ou conflitantes podem piorar** o resultado. É um contraponto valioso ao "quanto mais contexto, melhor" — e justifica o `AGENTS.md` enxuto que o template adota. Confirme as referências específicas antes de citá-las em slide.
