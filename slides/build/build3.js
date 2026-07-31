const C = require("./common.js");
const { K, T } = C;
const p = K.newDeck();

// ---------------- CAPA ----------------
const cap = K.bannerSlide(p, {
  kicker: "Treinamento IA · Dia 3",
  titleRuns: [["Prática: construir ", "dark"], ["o TaskWeather", "purple"]],
  subtitle: "Criar uma aplicação web simples a partir do template, com planejamento,\nprompts estruturados, skills, validação local e versionamento.",
  strip: ["2H BASE", "→", "3 INCREMENTOS", "→", "TEMPLATE → PLANO → ENTREGA"],
  dateLabel: "Usando IA: da concepção à entrega · Dia 3 de 3"
});
cap.addNotes("Objetivo do dia: criar uma aplicação web simples a partir do repositório-template, aplicando o processo. Público: quem participou dos dois primeiros dias. Regra principal: não pedir a aplicação inteira de uma vez.");

// ---------------- ESCOPO DA APLICAÇÃO ----------------
const se = K.contentSlide(p, 2, "00 · Escopo", "Escopo da aplicação", "O que entra, o que é opcional e o que fica de fora do TaskWeather.");
{ const gap = 0.34, w = (C.AREA - gap * 2) / 3;
  C.infoCard(se, T.MX, 2.55, w, 3.85, "Obrigatório", [
    "Entrada por e-mail sem senha, sessão local, logout",
    "Dados separados por usuário",
    "Criar, listar e concluir tarefas",
    "Persistência local",
    "Validação local e documentação mínima"
  ], { tag: "Entra agora", accent: true, bodySize: 12, gap: 6 });
  C.infoCard(se, T.MX + w + gap, 2.55, w, 3.85, "Opcional (se houver tempo)", [
    "Clima atual, com loading e erro",
    "Editar e excluir tarefa",
    "Filtrar tarefas",
    "Testes adicionais",
    "Melhoria visual",
    "PR revisado por outro grupo"
  ], { tag: "Talvez", bodySize: 12.5, gap: 7 });
  C.infoCard(se, T.MX + 2 * (w + gap), 2.55, w, 3.85, "Fora do escopo", [
    "Backend e banco de dados",
    "Autenticação real, senha e cadastro",
    "Recuperação de senha / dados sensíveis",
    "Geolocalização automática",
    "Previsão avançada e publicação em produção"
  ], { tag: "Não entra", bodySize: 12, gap: 6, bodyColor: T.GRAY }); }
se.addNotes("Pré-requisitos: acesso ao GitHub, agente instalado e autenticado, Node na versão do template, Git, navegador moderno, internet e permissão para criar repositórios do template.");

// ---------------- AGENDA ----------------
const sa = K.contentSlide(p, 3, "00 · Agenda", "Agenda-base de 120 minutos", "Introdução curta e execução prática guiada, em checkpoints comuns.");
K.table(sa, [
  [K.TABLE.header("Etapa"), K.TABLE.header("Atividade"), K.TABLE.header("Duração")],
  [K.TABLE.accent("1"), K.TABLE.cell("Abertura e regras"), K.TABLE.muted("8 min")],
  [K.TABLE.accent("2"), K.TABLE.cell("Criar projeto e executar template"), K.TABLE.muted("10 min")],
  [K.TABLE.accent("3"), K.TABLE.cell("Planejar — reusando o plano do Dia 2"), K.TABLE.muted("8 min")],
  [K.TABLE.accent("4"), K.TABLE.cell("Entrada por e-mail"), K.TABLE.muted("20 min")],
  [K.TABLE.accent("5"), K.TABLE.cell("Lista de tarefas"), K.TABLE.muted("25 min")],
  [K.TABLE.accent("6"), K.TABLE.cell("Separação de dados por usuário"), K.TABLE.muted("15 min")],
  [K.TABLE.accent("7"), K.TABLE.cell("Validar, revisar e documentar"), K.TABLE.muted("20 min")],
  [K.TABLE.accent("8"), K.TABLE.cell("Demonstração cruzada e retrospectiva"), K.TABLE.muted("14 min")]
], { x: T.MX, y: 2.35, colW: [1.3, 8.4, 2.4], rowH: 0.46 });
sa.addNotes("Grupos: preferir duplas, evitar mais de três. Uma pessoa conduz o agente, outra lê critérios e acompanha o escopo; alternar após o login. Contingência: grupo bloqueado por mais de 5 min → conferir ambiente, comparar com checkpoint, aplicar correção mínima, se necessário usar branch de referência.");

// ---------------- S1 · Resultado do workshop ----------------
const s1 = K.contentSlide(p, 4, "01 · Resultado", "Resultado do workshop", "Aplicar o processo, não criar o sistema mais completo. Não pedir a aplicação inteira de uma vez.");
let tc = C.twoCol(2.55);
C.infoCard(s1, tc.xL, tc.y, tc.w, 3.55, "A aplicação final", [
  "Tela de entrada por e-mail", "Lista de tarefas", "Cartão de clima"
], { tag: "Simples, compreensível, executável", accent: true, bodySize: 14, gap: 12 });
C.infoCard(s1, tc.xR, tc.y, tc.w, 3.55, "O fluxo", [
  "Começar pelo template",
  "Orientar o agente",
  "Trabalhar em incrementos",
  "Validar cada etapa",
  "Registrar o resultado"
], { tag: "Template → Plano → Incrementos → Testes → Revisão", bodySize: 13.5, gap: 8 });
s1.addNotes("O objetivo não é o design mais sofisticado; é aplicar o processo. Primeiro vamos criar o projeto e confirmar que o ponto de partida funciona.");

// ---------------- S2 · Etapa 1 ----------------
const s2 = K.contentSlide(p, 5, "Etapa 1 · Criar", "Criar e executar o projeto", "Confirmar que o projeto inicia e que o agente leu as regras — antes de construir qualquer coisa.");
tc = C.twoCol(2.55);
C.checklist(s2, tc.xL, tc.y, tc.w, [
  "Usar o template", "Nomear o repositório", "Abrir no agente", "Instalar dependências", "Executar a aplicação", "Ler as instruções"
]);
C.codeCard(s2, tc.xR, tc.y, tc.w, 3.55,
  "npm install\nnpm run dev\n\n# Leia README, AGENTS,\n# CLAUDE e architecture.\n# Não altere arquivos.\n# Resuma: objetivo, estrutura,\n# comandos e regras.",
  { tag: "Comandos + prompt de apoio", size: 12, ls: 19 });
s2.addNotes("Checkpoint esperado: aplicação inicial aberta no navegador; agente confirmou as regras; nenhum arquivo alterado. Se o ponto de partida já estiver com erro, não começar a funcionalidade. Contingência: projeto compactado ou branch pronta.");

// ---------------- S3 · Etapa 2 planejar ----------------
const s3 = K.contentSlide(p, 6, "Etapa 2 · Planejar", "Planejar antes de implementar", "Use a skill plan-feature. Não altere arquivos.");
tc = C.twoCol(2.5);
C.codeCard(s3, tc.xL, tc.y, tc.w, 3.85,
  "Use plan-feature para o TaskWeather.\nObjetivo: entrada por e-mail, tarefas\n  e clima.\nEscopo: sessão local, dados por\n  usuário, criar/listar/concluir\n  tarefas, persistência, clima por\n  cidade, loading/erro.\nFora do escopo: backend, auth real,\n  senha, cadastro, editar/excluir, geoloc.\nRestrições: não instalar deps;\n  seguir AGENTS.md; por features.\nSaída: requisitos, suposições,\n  proposta, tarefas, riscos, critérios.",
  { tag: "Prompt (resumo)", size: 10.5, ls: 17 });
C.infoCard(s3, tc.xR, tc.y, tc.w, 3.85, "Verificar no plano", [
  "Respeita o não escopo?",
  "Cada funcionalidade está separada?",
  "Existem critérios observáveis?",
  "O agente tentou incluir bibliotecas?",
  "A ordem permite validar um incremento por vez?"
], { tag: "Checkpoint: 3 incrementos", accent: true, bodySize: 13, gap: 8 });
s3.addNotes("Checkpoint esperado: plano aceito com três incrementos principais — autenticação, tarefas e clima. Vamos implementar apenas o primeiro incremento.");

// ---------------- S4 · Etapa 3 login ----------------
const s4 = K.contentSlide(p, 7, "Etapa 3 · Entrada", "Entrada por e-mail", "Implementar apenas o incremento de identificação aprovado no plano.");
tc = C.twoCol(2.5);
C.infoCard(s4, tc.xL, tc.y, tc.w, 2.55, "Critérios de aceite", [
  "E-mail válido acessa; vazio ou inválido mostra mensagem",
  "A tela NÃO pede senha",
  "Atualizar a página mantém a sessão",
  "E-mail normalizado: minúsculas, sem espaços",
  "Logout encerra sem apagar dados; nenhuma auth real"
], { accent: true, bodySize: 11.5, gap: 5 });
C.codeCard(s4, tc.xL, 5.25, tc.w, 1.15, "demo@empresa.com", { tag: "Entrada sem senha · informe apenas o e-mail", size: 14, ls: 24 });
s4.addText("⚠  Identifica, não autentica.", { x: tc.xL + 0.05, y: 6.5, w: tc.w, h: 0.3,
  fontFace: T.FONT, fontSize: 12, bold: true, italic: true, color: T.PURPLE });
C.infoCard(s4, tc.xR, tc.y, tc.w, 3.9, "Restrições e processo", [
  "Não instalar deps; não fazer tarefas nem clima",
  "Não criar senha, cadastro nem recuperação de senha",
  "Feature isolada em src/features/auth",
  "Armazenamento por serviço, não no componente",
  "Informe arquivos → implemente → teste → valide",
  "Commit: feat: adiciona identificação por e-mail"
], { tag: "Isolar a feature", bodySize: 12, gap: 6 });
s4.addNotes("Instrutor: verificar que o agente não começou tarefas, sessão isolada, credenciais claramente de demonstração, sem segredo real, e que o grupo executa a aplicação. Teste manual: dados incorretos → corretos → atualizar → sair → atualizar. Contingência: branch checkpoint/auth.");

// ---------------- S5 · Etapa 4 tarefas ----------------
const s5 = K.contentSlide(p, 8, "Etapa 4 · Tarefas", "Lista de tarefas", "A funcionalidade central — apenas o básico. Commit: feat: adiciona criação e conclusão de tarefas.");
tc = C.twoCol(2.5);
C.infoCard(s5, tc.xL, tc.y, tc.w, 3.9, "Escopo", [
  "Criar tarefa com título",
  "Listar tarefas",
  "Concluir / reabrir",
  "Persistir após recarregar",
  "Guardar separado por usuário, com o e-mail na chave",
  "Mostrar estado vazio"
], { tag: "Fora: editar, excluir, categorias, datas", accent: true, bodySize: 13, gap: 8 });
C.infoCard(s5, tc.xR, tc.y, tc.w, 3.9, "Critérios e restrições", [
  "Título vazio não cria tarefa",
  "Tarefa válida aparece imediatamente",
  "Estado permanece após recarregar; identificação intacta",
  "As tarefas de um e-mail NÃO aparecem para outro",
  "Feature em src/features/todos; storage encapsulado",
  "Não instalar deps; não alterar a identificação"
], { tag: "Como verificar na tela", bodySize: 12, gap: 6 });
s5.addNotes("Grupos: uma pessoa acompanha prompt/escopo, outra testa critérios; trocar após 15 min. Teste manual: lista vazia → título vazio → criar duas → concluir → reabrir → recarregar → sair e entrar. Problemas comuns: storage acessado direto em vários componentes; lógica no componente principal; editar/excluir sem pedido; estado perdido; auth quebrada. Contingência: branch checkpoint/todos.");

// ---------------- S6 · Etapa 5 clima ----------------
const s6 = K.contentSlide(p, 9, "Etapa 5 · Clima", "Widget meteorológico", "Uma integração externa pequena e controlada. Funciona no navegador e não exige segredo.");
s6.addText([
  { text: "Cidade", options: { color: T.PURPLE, bold: true } }, { text: "  →  ", options: { color: T.BORDER } },
  { text: "Coordenadas", options: { color: T.DARK, bold: true } }, { text: "  →  ", options: { color: T.BORDER } },
  { text: "Clima atual", options: { color: T.DARK, bold: true } }, { text: "  →  ", options: { color: T.BORDER } },
  { text: "Exibição", options: { color: T.PURPLE, bold: true } }
], { x: T.MX, y: 2.35, w: 12.1, h: 0.4, fontFace: T.MONO, fontSize: 14 });
tc = C.twoCol(2.95);
C.infoCard(s6, tc.xL, tc.y, tc.w, 3.45, "Estados visuais", [
  "Inicial", "Carregando", "Sucesso", "Erro"
], { tag: "A interface não pode travar", accent: true, bodySize: 14, gap: 11 });
C.infoCard(s6, tc.xR, tc.y, tc.w, 3.45, "Escopo e critérios", [
  "Campo de cidade, ação de busca, nova busca",
  "Exibir cidade, temperatura e condição atual",
  "Cidade válida exibe clima; falha mostra mensagem",
  "Serviço indicado em docs; sem segredo no projeto",
  "Chamadas externas em src/features/weather"
], { bodySize: 12.5, gap: 7 });
s6.addNotes("Instrutor: lembrar que APIs falham; impedir chave real; verificar tratamento de erro. Commit: feat: adiciona consulta de clima atual. Contingência: resposta fake por adaptador; branch checkpoint/weather; manter a interface de serviço para trocar fake por real.");

// ---------------- S7 · Etapa 6 validar ----------------
const s7 = K.contentSlide(p, 10, "Etapa 6 · Entrega", "Validar e revisar", "Comprovar e registrar a entrega. Use a skill review-changes; não altere arquivos inicialmente.");
tc = C.twoCol(2.5);
C.codeCard(s7, tc.xL, tc.y, tc.w, 2.15, "npm run test\nnpm run lint\nnpm run typecheck\nnpm run build", { tag: "Validações", size: 13, ls: 21 });
C.infoCard(s7, tc.xL, 4.85, tc.w, 1.55, "PR — descrição mínima", [
  "Objetivo, funcionalidades, como testar, limitações, evidências"
], { bodySize: 12.5 });
C.infoCard(s7, tc.xR, tc.y, tc.w, 3.9, "review-changes verifica", [
  "Critérios de aceite e alterações fora do escopo",
  "Dependências, segredos ou credenciais inadequadas",
  "Separação entre auth, todos e weather",
  "Acesso direto a storage/APIs em componentes",
  "Testes ausentes, acessibilidade, docs e código morto"
], { tag: "Prioridade + correções mínimas", accent: true, bodySize: 12.5, gap: 7 });
s7.addNotes("Execução: revisar problemas; autorizar só correções necessárias; rodar os quatro comandos; testar o fluxo principal; atualizar README se preciso. Fluxo manual final: login incorreto → correto → criar tarefa → concluir → clima → recarregar → logout.");

// ---------------- S8 · Retrospectiva ----------------
const s8 = K.contentSlide(p, 11, "Etapa 8 · Retro", "Demonstração e retrospectiva", "Selecionar um ou dois grupos para mostrar aplicação, features, um commit e os testes.");
{ const gap = 0.34, w = (C.AREA - gap * 2) / 3;
  const qs = [
    { t: "O que o agente fez bem?", d: "Onde ele acelerou o trabalho." },
    { t: "Onde o processo evitou um problema?", d: "Escopo, plano, validação." },
    { t: "O que melhorar no template?", d: "A melhoria que deve entrar." }
  ];
  qs.forEach((it, i) => C.infoCard(s8, T.MX + i * (w + gap), 2.75, w, 2.95, it.t, [it.d], { tag: String(i + 1), accent: true, headSize: 15, bodySize: 12.5 })); }
s8.addText("Houve tentativa de expandir escopo? O plano foi útil? Qual instrução precisou ser reforçada?",
  { x: T.MX, y: 5.95, w: 12.1, h: 0.4, fontFace: T.FONT, fontSize: 12.5, italic: true, color: T.PURPLE });
s8.addNotes("O principal artefato não é apenas a aplicação. É a capacidade de repetir este processo em outros projetos.");

// ---------------- CHECKPOINTS ----------------
const sc = K.contentSlide(p, 12, "Instrutor · Checkpoints", "Checkpoints e critérios de sucesso", "Todos os grupos param nos mesmos pontos. O aprendizado prioritário é o processo.");
tc = C.twoCol(2.55);
C.infoCard(sc, tc.xL, tc.y, tc.w, 3.75, "Checkpoints", [
  "0 · Ambiente: projeto inicia, sem alterações",
  "1 · Plano: 3 incrementos e critérios",
  "2 · E-mail: válido entra, inválido recusa, sessão, logout",
  "3 · Tarefas: criar, concluir, persistir, separadas por usuário",
  "4 · Clima: loading, sucesso, erro",
  "5 · Entrega: validações, docs, PR"
], { accent: true, bodySize: 12.5, gap: 7 });
C.infoCard(sc, tc.xR, tc.y, tc.w, 3.75, "Concluído quando o grupo", [
  "Usou o template e planejou antes de implementar",
  "Trabalhou em incrementos e respeitou o não escopo",
  "Executou validações e revisou alterações",
  "Registrou commits e documentou execução/testes",
  "Consegue explicar a estrutura do projeto"
], { tag: "Critérios de sucesso", bodySize: 12.5, gap: 7 });
sc.addNotes("Erros que não devem consumir o treinamento: versão do Node, instalação de deps, API indisponível, conflito de porta, agente sem terminal, auth do GitHub, MCP, diferenças de SO. Aplicar contingência rapidamente.");

// ---------------- FECHO ----------------
const fim = K.bannerSlide(p, {
  kicker: "Em resumo · Fim do treinamento",
  titleRuns: [["O artefato é ", "dark"], ["o processo", "purple"]],
  bulletList: [
    "Do template ao PR, em incrementos validados",
    "Escopo, critérios e não escopo explícitos em cada etapa",
    "Capacidade de repetir isto em outros projetos"
  ],
  dateLabel: "Usando IA: da concepção à entrega · Dia 3 de 3"
});
fim.addNotes("Encerramento: o principal artefato não é apenas a aplicação, é a capacidade de repetir este processo em outros projetos.");

K.save(p, __dirname + "/deck3.pptx").then(f => console.log("OK", f));
