# Atividade — reescrever um prompt

**Formato:** duplas · **Tempo:** 7 minutos para escrever, 6 para discutir

---

## O pedido que vocês receberam

> "Adicione clima no sistema e deixe bonito."

---

## Reescrevam preenchendo os campos

**Contexto** — onde estamos, o que o agente deve ler antes?

```


```

**Objetivo** — um único resultado esperado.

```


```

**Escopo** — o que deve ser alterado?

```


```

**Fora do escopo** — o que **não** deve ser alterado?

```


```

**Restrições** — bibliotecas, limites, o que não tocar.

```


```

**Critérios de aceite** — observáveis, mínimo dois.

```
-
-
-
-
```

**Processo** — em que ordem o agente deve trabalhar?

```


```

**Validação** — quais comandos executar?

```


```

---

## Antes de ler em voz alta, confiram

- [ ] O "fora do escopo" não está vazio.
- [ ] Nenhum critério usa "bonito", "moderno", "rápido" ou "fácil".
- [ ] Existe um critério para quando a consulta **falha**.
- [ ] Vocês pediram plano antes da implementação.
- [ ] O objetivo é uma coisa só.

E a pergunta que decide:

> **"Se cinco pessoas recebessem este prompt, entregariam a mesma coisa?"**

---

## E o "deixe bonito"?

Esse é o ponto da atividade. "Bonito" não é critério — não dá para responder sim ou não sem opinião.

Três saídas legítimas:

1. **Traduzir em critério observável:** "seguir os componentes e estilos que já existem no projeto, sem introduzir um novo padrão visual".
2. **Tirar do escopo:** "não alterar o design global" — e tratar aparência como tarefa separada, depois.
3. **Perguntar antes:** se aparência importa de verdade, isso precisa de referência visual, não de adjetivo.

O que **não** funciona é deixar como está. "Bonito" delega ao agente uma decisão de produto, e ele vai tomá-la — provavelmente instalando uma biblioteca de interface que ninguém pediu.

---

## Versão de referência

```text
Contexto:
Aplicação React organizada por features.
Leia AGENTS.md e docs/architecture.md.

Objetivo:
Adicionar consulta de clima atual por cidade.

Escopo:
Campo de cidade, ação de busca, temperatura,
condição atual e estados de carregamento e erro.

Fora do escopo:
Previsão semanal, geolocalização automática,
favoritos e alteração do design global.

Restrições:
Usar o serviço já definido no projeto.
Não instalar dependências.
Não alterar login ou tarefas.

Critérios:
Cidade válida mostra dados.
Busca exibe carregamento.
Falha mostra mensagem.
Nova busca pode ser realizada.

Processo:
Apresente plano antes de alterar arquivos.

Validação:
Execute testes, lint e build.
```

Repare: o "deixe bonito" virou **"não alterar o design global"** — de pedido vago a limite explícito.

---

## Onde ver o resultado

Este prompt é o que gerou a feature de clima do exemplo organizado do Dia 1:

- [`features/weather/services/weatherApi.ts`](../../dia-1/02-taskweather-organizado/src/features/weather/services/weatherApi.ts) — a chamada externa isolada, com as duas mensagens de erro
- [`features/weather/components/WeatherPanel.tsx`](../../dia-1/02-taskweather-organizado/src/features/weather/components/WeatherPanel.tsx) — os quatro estados de tela: inicial, carregando, sucesso e erro

Os quatro estados existem porque **os critérios pediram**. Sem o critério "falha mostra mensagem", a tela provavelmente teria ficado em branco quando a rede caísse — que é exatamente o que acontece no exemplo desorganizado.

> Este será o padrão usado na prática do Dia 3.
