valor: str = "50"
# valor: float = 23.6


def buscar_turno(valor):
    if not valor:
        return "Valor ausente"

    try:
        valor_para_int = int(valor)
    except Exception:
        return "Valor inválido"

    if not 0 <= valor_para_int <= 23:
        return "Horário inválido"

    # if 0 > valor_para_int or 23 < valor_para_int:
    #     return "Horário inválido"

    # if 5 <= valor_para_int <= 11:
    #     return "Manhã"
    # elif 12 <= valor_para_int <= 17:
    #     return "Tarde"
    # elif 18 <= valor_para_int <= 22:
    #     return "Noite"
    # else:
    #     return "Madrugada"

    # result = "Madrugada"
    # if 5 <= valor_para_int <= 11:
    #     result = "Manhã"

    # elif 12 <= valor_para_int <= 17:
    #     result = "Tarde"

    # elif 18 <= valor_para_int <= 22:
    #     result = "Noite"

    # return result

    if 5 <= valor_para_int <= 11:
        return "Manhã"

    if 12 <= valor_para_int <= 17:
        return "Tarde"

    if 15 <= valor_para_int <= 22:
        return "Noite"

    return "Madrugada"


print(buscar_turno(valor))
