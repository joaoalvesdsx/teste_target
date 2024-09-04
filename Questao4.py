Faturamento_Estados = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
}

# Obtendo valor total
valor_total = sum(Faturamento_Estados.values())

# Rodando um laco para calcular o percentual de cada estado e exibi-lô
for estado, valor in Faturamento_Estados.items():
    percentual = (valor / valor_total) * 100
    print(f"Estado: {estado}, Porcentagem: {percentual:.2f}%")
