# Estrutura dos arquivos

Onde cada coisa mora e por quê. Se você precisa alterar algo e não sabe onde, comece pela tabela "onde mexer".

## A árvore

```
treinamento-ia/
├── README.md              página inicial do site e entrada do repositório
├── AGENTS.md              regras do projeto para agentes de código
├── CLAUDE.md              o que é específico do Claude Code
├── downloads.md           página de download dos materiais
├── index.html             configuração do docsify (o site não tem build)
├── _sidebar.md            menu lateral do site
├── _headers  _404.md      cabeçalhos do Cloudflare Pages e página de erro
│
├── docs/                  documentação sobre a formação e sobre este repositório
│   ├── plano.md                   plano da formação: objetivos, dois momentos, conteúdo
│   ├── estrutura.md               este arquivo
│   ├── fluxo-de-trabalho.md       como fazer cada tipo de alteração
│   ├── definicao-de-concluido.md  o checklist antes de considerar algo pronto
│   ├── decisoes.md                por que o repositório é assim
│   ├── decisoes-do-template.md    decisões por trás dos dois templates
│   └── publicacao.md              como o site é publicado
│
├── materiais/             tudo o que é usado em sala, por encontro
│   ├── gestao/                    Momento 1 · Gestão
│   ├── dia-1/  dia-2/  dia-3/     Momento 2 · Execução
│   └── README.md                  índice dos materiais
│
├── slides/                decks prontos e o que os gera
│   ├── apresentacao-*.key         fonte editável (Keynote)
│   ├── apresentacao-*.pdf         versão distribuída no site
│   └── build/                     scripts de geração + gerar.sh
│
├── scripts/
│   └── validar.py         validação local do repositório
│
├── template-ia-web/       ponto de partida React + TypeScript + Vite
└── template-ia-python/    ponto de partida Python
```

## A regra de organização

**Um encontro, uma pasta.** Tudo o que é usado em um encontro fica junto: guia do instrutor (`README.md`), roteiro slide a slide (`roteiro.md`), entregáveis (`entregaveis/`), atividades, demonstrações e fontes (`referencias.md`). Quem vai dar o Dia 2 abre uma pasta só.

É a mesma regra que o Dia 1 ensina para código — organizar por funcionalidade, não por tipo de arquivo. Um `roteiros/` na raiz separaria o roteiro do material que ele conduz.

**Documentação do repositório fica em `docs/`.** Não se mistura com o material de sala: quem prepara uma aula e quem mantém o repositório procuram coisas diferentes.

**A raiz só tem o que precisa estar na raiz.** O docsify exige `index.html`, `README.md`, `_sidebar.md`, `_headers` e `_404.md` no topo. `AGENTS.md` e `CLAUDE.md` são convenção de ferramenta. `downloads.md` é página de primeiro nível do site.

## Onde mexer

| Se você quer... | Vá em |
| --- | --- |
| mudar o conteúdo de um encontro | `materiais/<encontro>/` — guia, roteiro e entregáveis |
| mudar um slide | `slides/build/build*.js` e regenere; nunca o `.key` direto |
| mudar o plano geral, duração ou objetivos | [`docs/plano.md`](plano.md) |
| adicionar um entregável | `materiais/<encontro>/entregaveis/`, e liste em `downloads.md` e `_sidebar.md` |
| mudar o menu do site | [`_sidebar.md`](../_sidebar.md) |
| mudar como o site é publicado | [`docs/publicacao.md`](publicacao.md) |
| mudar os templates de projeto | `template-ia-web/` ou `template-ia-python/` |
| entender por que algo é assim | [`docs/decisoes.md`](decisoes.md) |

## O que é gerado e o que é fonte

| Fonte (edite) | Gerado (não edite) |
| --- | --- |
| `slides/build/build*.js` | `slides/apresentacao-*.key` e `.pdf` |
| os `.md` do repositório | as páginas do site |
| `materiais/dia-1/02-taskweather-organizado/src/` | `dist/` dos projetos de exemplo |

Arquivos gerados são versionados quando são o produto distribuído — é o caso dos decks. Intermediários (`.pptx`, pastas `qa*/`) não entram no versionamento.
