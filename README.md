# Formação Prática: Desenvolvimento de Aplicações com Agentes de Código

Bem-vindo ao repositório oficial da **Formação Prática de Desenvolvimento com Agentes de Código**. 
Este material foi desenhado para capacitar pessoas não desenvolvedoras a utilizar agentes de Inteligência Artificial de maneira organizada, previsível e segura, focando em boas práticas de estruturação de software e processos bem definidos.

## 🧭 A formação em dois momentos

A formação acontece em dois momentos, com públicos e objetivos diferentes. **A ordem importa:** sem o primeiro, o segundo produz artefatos que ninguém combinou de usar.

| | **Momento 1 · Gestão** | **Momento 2 · Execução** |
| --- | --- | --- |
| **Quem** | líderes de área e quem acompanha as entregas | quem vai implementar o processo no dia a dia |
| **Duração** | 1 hora, encontro único | 3 encontros de 2 horas |
| **Objetivo** | saber o que pedir, o que conferir e onde entrar no processo | percorrer o processo inteiro, do problema à entrega validada |
| **Entregável** | o [combinado da área](materiais/gestao/entregaveis/03-combinado-da-area.md), preenchido em grupo | uma aplicação real da área, testada e documentada |
| **Material** | [guia do encontro](materiais/gestao/README.md) · [roteiro](materiais/gestao/roteiro.md) | [Dia 1](materiais/dia-1/README.md) · [Dia 2](materiais/dia-2/README.md) · [Dia 3](materiais/dia-3/README.md) |

O Momento 1 não ensina a ferramenta: ele define como a área vai acompanhar projetos feitos com agentes. O que for combinado ali é o que as duplas aplicam no Momento 2.

## 🎯 Objetivo da Formação

O foco deste treinamento não é aprofundar conceitos complexos de programação, mas sim ensinar um processo consistente para trabalhar com IA. A formação estabelece diretrizes para que as aplicações criadas:
- Possuam escopo, requisitos e critérios de aceite claramente definidos;
- Sigam uma estrutura de pastas organizada e modular;
- Utilizem controle de versão (GitHub) como memória do projeto;
- Estejam acompanhadas de documentação clara;
- Possam ser facilmente entendidas e continuadas por outras pessoas;
- Sejam testadas localmente antes de serem consideradas concluídas.

Para a gestão, o mesmo processo se traduz em três resultados: **autonomia** da equipe, **controle** por artefato verificável e **qualidade** com evidência antes da entrega.

## 🌐 Site do treinamento

Os materiais, entregáveis e referências ficam disponíveis em uma página pública, atualizada automaticamente a cada push:

- **Página inicial** — visão geral dos dois momentos
- **[Baixar os materiais](downloads.md)** — slides em PDF, entregáveis e referências

O site é gerado por [docsify](https://docsify.js.org), sem etapa de build: ele lê os próprios `.md` deste repositório. Configuração e publicação em [docs/publicacao.md](docs/publicacao.md).

Para ver localmente:

```bash
python3 -m http.server 8080
```

## 📂 Estrutura do Repositório

Cada encontro é uma pasta com tudo o que ele usa — guia, roteiro, entregáveis e referências. É a mesma regra de organização que o Dia 1 ensina para código, aplicada aqui.

```
docs/         documentação da formação e deste repositório
materiais/    o que é usado em sala, uma pasta por encontro
slides/       decks publicados (.key e .pdf) e os scripts que os geram
scripts/      validação local
template-*/   os dois pontos de partida de projeto
```

O mapa completo, com "onde mexer para cada tipo de alteração", está em [docs/estrutura.md](docs/estrutura.md).

### Como alterar algo aqui

O repositório segue o processo que ensina: escopo definido, incremento pequeno, validação antes de concluir.

- [**AGENTS.md**](AGENTS.md) — as regras do projeto, para agentes e pessoas
- [**docs/fluxo-de-trabalho.md**](docs/fluxo-de-trabalho.md) — o passo a passo por tipo de alteração
- [**docs/definicao-de-concluido.md**](docs/definicao-de-concluido.md) — o checklist antes de dizer que terminou
- [**docs/decisoes.md**](docs/decisoes.md) — por que o repositório é assim

Validação local, que confere links, estrutura dos encontros e decks publicados:

```bash
python3 scripts/validar.py
```

### Materiais do Curso

- [**Plano Geral (`docs/plano.md`)**](docs/plano.md): Visão geral da formação, duração, público-alvo e o conteúdo programático completo dos dois momentos.
- **Roteiros**: Guias detalhados (slide a slide) para o instrutor conduzir os encontros:
  - [`materiais/gestao/roteiro.md`](materiais/gestao/roteiro.md): **Momento 1** — como a gestão acompanha e participa do processo; termina no combinado da área.
  - [`materiais/dia-1/roteiro.md`](materiais/dia-1/roteiro.md): **Momento 2, Dia 1** — processo de software, organização do projeto e qualidade local (antes do código).
  - [`materiais/dia-2/roteiro.md`](materiais/dia-2/roteiro.md): **Momento 2, Dia 2** — como orientar agentes, prompts eficientes, skills e servidores MCP.
  - [`materiais/dia-3/roteiro.md`](materiais/dia-3/roteiro.md): **Momento 2, Dia 3** — construção prática da aplicação **TaskWeather**.
- **Apresentações**: em [`slides/`](slides/), em `.key` e `.pdf` — `apresentacao-gestao` para o Momento 1 e `apresentacao-dia-1`, `-2` e `-3` para o Momento 2. Há ainda dois decks de apoio à proposta: `apresentacao-lideres` (aprovação) e `apresentacao-lideres-areas` (validação com os líderes de cada área). Todos são gerados por script — ver [`slides/build/README.md`](slides/build/README.md).

### Templates Iniciais para Projetos com IA

O curso fornece templates de repositório já estruturados para obter o melhor resultado ao trabalhar com agentes de código. Eles contêm instruções predefinidas (como `AGENTS.md` e `CLAUDE.md`) e ferramentas recomendadas prontas para uso:

- [**`template-ia-web/`**](template-ia-web/): Template de frontend moderno (Vite + React/TypeScript).
- [**`template-ia-python/`**](template-ia-python/): Template focado em projetos Python, configurado com UV, linting e testes.
- [`docs/decisoes-do-template.md`](docs/decisoes-do-template.md): Documento que detalha as decisões tomadas para criar a estrutura dos templates.

## 🚀 Como Utilizar Este Repositório

- **Para a gestão**: comece pelo [guia do Momento 1](materiais/gestao/README.md) e pelo [combinado da área](materiais/gestao/entregaveis/03-combinado-da-area.md) — é o que precisa estar definido antes de a equipe começar.
- **Para Instrutores**: acompanhe o `docs/plano.md` e conduza pelos roteiros — `materiais/gestao/roteiro.md` primeiro, depois os três dias, aproveitando as apresentações incluídas.
- **Para Participantes**: os conceitos e processos aprendidos nos dois primeiros dias devem ser aplicados no Dia 3 na prática, através da instanciação de um dos templates disponíveis (principalmente o Web).

## 🧠 Princípio Central da Formação

> *"Primeiro definimos o problema e o processo. Depois pedimos a implementação."*
