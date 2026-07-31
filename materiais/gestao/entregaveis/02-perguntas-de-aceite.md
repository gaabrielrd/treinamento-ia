# Perguntas de aceite

Para usar quando alguém da equipe disser "está pronto". Cinco perguntas; nenhuma exige conhecimento técnico.

## As cinco perguntas

**1. Quais critérios de aceite estavam escritos, e todos foram atendidos?**
Se os critérios não existiam antes da implementação, a entrega não pode ser aceita — só descrita. Combine de escrevê-los antes na próxima.

**2. O que foi validado, e como?**
Espere algo verificável: "as validações automáticas passam", "conferimos com dois usuários diferentes", "seguimos o roteiro de teste anexo". "Testei e funcionou" descreve uma demonstração, não uma validação.

**3. O que ficou de fora?**
Toda entrega deixa algo para depois. Se a resposta é "nada", ou o escopo era pequeno demais, ou algo não foi dito.

**4. Se a pessoa que fez isso sair de férias amanhã, quem continua?**
A resposta certa é o nome de outra pessoa **e** o lugar onde a documentação está. Só o nome não basta.

**5. Alguma decisão de negócio foi tomada durante a implementação?**
Quando o agente encontra ambiguidade, ele decide. Essa pergunta traz de volta para a mesa as decisões que a gestão deveria ter tomado.

## Perguntas específicas quando há dado de pessoa envolvido

Use quando a aplicação guarda qualquer informação de usuário — mesmo interna, mesmo "só um teste":

- **O que acontece se outra pessoa entrar no mesmo navegador?** É exatamente a falha da demonstração do encontro.
- **Onde esse dado fica guardado, e por quanto tempo?**
- **Alguma credencial ficou escrita dentro do projeto?**
- **A integração externa tem permissão só de leitura, ou pode escrever também?**

## O que não vale a pena perguntar

| Pergunta | Por quê |
| -------- | ------- |
| "Qual linguagem/biblioteca vocês usaram?" | A resposta não muda nenhuma decisão sua, e desloca a conversa para o técnico |
| "Quantas linhas de código tem?" | Não mede nada — com agentes, menos ainda |
| "O agente escreveu tudo sozinho?" | Quem responde pela entrega é a pessoa, independentemente de quanto o agente escreveu |
| "Está 100% pronto?" | Convida a uma resposta binária; prefira "quais critérios faltam?" |

## Como usar isto no dia a dia

Não é um formulário para preencher a cada entrega. É um roteiro de conversa de cinco minutos. Se as cinco respostas vierem rápidas e com apoio em algo escrito, o processo está funcionando — e a próxima entrega provavelmente dispensa a conversa.
