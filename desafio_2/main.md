# 🟡 Desafio Intermediário — Sistema de Avaliação de Alunos (conceitual)

## 📌 Contexto
Uma escola precisa definir o status final de um aluno ao fim do ano letivo.  
Esse status depende de **notas ao longo do ano**, **frequência** e **possível recuperação**.

---

## 🎯 Objetivo do desafio
Construir o raciocínio completo para decidir o resultado final de um aluno, deixando claras:
- As prioridades das regras  
- Como a média é calculada  
- Como lidar com informações opcionais  

---

## 📥 Entradas consideradas
- Uma lista de notas obtidas ao longo do ano  
- A frequência do aluno em percentual  
- A quantidade total de unidades do ano letivo (opcional)  
- A nota de recuperação (opcional)  

---

## 📤 Saída esperada
Uma única classificação final:
- **Aprovado**
- **Aprovado por recuperação**
- **Reprovado por nota**
- **Reprovado por falta**

---

## 📏 Regras e lógica do problema

### 1️⃣ Frequência (regra mais importante)
A frequência é a primeira coisa a ser analisada.

- Se a frequência for **menor que 75%**, o aluno é automaticamente **reprovado por falta**.
- Nesse caso, **nenhuma outra informação deve ser avaliada**, independentemente das notas.

---

### 2️⃣ Cálculo da média anual
A média do aluno é calculada a partir da soma das notas.

- Se a quantidade total de unidades do ano **for informada**, a soma das notas deve ser dividida por esse número.
  - Isso significa que **unidades sem nota registrada contam implicitamente como zero**.
- Se a quantidade total de unidades **não for informada**, a média deve ser calculada dividindo a soma das notas pelo **tamanho da lista de notas**.

---

### 3️⃣ Avaliação direta
Após o cálculo da média:

- Se a média for **maior ou igual a 7**, o aluno é **aprovado diretamente**.
- Se a média for **menor que 7**, o aluno ainda pode tentar recuperação, se existir.

---

### 4️⃣ Recuperação
A recuperação só é considerada se o aluno não foi aprovado diretamente.

- Se **não houver nota de recuperação**, o aluno é **reprovado por nota**.
- Se houver recuperação:
  - Calcula-se uma nova média combinando a média anual com a nota da recuperação.
  - Se essa nova média for **maior ou igual a 6**, o aluno é **aprovado por recuperação**.
  - Caso contrário, o aluno é **reprovado por nota**.

---

## 🔍 Pontos de atenção para discussão
- O impacto de unidades sem nota no cálculo da média  
- A prioridade absoluta da frequência  
- A diferença entre reprovação por falta e por nota  
- O que fazer com dados inconsistentes  
  - Notas fora do intervalo  
  - Lista vazia  
  - Quantidade de unidades menor que a lista de notas  
