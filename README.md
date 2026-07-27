# Semana 3 (S3) — Fundamentos da Programação Mobile

Site de apoio (HTML, CSS e JS) para as aulas da Semana 3 e **roteiro pronto para o professor**.

---

## Como abrir o site

**Opção 1 — mais simples:** abra o arquivo `public/index.html` direto no navegador (duplo clique).

**Opção 2 — servidor local (recomendado):**

```bash
npm run dev
```

Depois acesse `http://localhost:3000`.

### Estrutura de arquivos

```
public/
  index.html   -> conteúdo das 4 aulas
  styles.css   -> estilos (tema escuro)
  script.js    -> menu, barra de progresso e botões "Ver resposta"
server.js      -> servidor estático simples (sem dependências)
README.md      -> este arquivo (com o roteiro de aula)
```

---

# CRONOGRAMA DA AULA (7:00 às 8:40 — 100 minutos)

> Você tem **1h40** no total. Abaixo está a divisão de tempo sugerida para não atrasar.
> A ideia é dar mais tempo para a Aula 4 (prática), que é onde os alunos aprendem de verdade.

| Horário | Duração | Etapa |
|--------------|---------|--------------------------------------------------|
| 7:00 – 7:05  | 5 min   | Abertura e apresentação da semana |
| 7:05 – 7:20  | 15 min  | Aula 1 — Linguagens (Kotlin e Swift) |
| 7:20 – 7:45  | 25 min  | Aula 2 — Lógica (variáveis, if/else, loops) |
| 7:45 – 7:50  | 5 min   | **Respiro / pausa rápida** |
| 7:50 – 8:10  | 20 min  | Aula 3 — Boas práticas de codificação |
| 8:10 – 8:35  | 25 min  | Aula 4 — Exercícios (mão na massa) |
| 8:35 – 8:40  | 5 min   | Encerramento da semana |

**Dicas de ritmo:**
- Se estiver atrasado, **encurte a Aula 3** (mostre só os 4 cards e o "Antes x Depois").
- **Nunca corte a Aula 4** — é a parte prática, a mais importante.
- Deixe pelo menos 3 minutos por exercício para a turma tentar antes de mostrar a resposta.

---

# ROTEIRO DE AULA (fala pronta)

> Use o texto abaixo como um "teleprompter". Está escrito do jeito que você fala em sala.
> Os trechos entre colchetes `[ ]` são orientações para você (não precisa ler em voz alta).
> Cada aula abaixo tem o **horário sugerido** para você se guiar.

## Abertura — `7:00 às 7:05` (5 min)

> "Bom dia, pessoal! Tudo bem com vocês? Hoje a gente continua a nossa **Semana 3**, que é sobre os **Fundamentos da Programação Mobile**. Nesta semana o objetivo é conhecer as principais linguagens usadas para criar aplicativos, entender a lógica por trás dos programas e, no final, resolver nossos primeiros exercícios. Bora começar!"

[Mostre o site na tela e desça até a aula do dia.]

---

## Aula 1 — Linguagens de programação para mobile (Kotlin, Swift) — `7:05 às 7:20` (15 min)

> "Então pessoal, para a gente criar um aplicativo, a primeira coisa é entender **em qual celular ele vai rodar**. Existem dois mundos principais: o **Android**, que é o sistema do Google, e o **iOS**, que é o sistema da Apple, o do iPhone."

> "No Android, a linguagem oficial hoje se chama **Kotlin**. No iOS, a linguagem se chama **Swift**. Guardem esses dois nomes: Kotlin para Android, Swift para iPhone."

[Mostre no site o exemplo de código "Olá, mundo" em Kotlin.]

> "Olhem esse primeiro exemplo. Esse programa faz uma coisa só: ele mostra uma mensagem na tela. Reparem que a gente cria uma **variável** chamada `nome` e depois manda o programa **imprimir** um texto usando essa variável. É basicamente isso que todo programa faz: guarda informação e faz alguma coisa com ela."

[Mostre o mesmo exemplo em Swift.]

> "Agora vejam o mesmo programa em Swift. Percebam que é MUITO parecido! Muda um detalhe aqui e ali, mas a ideia é idêntica. Isso é importante: quando vocês aprendem a lógica, mudar de linguagem depois é tranquilo."

**Pergunta para a turma:** "Alguém aqui usa Android ou iPhone? Então vocês já usaram apps feitos com essas linguagens hoje de manhã!"

---

## Aula 2 — Estruturas de controle e lógica de programação — `7:20 às 7:45` (25 min)

> [Depois desta aula, faça uma pausa rápida de 5 min — `7:45 às 7:50`.]

> "Bom, na aula passada a gente viu as linguagens. Hoje a gente vai entender **como o programa pensa**, ou seja, a lógica de programação. E são só três ideias principais: variáveis, decisões e repetições."

**1. Variáveis**

> "A variável é como uma **caixinha com etiqueta**. Eu guardo um valor dentro dela e coloco um nome. Por exemplo, uma caixinha chamada `idade` que guarda o número 18."

[Mostre o exemplo de variável no site.]

**2. Condicionais (if / else)**

> "Agora, o programa precisa **tomar decisões**. Para isso a gente usa o `if`, que em português é 'se'. Olhem o exemplo: *se* a idade for maior ou igual a 18, mostra 'maior de idade'; *senão*, mostra 'menor de idade'."

> "Pensem num semáforo: SE o sinal está verde, pode seguir; SENÃO, para. O programa faz exatamente isso."

**3. Repetições (loops)**

> "E o último conceito é a **repetição**, que a gente chama de loop. Serve para repetir uma tarefa sem precisar escrever tudo de novo. Olhem: com essas duas linhas o programa conta de 1 até 5 sozinho."

> "É como escovar os dentes: você repete o mesmo movimento várias vezes. O loop faz isso pra gente."

**Fechamento:** "Então, resumindo a lógica: a gente **guarda** informação (variáveis), **decide** o que fazer (if/else) e **repete** quando precisa (loops). Só com isso já dá pra fazer muita coisa!"

---

## Aula 3 — Boas práticas de codificação — `7:50 às 8:10` (20 min)

> "Pessoal, hoje o assunto é diferente: não é sobre fazer o programa funcionar, é sobre fazer o programa **ficar bem escrito**. Isso se chama boas práticas. Por que isso importa? Porque programar é trabalho em equipe, e outras pessoas vão ler o seu código. Inclusive você mesmo daqui a um mês!"

[Mostre os quatro cards de boas práticas no site.]

> "A primeira regra é: **use nomes claros**. Em vez de chamar uma variável de `x` ou `qa`, chame de `quantidadeAlunos`. Assim qualquer um entende só de bater o olho."

> "A segunda: **comentários úteis**. Comentário serve pra explicar o *porquê* de algo, não pra explicar o óbvio. Nem de menos, nem demais."

> "A terceira: **código organizado**, com espaçamento certinho e dividido em partes pequenas."

> "E a quarta é uma regra famosa: **não se repita**. Se você está copiando e colando o mesmo código, provavelmente ele deveria virar uma função."

[Mostre o exemplo "Antes x Depois".]

> "Olhem os dois códigos. Os dois funcionam igual! Mas qual é mais fácil de ler? O da direita, né? Nome de função claro, espaçamento, tudo organizado. É esse capricho que separa o iniciante do profissional."

---

## Aula 4 — Exercícios de programação básica — `8:10 às 8:35` (25 min)

> "Chegou a hora de colocar a mão na massa! Nada de só olhar; agora vocês vão praticar. Eu vou mostrar cada exercício, vou dar um tempo pra vocês tentarem, e só depois a gente vê a resposta juntos."

[No site, clique em "Ver resposta" só DEPOIS de dar tempo para a turma tentar.]

**Exercício 1:** "Criem uma variável com o nome de vocês e mostrem 'Olá, [nome]' na tela. Isso junta tudo da Aula 1."

**Exercício 2:** "Agora verifiquem se um número é maior que 10 e mostrem uma mensagem. Aqui a gente usa o `if` da Aula 2."

**Exercício 3:** "Por último, mostrem os números de 1 a 10 usando um loop. Repetição na prática!"

> "Pessoal, uma última coisa muito importante: **errar faz parte**. Todo programador erra o tempo todo. O segredo é ler a mensagem de erro com calma, entender o que aconteceu e tentar de novo. Ninguém acerta de primeira sempre."

## Encerramento da semana — `8:35 às 8:40` (5 min)

> "E com isso a gente fecha a Semana 3! Vocês já sabem quais são as linguagens do mobile, entenderam a lógica de programação, viram como escrever um código organizado e ainda praticaram. Deem os parabéns pra vocês mesmos! Qualquer dúvida, estou à disposição. Até a próxima aula, pessoal!"

---

## Checklist rápido do professor

- [ ] Abrir o site antes da aula (`npm run dev` ou abrir o `index.html`)
- [ ] Deixar o navegador em tela cheia (F11)
- [ ] Aula 1: mostrar Kotlin e Swift lado a lado
- [ ] Aula 2: reforçar as 3 ideias (variável, if, loop)
- [ ] Aula 3: comparar o "Antes x Depois"
- [ ] Aula 4: dar tempo antes de clicar em "Ver resposta"
