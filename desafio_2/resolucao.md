- verificar os dados que vou receber
  - todos os numeros informados devem estar em float
  - lista de notas
  - percentual trabalha com int de 0 a 1
  - nota de recuperação (opcional)
  - quantidade de unidades (opcional) deve ser int

- validações:
  - validar frequencia, se menor que 0.75 retorna reprovado por falta
  - validar se as notas estao em float e estão entre 0 e 10
  - se existir q_unidades dividir a soma das notas pela q_unidaes, se não dividir pelo length da lista
  - se existir q_unidade validar se a lista tem a mesma quantidade de em notas

- resolução
  - calcular a soma das notas
  - calcular a média
  - se a media for menor q 7 verificar se existe nota de recuperação
    - se a nota for maior ou igual a 6, aprovado por recuperação
    - se a nova média for menor que 6, reprovado por nota
  