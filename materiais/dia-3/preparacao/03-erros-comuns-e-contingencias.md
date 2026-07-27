# Erros comuns e contingências

> O aprendizado prioritário é o processo de trabalho com agentes. Nenhum destes problemas deve consumir a sessão.

**Regra dos cinco minutos:** se um grupo está parado há mais de cinco minutos no mesmo erro, aplique a contingência e avance. Anote o problema e siga.

---

## Erros de ambiente

| Sintoma                                    | Causa                              | Correção rápida                                                    |
| ------------------------------------------ | ---------------------------------- | ------------------------------------------------------------------ |
| `command not found: npm`                   | Node não instalado                  | usar o `.zip` em outra máquina, ou pareá-lo com outro grupo         |
| versão do Node diferente                   | Node antigo                         | `nvm use` (o template tem `.nvmrc`); sem nvm, instalar a 22          |
| `npm install` falhando                     | rede, proxy ou cache corrompido     | `npm cache clean --force` e tentar de novo; se falhar, usar o `.zip` |
| `Cannot find module`                       | dependências não instaladas         | `npm install`                                                       |
| `Port 5173 is in use`                      | outra aplicação rodando             | usar o endereço que o terminal indicar (5174) — não é erro           |
| `EACCES` / permissão negada                | pasta protegida                     | mover o projeto para a pasta do usuário                             |
| tela branca no navegador                   | erro em tempo de execução            | abrir o console (F12) e levar a mensagem ao agente                   |

## Erros de Git e GitHub

| Sintoma                                | Correção rápida                                                            |
| -------------------------------------- | -------------------------------------------------------------------------- |
| não consegue criar repo do template     | usar o `.zip`; registrar os commits depois, se der tempo                    |
| autenticação do GitHub falhando         | seguir sem push: commits locais bastam para a prática                       |
| conflito ao trocar de branch            | `git stash`, trocar, e seguir                                               |
| commitou `node_modules`                 | conferir se o `.gitignore` veio do template; ignorar por agora e seguir      |
| perdeu o trabalho                       | `git reflog` costuma achar; se não, usar o checkpoint da etapa               |

## Erros do agente

| Sintoma                                       | O que fazer                                                                 |
| --------------------------------------------- | --------------------------------------------------------------------------- |
| **saiu do escopo** e mexeu em outras features  | prompt de correção pronto na folha de prompts, seção "Prompts de apoio"      |
| **instalou uma dependência** sem pedir         | `git diff package.json`, reverter e reforçar a restrição                     |
| **disse que terminou** sem rodar nada          | pedir a saída dos comandos — não aceitar a afirmação                          |
| **implementou as três features de uma vez**    | é o erro mais comum. Reverter e voltar a um incremento. Vale parar a turma e comentar em voz alta |
| **desativou ou apagou um teste** para passar    | reverter; reforçar que isso nunca é solução                                  |
| **travou ou ficou muito lento**                | encerrar a mensagem e reenviar um pedido menor                              |
| **inventou um arquivo ou biblioteca**           | pedir para confirmar lendo o arquivo antes de afirmar                        |
| perdeu o contexto do plano                     | prompt "resuma o estado atual do projeto" da folha de prompts                |

## Erros da API de clima

| Sintoma                            | Causa                                       | O que fazer                                              |
| ---------------------------------- | ------------------------------------------- | -------------------------------------------------------- |
| nenhuma consulta funciona           | rede da sala                                 | usar a contingência de resposta fake (abaixo)             |
| a cidade certa não é encontrada     | acentuação ou nome ambíguo                   | testar com "Curitiba" — sabidamente funciona              |
| erro só com cidade inexistente      | a resposta **omite** o campo `results`        | é o achado esperado: o serviço precisa tratar esse caso    |
| a tela travou "carregando"           | o erro não foi tratado                       | é o defeito clássico. Mostrar e corrigir — vale a pausa    |
| grupo quer usar API com chave        | não faça                                     | a Open-Meteo não precisa de chave; nada de credencial      |

### Contingência de rede: resposta fake

Se a internet da sala não colaborar, o serviço continua sendo praticado — só a fonte muda:

```text
A rede da sala está instável. Mantenha a interface do serviço de clima
exatamente como está, mas faça a implementação devolver uma resposta
fixa de exemplo em vez de chamar a API.

Deixe claro no código que é temporário e mantenha o serviço isolado,
para que trocar a resposta fixa pela chamada real seja uma mudança
de um único arquivo.

Os estados de carregando, sucesso e erro devem continuar funcionando.
```

Isso **preserva o aprendizado** — o serviço isolado é exatamente o ponto da Etapa 5. E é uma boa deixa: *"a interface do serviço é o que permite trocar a fonte sem mexer na tela."*

---

## Problemas de organização (os que mais importam)

Estes não são erros de ambiente — são o conteúdo do treinamento aparecendo na prática. **Não corrija em silêncio: use como material.**

| O que apareceu                                       | A pergunta para o grupo                                  |
| ---------------------------------------------------- | -------------------------------------------------------- |
| `localStorage` direto no componente                   | "se amanhã trocarmos o armazenamento, quantos arquivos mudam?" |
| `fetch` direto no componente                          | "como você testa isso sem internet?"                      |
| lógica de tarefa dentro do componente principal        | "onde alguém procuraria essa regra?"                      |
| edição/exclusão adicionadas sem pedido                 | "quem decidiu isso?"                                      |
| estado perdido ao recarregar                          | "qual critério de aceite isso viola?"                     |
| autenticação quebrada depois das tarefas               | "o que deveria ter percebido isso antes de você?"         |

A última tem a melhor resposta: **os testes.** É o argumento mais convincente do treinamento, e ele aparece sozinho.

---

## Quando parar a turma inteira

Vale interromper todos os grupos, por dois minutos, se:

- **dois ou mais grupos** caíram no mesmo problema;
- algum agente implementou tudo de uma vez (é a lição central do Dia 1 acontecendo ao vivo);
- alguém tentou colocar uma credencial real;
- um grupo chegou a um resultado que vale a turma ver.

Fora desses casos, circule e resolva individualmente. Interromper demais custa mais tempo que os erros.
