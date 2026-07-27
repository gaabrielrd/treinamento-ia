# Issue de exemplo

Use na demonstração do Slide 8 e do Bloco Opcional B. O conteúdo abaixo segue o modelo de issue do template (`.github/ISSUE_TEMPLATE/feature.yml`): problema, solução proposta, critérios de aceite e contexto.

Para demonstrar ao vivo, crie a issue no repositório de demonstração e projete a tela. Se preferir não criar nada, projete este arquivo — o conteúdo é o mesmo.

---

**Título:**

```text
Adicionar consulta de clima atual por cidade
```

**Labels:** `feature`

---

## Problema ou necessidade

Hoje a pessoa que usa o TaskWeather precisa sair da aplicação e abrir outro site para saber se vai chover antes de decidir a ordem das tarefas do dia. Isso quebra o fluxo de trabalho e foi justamente o motivo de juntar as duas coisas em uma página.

## Solução proposta

Um painel na mesma tela das tarefas, com um campo para informar a cidade e uma ação de busca, exibindo a temperatura atual e a velocidade do vento.

A consulta deve usar a API pública Open-Meteo, que não exige chave de acesso, e ficar isolada em um serviço dentro de `src/features/weather` — nenhuma chamada externa direto no componente.

## Critérios de aceite

- [ ] informar uma cidade válida mostra a temperatura atual e o vento
- [ ] cidade inexistente mostra mensagem de erro compreensível
- [ ] falha na consulta (sem internet, serviço fora do ar) mostra mensagem de erro, sem tela em branco
- [ ] enquanto a consulta acontece, a tela indica que está carregando
- [ ] é possível consultar outra cidade em seguida
- [ ] login e tarefas continuam funcionando

## Contexto adicional

- Escopo e não escopo do produto: `docs/prd.md`
- Regras de organização e dependências: `docs/architecture.md` e `AGENTS.md`
- **Fora desta issue:** previsão de vários dias, geolocalização automática, favoritos, histórico de consultas e alteração do design global.
- Nenhuma credencial deve ser adicionada ao projeto: a API escolhida não usa chave.

---

## Por que esta issue funciona como exemplo

Vale apontar isso na demonstração:

| O que ela tem                           | Por que importa                                                   |
| --------------------------------------- | ----------------------------------------------------------------- |
| o problema antes da solução             | quem ler entende **por que** isso existe                          |
| critérios observáveis, em caixas         | dá para marcar uma por uma na revisão                             |
| um critério para o caso de erro          | é onde a maioria dos defeitos de demonstração aparece             |
| o não escopo escrito                    | o agente (e a pessoa) sabem onde parar                            |
| link para a documentação                | não repete regras que já moram no repositório                     |
| uma decisão técnica justificada          | "sem chave de acesso" explica a escolha da API                    |

Contraexemplo para mostrar em seguida — a mesma demanda como ela normalmente chega:

> "colocar o clima no sistema"
