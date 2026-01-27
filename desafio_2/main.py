# notas = ["5", 5.6, "a", False]
notas = [10, 6, 8, 7]


def is_float(value):
    try:
        float(value)
        return True
    except ValueError:
        return False


def validar_notas(notas):
    for nota in notas:
        if not is_float(nota) or nota < 0 or nota > 10:
            return False
    return True


def media_notas(notas, frequencia, q_unidades=None, nota_recuperacao=0):
    if not is_float(frequencia) or frequencia < 0 or frequencia > 1:
        return "Frequencia inválida"

    if frequencia < 0.75:
        return "Reprovado por falta"

    if not validar_notas(notas):
        return "Notas inválidas"

    divisor = q_unidades or len(notas)

    if len(notas) != divisor:
        return "Quantidade de notas inválida"

    media = sum(notas) / divisor
    print("media", media)

    if media >= 7:
        return "Aprovado"

    if nota_recuperacao >= 6:
        return "Aprovado por recuperação"

    return "Reprovado por nota"


print(
    media_notas(
        notas=notas,
        frequencia=0.8,
        # q_unidades=6,
        # nota_recuperacao=7,
    )
)
