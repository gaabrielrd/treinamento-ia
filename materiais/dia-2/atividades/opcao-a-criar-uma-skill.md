# Atividade — criar uma skill em conjunto

**Bloco opcional A** · 20 minutos · construção coletiva, uma tela projetada

Vamos escrever uma skill de `review-changes` do zero, com a turma ditando o conteúdo.

> O template já tem uma `review-changes` pronta em [`template-ia-web/skills/review-changes/SKILL.md`](../../../template-ia-web/skills/review-changes/SKILL.md). **Não abra antes.** Construa com a turma primeiro e compare no final — a comparação é a melhor parte.

---

## As quatro perguntas de uma skill

Escreva os quatro títulos no flipchart ou em um arquivo em branco:

```
1. GATILHO      — quando esta skill deve ser usada?
2. VERIFICAÇÕES — que passos ela executa?
3. PROIBIÇÕES   — o que ela não deve fazer?
4. SAÍDA        — em que formato entrega o resultado?
```

Conduza a turma preenchendo cada um. 4 minutos por bloco.

---

## 1. Gatilho

Pergunte: **"em que momento a gente quer uma revisão?"**

Respostas esperadas: antes de dizer que terminou; antes de abrir o pull request; depois de o agente implementar algo.

Formulação boa:

> "Use antes de concluir uma tarefa, para revisar escopo, arquitetura, testes, segurança e qualidade."

Formulação ruim, e vale mostrar por quê:

> "Use para revisar código."

A segunda não diz **quando**. A ferramenta usa a descrição para decidir se a skill é relevante — descrição vaga significa skill que nunca é acionada na hora certa, ou é acionada sempre.

## 2. Verificações

Pergunte: **"o que a gente sempre precisa conferir?"** Deixe a turma listar. A lista costuma convergir para:

- [ ] os critérios de aceite foram atendidos?
- [ ] mudou algo fora do escopo?
- [ ] entrou dependência nova sem justificativa?
- [ ] tem segredo ou credencial no código?
- [ ] as features continuam separadas?
- [ ] tem chamada de API ou armazenamento direto em componente?
- [ ] faltou teste para o comportamento novo?
- [ ] a documentação ficou desatualizada?
- [ ] sobrou código não utilizado?

Note com a turma: **essa lista é o Dia 1 inteiro virando procedimento.** A definição de concluído, o escopo, os critérios — tudo que eles preencheram à mão agora está em um arquivo que o agente executa.

## 3. Proibições

Pergunte: **"o que essa skill NÃO deve fazer?"**

A resposta essencial: **não deve corrigir nada por conta própria.**

> "Não altere arquivos. Apresente os problemas e proponha correções mínimas; aguarde autorização."

Por que isso importa: uma revisão que já conserta impede você de decidir. E costuma consertar coisas que não eram problema, misturando a revisão com mudanças novas.

Outras que valem entrar:

- não reescrever o que está funcionando só por preferência de estilo;
- não sugerir nova biblioteca como solução;
- não aprovar sem ter rodado as validações.

## 4. Saída

Pergunte: **"como a gente quer receber isso?"**

O formato que funciona:

> "Problemas em ordem de prioridade. Para cada um: o arquivo, o que está errado, por que é um problema e a correção mínima proposta. No fim, um veredito: pronto para concluir, ou não."

Ordenar por prioridade é o detalhe que faz diferença. Uma lista de 14 apontamentos sem ordem é ignorada; três apontamentos graves no topo são resolvidos.

---

## O resultado

Junte os quatro blocos no formato de arquivo:

```markdown
---
name: review-changes
description: Use para revisar alterações antes de concluir uma tarefa,
  verificando escopo, arquitetura, testes, segurança e qualidade.
---

# Revisar alterações

## Quando usar
[o gatilho que a turma escreveu]

## Verificações
[a lista que a turma escreveu]

## Proibições
- Não altere arquivos.
- [as outras que a turma escreveu]

## Saída
[o formato que a turma escreveu]
```

Onde salvar, em um projeto real: `skills/review-changes/SKILL.md`.

---

## Comparem com a versão do template

**Agora** abra a `review-changes` do template. Pergunte:

- o que a turma incluiu que o template não tem?
- o que o template tem que a turma esqueceu?
- alguma proibição do template surpreende?

Não há resposta certa. O objetivo é perceber que uma skill não é mágica: **é um procedimento que alguém escreveu**, e eles acabaram de escrever um.

---

## Fechamento

Duas perguntas:

**"Quanto tempo levaria para escrever esse prompt de revisão toda vez?"** — uns 3 minutos. Vezes 200 revisões por ano, por pessoa.

**"E se cada pessoa da área escrevesse a própria versão?"** — cada revisão verificaria coisas diferentes. A skill não economiza só tempo; ela faz todos revisarem a mesma coisa.

> O prompt diz o que precisamos agora. A skill descreve como executar um tipo de trabalho.
