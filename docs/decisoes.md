# Decisões registradas

Por que o repositório é assim. Registro curto, em ordem cronológica — o objetivo é que ninguém precise reabrir uma discussão já encerrada, nem repetir um caminho já testado.

Formato: **decisão · contexto · consequência**. Uma decisão revista não é apagada: ganha uma linha de revisão.

---

## 1. Os slides são gerados por script, não editados no Keynote

**Contexto.** Seis decks precisam da mesma identidade visual, e qualquer alteração precisa ser rastreável. Edição manual no Keynote não sobrevive a uma regeneração e não aparece em diff.

**Consequência.** Todo deck tem um `build*.js` em `slides/build/`. Editar o `.key` funciona, mas se perde — quem editar precisa replicar no script. O caminho passa por PPTX porque a automação do Keynote não cria animações: o deck é montado em PPTX, as animações são injetadas no OOXML e o Keynote as importa.

## 2. O site é docsify, sem etapa de build

**Contexto.** O material é markdown e muda com frequência. Um gerador estático exigiria build a cada alteração e uma segunda cópia do conteúdo.

**Consequência.** O site lê os próprios `.md` do repositório. Não há `dist/` a publicar, e um push já atualiza a página. Em troca, os links precisam funcionar tanto no GitHub quanto no site — o validador confere os dois casos.

## 3. A formação tem dois momentos, e a gestão vem primeiro

**Contexto.** Os três dias formavam quem implementa, mas nada preparava quem aprova escopo e aceita entregas. Sem esse acordo, as duplas produziriam artefatos que ninguém combinou de usar.

**Consequência.** `materiais/gestao/` (Momento 1, 1 hora) precede os três dias (Momento 2). O entregável do Momento 1 é o *combinado da área*, e ele é pré-requisito declarado no roteiro do Dia 1.

## 4. Material organizado por encontro, não por tipo de arquivo

**Contexto.** Os roteiros ficavam na raiz, separados do material que conduzem. Quem preparava um dia abria três lugares.

**Consequência.** Cada encontro é uma pasta com guia, roteiro, entregáveis e referências. É a mesma regra de modularização que o Dia 1 ensina para código. `roteiro-dia-1.md` virou `materiais/dia-1/roteiro.md`.

## 5. Documentação do repositório separada do material de sala

**Contexto.** `plano.md`, `PUBLICACAO.md` e o planejamento dos templates estavam na raiz, misturados às páginas do site e aos decks.

**Consequência.** Tudo em `docs/`. Quem prepara uma aula procura em `materiais/`; quem mantém o repositório procura em `docs/`.

## 6. Os decks moram em `slides/`, junto com o que os gera

**Contexto.** Doze arquivos `.key`/`.pdf` na raiz, e os scripts que os produziam três níveis abaixo, em `materiais/decks-build/`.

**Consequência.** `slides/` tem os decks publicados e `slides/build/` os scripts. Os links do site passaram a apontar para `/slides/apresentacao-*.pdf`.

## 7. `template-ia-web/` e `template-ia-python/` continuam na raiz

**Contexto.** Agrupá-los em `templates/` deixaria a raiz mais limpa.

**Consequência.** Não foi feito: os dois nomes são citados literalmente nos materiais do Dia 2 e do Dia 3 e nos prompts que a turma copia. O ganho seria cosmético e o custo, referências desencontradas em sala. Fica registrado como **não escopo**, para não ser reproposto.

## 8. O repositório valida a si mesmo

**Contexto.** O material cobra validação antes da entrega. Não havia como verificar o próprio repositório: links quebravam a cada reorganização e só apareciam no site.

**Consequência.** `python3 scripts/validar.py` confere links, estrutura dos encontros, pares script/deck e binário grande fora de lugar. É o `npm run validate` deste repositório, e faz parte da [definição de concluído](definicao-de-concluido.md).

## 9. "Líderes de área", não "gerentes"

**Contexto.** O material usava "gerência" e "gerentes"; o termo adotado na área é "líderes".

**Consequência.** Decks, roteiros e documentação usam "líderes de área". "Gestão" permanece onde o sentido é a função, não o cargo — inclusive no nome do Momento 1 e da pasta `materiais/gestao/`. Os arquivos `apresentacao-gerencia.*` viraram `apresentacao-lideres.*`.

## 10. A análise crítica do desenho saiu do repositório

**Contexto.** `analise-critica.md` avaliava o desenho dos três dias e listava correções. Todas já estavam aplicadas nos roteiros e nos materiais, e o documento passou a descrever um desenho anterior à divisão em dois momentos.

**Consequência.** Removido. O que ele recomendava e continua valendo virou prática: resultado observável ao fim de cada encontro, transição entre dias por artefato, e a retrospectiva 2–3 semanas depois, hoje na revisão do combinado da área. O histórico permanece no git.
