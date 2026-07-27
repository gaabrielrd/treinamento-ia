# Pull request de exemplo

Use na demonstração dos Slides 8 e 9 e do Bloco Opcional B. Segue o modelo do template (`.github/pull_request_template.md`).

Este PR é o par da [issue de exemplo](issue-exemplo.md): mesma funcionalidade, agora entregue.

---

**Título:**

```text
feat: adiciona consulta de clima atual por cidade
```

**Branch:** `feat/weather-widget` → `main`
**Fecha:** #12

---

## O que mudou

Novo painel de clima na tela principal: campo de cidade, ação de busca e exibição da temperatura atual e do vento.

Arquivos adicionados, todos dentro da nova feature:

```
src/features/weather/
├── components/WeatherPanel.tsx        # a tela
├── components/WeatherPanel.module.css
├── model/weather.ts                   # tipo e descrição da temperatura
├── services/weatherApi.ts             # a chamada externa, isolada aqui
├── tests/WeatherPanel.test.tsx
├── tests/weatherApi.test.ts
└── index.ts                           # interface pública da feature
```

Arquivos alterados: `src/app/App.tsx` (monta o painel), `docs/architecture.md` (registra a decisão da API) e `README.md` (nota sobre dados externos).

**Nenhum arquivo de `features/auth` ou `features/todos` foi tocado.**

## Por quê

Quem usa o TaskWeather saía da aplicação para consultar o clima antes de organizar as tarefas do dia. Era o motivo de juntar as duas coisas em uma página. Detalhes na issue #12.

## Como testar

1. `npm install`
2. `npm run validate`
3. `npm run dev` e entrar com `ana@empresa.com`
4. Informar "Curitiba" e clicar em **Consultar** → deve mostrar a temperatura e o vento
5. Informar "cidade-que-nao-existe" → deve mostrar mensagem de erro
6. Desligar o wi-fi e consultar de novo → deve mostrar mensagem de erro, sem tela em branco
7. Criar uma tarefa e recarregar a página → tarefas e login devem continuar funcionando

## Evidência das validações

```
Test Files  9 passed (9)
     Tests  35 passed (35)

eslint . — sem apontamentos
tsc -b   — sem erros
vite build — ✓ built in 85ms
```

## Limitações conhecidas

- Sem internet, a consulta falha e mostra a mensagem de erro — é o comportamento esperado, não há dados em cache.
- A API devolve o nome da cidade como o serviço a conhece, que pode diferir do que foi digitado.
- Só clima atual. Previsão de vários dias segue fora do escopo (`docs/prd.md`).

## Checklist

- [x] Critérios de aceite atendidos
- [x] Testes adicionados ou atualizados
- [x] `npm run validate` passa
- [x] Documentação atualizada (se aplicável)
- [x] Sem segredos no código
- [x] Diff revisado

---

## Como usar isso na demonstração

Duas perguntas que valem fazer para a turma, projetando o PR:

**1. "O que vocês revisariam primeiro aqui?"**

A resposta esperada não é o código. É: **os critérios de aceite e a lista de arquivos alterados.** Se o PR diz que não toca em `auth` e a lista mostra um arquivo de `auth`, algo saiu do escopo — e isso se descobre sem ler uma linha de código.

**2. "O que estaria faltando se não houvesse a seção de evidência?"**

Sem ela, "os testes passam" é só uma afirmação. Com ela, é uma verificação. É a mesma diferença entre o agente dizer "concluído" e você comprovar.

E um ponto que costuma passar batido: **este PR tem 7 arquivos novos e 3 alterados.** Dá para revisar em cinco minutos. Um PR com a aplicação inteira não é revisado — é aprovado no escuro. É por isso que dividimos a entrega em tarefas.
