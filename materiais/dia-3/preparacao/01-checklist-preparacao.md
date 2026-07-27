# Checklist de preparação — Dia 3

O que preparar antes da prática, e o que já está pronto para usar.

## Já está pronto

- **API meteorológica** — Open-Meteo, sem chave de acesso. Endpoints e um detalhe importante da resposta [mais abaixo](#a-api-meteorológica).
- **Forma de entrada da aplicação** — a pessoa informa **apenas o e-mail**, sem senha. O e-mail também separa os dados de cada usuário no `localStorage`.
- **Prompts para copiar** — [`../prompts/prompts-para-copiar.md`](../prompts/prompts-para-copiar.md).
- **Erros comuns e contingências** — [`03-erros-comuns-e-contingencias.md`](03-erros-comuns-e-contingencias.md).
- **Solução de referência** — [`dia-1/02-taskweather-organizado`](../../dia-1/02-taskweather-organizado), a aplicação completa com as três features e 47 testes passando.

## Antes da sessão

- [ ] **Validar o template em uma máquina limpa** — de preferência não a sua. Crie um repositório a partir do template, rode `npm install`, `npm run dev` e `npm run validate`. É o item que mais derruba workshop.
- [ ] **Criar o repositório-modelo e as branches de checkpoint** — passo a passo em [`02-repositorio-e-checkpoints.md`](02-repositorio-e-checkpoints.md).
- [ ] **Preparar um arquivo compactado do projeto inicial** — contingência para quem não conseguir criar o repositório. Ver o mesmo arquivo.
- [ ] **Confirmar acesso de todos ao GitHub** e permissão de criar repositório a partir do template. Peça para conferirem **um dia antes**, não na hora.
- [ ] **Confirmar a versão do Node** de cada participante: `node -v` contra o `.nvmrc` do template (hoje: **22**).
- [ ] **Confirmar a internet da sala** — a API de clima depende dela. Se a rede for instável, avise que a Etapa 5 tem contingência com resposta fake.
- [ ] **Confirmar que cada grupo tem um agente instalado e autenticado.**

## Um dia antes — mensagem para os participantes

Copie e envie:

> Para a prática de amanhã, confirme hoje que na sua máquina:
>
> 1. `node -v` responde com a versão 22;
> 2. você consegue abrir o GitHub e criar um repositório;
> 3. seu agente de código abre e responde em uma pasta qualquer.
>
> Se algum dos três falhar, me avise **hoje**. Amanhã não teremos tempo de resolver ambiente.

## A API meteorológica

Verificada e funcionando, sem chave de acesso. São duas chamadas em sequência:

**1. Nome da cidade → coordenadas**

```
https://geocoding-api.open-meteo.com/v1/search?name=Curitiba&count=1&language=pt&format=json
```

**2. Coordenadas → clima atual**

```
https://api.open-meteo.com/v1/forecast?latitude=-25.42778&longitude=-49.27306&current=temperature_2m,wind_speed_10m
```

Devolve `current.temperature_2m` (°C), `current.wind_speed_10m` (km/h) e `current.time`.

**Detalhe que vale guardar:** quando a cidade não existe, a resposta **omite o campo `results`** em vez de devolver uma lista vazia. Grupos que trataram só "lista vazia" podem quebrar no caso de erro — é um bom achado para a revisão da Etapa 6.

Para conferir na hora, antes de começar:

```bash
curl -s "https://geocoding-api.open-meteo.com/v1/search?name=Curitiba&count=1&language=pt&format=json"
```

## Como funciona a entrada da aplicação

A pessoa informa **apenas o e-mail** — não há senha em nenhum momento. O e-mail cumpre dois papéis:

1. identifica a sessão;
2. compõe a chave que separa as tarefas de cada usuário no `localStorage`.

⚠️ **Isto não é autenticação.** Qualquer pessoa pode digitar qualquer e-mail e entrar. A separação evita confusão entre pessoas que compartilham o navegador; ela não protege segredo. Reforce isso em voz alta na abertura — é um ponto de segurança que a turma precisa entender, não uma limitação a esconder.

Use `demo@empresa.com` como exemplo, ou qualquer e-mail válido. Usar **dois** e-mails diferentes durante a prática é justamente como se demonstra a separação de dados.

### Se um grupo comparar com a solução de referência

A referência já tem **remover tarefa**, que na prática é opcional. É uma boa oportunidade para lembrar que aquilo estava fora do escopo obrigatório — e que escopo que cresce por decisão é diferente de escopo que cresce por acidente.

## No dia, antes de abrir a sala

- [ ] Terminal aberto na pasta do repositório-modelo
- [ ] [Prompts](../prompts/prompts-para-copiar.md) abertos em uma aba
- [ ] [Checkpoints](../entregaveis/checkpoints-e-criterios.md) abertos em outra
- [ ] [Erros comuns](03-erros-comuns-e-contingencias.md) abertos em uma terceira
- [ ] Solução de referência instalada e validada, para consulta rápida
- [ ] O arquivo compactado do projeto inicial em algum lugar acessível
- [ ] `curl` da API rodado uma vez, confirmando a rede da sala
