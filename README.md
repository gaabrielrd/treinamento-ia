# Formação Prática: Desenvolvimento de Aplicações com Agentes de Código

Bem-vindo ao repositório oficial da **Formação Prática de Desenvolvimento com Agentes de Código**. 
Este material foi desenhado para capacitar pessoas não desenvolvedoras a utilizar agentes de Inteligência Artificial de maneira organizada, previsível e segura, focando em boas práticas de estruturação de software e processos bem definidos.

## 🎯 Objetivo da Formação

O foco deste treinamento não é aprofundar conceitos complexos de programação, mas sim ensinar um processo consistente para trabalhar com IA. A formação estabelece diretrizes para que as aplicações criadas:
- Possuam escopo, requisitos e critérios de aceite claramente definidos;
- Sigam uma estrutura de pastas organizada e modular;
- Utilizem controle de versão (GitHub) como memória do projeto;
- Estejam acompanhadas de documentação clara;
- Possam ser facilmente entendidas e continuadas por outras pessoas;
- Sejam testadas localmente antes de serem consideradas concluídas.

## 🌐 Site do treinamento

Os materiais, entregáveis e referências ficam disponíveis em uma página pública, atualizada automaticamente a cada push:

- **Página inicial** — visão geral dos três dias
- **[Baixar os materiais](downloads.md)** — slides em PDF, entregáveis e referências por dia

O site é gerado por [docsify](https://docsify.js.org), sem etapa de build: ele lê os próprios `.md` deste repositório. Configuração e publicação em [PUBLICACAO.md](PUBLICACAO.md).

Para ver localmente:

```bash
python3 -m http.server 8080
```

## 📂 Estrutura do Repositório

O repositório está organizado para fornecer o plano de aula completo, roteiros para o instrutor, apresentações em slides e templates práticos de desenvolvimento.

### Materiais do Curso

- [**Plano Geral (`plano.md`)**](plano.md): Visão geral da formação, duração, público-alvo e o conteúdo programático completo dos 3 dias.
- **Roteiros Diários**: Guias detalhados (slide a slide) para o instrutor conduzir as aulas:
  - [`roteiro-dia-1.md`](roteiro-dia-1.md): Processo de software, organização do projeto e qualidade local (antes do código).
  - [`roteiro-dia-2.md`](roteiro-dia-2.md): Como orientar agentes, prompts eficientes, skills e servidores MCP.
  - [`roteiro-dia-3.md`](roteiro-dia-3.md): Roteiro de construção prática da aplicação **TaskWeather**.
- **Apresentações (`.key` e `.pdf`)**: Slides de apoio visual correspondentes aos 3 dias de treinamento.

### Templates Iniciais para Projetos com IA

O curso fornece templates de repositório já estruturados para obter o melhor resultado ao trabalhar com agentes de código. Eles contêm instruções predefinidas (como `AGENTS.md` e `CLAUDE.md`) e ferramentas recomendadas prontas para uso:

- [**`template-ia-web/`**](template-ia-web/): Template de frontend moderno (Vite + React/TypeScript).
- [**`template-ia-python/`**](template-ia-python/): Template focado em projetos Python, configurado com UV, linting e testes.
- [`planejamento-repositorio-template.md`](planejamento-repositorio-template.md): Documento que detalha as decisões tomadas para criar a estrutura dos templates.

## 🚀 Como Utilizar Este Repositório

- **Para Instrutores**: Acompanhe o arquivo `plano.md` e oriente-se pelos roteiros de cada dia para conduzir as sessões, aproveitando as apresentações incluídas.
- **Para Participantes**: Os conceitos e processos aprendidos na parte teórica devem ser aplicados no Dia 3 na prática através da instanciação de um dos templates disponíveis (principalmente o Web).

## 🧠 Princípio Central da Formação

> *"Primeiro definimos o problema e o processo. Depois pedimos a implementação."*
