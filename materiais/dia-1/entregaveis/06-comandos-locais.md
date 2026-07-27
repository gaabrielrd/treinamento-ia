# Comandos locais

Você não precisa entender o funcionamento interno de cada ferramenta. Precisa executar o comando, reconhecer uma falha e não considerar a tarefa concluída enquanto houver erro.

## Os comandos e a pergunta que cada um responde

| Comando             | Pergunta que responde                          | Quanto demora  |
| ------------------- | ---------------------------------------------- | -------------- |
| `npm install`       | O projeto tem tudo o que precisa para rodar?   | 1ª vez: minutos |
| `npm run dev`       | A aplicação abre?                              | segundos       |
| `npm run test`      | Os comportamentos testados continuam funcionando? | segundos    |
| `npm run lint`      | Existem problemas básicos de padrão no código? | segundos       |
| `npm run typecheck` | As peças do código se encaixam?                | segundos       |
| `npm run build`     | O projeto consegue gerar uma versão final?     | segundos       |
| `npm run validate`  | Tudo acima, de uma vez.                        | menos de 1 min |

## Como usar

Abra o terminal na pasta do projeto. Na primeira vez:

```bash
npm install
```

Para trabalhar:

```bash
npm run dev
```

O terminal mostra um endereço (algo como `http://localhost:5173`). Abra no navegador. Deixe rodando: ele recarrega sozinho quando algo muda. Para parar, `Ctrl` + `C`.

Antes de considerar qualquer coisa pronta:

```bash
npm run validate
```

## Como ler o resultado

**Passou:**

```
Test Files  9 passed (9)
     Tests  35 passed (35)
```

**Falhou:**

```
× recusa título vazio
AssertionError: expected [Function] to throw an error
 Test Files  2 failed | 7 passed (9)
      Tests  2 failed | 33 passed (35)
```

O que importa em uma falha:

1. **quantos** falharam (`2 failed`);
2. **o nome** do que falhou (`recusa título vazio`) — ele diz qual comportamento quebrou;
3. **o arquivo e a linha** que o terminal aponta logo abaixo.

Você não precisa consertar. Precisa levar isso ao agente:

```text
O comando npm run test falhou com a saída abaixo.
Analise a causa, explique o que aconteceu e corrija.
Não desative nem apague testes para fazer passar.

[cole a saída aqui]
```

## Erros comuns e o que fazer

| O que aparece                            | O que significa                       | O que fazer                                     |
| ---------------------------------------- | ------------------------------------- | ----------------------------------------------- |
| `Missing script: "test"`                 | o projeto não tem esse comando         | o projeto não está preparado para validar        |
| `command not found: npm`                 | Node.js não está instalado             | instalar o Node na versão do projeto            |
| `Port 5173 is in use`                    | já existe uma aplicação rodando        | usar o endereço que o terminal indicar (5174)    |
| `Cannot find module`                     | falta instalar dependências            | rodar `npm install`                             |
| `ENOENT: no such file or directory`       | você está na pasta errada              | conferir em que pasta o terminal está            |
| a tela abre em branco                    | erro em tempo de execução               | abrir o console do navegador (F12) e ler o erro  |

## A regra

> Enquanto qualquer comando estiver falhando, a tarefa não está concluída — mesmo que a tela pareça funcionar.
