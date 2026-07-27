const C = require("./common.js");
const { K, T } = C;
const p = K.newDeck();

// ---------------- CAPA ----------------
const cap = K.bannerSlide(p, {
  kicker: "Treinamento IA · Dia 1",
  titleRuns: [["Da ideia ao projeto ", "dark"], ["organizado", "purple"]],
  subtitle: "Processo de software, organização do projeto e qualidade local.\nUm processo simples para transformar uma ideia em projeto antes de gerar código.",
  strip: ["2H BASE", "→", "3H COM OPCIONAIS", "→", "6 BLOCOS", "→", "PÚBLICO NÃO DEV"],
  dateLabel: "Usando IA: da concepção à entrega · Dia 1 de 3"
});
cap.addNotes("Objetivo do dia: ensinar um processo simples para transformar uma ideia em um projeto organizado antes de solicitar a geração de código. Público: pessoas não desenvolvedoras que utilizam agentes de código.");

// ---------------- AGENDA ----------------
const sa = K.contentSlide(p, 2, "00 · Agenda", "Agenda do dia", "6 blocos · 120 minutos (base) · até 180 min com opcionais.");
K.table(sa, [
  [K.TABLE.header("Bloco"), K.TABLE.header("Tema"), K.TABLE.header("Duração")],
  [K.TABLE.accent("1"), K.TABLE.cell("Abertura e problema atual"), K.TABLE.muted("13 min")],
  [K.TABLE.accent("2"), K.TABLE.cell("Processo simplificado de desenvolvimento"), K.TABLE.muted("41 min")],
  [K.TABLE.accent("3"), K.TABLE.cell("GitHub e versionamento"), K.TABLE.muted("18 min")],
  [K.TABLE.accent("4"), K.TABLE.cell("Estrutura, documentação e modularização"), K.TABLE.muted("18 min")],
  [K.TABLE.accent("5"), K.TABLE.cell("Testes locais e definição de concluído"), K.TABLE.muted("12 min")],
  [K.TABLE.accent("6"), K.TABLE.cell("Exercício guiado e encerramento"), K.TABLE.muted("18 min")],
  [K.TABLE.cell("", true), K.TABLE.cell("Total", true), K.TABLE.accent("120 min")]
], { x: T.MX, y: 2.4, colW: [1.3, 8.4, 2.4], rowH: 0.5 });
sa.addNotes("Ao final, o participante deverá: explicar por que começar pelo código aumenta o risco; definir problema, público, objetivo, escopo e não escopo; transformar funcionalidades em critérios de aceite; dividir uma entrega em tarefas; compreender repositório, branch, commit e PR; reconhecer estrutura modular; identificar documentação mínima; executar validações locais.");

// ---------------- 01 · O problema ----------------
const s1 = K.contentSlide(p, 3, "01 · O problema", "Agentes aceleram o código. O processo mantém o controle.", "O que acontece antes do código é o que decide se o projeto se sustenta.");
let tc = C.twoCol(2.55);
C.infoCard(s1, tc.xL, tc.y, tc.w, 3.7, "Sem processo", [
  "Cada projeto nasce diferente do outro",
  "O agente preenche sozinho tecnologia, pastas, bibliotecas e arquitetura",
  "Funciona na demo, mas é difícil de continuar",
  "Depende demais da conversa original"
], { tag: "Ponto de partida caótico", bodySize: 13.5, gap: 9 });
C.infoCard(s1, tc.xR, tc.y, tc.w, 3.7, "Com processo", [
  "Um fluxo único e reconhecível",
  "Ideia → plano → template → tarefas → validação",
  "As decisões importantes continuam com a equipe",
  "O agente executa, mas não decide sozinho"
], { tag: "Fluxo sob controle", accent: true, bodySize: 13.5, gap: 9 });
s1.addNotes("Hoje não começamos por código, e sim pelo que acontece antes dele. Quando alguém pede uma aplicação completa, o agente preenche sozinho tudo o que não foi informado. O resultado funciona na demo, mas não segue padrão e depende da conversa. Nosso objetivo em 3 dias é criar um processo comum. Perguntar: qual o problema mais comum que já encontraram numa aplicação criada com IA?");

// ---------------- 02 · Decisões implícitas ----------------
const s2 = K.contentSlide(p, 4, "02 · Contexto", "Tudo o que não definimos vira uma decisão do agente", "Um pedido curto carrega uma intenção — não define o produto.");
C.codeCard(s2, T.MX, 2.5, 5.7, 1.35, "\"Crie um sistema de\ntarefas moderno.\"", { tag: "Prompt vago", size: 15, ls: 24 });
s2.addText(["React ou outra tecnologia?", "Onde salvar os dados?", "Login real ou simulado?", "Quais telas e bibliotecas?", "Como testar? Quando está pronto?"].map(t => ({ text: t, options: { bullet: { code: "203A", indent: 14 }, breakLine: true } })),
  { x: T.MX + 0.1, y: 4.05, w: 5.6, h: 2.4, fontFace: T.FONT, fontSize: 13, color: T.GRAY, paraSpaceAfter: 7, valign: "top" });
let rx = T.MX + 6.1, rw = 6.0;
C.infoCard(s2, rx, 2.5, rw, 1.25, "Decisões de negócio", ["Quem usa, o que resolve, o que é obrigatório."], { tag: "1", bodySize: 12.5 });
C.infoCard(s2, rx, 3.88, rw, 1.25, "Decisões de escopo", ["O que entra agora e o que fica para depois."], { tag: "2", bodySize: 12.5 });
C.infoCard(s2, rx, 5.26, rw, 1.25, "Decisões técnicas", ["Estrutura, ferramentas permitidas e como validar."], { tag: "3", bodySize: 12.5 });
s2.addNotes("O pedido parece claro, mas só tem intenção. Sem informação, o agente assume uma solução plausível — e duas pessoas recebem soluções diferentes. A 1ª mudança de comportamento: antes de pedir código, retiramos do agente as decisões que são nossas. Demonstração: mostrar dois resultados diferentes do mesmo prompt vago.");

// ---------------- 03 · Processo em 5 etapas ----------------
const s3 = K.contentSlide(p, 5, "03 · Processo", "Processo em cinco etapas", "Uma etapa produz a entrada da próxima. O agente ajuda em todas — mas não pulamos para a quarta.");
C.stepRow(s3, [
  { t: "Definir", d: "O problema, de forma que outra pessoa entenda." },
  { t: "Especificar", d: "Funcionalidades e critérios de aceite." },
  { t: "Dividir", d: "Quebrar o trabalho em tarefas menores." },
  { t: "Implementar", d: "Um incremento por vez." },
  { t: "Validar", d: "Antes de registrar como concluído." }
], 2.9, { h: 2.9 });
s3.addNotes("Não precisamos transformar todos em engenheiros. Precisamos de um processo claro para o dia a dia. Planejar não é escrever um documento longo — para projetos pequenos, uma ou duas páginas bastam.");

// ---------------- 04 · Definir o problema ----------------
const s4 = K.contentSlide(p, 6, "04 · Definir", "Definir o problema", "Uma boa definição responde quatro perguntas.");
tc = C.twoCol(2.5);
C.infoCard(s4, tc.xL, tc.y, tc.w, 3.8, "Quatro perguntas", [
  "Para quem? — quem vai usar a aplicação",
  "Qual problema? — que dificuldade resolve",
  "Qual resultado? — o que a pessoa consegue fazer",
  "Qual limite? — o que não entra nesta versão"
], { accent: true, bodySize: 14, gap: 12 });
C.infoCard(s4, tc.xR, tc.y, tc.w, 3.8, "Exemplo: TaskWeather", [
  "Para quem organiza tarefas pessoais",
  "Registrar tarefas e ver o clima sem trocar de tela",
  "Acessar, criar tarefas e visualizar o clima",
  "Sem cadastro real, compartilhamento ou sincronização"
], { tag: "Preenchido", bodySize: 13, gap: 10 });
s4.addNotes("Miniatividade: pedir que reformulem oralmente 'Criar um dashboard para minha área', conduzindo até uma versão com público, objetivo e limite.");

// ---------------- 05 · Escopo e não escopo ----------------
const s5 = K.contentSlide(p, 7, "05 · Escopo", "Escopo e não escopo", "Dizer não agora evita retrabalho depois.");
tc = C.twoCol(2.5);
C.infoCard(s5, tc.xL, tc.y, tc.w, 3.3, "Entra agora", [
  "Entrada por e-mail, sem senha", "Dados separados por usuário", "Tarefas locais", "Clima atual"
], { accent: true, bodySize: 14, gap: 9 });
C.infoCard(s5, tc.xR, tc.y, tc.w, 3.3, "Não entra agora", [
  "Autenticação real", "Senha e recuperação de senha", "Cadastro", "Colaboração", "Banco de dados", "Previsão de 7 dias"
], { tag: "Etapa futura", bodySize: 13, gap: 5, bodyColor: T.GRAY });
s5.addText("Frases explícitas: “Não implemente…”  ·  “Não altere…”  ·  “Não instale…”  ·  “Considere como etapa futura…”",
  { x: T.MX, y: 6.05, w: 12.1, h: 0.4, fontFace: T.FONT, fontSize: 12.5, italic: true, color: T.PURPLE });
s5.addNotes("O não escopo é tão importante quanto o escopo. Sem ele, o agente acrescenta recursos que parecem úteis e aumentam arquivos, dependências e erros. Não é 'nunca existirão', é 'não fazem parte desta entrega'.");

// ---------------- 06 · Funcionalidade x critério ----------------
const s6 = K.contentSlide(p, 8, "06 · Critérios", "Funcionalidade não é critério de aceite", "Funcionalidade descreve uma capacidade. Critério descreve como verificá-la.");
tc = C.twoCol(2.55);
C.infoCard(s6, tc.xL, tc.y, tc.w, 1.5, "Funcionalidade: “Criar tarefa”", ["Ainda deixa dúvidas: título vazio? quando aparece? persiste?"], { headColor: T.PURPLE, bodySize: 12.5 });
C.checklist(s6, tc.xL, 4.2, tc.w, [
  "Rejeitar título vazio", "Mostrar a tarefa criada", "Manter a tarefa após recarregar"
]);
C.infoCard(s6, tc.xR, tc.y, tc.w, 3.47, "Exemplo guiado: entrada por e-mail", [
  "E-mail válido permite acesso",
  "E-mail vazio ou inválido mostra mensagem e não entra",
  "Atualizar a página mantém a sessão",
  "“Sair” retorna à tela de entrada",
  "As tarefas de um e-mail não aparecem para outro"
], { tag: "Critérios observáveis", accent: true, bodySize: 12.5, gap: 6 });
s6.addNotes("Critérios de aceite devem ser observáveis: alguém executa a aplicação e diz se foi atendido. Mensagem-chave: critérios de aceite são o contrato entre a intenção e a implementação.");

// ---------------- 07 · Dividir ----------------
const s7 = K.contentSlide(p, 9, "07 · Dividir", "Dividir para controlar", "A unidade ideal é uma alteração pequena, com objetivo claro e validação própria.");
C.codeCard(s7, T.MX, 2.55, 5.7, 3.6, "Criar TaskWeather\n────────────────\n 1. preparar projeto\n 2. entrada por e-mail\n 3. criar tarefas\n 4. concluir tarefas\n 5. consultar clima\n 6. revisar\n 7. documentar", { tag: "Uma caixa grande → cartões menores", size: 13, ls: 21 });
C.infoCard(s7, T.MX + 6.1, 2.55, 6.0, 3.6, "Uma boa tarefa", [
  "Tem um único objetivo",
  "Cabe em uma sessão de trabalho",
  "Altera um conjunto limitado de arquivos",
  "Possui critérios de aceite próprios"
], { tag: "Regra prática", accent: true, bodySize: 14, gap: 12 });
s7.addNotes("Projetos grandes são difíceis de revisar porque muita coisa muda ao mesmo tempo. Primeiro estrutura, depois login, tarefas, clima, e por último revisão e documentação. Se algo falha, sabemos onde procurar; se o agente desvia, o desvio é menor.");

// ---------------- 08 · GitHub ----------------
const s8 = K.contentSlide(p, 10, "08 · GitHub", "GitHub como memória do projeto", "O projeto não pode existir apenas na conversa com o agente.");
const g = [
  { t: "Repositório", d: "O projeto e seus arquivos." },
  { t: "Issue", d: "O trabalho a realizar." },
  { t: "Histórico", d: "Quem alterou o quê." },
  { t: "Pull request", d: "Revisão antes de incorporar." }
];
{ const gap = 0.28, w = (C.AREA - gap * 3) / 4;
  g.forEach((it, i) => {
    const x = T.MX + i * (w + gap);
    C.infoCard(s8, x, 2.75, w, 2.9, it.t, [it.d], { accent: true, headSize: 15, bodySize: 12.5 });
  }); }
s8.addText("Uma conversa com o agente pode ser perdida ou substituída. O repositório permanece.",
  { x: T.MX, y: 5.95, w: 12.1, h: 0.4, fontFace: T.FONT, fontSize: 13, italic: true, color: T.PURPLE });
s8.addNotes("O GitHub não é só um lugar para guardar código: é a memória oficial do projeto — arquivos, histórico, decisões, documentação, tarefas e revisão antes de integrar.");

// ---------------- 09 · Branch/commit/PR ----------------
const s9 = K.contentSlide(p, 11, "09 · Versionamento", "Branch, commit e pull request", "Não precisamos dominar Git avançado; precisamos de um fluxo consistente.");
s9.addText([
  { text: "main", options: { color: T.PURPLE, bold: true } }, { text: "  →  ", options: { color: T.BORDER } },
  { text: "feat/todo-list", options: { color: T.DARK, bold: true } }, { text: "  →  ", options: { color: T.BORDER } },
  { text: "commits", options: { color: T.DARK, bold: true } }, { text: "  →  ", options: { color: T.BORDER } },
  { text: "pull request", options: { color: T.DARK, bold: true } }, { text: "  →  ", options: { color: T.BORDER } },
  { text: "revisão", options: { color: T.DARK, bold: true } }, { text: "  →  ", options: { color: T.BORDER } },
  { text: "merge", options: { color: T.PURPLE, bold: true } }
], { x: T.MX, y: 2.35, w: 12.1, h: 0.4, fontFace: T.MONO, fontSize: 13.5 });
tc = C.twoCol(2.95);
C.codeCard(s9, tc.xL, tc.y, tc.w, 1.63, "feat/login-email\nfeat/todo-list\nfeat/weather-widget", { tag: "Nomes de branch", size: 12.5, ls: 20 });
C.codeCard(s9, tc.xL, 4.73, tc.w, 1.83, "feat: adiciona identificação por e-mail\nfeat: cria e conclui tarefas\nfix: trata erro na consulta\ndocs: atualiza execução", { tag: "Commits", size: 11.5, ls: 19 });
C.infoCard(s9, tc.xR, tc.y, tc.w, 3.61, "O fluxo", [
  "main é a versão estável",
  "Cada funcionalidade nasce em uma branch separada",
  "Cada conjunto coerente de mudanças vira um commit",
  "Pronto e testado → abre pull request para revisar"
], { accent: true, bodySize: 13.5, gap: 10 });
s9.addNotes("main = versão estável. Ao iniciar uma funcionalidade, criamos uma branch e trabalhamos sem mexer na principal. Cada conjunto coerente de mudanças é um commit. Pronto e testado, abrimos PR — momento de revisar e confirmar se pode entrar na main.");

// ---------------- 10 · Estrutura por features ----------------
const s10 = K.contentSlide(p, 12, "10 · Estrutura", "Estrutura por funcionalidades", "Primeiro procure a funcionalidade. Depois o tipo de arquivo dentro dela.");
C.codeCard(s10, T.MX, 2.55, 5.7, 3.4, "src/\n├── app/\n├── features/\n│   ├── auth/\n│   ├── todos/\n│   └── weather/\n└── shared/", { tag: "Organização por feature", size: 13.5, ls: 22 });
C.infoCard(s10, T.MX + 6.1, 2.55, 6.0, 3.4, "Como ler", [
  "Alterar o login? → auth",
  "Alterar tarefas? → todos",
  "Alterar clima? → weather",
  "shared: só o que é realmente reutilizado",
  "app: a montagem geral da aplicação"
], { tag: "Mais fácil para quem não é dev", accent: true, bodySize: 13.5, gap: 9 });
s10.addNotes("Modularizar é separar a aplicação em partes com responsabilidade reconhecível. Comparar com estrutura espalhada por components/services/hooks/pages, onde uma única funcionalidade aparece em vários lugares.");

// ---------------- 11 · Documentação mínima ----------------
const s11 = K.contentSlide(p, 13, "11 · Documentação", "Documentação mínima", "Um projeto organizado deve ser entendido sem depender de quem o criou.");
const docs = [
  { t: "README.md", d: "Objetivo e como executar." },
  { t: "AGENTS.md", d: "Regras gerais para agentes de código." },
  { t: "CLAUDE.md", d: "Orientações para o Claude Code." },
  { t: "docs/architecture.md", d: "Organização, responsabilidades e decisões." }
];
{ const gap = 0.28, w = (C.AREA - gap * 3) / 4;
  docs.forEach((it, i) => {
    const x = T.MX + i * (w + gap);
    C.infoCard(s11, x, 2.75, w, 2.9, it.t, [it.d], { accent: true, headSize: 13.5, headColor: T.PURPLE, bodySize: 12.5 });
  }); }
s11.addText("Não precisam ser longos. Precisam estar corretos e atualizados.",
  { x: T.MX, y: 5.95, w: 12.1, h: 0.4, fontFace: T.FONT, fontSize: 13, italic: true, color: T.PURPLE });
s11.addNotes("Toda mudança relevante deve responder: a documentação de execução mudou? uma decisão arquitetural mudou? uma nova restrição precisa ser registrada? o agente precisará saber disso no futuro?");

// ---------------- 12 · Validação local ----------------
const s12 = K.contentSlide(p, 14, "12 · Validação", "Validação local", "Sem CI ainda. O foco agora é validar localmente — cada comando responde a uma pergunta.");
const cmds = [
  { t: "npm run dev", d: "A aplicação abre?" },
  { t: "npm run test", d: "Os comportamentos funcionam?" },
  { t: "npm run lint", d: "Há problemas de padrão?" },
  { t: "npm run build", d: "O projeto gera uma versão final?" }
];
{ const gap = 0.28, w = (C.AREA - gap * 3) / 4;
  cmds.forEach((it, i) => {
    const x = T.MX + i * (w + gap);
    K.card(s12, x, 2.8, w, 2.7, T.DARK, T.DARK);
    s12.addText(it.t, { x: x + 0.24, y: 3.05, w: w - 0.48, h: 0.5, fontFace: T.MONO, fontSize: 13, bold: true, color: "E8E0FF" });
    s12.addText(it.d, { x: x + 0.24, y: 3.7, w: w - 0.48, h: 1.5, fontFace: T.FONT, fontSize: 13, color: "B9A9E6", valign: "top" });
  }); }
s12.addText("Não considere a tarefa concluída enquanto houver erro.",
  { x: T.MX, y: 5.8, w: 12.1, h: 0.4, fontFace: T.FONT, fontSize: 13, italic: true, color: T.PURPLE });
s12.addNotes("Não é necessário entender internamente cada ferramenta; é necessário executar os comandos, reconhecer uma falha e não concluir com erro. Demonstração: um teste passando e, se possível, um erro simples e sua mensagem.");

// ---------------- 13 · Definição de concluído ----------------
const s13 = K.contentSlide(p, 15, "13 · Concluído", "Quando uma tarefa está pronta?", "O agente dizer “concluído” não encerra a tarefa. Esta lista será reutilizada em todos os projetos.");
tc = C.twoCol(2.55);
C.checklist(s13, tc.xL, tc.y, tc.w, [
  "Critérios atendidos", "Aplicação funciona", "Testes passam", "Lint passa"
]);
C.checklist(s13, tc.xR, tc.y, tc.w, [
  "Build passa", "Documentação atualizada", "Commit criado", "Revisão realizada"
]);
s13.addNotes("A tarefa só está pronta quando conseguimos comprovar os critérios de aceite, executar as validações e registrar a mudança.");

// ---------------- 14 · Exercício ----------------
const s14 = K.contentSlide(p, 16, "14 · Exercício", "Atividade em duplas: transformar ideia em plano", "“Crie uma página para registrar tarefas e mostrar o clima.” — 7 min para preencher seis campos.");
tc = C.twoCol(2.55);
C.infoCard(s14, tc.xL, tc.y, tc.w, 3.8, "Campos a preencher", [
  "Problema", "Público", "Escopo", "Não escopo", "Critérios", "Tarefas"
], { accent: true, bodySize: 14, gap: 9 });
C.infoCard(s14, tc.xR, tc.y, tc.w, 3.8, "Resposta de referência", [
  "Organizar tarefas e ver o clima em uma página",
  "Escopo: e-mail sem senha, dados por usuário, tarefas, persistência, clima",
  "Não escopo: cadastro, colaboração, banco, previsão estendida",
  "Critérios: ≥ 2 por funcionalidade"
], { tag: "Corrigir só escopo e critérios", bodySize: 12.5, gap: 8 });
s14.addNotes("Formar duplas/trios; 7 minutos para os seis campos; um grupo apresenta; corrigir apenas lacunas de escopo e critérios, sem discutir código; mostrar a versão de referência.");

// ---------------- FECHO ----------------
const fim = K.bannerSlide(p, {
  kicker: "Em resumo · Dia 1",
  titleRuns: [["Três hábitos ", "dark"], ["para levar", "purple"]],
  bulletList: [
    "Não começar pelo código",
    "Deixar explícitos escopo, não escopo e critérios",
    "Validar localmente antes de considerar uma mudança pronta"
  ],
  dateLabel: "Amanhã: transformar esse processo em instruções que o agente segue · Dia 2 de 3"
});
fim.addNotes("No próximo encontro, vamos transformar esse processo em instruções que o agente consegue seguir de forma consistente.");

K.save(p, __dirname + "/deck1.pptx").then(f => console.log("OK", f));
