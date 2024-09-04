import json

with open('dados.json') as f:
    dados = json.load(f)

# Obtendo os valores de faturamento
faturamento_mensal = [dado['valor'] for dado in dados]

# Obtendo os valores mininos e maximos ecluindo fins de semana e feriado
menor_valor = min(filter(lambda x: x > 0, faturamento_mensal))
maior_valor = max(faturamento_mensal)

# Obtendo a media
media_mensal = sum(faturamento_mensal) / len([dia for dia in faturamento_mensal if dia > 0])

# Contando os dias acima da media
dias_acima_da_media = len([dia for dia in faturamento_mensal if dia > media_mensal])


print(f"Menor valor de faturamento: R${menor_valor:.2f}")
print(f"Maior valor de faturamento: R${maior_valor:.2f}")

print(f"Número de dias com faturamento acima da média: {dias_acima_da_media}")