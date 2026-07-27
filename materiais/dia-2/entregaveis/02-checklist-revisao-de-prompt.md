# Checklist — revisão de prompt

Passe os olhos nisto **antes** de enviar. Leva 30 segundos e economiza uma rodada inteira de retrabalho.

## Os oito blocos

- [ ] **Contexto** — disse onde estamos e quais documentos ler?
- [ ] **Objetivo** — é **um** resultado, não três?
- [ ] **Escopo** — está claro o que deve mudar?
- [ ] **Fora do escopo** — está claro o que **não** deve mudar?
- [ ] **Restrições** — disse o que não instalar e o que não tocar?
- [ ] **Critérios** — são observáveis? Tem no mínimo dois?
- [ ] **Processo** — pediu análise e plano antes da implementação?
- [ ] **Validação** — disse quais comandos executar?

## Os seis riscos do Slide 3

Confira se o seu prompt não caiu em nenhum deles:

| Risco                      | Como aparece no prompt                        | Correção                                          |
| -------------------------- | --------------------------------------------- | ------------------------------------------------- |
| **objetivo vago**          | "melhore", "otimize", "deixe bonito"          | diga qual resultado observável você espera         |
| **escopo aberto**          | "crie tudo o que for necessário"              | liste o que entra e o que não entra                |
| **contexto insuficiente**  | nenhuma menção a arquivos ou documentos       | aponte os documentos a ler                         |
| **muitas tarefas juntas**  | "corrija todos os problemas"                  | uma tarefa por prompt                              |
| **permissão excessiva**    | "instale o que precisar"                      | "não instale dependências"                         |
| **ausência de validação**  | "está pronto?"                                | "execute os comandos e me mostre a saída"          |

## Palavras que sinalizam prompt incompleto

Se alguma destas aparece no seu prompt, provavelmente falta um critério observável:

> melhore · otimize · moderno · bonito · limpo · profissional · robusto · escalável · seguro · rápido · fácil · intuitivo · completo · tudo · qualquer · o necessário · adequado

Nenhuma delas é verificável. Troque por um critério que dá para clicar e conferir.

## O teste final

Antes de enviar, pergunte-se:

> **"Se eu desse este prompt para cinco pessoas diferentes, elas entregariam a mesma coisa?"**

Se a resposta for não, o agente também não vai entregar o que você imaginou. E as diferenças vão aparecer exatamente onde você não definiu nada.

## Depois da resposta

O prompt não termina no envio. Ao receber o resultado:

- [ ] O agente listou os arquivos que alterou?
- [ ] Ele mudou algo que estava no "fora do escopo"?
- [ ] Ele instalou alguma dependência?
- [ ] Ele executou as validações, ou apenas disse que estava tudo certo?
- [ ] Ele mostrou a **saída** dos comandos, ou só afirmou que passaram?
- [ ] Cada critério de aceite foi verificado explicitamente?
- [ ] Você abriu a aplicação e conferiu, em vez de acreditar na resposta?

> O agente dizer "concluído" não encerra a tarefa. Ver o checklist de definição de concluído do Dia 1.
