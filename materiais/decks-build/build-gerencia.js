const C = require("./common.js");
const { K, T } = C;
const p = K.newDeck();
let tc;

// ---------------- CAPA ----------------
const cap = K.bannerSlide(p, {
  kicker: "Proposta de treinamento interno",
  titleRuns: [["Usando IA: ", "dark"], ["da concepção à entrega", "purple"]],
  subtitle:
    "Um processo comum para transformar ideias em aplicações organizadas com agentes de código.\nFormação para pessoas que usam IA para construir software sem serem desenvolvedoras.",
  strip: ["3 DIAS", "→", "2H POR DIA", "→", "MATERIAIS PRONTOS", "→", "PEDIDO: TURMA PILOTO"],
  dateLabel: "Apresentação à gerência",
});
cap.addNotes(
  "Abertura em uma frase: o time já usa agentes de código. O que falta não é ferramenta, é processo. Esta proposta pede aprovação de uma turma piloto — os materiais já estão prontos."
);

// ---------------- 01 · MOTIVAÇÃO ----------------
const s1 = K.contentSlide(
  p,
  2,
  "01 · Motivação",
  "Agentes aceleram o código. Sem processo, aceleram o retrabalho.",
  "Tudo o que não definimos antes de pedir vira uma decisão que o agente toma sozinho."
);
tc = C.twoCol(2.5);
C.infoCard(
  s1,
  tc.xL,
  tc.y,
  tc.w,
  3.6,
  "O que acontece hoje",
  [
    "Cada projeto nasce com estrutura diferente do anterior",
    "O agente escolhe tecnologia, pastas e bibliotecas sozinho",
    "Funciona na demonstração e é difícil de continuar",
    "O conhecimento fica na conversa, não no repositório",
  ],
  { tag: "Sem processo", accent: true, bodySize: 13.5, gap: 9 }
);
C.infoCard(
  s1,
  tc.xR,
  tc.y,
  tc.w,
  3.6,
  "O custo",
  [
    "Retrabalho quando alguém precisa dar continuidade",
    "Dependência da pessoa que conversou com o agente",
    "Decisões de negócio tomadas por quem não deveria",
    "Risco que só aparece depois, em produção",
  ],
  { tag: "Consequência", bodySize: 13.5, gap: 9, bodyColor: T.GRAY }
);
s1.addNotes(
  "Não é uma crítica ao time nem à ferramenta. É o efeito previsível de pedir código sem antes definir problema, escopo e critérios."
);

// ---------------- 02 · O RISCO É CONCRETO ----------------
const s2 = K.contentSlide(
  p,
  3,
  "02 · O risco é concreto",
  "Um aplicativo que funciona pode expor o dado de outra pessoa",
  "Demonstração real, usada na abertura do treinamento."
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
    "Não é um erro de programação: é consequência de desorganização",
    "Com sete chaves de armazenamento espalhadas por quatro arquivos, não havia onde escrever a regra “os dados são de quem entrou”",
    "No projeto organizado, a regra tem um endereço único — e um teste que a protege",
  ],
  { tag: "A causa", accent: true, bodySize: 13, gap: 10 }
);
s2.addText(
  "A pergunta que fica: em quantas aplicações internas isso já existe, sem ninguém ter notado?",
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
  "Este é o momento mais forte do treinamento e o melhor argumento para a gerência: o defeito é invisível em qualquer demonstração e aparece só quando uma segunda pessoa usa o sistema."
);

// ---------------- 03 · EVIDÊNCIA ----------------
const s3 = K.contentSlide(
  p,
  4,
  "03 · Evidência",
  "O ganho com IA é real — e depende do contexto",
  "Dois estudos, resultados opostos. A diferença explica a proposta."
);
{
  const gap = 0.34,
    w = (C.AREA - gap * 2) / 3;
  K.statCard(s3, T.MX, 2.5, w, 2.5, "+55,8%", "mais rápido com assistente de IA, em tarefa controlada e bem definida");
  K.statCard(s3, T.MX + w + gap, 2.5, w, 2.5, "−19%", "mais lento: desenvolvedores experientes, no próprio código, sem processo definido");
  C.infoCard(
    s3,
    T.MX + 2 * (w + gap),
    2.5,
    w,
    2.5,
    "O que explica",
    [
      "Clareza do que foi pedido",
      "Familiaridade com o código",
      "Custo de revisar o resultado",
    ],
    { accent: true, bodySize: 12.5, gap: 7 }
  );
}
s3.addText(
  "A conclusão que orienta o treinamento: agentes são aceleradores de execução sob processo — não substitutos de arquitetura, validação e responsabilidade.",
  {
    x: T.MX,
    y: 5.35,
    w: C.AREA,
    h: 0.9,
    fontFace: T.FONT,
    fontSize: 14,
    color: T.DARK,
    valign: "top",
  }
);
s3.addNotes(
  "Fontes: The Impact of AI on Developer Productivity (arXiv 2302.06590, 2023) para o +55,8%; estudo da METR com desenvolvedores open source experientes (2025) para o −19%. Usar os dois juntos evita tanto o discurso de hype quanto o de rejeição."
);

// ---------------- 04 · PROPÓSITO ----------------
const s4 = K.contentSlide(
  p,
  5,
  "04 · Propósito",
  "Ensinar um processo comum, não uma ferramenta nova",
  "Cinco etapas. Uma produz a entrada da próxima. O agente ajuda em todas — mas não decide sozinho."
);
C.stepRow(
  s4,
  [
    { t: "Definir", d: "Problema, público e limite" },
    { t: "Especificar", d: "Funcionalidades e critérios verificáveis" },
    { t: "Dividir", d: "Tarefas pequenas, com validação própria" },
    { t: "Implementar", d: "Um incremento por vez" },
    { t: "Validar", d: "Antes de considerar concluído" },
  ],
  2.6,
  { h: 2.5 }
);
s4.addText(
  "O que muda na prática: as decisões de negócio e de escopo voltam para a equipe. O agente executa.",
  {
    x: T.MX,
    y: 5.5,
    w: C.AREA,
    h: 0.8,
    fontFace: T.FONT,
    fontSize: 14,
    bold: true,
    color: T.PURPLE,
    valign: "top",
  }
);
s4.addNotes(
  "Reforçar: não estamos transformando ninguém em engenheiro de software. Estamos dando um processo suficientemente claro para o dia a dia."
);

// ---------------- 05 · OBJETIVOS ----------------
const s5 = K.contentSlide(
  p,
  6,
  "05 · Objetivos",
  "Cada dia termina em um artefato verificável",
  "Não é avaliação por percepção: é um arquivo que dá para abrir e conferir."
);
K.table(
  s5,
  [
    [K.TABLE.header("Dia"), K.TABLE.header("O participante entrega"), K.TABLE.header("Como se verifica")],
    [
      K.TABLE.accent("1"),
      K.TABLE.cell("A definição escrita de um projeto real: problema, escopo, não escopo e critérios"),
      K.TABLE.muted("documento versionado no repositório"),
    ],
    [
      K.TABLE.accent("2"),
      K.TABLE.cell("As regras do projeto para agentes, e um plano gerado e revisado"),
      K.TABLE.muted("a dupla aponta uma suposição errada do agente"),
    ],
    [
      K.TABLE.accent("3"),
      K.TABLE.cell("Uma aplicação funcionando, testada, documentada e revisada"),
      K.TABLE.muted("validações passando e entrega registrada"),
    ],
  ],
  { x: T.MX, y: 2.5, colW: [0.9, 6.3, 4.9], rowH: [0.5, 0.95, 0.95, 0.95] }
);
s5.addText(
  "E o objetivo que importa mais: ao final, a pessoa explica onde cada parte do sistema está e por quê — sem abrir o código.",
  {
    x: T.MX,
    y: 6.05,
    w: C.AREA,
    h: 0.7,
    fontFace: T.FONT,
    fontSize: 13.5,
    italic: true,
    color: T.PURPLE,
    valign: "top",
  }
);
s5.addNotes(
  "Se a pessoa tem uma aplicação funcionando mas não sabe dizer onde fica o quê, o objetivo não foi atingido. É por isso que o último critério é oral e não depende de ferramenta."
);

// ---------------- 06 · FORMATO ----------------
const s6 = K.contentSlide(
  p,
  7,
  "06 · Formato",
  "Seis horas por pessoa, em três encontros",
  "Predominantemente prático a partir do primeiro dia."
);
tc = C.twoCol(2.5);
C.infoCard(
  s6,
  tc.xL,
  tc.y,
  tc.w,
  3.5,
  "Como funciona",
  [
    "3 encontros de 2 horas, com intervalo entre eles",
    "Duplas: uma pessoa conduz o agente, a outra acompanha escopo e critérios",
    "Cada dupla traz uma demanda pequena e real da área",
    "Turma sugerida: 8 a 12 pessoas",
  ],
  { tag: "Investimento de tempo", accent: true, bodySize: 13, gap: 8 }
);
C.infoCard(
  s6,
  tc.xR,
  tc.y,
  tc.w,
  3.5,
  "O que já está pronto",
  [
    "Roteiro completo dos três dias, minuto a minuto",
    "Slides, entregáveis, prompts e referências publicados",
    "Dois projetos de exemplo e templates de partida",
    "Site interno com todo o material para download",
  ],
  { tag: "Sem custo de produção", bodySize: 13, gap: 8, bodyColor: T.GRAY }
);
s6.addNotes(
  "Ponto importante para a gerência: o material está construído e validado. O que se pede é agenda das pessoas, não orçamento de produção."
);

// ---------------- 07 · RETORNO ----------------
const s7 = K.contentSlide(
  p,
  8,
  "07 · Retorno",
  "O que continua valendo depois do treinamento",
  "O principal produto não é a aplicação construída no terceiro dia."
);
tc = C.twoCol(2.5);
C.checklist(
  s7,
  tc.xL,
  tc.y,
  tc.w,
  [
    "Um template comum para novos projetos",
    "Um padrão de documentação que o agente segue",
    "Checklists de escopo, critérios e conclusão",
    "Uma definição compartilhada de “pronto”",
  ],
  { size: 13, ih: 0.52 }
);
C.infoCard(
  s7,
  tc.xR,
  tc.y,
  tc.w,
  3.6,
  "Riscos que o processo reduz",
  [
    "Credenciais e dados sensíveis expostos por descuido",
    "Integrações externas com permissão maior que a necessária",
    "Escopo crescendo sem decisão de ninguém",
    "Entregas aceitas sem evidência de que funcionam",
  ],
  { tag: "Governança", accent: true, bodySize: 13, gap: 8 }
);
s7.addText(
  "A capacidade de repetir o processo é o que se leva para a próxima demanda — e para a seguinte.",
  {
    x: T.MX,
    y: 6.25,
    w: C.AREA,
    h: 0.6,
    fontFace: T.FONT,
    fontSize: 13.5,
    italic: true,
    color: T.PURPLE,
  }
);
s7.addNotes(
  "Se alguém perguntar o retorno em uma frase: sai-se do uso ad hoc de agentes para um uso disciplinado e reaplicável, com os mesmos artefatos em todo projeto da área."
);

// ---------------- FECHO ----------------
const fim = K.bannerSlide(p, {
  kicker: "Próximo passo",
  titleRuns: [["Aprovar uma ", "dark"], ["turma piloto", "purple"]],
  bulletList: [
    "Definir data dos três encontros e liberar a agenda dos participantes",
    "Confirmar a lista de 8 a 12 pessoas",
    "Cada dupla escolhe uma demanda pequena e real para usar como projeto",
    "Ao final, retrospectiva com as melhorias que entram no padrão da área",
  ],
  dateLabel: "Materiais, roteiros e referências já disponíveis no repositório interno",
});
fim.addNotes(
  "Fechar pedindo a decisão concreta: data e lista de participantes. O restante está pronto. Sugerir também um encontro curto de reforço duas a três semanas depois, em que cada pessoa mostra um projeto real onde aplicou o processo."
);

K.save(p, process.argv[2] || "deck-gerencia.pptx").then((f) => console.log("OK", f));
