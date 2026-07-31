# Publicação do site

O site que os alunos acessam é gerado por [docsify](https://docsify.js.org): ele lê os arquivos `.md` do repositório **em tempo de execução**, no navegador. Não há etapa de build — o que está no repositório é o que aparece no site.

Consequência prática: **todo push na branch `master` atualiza o site**, sem processo intermediário que possa falhar.

## Arquivos do site

| Arquivo | Papel |
| ------- | ----- |
| `index.html` | carrega o docsify e toda a configuração |
| `_sidebar.md` | o menu lateral |
| `README.md` | a página inicial |
| `downloads.md` | a página de materiais para baixar |
| `_404.md` | página de endereço inexistente |
| `_headers` | cabeçalhos HTTP do Cloudflare Pages |

Todo o resto do site são os `.md` que já existiam: roteiros, guias, entregáveis e referências.

## Configurar no Cloudflare Pages

No painel: **Workers & Pages → Create → Pages → Connect to Git**, escolha o repositório `treinamento-ia` e configure:

| Campo | Valor |
| ----- | ----- |
| Production branch | `master` |
| Framework preset | **None** |
| Build command | *(deixe vazio)* |
| Build output directory | `/` |
| Root directory | *(deixe vazio)* |

Salve e faça o deploy. É isso — não há dependências para instalar nem comando para rodar.

> **Build command vazio é intencional.** O docsify não tem etapa de build, e é justamente isso que torna o deploy à prova de falha: o Cloudflare só copia arquivos estáticos.

Cada push em `master` dispara um deploy novo automaticamente. Pushes em outras branches geram *preview deployments* com URL própria — útil para conferir uma alteração antes de publicar.

## Acesso

O site é **público**: qualquer pessoa com o endereço consegue abrir.

Se um dia isso precisar mudar, o caminho mais simples é o **Cloudflare Access**, nativo e gratuito até 50 usuários no plano Zero Trust: em **Zero Trust → Access → Applications → Add an application → Self-hosted**, aponte para o domínio do site e crie uma política `Allow` com a regra **Emails ending in** para o domínio da empresa. Com o método **One-time PIN** ativado, a pessoa recebe um código de 6 dígitos por e-mail — não há senha para distribuir.

Login Microsoft (Entra ID) usa a mesma tela, mas exige um *app registration* no Azure, normalmente feito pelo TI.

> A proteção de acesso que aparece nas configurações do próprio Pages vale apenas para os *preview deployments* — ela não protege o site de produção.

## Domínio

O Cloudflare entrega uma URL `*.pages.dev`. Para usar um domínio da empresa: **Custom domains → Set up a custom domain**, e aponte o CNAME conforme as instruções da tela.

## Ver o site localmente antes de publicar

Qualquer servidor estático serve. Sem instalar nada:

```bash
python3 -m http.server 8080
```

Abra `http://localhost:8080`. Com Node:

```bash
npx serve .
```

> Abrir o `index.html` com duplo clique **não funciona**: o docsify busca os `.md` por HTTP, e o protocolo `file://` bloqueia isso. Precisa ser por um servidor.

## Ao adicionar um material novo

1. Crie o `.md` na pasta do dia correspondente.
2. Acrescente uma linha em `_sidebar.md` apontando para ele.
3. Se for material para o aluno levar, acrescente também em `downloads.md`.
4. Commit e push.

**Os links do `_sidebar.md` precisam começar com `/`.** Caminhos relativos ali quebram quando o aluno está numa página profunda, porque o docsify os resolve a partir da rota atual. Dentro dos documentos, links relativos funcionam normalmente — a configuração `relativePath: true` cuida disso.

## O que fica público

O Cloudflare Pages serve o repositório inteiro como arquivos estáticos. Além das páginas, ficam acessíveis os PDFs, os `.key` e o código dos projetos de exemplo — o que é desejável, já que é material de treinamento.

Duas observações:

- **Não coloque nada sensível neste repositório.** A proteção de acesso controla quem abre o site, mas não separa conteúdo público de privado: quem entra vê tudo. E o repositório em si, se for público no GitHub, continua acessível independentemente do site.
- Os projetos de exemplo têm um `index.html` próprio (do Vite). Abrir `/materiais/dia-1/02-taskweather-organizado/` direto no navegador mostra uma página quebrada, porque aquele HTML espera o servidor de desenvolvimento. Não há link para lá no site; para rodar os projetos, clone o repositório.

## Alternativas consideradas

| Ferramenta | Por que não |
| ---------- | ----------- |
| MkDocs Material | exige Python e build a cada deploy; mais bonito, mais peças para quebrar |
| VitePress / Docusaurus | exigem Node, `node_modules` e build; ganho pequeno para um site de documentos |
| GitHub Pages + Jekyll | build no GitHub, e o Jekyll exigiria renomear/ajustar arquivos |

O docsify ganhou por uma razão específica deste caso: **os materiais já são `.md` bem estruturados**, e ele os publica sem transformar nada. Nenhum arquivo precisou ser movido ou reescrito para o site existir.
