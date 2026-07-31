const C = require("./common.js");
const { K, T } = C;
const p = K.newDeck();
let tc;

// ---------------- CAPA ----------------
const cap = K.bannerSlide(p, {
  kicker: "Momento 1 · Gestão",
  titleRuns: [["Acompanhar projetos ", "dark"], ["feitos com agentes", "purple"]],
  subtitle:
    "O que muda no trabalho da equipe, o que passa a existir em cada projeto e onde a gestão entra.\nNão é sobre aprender a ferramenta — é sobre saber o que pedir e o que conferir.",
  strip: ["1 HORA", "→", "UM ENCONTRO", "→", "SAI O COMBINADO DA ÁREA"],
  dateLabel: "Antes da formação de quem vai implementar",
});
cap.addNotes(
  "Abrir dizendo o que este encontro não é: não é treinamento de ferramenta, não é prestação de contas do que a área fez até aqui. É o combinado de como a área vai trabalhar quando a equipe começar a usar o processo. Sai daqui um documento preenchido."
);

// ---------------- 01 · O QUE MUDA ----------------
const s1 = K.contentSlide(
  p,
  2,
  "01 · O que muda",
  "A equipe já usa agentes. O que falta não é ferramenta, é processo.",
  "Tudo o que não é definido antes de pedir vira uma decisão que o agente toma sozinho."
);
tc = C.twoCol(2.5);
C.infoCard(
  s1,
  tc.xL,
  tc.y,
  tc.w,
  3.5,
  "O que muda para a equipe",
  [
    "Define problema, escopo e critérios antes de pedir código",
    "Divide a demanda em partes pequenas, cada uma verificável",
    "Escreve as regras do projeto para o agente seguir",
    "Valida antes de dizer que terminou",
  ],
  { tag: "No dia a dia", accent: true, bodySize: 13, gap: 8 }
);
C.infoCard(
  s1,
  tc.xR,
  tc.y,
  tc.w,
  3.5,
  "O que muda para você",
  [
    "Aprova escopo e critérios antes, não a entrega pronta",
    "Acompanha por artefato escrito, não por status verbal",
    "Cobra evidência de validação junto com a entrega",
    "Decide o que é de negócio — o agente executa o resto",
  ],
  { tag: "Na gestão", bodySize: 13, gap: 8, bodyColor: T.GRAY }
);
s1.addText(
  "O trabalho da gestão não aumenta: ele muda de lugar — do fim para o começo de cada entrega.",
  {
    x: T.MX,
    y: 6.15,
    w: C.AREA,
    h: 0.6,
    fontFace: T.FONT,
    fontSize: 13.5,
    bold: true,
    color: T.PURPLE,
    valign: "top",
  }
);
s1.addNotes(
  "Antecipar a objeção mais provável: “isso é mais burocracia”. Não é documento novo criado para a gestão — são quatro artefatos curtos produzidos durante o próprio trabalho, e o agente ajuda a escrever cada um."
);

// ---------------- 02 · O RISCO É CONCRETO ----------------
const s2 = K.contentSlide(
  p,
  3,
  "02 · O risco é concreto",
  "Um aplicativo que funciona pode expor o dado de outra pessoa",
  "Demonstração ao vivo, em quatro passos."
);
tc = C.twoCol(2.5);
C.codeCard(
  s2,
  tc.xL,
  tc.y,
  tc.w,
  2.6,
  "1. entra como ana@empresa.com\n2. cria a tarefa “consulta médica”\n3. clica em sair\n4. entra como joao@empresa.com\n\n→ a tarefa da Ana está lá",
  { tag: "Quatro passos, 20 segundos", size: 12.5, ls: 20 }
);
C.infoCard(
  s2,
  tc.xR,
  tc.y,
  tc.w,
  3.9,
  "Ninguém programou esse vazamento",
  [
    "Não é erro de programação: é consequência de desorganização",
    "Com sete chaves de armazenamento espalhadas por quatro arquivos, não havia onde escrever a regra “os dados são de quem entrou”",
    "No projeto organizado, a regra tem um endereço único — e um teste que a protege",
  ],
  { tag: "A causa", accent: true, bodySize: 13, gap: 10 }
);
s2.addText(
  "O ponto para a gestão: isso passa por qualquer aceite baseado em ver funcionando.",
  {
    x: T.MX,
    y: 5.35,
    w: 5.85,
    h: 1.0,
    fontFace: T.FONT,
    fontSize: 13,
    italic: true,
    color: T.PURPLE,
    valign: "top",
  }
);
s2.addNotes(
  "Rodar a demonstração ao vivo, sem pressa. Depois perguntar ao grupo: com o que vocês contam hoje para saber que isso não aconteceu em alguma aplicação da área? A resposta honesta costuma ser “nada”."
);

// ---------------- 03 · O PROCESSO ----------------
const s3 = K.contentSlide(
  p,
  4,
  "03 · O processo",
  "Cinco etapas — e a pergunta que a gestão faz em cada uma",
  "Uma etapa produz a entrada da próxima. O agente ajuda em todas, mas não decide sozinho."
);
C.stepRow(
  s3,
  [
    { t: "Definir", d: "Que problema isso resolve, e de quem?" },
    { t: "Especificar", d: "Como saberemos que terminou?" },
    { t: "Dividir", d: "Qual é a menor entrega que já tem valor?" },
    { t: "Implementar", d: "O que está pronto e o que está em andamento?" },
    { t: "Validar", d: "O que foi validado, e como?" },
  ],
  2.6,
  { h: 2.6 }
);
s3.addText(
  "As perguntas acima são o roteiro de acompanhamento inteiro. Nenhuma delas exige conhecimento técnico.",
  {
    x: T.MX,
    y: 5.6,
    w: C.AREA,
    h: 0.8,
    fontFace: T.FONT,
    fontSize: 14,
    bold: true,
    color: T.PURPLE,
    valign: "top",
  }
);
s3.addNotes(
  "Ler as cinco perguntas em voz alta, na ordem. Elas voltam no entregável “O que conferir em cada etapa”, com o sinal de alerta de cada uma."
);

// ---------------- 04 · OS QUATRO ARTEFATOS ----------------
const s4 = K.contentSlide(
  p,
  5,
  "04 · Os quatro artefatos",
  "O que passa a existir em cada projeto",
  "Nenhum é documento novo: todos saem do próprio trabalho, com ajuda do agente."
);
K.table(
  s4,
  [
    [K.TABLE.header("Artefato"), K.TABLE.header("O que é"), K.TABLE.header("O que a gestão confere")],
    [
      K.TABLE.accent("Escopo e não escopo"),
      K.TABLE.cell("O que entra agora e o que fica explicitamente de fora"),
      K.TABLE.muted("a lista de não escopo existe e não está vazia"),
    ],
    [
      K.TABLE.accent("Critérios de aceite"),
      K.TABLE.cell("Cada funcionalidade descrita de forma verificável, antes de implementar"),
      K.TABLE.muted("dá para responder sim ou não, sem interpretação"),
    ],
    [
      K.TABLE.accent("Regras do projeto"),
      K.TABLE.cell("As instruções que o agente é obrigado a seguir no repositório"),
      K.TABLE.muted("existem, e alguém além do autor leu"),
    ],
    [
      K.TABLE.accent("Registro de entrega"),
      K.TABLE.cell("O que mudou, por quê, e a prova de que foi validado"),
      K.TABLE.muted("traz a evidência, não só a descrição"),
    ],
  ],
  { x: T.MX, y: 2.5, colW: [2.6, 5.2, 4.3], rowH: [0.45, 0.8, 0.8, 0.8, 0.8] }
);
s4.addText(
  "É por estes quatro que a área é acompanhada — não por reunião de status.",
  {
    x: T.MX,
    y: 6.3,
    w: C.AREA,
    h: 0.6,
    fontFace: T.FONT,
    fontSize: 13.5,
    italic: true,
    color: T.PURPLE,
    valign: "top",
  }
);
s4.addNotes(
  "Mostrar rapidamente o PRD e o AGENTS.md do projeto de exemplo, para que os quatro deixem de ser abstratos. Não entrar no conteúdo técnico: o objetivo é a pessoa reconhecer o formato quando vir."
);

// ---------------- 05 · ACEITAR UMA ENTREGA ----------------
const s5 = K.contentSlide(
  p,
  6,
  "05 · Aceitar uma entrega",
  "Cinco perguntas para quando alguém disser “está pronto”",
  "Uma conversa de cinco minutos, sem nenhuma pergunta técnica."
);
tc = C.twoCol(2.5);
C.checklist(
  s5,
  tc.xL,
  tc.y,
  tc.w,
  [
    "Quais critérios estavam escritos, e foram atendidos?",
    "O que foi validado, e como?",
    "O que ficou de fora?",
    "Se essa pessoa sair de férias, quem continua?",
    "Alguma decisão de negócio foi tomada no caminho?",
  ],
  { size: 12.5, ih: 0.56 }
);
C.infoCard(
  s5,
  tc.xR,
  tc.y,
  tc.w,
  3.24,
  "O que não vale a pena perguntar",
  [
    "Qual linguagem ou biblioteca foi usada",
    "Quantas linhas de código tem",
    "Se o agente escreveu tudo sozinho",
    "Se está “100% pronto” — prefira “quais critérios faltam”",
  ],
  { tag: "Economia de tempo", accent: true, bodySize: 12.5, gap: 8 }
);
s5.addText(
  "“Testei aqui e funcionou” descreve uma demonstração — não uma validação.",
  {
    x: T.MX,
    y: 6.0,
    w: C.AREA,
    h: 0.6,
    fontFace: T.FONT,
    fontSize: 13.5,
    bold: true,
    color: T.PURPLE,
    valign: "top",
  }
);
s5.addNotes(
  "Quando há dado de pessoa envolvido, acrescentar as quatro perguntas do entregável: o que acontece se outra pessoa entrar, onde o dado fica, se há credencial escrita no projeto e se a integração externa é só de leitura."
);

// ---------------- 06 · SEM VIRAR GARGALO ----------------
const s6 = K.contentSlide(
  p,
  7,
  "06 · Sem virar gargalo",
  "A gestão entra no começo e no fim de cada incremento",
  "Se um projeto precisa de aprovação a cada passo, o escopo estava grande demais."
);
tc = C.twoCol(2.5);
C.infoCard(
  s6,
  tc.xL,
  tc.y,
  tc.w,
  3.3,
  "Faça",
  [
    "Aprovar escopo e critérios antes de a implementação começar",
    "Pedir a evidência junto com a entrega",
    "Ler o não escopo e questionar o que ficou de fora",
    "Perguntar quem mais consegue continuar aquele projeto",
  ],
  { tag: "Acompanhamento", accent: true, bodySize: 12.5, gap: 8 }
);
C.infoCard(
  s6,
  tc.xR,
  tc.y,
  tc.w,
  3.3,
  "Evite",
  [
    "Revisar código",
    "Pedir relatório de status em reunião",
    "Reabrir escopo no meio sem registrar a decisão",
    "Aceitar “só o fulano sabe mexer nisso” como resposta",
  ],
  { tag: "Custa tempo e não reduz risco", bodySize: 12.5, gap: 8, bodyColor: T.GRAY }
);
s6.addText(
  "O prazo de resposta da gestão faz parte do processo: decisão que demora mais de um dia útil precisa de outro dono.",
  {
    x: T.MX,
    y: 5.95,
    w: C.AREA,
    h: 0.7,
    fontFace: T.FONT,
    fontSize: 13,
    italic: true,
    color: T.PURPLE,
    valign: "top",
  }
);
s6.addNotes(
  "Este slide costuma gerar a discussão mais útil do encontro. Deixar o grupo apontar onde hoje a aprovação trava — isso alimenta diretamente o combinado, no bloco de quem decide o quê."
);

// ---------------- 07 · O COMBINADO DA ÁREA ----------------
const s7 = K.contentSlide(
  p,
  8,
  "07 · O combinado da área",
  "O que preenchemos juntos agora",
  "É o entregável deste encontro — e a entrada da formação da equipe."
);
K.table(
  s7,
  [
    [K.TABLE.header("Bloco"), K.TABLE.header("O que sai preenchido")],
    [K.TABLE.accent("1 · O que vale para todo projeto"), K.TABLE.cell("quais artefatos passam a ser obrigatórios, e a partir de quando")],
    [K.TABLE.accent("2 · Quem decide o quê"), K.TABLE.cell("dono e prazo de resposta para escopo, critérios, integrações e aceite")],
    [K.TABLE.accent("3 · Como a evidência chega"), K.TABLE.cell("onde ficam os artefatos e o que a gestão recebe quando algo fica pronto")],
    [K.TABLE.accent("4 · Limites da área"), K.TABLE.cell("dado de pessoa real, credenciais, integrações que escrevem, publicação externa")],
    [K.TABLE.accent("5 · Quem participa do Momento 2"), K.TABLE.cell("nomes, duplas e a demanda real que cada uma vai levar")],
    [K.TABLE.accent("6 · Como saberemos que valeu"), K.TABLE.cell("até três sinais observáveis, e a data de revisão")],
  ],
  { x: T.MX, y: 2.45, colW: [4.4, 7.7], rowH: [0.42, 0.44, 0.44, 0.44, 0.44, 0.44, 0.44] }
);
s7.addText(
  "Combinado incompleto e honesto vale mais que combinado inventado: onde houver dúvida, escrevemos a dúvida.",
  {
    x: T.MX,
    y: 5.85,
    w: C.AREA,
    h: 0.7,
    fontFace: T.FONT,
    fontSize: 13.5,
    bold: true,
    color: T.PURPLE,
    valign: "top",
  }
);
s7.addNotes(
  "Bloco de 15 minutos. Conduzir pergunta a pergunta, projetando o modelo. Não enviar para preencher depois: um combinado feito em grupo é o que sustenta a cobrança futura."
);

// ---------------- 08 · O MOMENTO 2 ----------------
const s8 = K.contentSlide(
  p,
  9,
  "08 · O que acontece depois",
  "Momento 2 — a formação de quem vai implementar",
  "Três encontros de duas horas, sobre uma demanda real da área."
);
K.table(
  s8,
  [
    [K.TABLE.header("Dia"), K.TABLE.header("O que a equipe faz"), K.TABLE.header("O que a área recebe")],
    [
      K.TABLE.accent("1"),
      K.TABLE.cell("Define o projeto: problema, escopo, não escopo e critérios"),
      K.TABLE.muted("a definição escrita, versionada"),
    ],
    [
      K.TABLE.accent("2"),
      K.TABLE.cell("Escreve as regras do projeto e revisa um plano gerado pelo agente"),
      K.TABLE.muted("as regras e o plano revisado"),
    ],
    [
      K.TABLE.accent("3"),
      K.TABLE.cell("Constrói, testa, documenta e registra a entrega"),
      K.TABLE.muted("a aplicação e o registro de entrega"),
    ],
  ],
  { x: T.MX, y: 2.5, colW: [0.9, 6.5, 4.7], rowH: [0.5, 0.9, 0.9, 0.9] }
);
s8.addText(
  "A demanda que cada dupla leva não é exercício: sai da formação como entrega da área.",
  {
    x: T.MX,
    y: 5.95,
    w: C.AREA,
    h: 0.7,
    fontFace: T.FONT,
    fontSize: 13.5,
    italic: true,
    color: T.PURPLE,
    valign: "top",
  }
);
s8.addNotes(
  "Fechar o conteúdo aqui: o que a gestão combinou neste encontro é o que as duplas vão aplicar nos três dias. O material dos três dias está pronto e publicado no repositório interno."
);

// ---------------- FECHO ----------------
const fim = K.bannerSlide(p, {
  kicker: "Saímos daqui com",
  titleRuns: [["O combinado da área ", "dark"], ["preenchido", "purple"]],
  bulletList: [
    "Os artefatos que passam a ser obrigatórios em todo projeto",
    "Quem decide o quê — e em quanto tempo responde",
    "Onde a evidência fica e o que a gestão recebe a cada entrega",
    "Quem participa do Momento 2 e com qual demanda real",
    "Os sinais que a área vai observar, e quando revisamos",
  ],
  dateLabel: "Revisão sugerida: 2 a 3 semanas depois do último encontro do Momento 2",
});
fim.addNotes(
  "Encerrar lendo o combinado preenchido em voz alta. Se algum bloco ficou em branco, marcar quem completa e até quando — sem isso, o Momento 2 começa sem regra acordada."
);

K.save(p, process.argv[2] || "deck-gestao.pptx").then((f) => console.log("OK", f));
