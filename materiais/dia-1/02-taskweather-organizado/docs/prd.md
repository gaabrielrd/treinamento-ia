# TaskWeather — definição do produto

Este documento existe para que ninguém precise adivinhar o que o produto é. Ele foi escrito **antes** do código.

## Problema

Organizar tarefas pessoais e consultar o clima em uma única página, sem alternar entre aplicativos.

## Público

Usuário individual, em uma demonstração interna. Mais de uma pessoa pode usar o mesmo navegador, cada uma com suas próprias tarefas.

## Resultado esperado

A pessoa acessa a aplicação, informa o e-mail, cria e conclui suas tarefas e consulta o clima atual da cidade que informar. Se outra pessoa usar o mesmo navegador com outro e-mail, vê apenas as tarefas dela.

## Escopo (entra agora)

1. identificação por e-mail, sem senha;
2. separação dos dados por e-mail;
3. criar tarefas;
4. concluir e reabrir tarefas;
5. remover tarefas;
6. manter tarefas e sessão no navegador;
7. consultar o clima atual por cidade.

## Não escopo (não entra agora)

| Fora desta versão              | Por quê                                                           |
| ------------------------------ | ----------------------------------------------------------------- |
| **autenticação de verdade**    | exigiria servidor, senha protegida e tratamento de dados pessoais |
| senha                          | não há o que proteger nesta demonstração; ver o alerta abaixo     |
| cadastro real de usuários      | exigiria servidor, banco de dados e tratamento de dados pessoais  |
| recuperação de senha           | não existe senha nesta versão                                     |
| colaboração entre pessoas      | exigiria backend e regras de permissão                            |
| banco de dados                 | o armazenamento no navegador basta para a demonstração            |
| notificações                   | não é necessário para o resultado esperado                        |
| previsão de vários dias        | o clima atual já resolve o problema descrito                      |
| edição do título de uma tarefa | pode ser resolvida removendo e recriando a tarefa                 |

Nada nesta lista é proibido para sempre. Está apenas fora **desta** entrega.

### ⚠️ O e-mail identifica, não autentica

Não há senha e não há verificação de identidade: **qualquer pessoa pode digitar qualquer e-mail e entrar.** O e-mail serve para dois fins:

1. identificar a sessão atual;
2. separar os dados de cada pessoa no armazenamento do navegador.

Isso é adequado para uma demonstração em que as pessoas confiam umas nas outras e compartilham uma máquina. **Não é adequado para nada além disso.** Consequências que precisam estar claras:

- a separação evita **confusão**, não protege **segredo** — quem tem acesso ao navegador consegue ver os dados de qualquer e-mail;
- não coloque nesta aplicação nada que não possa ser lido por outra pessoa com acesso à mesma máquina;
- se algum dia esta aplicação precisar proteger dados de verdade, isso exige autenticação real — não é um ajuste, é outra decisão.

## Critérios de aceite

Cada critério é observável: uma pessoa consegue executar a aplicação e dizer se ele foi atendido. Os testes automatizados do projeto citam estes critérios por nome.

### Funcionalidade: identificação por e-mail

- informar um e-mail válido dá acesso à aplicação;
- e-mail vazio ou em formato inválido mostra mensagem de erro e não dá acesso;
- a tela de entrada **não** pede senha;
- atualizar a página mantém a sessão;
- o botão "Sair" retorna à tela de login, sem apagar as tarefas;
- o e-mail da sessão fica visível na tela.

### Funcionalidade: separação de dados por usuário

- as tarefas criadas com um e-mail não aparecem para outro e-mail;
- ao voltar com o e-mail anterior, as tarefas dele reaparecem;
- o mesmo e-mail digitado com maiúsculas ou espaços sobrando é tratado como o mesmo usuário;
- sair da aplicação não apaga as tarefas de ninguém.

### Funcionalidade: tarefas

- rejeitar título vazio, com mensagem de erro e sem criar a tarefa;
- mostrar a tarefa imediatamente depois de criada;
- manter a tarefa após recarregar a página;
- marcar uma tarefa como concluída e poder reabri-la;
- remover uma tarefa da lista;
- mostrar a contagem de tarefas pendentes;
- mostrar uma mensagem própria quando não há nenhuma tarefa.

### Funcionalidade: clima

- informar uma cidade válida mostra a temperatura atual e o vento;
- cidade inexistente mostra mensagem de erro;
- falha na consulta mostra mensagem de erro, sem tela em branco;
- enquanto a consulta acontece, a tela indica que está carregando.

## Definição de concluído

Uma tarefa só está pronta quando:

- [ ] os critérios de aceite da funcionalidade foram verificados na tela;
- [ ] `npm run test` passa;
- [ ] `npm run lint` passa;
- [ ] `npm run typecheck` passa;
- [ ] `npm run build` passa;
- [ ] a documentação afetada foi atualizada;
- [ ] a mudança foi registrada em um commit.
