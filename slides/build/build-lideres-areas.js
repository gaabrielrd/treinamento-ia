const C = require("./common.js");
const { K, T } = C;
const p = K.newDeck();
let tc;

// ---------------- CAPA ----------------
const cap = K.bannerSlide(p, {
  kicker: "Proposta em construção · queremos validar com vocês",
  titleRuns: [["Uma ideia para discutir: ", "dark"], ["autonomia, controle e qualidade", "purple"]],
  subtitle:
    "Uma formação prática em um processo comum para transformar ideias em aplicações organizadas com agentes de código.\nPara pessoas que já usam (ou gostariam de usar) IA para construir software sem serem desenvolvedoras.",
  strip: ["DOIS MOMENTOS", "→", "GESTÃO PRIMEIRO", "→", "DEPOIS QUEM IMPLEMENTA", "→", "NADA FECHADO"],
  dateLabel: "Conversa com os líderes de área",
});
cap.addNotes(
  "Abertura em uma frase: trouxemos uma ideia, não um plano fechado. Queremos o retorno de vocês sobre o diagnóstico, sobre o formato e sobre o papel da gestão no processo. A formação teria dois momentos — um com vocês, outro com quem vai implementar."
);

// ---------------- 01 · O PONTO DE PARTIDA ----------------
const s1 = K.contentSlide(
  p,
  2,
  "01 · O ponto de partida",
  "A sua equipe já usa agentes. O que falta não é ferramenta, é processo.",
  "Tudo o que não é definido antes de pedir vira uma decisão que o agente toma sozinho."
);
tc = C.twoCol(2.5);
C.infoCard(
  s1,
  tc.xL,
  tc.y,
  tc.w,
  3.6,
  "O que você provavelmente já viu",
  [
    "Cada projeto nasce com uma estrutura diferente do anterior",
    "O agente escolhe tecnologia, pastas e bibliotecas sozinho",
    "Funciona na demonstração e é difícil de continuar",
    "O conhecimento fica na conversa, não no repositório",
  ],
  { tag: "Hoje", accent: true, bodySize: 13.5, gap: 9 }
);
C.infoCard(
  s1,
  tc.xR,
  tc.y,
  tc.w,
  3.6,
  "O custo que chega até a gestão",
  [
    "Retrabalho sempre que outra pessoa precisa dar continuidade",
    "A entrega fica dependente de quem conversou com o agente",
    "Decisões de escopo e de negócio tomadas por quem não deveria",
    "Risco que só aparece depois, quando já está em uso",
  ],
  { tag: "Consequência", bodySize: 13.5, gap: 9, bodyColor: T.GRAY }
);
s1.addText(
  "Primeira coisa que queremos validar: isso descreve o que acontece na sua área?",
  {
    x: T.MX,
    y: 6.2,
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
  "Não é crítica ao time nem à ferramenta: é o efeito previsível de pedir código sem antes definir problema, escopo e critérios. Abrir para o grupo aqui — se o diagnóstico não bater com a realidade de alguma área, o resto da proposta precisa mudar."
);

// ---------------- 02 · O RISCO É CONCRETO ----------------
const s2 = K.contentSlide(
  p,
  3,
  "02 · O risco é concreto",
  "Um aplicativo que funciona pode expor o dado de outra pessoa",
  "Demonstração real, que abriria o encontro com a gestão."
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
  "É o argumento mais forte para quem responde pela área: o defeito é invisível em qualquer demonstração e aparece só quando uma segunda pessoa usa o sistema. Quem assina a entrega é quem lidera a área."
);

// ---------------- 03 · EVIDÊNCIA ----------------
const s3 = K.contentSlide(
  p,
  4,
  "03 · Evidência",
  "O ganho com IA é real — e depende do contexto",
  "Dois estudos, resultados opostos. A diferença é exatamente o que a formação trataria."
);
{
  const gap = 0.34,
    w = (C.AREA - gap * 2) / 3;
  K.statCard(s3, T.MX, 2.5, w, 2.5, "+55,8%", "mais rápido com assistente de IA, em tarefa controlada e bem definida");
  K.statCard(s3, T.MX + w + gap, 2.5, w, 2.5, "−19%", "mais lento: pessoas experientes, no próprio código, sem processo definido");
  C.infoCard(
    s3,
    T.MX + 2 * (w + gap),
    2.5,
    w,
    2.5,
    "O que explica a diferença",
    [
      "Clareza do que foi pedido",
      "Familiaridade com o código",
      "Custo de revisar o resultado",
    ],
    { accent: true, bodySize: 12.5, gap: 7 }
  );
}
s3.addText(
  "A conclusão que orienta a proposta: agentes são aceleradores de execução sob processo — não substitutos de arquitetura, validação e responsabilidade.",
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

// ---------------- 04 · O QUE ACREDITAMOS QUE A ÁREA GANHA ----------------
const s4 = K.contentSlide(
  p,
  5,
  "04 · A hipótese",
  "O que acreditamos que a área ganha",
  "Três resultados. Queremos ouvir de vocês se são os que importam — e se falta algum."
);
{
  const gap = 0.34,
    w = (C.AREA - gap * 2) / 3;
  C.infoCard(
    s4,
    T.MX,
    2.5,
    w,
    3.4,
    "Autonomia",
    [
      "A pessoa conduz o projeto do início ao fim, sem depender de fila de desenvolvimento",
      "Sabe explicar onde cada parte está e por quê",
      "Consegue retomar o que outra pessoa começou",
    ],
    { tag: "Para a equipe", accent: true, bodySize: 12.5, gap: 8 }
  );
  C.infoCard(
    s4,
    T.MX + w + gap,
    2.5,
    w,
    3.4,
    "Controle",
    [
      "Escopo e critérios escritos antes de começar",
      "Decisões de negócio voltam para a equipe — o agente executa",
      "Progresso visível em artefatos, não em percepção",
    ],
    { tag: "Para a gestão", accent: true, bodySize: 12.5, gap: 8 }
  );
  C.infoCard(
    s4,
    T.MX + 2 * (w + gap),
    2.5,
    w,
    3.4,
    "Qualidade",
    [
      "Uma definição compartilhada de “pronto”",
      "Validação antes da entrega, com evidência",
      "Riscos de dados e permissões tratados por padrão",
    ],
    { tag: "Para a entrega", accent: true, bodySize: 12.5, gap: 8 }
  );
}
s4.addText(
  "Os três viriam do mesmo lugar: um processo comum de cinco etapas — definir, especificar, dividir, implementar, validar.",
  {
    x: T.MX,
    y: 6.05,
    w: C.AREA,
    h: 0.7,
    fontFace: T.FONT,
    fontSize: 13.5,
    bold: true,
    color: T.PURPLE,
    valign: "top",
  }
);
s4.addNotes(
  "Este é o slide-âncora da conversa. Os três próximos detalham um eixo cada, sempre com o mesmo formato: o que mudaria no dia a dia e como a liderança perceberia. Se algum eixo não fizer sentido para a área, é aqui que a proposta se ajusta."
);

// ---------------- 05 · AUTONOMIA ----------------
const s5 = K.contentSlide(
  p,
  6,
  "05 · Autonomia",
  "Menos dependência de pessoa, mais capacidade instalada",
  "A equipe deixaria de precisar de tradução técnica para tirar uma ideia do papel."
);
tc = C.twoCol(2.5);
C.infoCard(
  s5,
  tc.xL,
  tc.y,
  tc.w,
  3.4,
  "O que muda no dia a dia",
  [
    "A pessoa escreve a definição do próprio projeto: problema, público e limite",
    "Divide a demanda em tarefas pequenas, cada uma com validação própria",
    "Conduz o agente com regras do projeto escritas, e não de memória",
    "Documenta no repositório, de forma que outra pessoa continue",
  ],
  { tag: "Na equipe", accent: true, bodySize: 12.5, gap: 8 }
);
C.checklist(
  s5,
  tc.xR,
  tc.y,
  tc.w,
  [
    "A pessoa explica o sistema sem abrir o código",
    "Um projeto parado é retomado por outra pessoa",
    "Demandas pequenas param de virar fila",
    "Menos “só o fulano sabe mexer nisso”",
  ],
  { size: 13, ih: 0.56 }
);
s5.addText(
  "Como você perceberia: os sinais acima apareceriam já na primeira demanda depois da formação.",
  {
    x: T.MX + tc.w + 0.4,
    y: 5.34,
    w: tc.w,
    h: 0.9,
    fontFace: T.FONT,
    fontSize: 12.5,
    italic: true,
    color: T.PURPLE,
    valign: "top",
  }
);
s5.addNotes(
  "Autonomia aqui não é “cada um faz o que quer”. É a equipe conseguir percorrer o processo inteiro sem intermediário — dentro de um padrão que a área definiu."
);

// ---------------- 06 · CONTROLE ----------------
const s6 = K.contentSlide(
  p,
  7,
  "06 · Controle",
  "O que antes era conversa vira artefato que dá para conferir",
  "Você acompanharia o trabalho pelo que está escrito, não por status verbal."
);
tc = C.twoCol(2.5);
C.infoCard(
  s6,
  tc.xL,
  tc.y,
  tc.w,
  3.4,
  "O que passa a existir em cada projeto",
  [
    "Escopo e não escopo escritos e versionados",
    "Critérios de aceite definidos antes da implementação",
    "Regras do projeto que o agente é obrigado a seguir",
    "Registro de entrega com a evidência do que foi validado",
  ],
  { tag: "Visibilidade", accent: true, bodySize: 12.5, gap: 8 }
);
C.infoCard(
  s6,
  tc.xR,
  tc.y,
  tc.w,
  3.4,
  "Riscos que o processo reduz",
  [
    "Credenciais e dados sensíveis expostos por descuido",
    "Integrações externas com permissão maior que a necessária",
    "Escopo crescendo sem decisão de ninguém",
    "Entregas aceitas sem evidência de que funcionam",
  ],
  { tag: "Governança", bodySize: 12.5, gap: 8, bodyColor: T.GRAY }
);
s6.addText(
  "É deste eixo que trata o primeiro momento da formação — o encontro com a gestão.",
  {
    x: T.MX,
    y: 6.05,
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
  "Ponto para líder cético: nada disso adiciona burocracia nova. São quatro artefatos curtos, produzidos durante o próprio trabalho — e o agente ajuda a escrevê-los. Emendar daqui para a ideia dos dois momentos, mais adiante."
);

// ---------------- 07 · QUALIDADE ----------------
const s7 = K.contentSlide(
  p,
  8,
  "07 · Qualidade",
  "“Pronto” deixa de ser opinião",
  "A validação passaria a fazer parte da tarefa, não a ser uma etapa que alguém lembra de fazer."
);
tc = C.twoCol(2.5);
C.infoCard(
  s7,
  tc.xL,
  tc.y,
  tc.w,
  3.4,
  "O que entra no padrão",
  [
    "Cada tarefa nasce com o critério que a considera concluída",
    "Testes automáticos nas regras que não podem quebrar",
    "Revisão do que o agente produziu, com checklist",
    "Documentação mínima para quem chega depois",
  ],
  { tag: "No processo", accent: true, bodySize: 12.5, gap: 8 }
);
C.checklist(
  s7,
  tc.xR,
  tc.y,
  tc.w,
  [
    "Menos correção depois da entrega",
    "Defeitos aparecem antes de chegar ao usuário",
    "Entrega chega com evidência anexada",
    "O mesmo padrão em todos os projetos da área",
  ],
  { size: 13, ih: 0.56 }
);
s7.addText(
  "Como você perceberia: a conversa muda de “está funcionando?” para “o que foi validado?”.",
  {
    x: T.MX + tc.w + 0.4,
    y: 5.34,
    w: tc.w,
    h: 0.9,
    fontFace: T.FONT,
    fontSize: 12.5,
    italic: true,
    color: T.PURPLE,
    valign: "top",
  }
);
s7.addNotes(
  "Retomar a demonstração do slide 02: o vazamento não seria pego por “está funcionando?”. Seria pego pelo critério escrito e pelo teste que o protege."
);

// ---------------- 08 · A FORMAÇÃO EM DOIS MOMENTOS ----------------
const s8 = K.contentSlide(
  p,
  9,
  "08 · Como imaginamos a formação",
  "Dois momentos, com públicos e objetivos diferentes",
  "A gestão primeiro — para que o combinado exista antes de a equipe começar a produzir."
);
tc = C.twoCol(2.5);
C.infoCard(
  s8,
  tc.xL,
  tc.y,
  tc.w,
  3.5,
  "Com a gestão",
  [
    "Um encontro curto, com os líderes e quem acompanha as entregas",
    "Objetivo: saber o que pedir, o que conferir e onde entrar no processo",
    "Não é aprender a ferramenta — é aprender a acompanhar",
    "Sai daqui o combinado de como a área vai trabalhar",
  ],
  { tag: "Momento 1 · vocês", accent: true, bodySize: 12.5, gap: 8 }
);
C.infoCard(
  s8,
  tc.xR,
  tc.y,
  tc.w,
  3.5,
  "Com quem vai implementar",
  [
    "Três encontros de duas horas, sobre uma demanda real da área",
    "Objetivo: percorrer o processo inteiro, do problema à entrega validada",
    "Duplas: uma pessoa conduz o agente, a outra acompanha escopo e critérios",
    "Cada dia termina em um artefato que dá para abrir e conferir",
  ],
  { tag: "Momento 2 · a equipe", bodySize: 12.5, gap: 8, bodyColor: T.GRAY }
);
s8.addText(
  "A ordem importa: sem o primeiro momento, o segundo produz artefatos que ninguém combinou de usar.",
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
s8.addNotes(
  "Este é o slide central da conversa de hoje. Deixar claro que o desenho dos dois momentos é justamente o que viemos validar: se a divisão faz sentido, se a carga é adequada e quem deveria estar em cada um."
);

// ---------------- 09 · MOMENTO 1 · GESTÃO ----------------
const s9 = K.contentSlide(
  p,
  10,
  "09 · Momento 1 · com a gestão",
  "Como vocês acompanhariam e participariam do processo",
  "Proposta: um encontro curto, antes da formação da equipe."
);
tc = C.twoCol(2.5);
C.infoCard(
  s9,
  tc.xL,
  tc.y,
  tc.w,
  3.4,
  "O que veríamos juntos",
  [
    "A demonstração do vazamento e por que ela acontece",
    "As cinco etapas do processo, em linguagem de gestão",
    "Os quatro artefatos: escopo, critérios, regras do projeto e registro de entrega",
    "O que é razoável esperar de um agente — e o que não é",
  ],
  { tag: "Conteúdo proposto", accent: true, bodySize: 12.5, gap: 8 }
);
C.checklist(
  s9,
  tc.xR,
  tc.y,
  tc.w,
  [
    "Aprovar escopo e não escopo antes de começar",
    "Ler os critérios de aceite e dizer se refletem a necessidade",
    "Cobrar a evidência, não o status",
    "Trazer de volta o que não funcionou, para ajustar o padrão",
  ],
  { size: 12.5, ih: 0.56 }
);
s9.addText(
  "O papel da gestão depois do encontro",
  {
    x: T.MX + tc.w + 0.4,
    y: 2.06,
    w: tc.w,
    h: 0.35,
    fontFace: T.FONT,
    fontSize: 10,
    bold: true,
    color: T.PURPLE,
    charSpacing: 1.5,
  }
);
s9.addText(
  "Curto de propósito: gestão não precisa aprender a ferramenta, precisa saber o que pedir e o que conferir.",
  {
    x: T.MX + tc.w + 0.4,
    y: 5.34,
    w: tc.w,
    h: 0.9,
    fontFace: T.FONT,
    fontSize: 12.5,
    italic: true,
    color: T.PURPLE,
    valign: "top",
  }
);
s9.addNotes(
  "Aqui é o coração do pedido de validação: perguntar diretamente o que mais a gestão precisaria ver para acompanhar sem virar gargalo, e se a duração faz sentido. O conteúdo deste encontro ainda está aberto."
);

// ---------------- 10 · MOMENTO 2 · QUEM IMPLEMENTA ----------------
const s10 = K.contentSlide(
  p,
  11,
  "10 · Momento 2 · quem implementa",
  "Três encontros de duas horas, sobre uma demanda real de vocês",
  "É a parte já construída da proposta — e a que mais depende da agenda das áreas."
);
tc = C.twoCol(2.5);
C.infoCard(
  s10,
  tc.xL,
  tc.y,
  tc.w,
  3.5,
  "O investimento",
  [
    "3 encontros de 2 horas, com intervalo entre eles",
    "Duplas: uma pessoa conduz o agente, a outra acompanha escopo e critérios",
    "Cada dupla traz uma demanda pequena e real da sua área",
  ],
  { tag: "O que a área liberaria", accent: true, bodySize: 13, gap: 8 }
);
C.infoCard(
  s10,
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
s10.addText(
  "A demanda que a dupla traz não seria exercício: sairia da formação como entrega da área.",
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
s10.addNotes(
  "Deixar explícito que as horas produzem algo que a área usaria de qualquer forma. O custo real é menor do que a soma das horas, porque a demanda escolhida já estava na fila."
);

// ---------------- 11 · COMO SE VERIFICA ----------------
const s11 = K.contentSlide(
  p,
  12,
  "11 · Como se verifica",
  "Cada dia do segundo momento terminaria em um artefato",
  "Para que a avaliação não fique na percepção — inclusive a de vocês, sobre o tempo investido."
);
K.table(
  s11,
  [
    [K.TABLE.header("Dia"), K.TABLE.header("A pessoa da sua área entrega"), K.TABLE.header("Como se verifica")],
    [
      K.TABLE.accent("1"),
      K.TABLE.cell("A definição escrita de um projeto real da área: problema, escopo, não escopo e critérios"),
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
s11.addText(
  "E o critério que resume os três eixos: ao final, a pessoa explica onde cada parte do sistema está e por quê — sem abrir o código.",
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
s11.addNotes(
  "Se a pessoa tem uma aplicação funcionando mas não sabe dizer onde fica o quê, o objetivo não foi atingido. Esse critério é oral e não depende de ferramenta — a liderança consegue aplicá-lo sozinha."
);

// ---------------- 12 · O QUE FICA DEPOIS ----------------
const s12 = K.contentSlide(
  p,
  13,
  "12 · O que ficaria depois",
  "O principal produto não é a aplicação construída no terceiro dia",
  "É a capacidade de repetir o processo na próxima demanda — e na seguinte."
);
tc = C.twoCol(2.5);
C.checklist(
  s12,
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
  s12,
  tc.xR,
  tc.y,
  tc.w,
  3.6,
  "E entre as áreas",
  [
    "Projetos de áreas diferentes passam a ter a mesma estrutura",
    "Uma pessoa de outra área consegue entender e continuar",
    "As melhorias que cada turma encontra entram no padrão comum",
    "Novas contratações partem de um padrão, não de uma conversa",
  ],
  { tag: "Efeito de setor", accent: true, bodySize: 12.5, gap: 8 }
);
s12.addNotes(
  "Este é o argumento coletivo: o retorno cresce quanto mais áreas adotam o mesmo padrão, porque o custo de atravessar de uma área para outra cai."
);

// ---------------- FECHO ----------------
const fim = K.bannerSlide(p, {
  kicker: "O que queremos validar com vocês",
  titleRuns: [["Antes de marcar qualquer data, ", "dark"], ["o retorno de vocês", "purple"]],
  bulletList: [
    "O diagnóstico do começo descreve o que acontece na sua área?",
    "A divisão em dois momentos faz sentido — e quem deveria estar em cada um?",
    "O que mais a gestão precisaria ver para acompanhar sem virar gargalo?",
    "Que demandas reais da área serviriam de projeto para as duplas?",
    "Faz sentido começar por um grupo pequeno e ajustar antes de abrir para o setor?",
  ],
  dateLabel: "Nada está fechado: formato, conteúdo e datas mudam com o retorno de vocês",
});
fim.addNotes(
  "Fechar sem pedir compromisso de agenda. O resultado esperado desta conversa é: concordância (ou não) com o diagnóstico, ajustes no desenho dos dois momentos e uma lista de demandas candidatas. Se houver clima para isso, combinar apenas o próximo passo — uma nova conversa com a proposta revisada."
);

K.save(p, process.argv[2] || "deck-lideres-areas.pptx").then((f) => console.log("OK", f));
