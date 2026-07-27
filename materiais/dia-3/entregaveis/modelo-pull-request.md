# Modelo de pull request — prática do Dia 3

Segue o `.github/pull_request_template.md` do template. A descrição mínima pedida pelo roteiro: **objetivo, funcionalidades, como testar, limitações e evidência das validações.**

Você pode escrever à mão ou pedir ao agente:

```text
Use a skill prepare-pull-request para escrever a descrição do PR
desta sessão, incluindo objetivo, funcionalidades, como testar,
limitações e a evidência das validações.
```

Revise o que ele escrever. Um PR descrito pelo agente e não conferido é a mesma armadilha de sempre.

---

## Modelo para preencher

**Título:**

```text
feat: implementa TaskWeather com identificação por e-mail, tarefas e clima
```

---

## O que mudou

<!-- As três features criadas e onde cada uma ficou. -->

```
src/features/
├── auth/      # identificação por e-mail, sessão e logout
├── todos/     # criar, listar e concluir tarefas
└── weather/   # consulta de clima atual por cidade
```

## Por quê

<!-- O problema que a aplicação resolve, em duas linhas. -->

## Como testar

1. `npm install`
2. `npm run validate`
3. `npm run dev`
4. Entrar informando o e-mail `demo@empresa.com` (não há senha)
5. Criar duas tarefas, concluir uma, recarregar a página
6. Sair, entrar com outro e-mail e confirmar que a lista está vazia
7. Consultar o clima de "Curitiba"
8. Consultar uma cidade inexistente → deve mostrar mensagem de erro
9. Sair

## Evidência das validações

<!-- Cole a saída real dos comandos. Não escreva "passou". -->

```
npm run test      →
npm run lint      →
npm run typecheck →
npm run build     →
```

## Limitações conhecidas

<!-- O que ficou de fora e por quê. -->

- Não há autenticação: o e-mail identifica a sessão e separa os dados, mas não protege nada.
- Dados no navegador: limpar os dados do navegador apaga as tarefas.
- Sem internet, a consulta de clima falha e mostra mensagem de erro.
- Fora do escopo: editar e excluir tarefas, previsão estendida, geolocalização.

## Checklist

- [ ] Critérios de aceite atendidos
- [ ] Testes adicionados ou atualizados
- [ ] `npm run validate` passa
- [ ] Documentação atualizada (se aplicável)
- [ ] Sem segredos no código
- [ ] Diff revisado

---

## O que faz a diferença neste PR

Três coisas, e vale conferir antes de abrir:

**1. A evidência é a saída real dos comandos**, não a frase "os testes passam". A diferença entre uma afirmação e uma verificação é exatamente o assunto do Dia 1.

**2. As limitações estão escritas.** Um PR que não lista limitação nenhuma está incompleto ou não foi revisado — todo software tem limite, e escrever o limite é o que impede alguém de descobrir na demonstração.

**3. A lista de arquivos permite revisar sem ler código.** Se o PR diz que criou três features e o diff mostra alteração em `shared/`, isso é uma pergunta — não necessariamente um erro, mas uma pergunta.

---

## Exemplo completo

Um PR real, preenchido, está em [`dia-1/github-exemplos/pull-request-exemplo.md`](../../dia-1/github-exemplos/pull-request-exemplo.md) — é o PR da feature de clima, com a evidência e as limitações preenchidas. Use como referência de nível de detalhe.
