def inverter_string(string):
    str_invertida = ""
    # Laco para ir adicionando os caracteres da string um por um comecando pelo primeiro , fazendo com que reverta a string
    for char in string:
        str_invertida = char + str_invertida
    return str_invertida

original = "tegrat ad oigatse on odavorpa iuf"
invertida = inverter_string(original)

print(f"String original: {original}")
print(f"String invertida: {invertida}")
