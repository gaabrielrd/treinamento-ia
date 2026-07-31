const C = require("./common.js");
const { K, T } = C;
const p = K.newDeck();

// ---------------- CAPA ----------------
const cap = K.bannerSlide(p, {
  kicker: "Treinamento IA · Dia 2",
  titleRuns: [["Orientar o agente ", "dark"], ["com contexto", "purple"]],
  subtitle: "Prompts, instruções persistentes, skills, MCP e escolha de modelo.\nComo comunicar ao agente o processo que definimos no Dia 1.",
  strip: ["2H BASE", "→", "7 BLOCOS", "→", "CONTEXTO > MODELO"],
  dateLabel: "Usando IA: da concepção à entrega · Dia 2 de 3"
});
cap.addNotes("Objetivo do dia: ensinar como orientar agentes de código, fornecer contexto persistente e escolher ferramentas de forma proporcional à tarefa. No Dia 1 definimos um processo; hoje aprendemos a comunicá-lo ao agente.");

// ---------------- AGENDA ----------------
const sa = K.contentSlide(p, 2, "00 · Agenda", "Agenda do dia", "8 blocos · 120 minutos · duas práticas com o agente.");
K.table(sa, [
  [K.TABLE.header("Bloco"), K.TABLE.header("Tema"), K.TABLE.header("Duração")],
  [K.TABLE.accent("1"), K.TABLE.cell("Ciclo do agente e por que erram"), K.TABLE.muted("18 min")],
  [K.TABLE.accent("2"), K.TABLE.cell("Anatomia do prompt + vago × estruturado"), K.TABLE.muted("25 min")],
  [K.TABLE.accent("3"), K.TABLE.cell("Prática: escrever o prompt e executar"), K.TABLE.muted("25 min")],
  [K.TABLE.accent("4"), K.TABLE.cell("Contexto persistente: AGENTS.md e CLAUDE.md"), K.TABLE.muted("20 min")],
  [K.TABLE.accent("5"), K.TABLE.cell("Prática: escrever o AGENTS.md do projeto"), K.TABLE.muted("12 min")],
  [K.TABLE.accent("6"), K.TABLE.cell("Skills"), K.TABLE.muted("15 min")],
  [K.TABLE.accent("7"), K.TABLE.cell("Além do prompt: MCP e escolha de modelo"), K.TABLE.muted("15 min")],
  [K.TABLE.accent("8"), K.TABLE.cell("Encerramento"), K.TABLE.muted("10 min")],
  [K.TABLE.cell("", true), K.TABLE.cell("Total", true), K.TABLE.accent("120 min")]
], { x: T.MX, y: 2.35, colW: [1.3, 8.4, 2.4], rowH: 0.46 });
sa.addNotes("Resultados esperados: explicar o ciclo do agente; reconhecer solicitações vagas; montar prompt com contexto/objetivo/escopo/restrições/critérios; entender AGENTS.md e CLAUDE.md; entender skills e MCP; aplicar segurança a integrações; escolher modelo e raciocínio conforme ambiguidade e impacto.");

// ---------------- 01 · Agente não conhece o projeto ----------------
const s1 = K.contentSlide(p, 3, "01 · Ponto de partida", "Contexto não informado não pode ser seguido", "Um agente muito capaz ainda produz solução inadequada sem conhecer projeto, regras ou limites.");
const boxes = ["Objetivo", "Regras", "Arquitetura", "Restrições", "Testes", "Ferramentas"];
{ const gap = 0.24, w = (C.AREA - gap * 5) / 6;
  boxes.forEach((t, i) => {
    const x = T.MX + i * (w + gap);
    K.card(s1, x, 2.85, w, 1.5, T.LILAC, T.ELILAC);
    s1.addText(t, { x: x + 0.1, y: 2.85, w: w - 0.2, h: 1.5, fontFace: T.FONT, fontSize: 12.5, bold: true, color: T.PURPLE, align: "center", valign: "middle" });
  }); }
s1.addText("Caixas vazias ao redor do agente — cada uma é um contexto que ninguém informou.",
  { x: T.MX, y: 4.6, w: 12.1, h: 0.4, fontFace: T.FONT, fontSize: 13, color: T.GRAY, align: "center" });
s1.addText("Capacidade de modelo não substitui contexto.",
  { x: T.MX, y: 5.35, w: 12.1, h: 0.5, fontFace: T.FONT, fontSize: 18, bold: true, color: T.DARK, align: "center" });
s1.addNotes("Para orientar melhor, primeiro precisamos entender como o agente trabalha.");

// ---------------- 02 · Ciclo de trabalho ----------------
const s2 = K.contentSlide(p, 4, "02 · Como trabalham", "Ciclo de trabalho do agente", "Repetir até atender ao objetivo. Pedir só a implementação incentiva a pular as primeiras etapas.");
C.stepRow(s2, [
  { t: "Ler contexto", d: "Instruções e regras." },
  { t: "Explorar", d: "Arquivos relacionados." },
  { t: "Planejar", d: "Formar um plano." },
  { t: "Alterar", d: "Poucos arquivos." },
  { t: "Executar", d: "Rodar comandos." },
  { t: "Revisar", d: "Conferir o resultado." }
], 2.85, { h: 2.55, gap: 0.2 });
s2.addText("Em mudanças maiores, peça explicitamente: analise, apresente um plano e só então implemente.",
  { x: T.MX, y: 5.7, w: 12.1, h: 0.4, fontFace: T.FONT, fontSize: 13, italic: true, color: T.PURPLE });
s2.addNotes("Demonstração: mostrar uma resposta em modo de planejamento, destacando arquivos identificados, suposições, etapas e riscos.");

// ---------------- 03 · Por que erram ----------------
const s3 = K.contentSlide(p, 5, "03 · Riscos", "Por que agentes erram", "Erros de agentes muitas vezes são erros de direcionamento, não de programação.");
const risks = [
  { t: "Objetivo vago", d: "“Melhore o projeto” não define objetivo." },
  { t: "Escopo aberto", d: "“Crie tudo o que for necessário.”" },
  { t: "Contexto insuficiente", d: "Não conhece regras nem arquitetura." },
  { t: "Muitas tarefas juntas", d: "“Corrija todos os problemas.”" },
  { t: "Permissão excessiva", d: "“Instale qualquer biblioteca.”" },
  { t: "Ausência de validação", d: "“Está pronto?” aceita sem verificar." }
];
{ const gap = 0.28, w = (C.AREA - gap * 2) / 3;
  risks.forEach((it, i) => {
    const col = i % 3, row = Math.floor(i / 3);
    const x = T.MX + col * (w + gap), y = 2.7 + row * 1.9;
    C.infoCard(s3, x, y, w, 1.7, it.t, [it.d], { accent: true, headSize: 14.5, bodySize: 12 });
  }); }
s3.addNotes("Nosso prompt precisa reduzir essas zonas de interpretação. Vamos usar uma estrutura padrão para isso.");

// ---------------- 04 · Anatomia de um prompt ----------------
const s4 = K.contentSlide(p, 6, "04 · Prompt", "Anatomia de um prompt eficiente", "Não precisa ser sofisticado. Precisa ser completo — pode ser preenchido como um formulário.");
const blocks = [
  { t: "Contexto", d: "Onde estamos e o que ler." },
  { t: "Objetivo", d: "Qual resultado único." },
  { t: "Escopo", d: "O que deve ser alterado." },
  { t: "Fora do escopo", d: "O que não alterar." },
  { t: "Restrições", d: "Bibliotecas, padrões, limites." },
  { t: "Critérios", d: "Como verificar." },
  { t: "Processo", d: "Analisar, planejar, implementar, revisar." },
  { t: "Validação", d: "Quais comandos executar." }
];
{ const gap = 0.24, w = (C.AREA - gap * 3) / 4;
  blocks.forEach((it, i) => {
    const col = i % 4, row = Math.floor(i / 4);
    const x = T.MX + col * (w + gap), y = 2.65 + row * 1.85;
    C.infoCard(s4, x, y, w, 1.65, it.t, [it.d], { tag: String(i + 1), headSize: 14, bodySize: 11.5 });
  }); }
s4.addNotes("Mostrar que o prompt pode ser preenchido como formulário — o participante não precisa escrever tudo em texto corrido. Comparar depois uma solicitação vaga com uma controlada.");

// ---------------- 05 · Vago → executável ----------------
const s5 = K.contentSlide(p, 7, "05 · Antes e depois", "Do pedido vago ao pedido executável", "Quanto mais importante a decisão, menos ela deve ficar implícita.");
let tc = C.twoCol(2.5);
C.codeCard(s5, tc.xL, tc.y, tc.w, 1.42, "\"Faça um login moderno\npara o sistema.\"", { tag: "Antes · vago", size: 13, ls: 21 });
s5.addText("O que ficou indefinido? tecnologia, escopo, critérios, validação…",
  { x: tc.xL + 0.05, y: 4.12, w: tc.w - 0.1, h: 2.0, fontFace: T.FONT, fontSize: 13, color: T.GRAY, valign: "top" });
C.codeCard(s5, tc.xR, tc.y, tc.w, 3.85,
  "Contexto: React organizado por features.\nObjetivo: entrada por e-mail, sem senha.\nEscopo: campo de e-mail, validação, sessão,\n  logout, dados separados por e-mail.\nFora do escopo: senha, cadastro, backend.\nRestrições: não instalar deps.\nCritérios: e-mail válido entra; inválido erra;\n  sessão permanece; logout encerra;\n  tarefas de um e-mail não vão para outro.\nProcesso: analise, planeje, implemente.\nValidação: testes, lint e build.",
  { tag: "Depois · estruturado", size: 10.5, ls: 17 });
s5.addNotes("Ler o prompt ruim e perguntar o que ficou indefinido; depois apresentar o estruturado. Repetir esse contexto em toda conversa seria ineficiente — parte dele deve morar no repositório.");

// ---------------- 06 · Temporário x persistente ----------------
const s6 = K.contentSlide(p, 8, "06 · Contexto", "Contexto temporário e contexto persistente", "Nem toda instrução pertence ao prompt.");
tc = C.twoCol(2.55);
C.infoCard(s6, tc.xL, tc.y, tc.w, 3.7, "Prompt da tarefa", [
  "Objetivo específico", "Escopo atual", "Critérios atuais"
], { tag: "Temporário", accent: true, bodySize: 14, gap: 12 });
C.infoCard(s6, tc.xR, tc.y, tc.w, 3.7, "Arquivos do projeto", [
  "Arquitetura e organização das pastas", "Comandos e padrões", "Limites arquiteturais e política de testes", "Definição de concluído e deps permitidas"
], { tag: "Persistente", accent: true, bodySize: 13.5, gap: 9 });
s6.addNotes("O prompt contém a tarefa atual; as regras que se repetem devem estar no projeto. Isso reduz prompts longos e evita que cada pessoa explique o projeto de um jeito diferente. O arquivo principal dessas regras será o AGENTS.md.");

// ---------------- 07 · AGENTS.md ----------------
const s7 = K.contentSlide(p, 9, "07 · Contexto persistente", "AGENTS.md: contrato geral com agentes", "Deve ser um contrato, não um manual enorme. Detalhes ficam em documentos ou skills.");
tc = C.twoCol(2.55);
C.infoCard(s7, tc.xL, tc.y, tc.w, 3.7, "Responde a", [
  "O que ler antes de começar",
  "Como o projeto está organizado",
  "O que não pode ser feito",
  "Quais comandos executar",
  "Quando a tarefa pode ser concluída"
], { accent: true, bodySize: 13.5, gap: 9 });
C.codeCard(s7, tc.xR, tc.y, tc.w, 3.7,
  "Não instale dependências sem\njustificar.\n\nNão altere funcionalidades fora\ndo escopo.\n\nExecute `npm run validate`\nantes de concluir.",
  { tag: "Exemplo de regra", size: 12.5, ls: 20 });
s7.addNotes("O AGENTS.md é o contrato geral do projeto com agentes de código. Para o Claude Code, teremos também um arquivo específico.");

// ---------------- 08 · CLAUDE.md ----------------
const s8 = K.contentSlide(p, 10, "08 · Contexto persistente", "CLAUDE.md: orientação específica da ferramenta", "A regra geral fica no AGENTS.md. O CLAUDE.md é uma adaptação de uso — sem criar regras contraditórias.");
tc = C.twoCol(2.55);
C.infoCard(s8, tc.xL, tc.y, tc.w, 3.7, "Orienta o Claude Code a", [
  "Ler o AGENTS.md",
  "Consultar documentos na ordem correta",
  "Localizar skills em .claude/skills",
  "Planejar mudanças maiores",
  "Executar os comandos do projeto"
], { accent: true, bodySize: 13.5, gap: 9 });
C.infoCard(s8, tc.xR, tc.y, tc.w, 3.7, "Alerta", [
  "Se os arquivos repetirem grandes blocos, podem divergir com o tempo",
  "Prefira referências e instruções curtas"
], { accent: true, bodySize: 14, gap: 12, bodyColor: T.DARK });
s8.addNotes("Alguns procedimentos são específicos demais para permanecer sempre no contexto. Para isso usamos skills.");

// ---------------- 09 · O que é skill ----------------
const s9 = K.contentSlide(p, 11, "09 · Skills", "O que é uma skill", "Um procedimento reutilizável: ensina ao agente como executar um tipo específico de tarefa.");
tc = C.twoCol(2.55);
C.infoCard(s9, tc.xL, tc.y, tc.w, 3.7, "Uma skill contém", [
  "Quando usar", "Passos", "Regras", "Formato de saída"
], { accent: true, bodySize: 14, gap: 11 });
C.infoCard(s9, tc.xR, tc.y, tc.w, 3.7, "Exemplo: plan-feature", [
  "Ler a arquitetura",
  "Identificar requisitos",
  "Listar arquivos afetados",
  "Dividir a execução e apontar riscos",
  "Não alterar código"
], { accent: true, bodySize: 13.5, gap: 9 });
s9.addText("O prompt diz o que precisamos agora. A skill descreve como executar um tipo de trabalho.",
  { x: T.MX, y: 6.15, w: 12.1, h: 0.4, fontFace: T.FONT, fontSize: 13, italic: true, color: T.PURPLE });
s9.addNotes("Em vez de repetir esse processo em cada prompt, solicitamos o uso da skill.");

// ---------------- 10 · Anatomia da skill ----------------
const s10 = K.contentSlide(p, 12, "10 · Skills", "Anatomia e uso de uma skill", "Uma skill útil é específica. Ruim: “ajude no projeto”. Melhor: “analise e gere requisitos, proposta, tarefas e riscos”.");
C.codeCard(s10, T.MX, 2.55, 5.0, 3.85, "plan-feature/\n├── SKILL.md\n└── references/", { tag: "Estrutura mínima", size: 13, ls: 22 });
s10.addText("O SKILL.md traz:", { x: T.MX + 0.32, y: 4.9, w: 4.4, h: 0.3, fontFace: T.FONT, fontSize: 11, color: "B9A9E6" });
s10.addText([
  { text: "name", options: { color: T.PURPLE2, bold: true } }, { text: "\n", options: {} },
  { text: "description", options: { color: T.PURPLE2, bold: true } }, { text: "\n", options: {} },
  { text: "instruções", options: { color: "E8E0FF" } }, { text: "\n", options: {} },
  { text: "saída obrigatória", options: { color: "E8E0FF" } }
], { x: T.MX + 0.32, y: 5.25, w: 4.4, h: 0.95, fontFace: T.MONO, fontSize: 11.5, lineSpacing: 17 });
C.infoCard(s10, T.MX + 5.4, 2.55, 6.7, 3.85, "As 8 skills do template", [
  "plan-app   ·   plan-feature",
  "implement-feature   ·   generate-tests",
  "review-changes   ·   update-documentation",
  "prepare-pull-request   ·   frontend-skill"
], { tag: "Catálogo", accent: true, bodySize: 13.5, gap: 9 });
s10.addNotes("Demonstração: “Use a skill plan-feature para planejar o widget meteorológico. Não altere arquivos.” Mostrar o formato da resposta e conferir se houve mudança no repositório.");

// ---------------- 11 · MCP ----------------
const s11 = K.contentSlide(p, 13, "11 · MCP", "MCP: conexão com ferramentas externas", "MCP entrega ferramentas e dados; não substitui regras de acesso.");
tc = C.twoCol(2.5);
C.infoCard(s11, tc.xL, tc.y, tc.w, 3.85, "Pode dar acesso a", [
  "GitHub e arquivos", "Bancos de dados", "Documentação", "Ferramentas internas"
], { accent: true, bodySize: 14, gap: 11 });
C.infoCard(s11, tc.xR, tc.y, tc.w, 3.85, "Regras de segurança", [
  "Servidores de origem conhecida",
  "Começar com leitura; menor acesso possível",
  "Nunca credenciais no prompt — usar variáveis de ambiente",
  "Confirmar operações destrutivas; remover acessos não usados"
], { accent: true, bodySize: 12.5, gap: 8 });
s11.addNotes("A pergunta principal não é só 'o que o MCP faz?', mas 'o que ele pode acessar e alterar?'. Demonstração sugerida: uma ação somente leitura, como listar informações de um repositório.");

// ---------------- 12 · Modelo e raciocínio ----------------
const s12 = K.contentSlide(p, 14, "12 · Modelo", "Modelo e raciocínio conforme a tarefa", "Três perguntas: a tarefa é ambígua? um erro teria impacto? envolve muitas etapas ou ferramentas?");
const quad = [
  { tag: "Alto impacto · baixa ambiguidade", t: "Forte / alto raciocínio", d: "Mudança relevante, porém clara." },
  { tag: "Alto impacto · alta ambiguidade", t: "Forte + revisão humana", d: "Arquitetura, erro difícil." },
  { tag: "Baixo impacto · baixa ambiguidade", t: "Rápido / baixo raciocínio", d: "Renomear, formatar, documentar." },
  { tag: "Baixo impacto · alta ambiguidade", t: "Geral / médio", d: "Feature em vários arquivos." }
];
{ const gap = 0.4, w = (C.AREA - gap) / 2;
  quad.forEach((it, i) => {
    const col = i % 2, row = Math.floor(i / 2);
    const x = T.MX + col * (w + gap), y = 2.55 + row * 1.9;
    C.infoCard(s12, x, y, w, 1.7, it.t, it.d ? [it.d] : [], { tag: it.tag, accent: row === 0, headColor: T.PURPLE, headSize: 16, bodySize: 12.5 });
  }); }
s12.addText("Quanto mais respostas positivas, maior a capacidade e o nível de revisão. Raciocínio maior não corrige prompt incompleto.",
  { x: T.MX, y: 6.3, w: 12.1, h: 0.4, fontFace: T.FONT, fontSize: 12.5, italic: true, color: T.PURPLE });
s12.addNotes("Não existe um único modelo ideal para tudo. Alerta: raciocínio maior não substitui critérios de aceite.");

// ---------------- 13 · Exercício ----------------
const s13 = K.contentSlide(p, 15, "13 · Exercício", "Reescrever um prompt (em duplas)", "Prompt inicial: “Adicione clima no sistema e deixe bonito.” — 7 min para reescrever.");
tc = C.twoCol(2.5);
C.infoCard(s13, tc.xL, tc.y, tc.w, 3.85, "Campos de apoio", [
  "Contexto", "Objetivo", "Escopo", "Não escopo", "Restrições", "Critérios", "Validação"
], { tag: "Preencher", accent: true, bodySize: 13, gap: 7 });
C.codeCard(s13, tc.xR, tc.y, tc.w, 3.85,
  "Objetivo: clima atual por cidade.\nEscopo: campo, busca, temperatura,\n  condição, loading e erro.\nFora do escopo: previsão, geoloc,\n  favoritos, design global.\nRestrições: serviço do projeto;\n  não instalar deps; não mexer\n  em login/tarefas.\nProcesso: plano antes de alterar.\nValidação: testes, lint, build.",
  { tag: "Versão de referência", size: 11, ls: 17.5 });
s13.addNotes("Formar duplas; 7 min; leitura; corrigir primeiro escopo e critérios; mostrar a referência. Este será o padrão usado na prática do Dia 3.");

// ---------------- FECHO ----------------
const fim = K.bannerSlide(p, {
  kicker: "Em resumo · Dia 2",
  titleRuns: [["Cinco camadas ", "dark"], ["de orientação", "purple"]],
  bulletList: [
    "Prompt descreve a tarefa",
    "AGENTS.md registra as regras gerais",
    "CLAUDE.md orienta uma ferramenta específica",
    "Skills registram procedimentos",
    "MCP entrega ferramentas externas"
  ],
  dateLabel: "Modelo forte + contexto fraco continua sendo contexto fraco · Dia 3: prática"
});
fim.addNotes("Amanhã vamos utilizar essas camadas para criar uma aplicação a partir do template oficial.");

K.save(p, __dirname + "/deck2.pptx").then(f => console.log("OK", f));
