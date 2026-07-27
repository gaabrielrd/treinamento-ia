# Repositório-modelo e branches de checkpoint

O roteiro (§4) pede *"criar tags ou branches de checkpoint"* e *"ter uma branch pronta após cada etapa caso algum grupo fique bloqueado"*.

Isso precisa ser feito **na sua conta do GitHub**, com o seu acesso — não dá para preparar dentro deste repositório de materiais. Abaixo está o passo a passo.

> **Por que branches e não pastas:** o grupo bloqueado precisa continuar de onde parou, sem perder o histórico. `git checkout checkpoint/todos` resolve em cinco segundos. Copiar pasta, não.

---

## Passo 1 — Criar o repositório-modelo

No GitHub, crie um repositório a partir do template da área (botão **Use this template**).

Nome sugerido: `taskweather-referencia`.

```bash
git clone git@github.com:SUA-ORG/taskweather-referencia.git
cd taskweather-referencia
npm install
npm run setup -- --name="taskweather" --description="Tarefas pessoais e clima atual" --remove-example --init-docs
npm run validate
```

Se `npm run validate` passar, o ponto de partida está saudável. **Não siga adiante se ele falhar** — é o mesmo erro que os grupos encontrariam.

Commit do ponto de partida:

```bash
git add -A
git commit -m "chore: prepara projeto a partir do template"
git push
```

---

## Passo 2 — Criar a branch de partida

É a que os grupos bloqueados na Etapa 1 vão usar:

```bash
git branch checkpoint/inicio
git push -u origin checkpoint/inicio
```

---

## Passo 3 — Construir cada incremento e marcar o checkpoint

Faça a prática você mesmo, uma etapa por vez, usando **os mesmos prompts que os grupos vão usar** ([`../prompts/prompts-para-copiar.md`](../prompts/prompts-para-copiar.md)).

Isso tem dois benefícios: você produz as branches de contingência e descobre onde o agente escorrega — que é justamente onde os grupos vão travar.

### Depois da identificação por e-mail (Etapa 3)

```bash
npm run validate
git add -A
git commit -m "feat: adiciona identificação por e-mail"
git branch checkpoint/auth
git push -u origin checkpoint/auth
```

### Depois das tarefas (Etapa 4)

```bash
npm run validate
git add -A
git commit -m "feat: adiciona criação e conclusão de tarefas"
git branch checkpoint/todos
git push -u origin checkpoint/todos
```

### Depois do clima (Etapa 5)

```bash
npm run validate
git add -A
git commit -m "feat: adiciona consulta de clima atual"
git branch checkpoint/weather
git push -u origin checkpoint/weather
```

### No fim

```bash
git checkout main
git merge checkpoint/weather
git push
```

As quatro branches ficam disponíveis:

| Branch                | Contém                            | Para o grupo travado na |
| --------------------- | --------------------------------- | ----------------------- |
| `checkpoint/inicio`   | template preparado, sem features   | Etapa 1 ou 2            |
| `checkpoint/auth`     | + identificação por e-mail        | Etapa 3                 |
| `checkpoint/todos`    | + tarefas                         | Etapa 4                 |
| `checkpoint/weather`  | + clima (aplicação completa)       | Etapa 5                 |

---

## Passo 4 — O arquivo compactado de contingência

Para quem não conseguir criar o repositório (problema de acesso ao GitHub, autenticação, permissão):

```bash
cd ..
zip -r taskweather-inicio.zip taskweather-referencia \
  -x "taskweather-referencia/node_modules/*" \
  -x "taskweather-referencia/.git/*" \
  -x "taskweather-referencia/dist/*"
```

Deixe o `.zip` em um pen drive, no chat da sala ou em uma pasta compartilhada. Quem usar precisa apenas de `npm install` e segue a prática — sem Git, registrando os commits depois se der tempo.

> Sem `node_modules` o arquivo fica pequeno. **Com** ele passa de centenas de megabytes e é inútil para compartilhar.

---

## Como usar durante a sessão

Quando um grupo ficar bloqueado por mais de cinco minutos (regra de contingência do roteiro):

1. **Confira se é erro de ambiente** — Node, dependências, porta. Ver [erros comuns](03-erros-comuns-e-contingencias.md).
2. **Compare com o checkpoint** — o que está diferente do esperado para aquela etapa?
3. **Aplique a correção mínima.**
4. **Se nada resolver em cinco minutos, avance com a branch de referência:**

```bash
git stash                              # guarda o que o grupo fez
git remote add referencia git@github.com:SUA-ORG/taskweather-referencia.git
git fetch referencia
git checkout -b continuando referencia/checkpoint/todos
```

Diga ao grupo, com naturalidade: **o objetivo é praticar o processo, não depurar ambiente.** Ninguém perdeu nada — eles seguem para a próxima etapa, que é onde está o aprendizado.

---

## Se você não tiver tempo de fazer isso

Ordem de prioridade, se o tempo for curto:

1. **Validar o template em uma máquina limpa** — sem isso, o risco é a sessão inteira travar na Etapa 1.
2. **O `.zip` do projeto inicial** — resolve o maior número de problemas com o menor esforço.
3. **`checkpoint/todos`** — é a etapa mais longa (30 min) e a que mais gera grupos atrasados.
4. As outras branches.

Fazer só os itens 1 e 2 já cobre a maioria dos cenários ruins.
