// # Faturamento estado

const faturamentoEstados: { estado: string; valor: number }[] = [
  { estado: "SP", valor: 67836.43 },
  { estado: "RJ", valor: 36678.66 },
  { estado: "MG", valor: 29229.88 },
  { estado: "ES", valor: 27165.48 },
  { estado: "Outros", valor: 19849.53 },
];

function calcularPercentual(faturamento: { estado: string; valor: number }[]) {
  // Somando o valor total com o reduce
  const valorTotal: number = faturamento.reduce(
    (total, estado) => total + estado.valor,
    0
  );
  // Retornando um array com o estado e seu percentual
  return faturamento.map((estado) => {
    return {
      estado: estado.estado,
      percentual: (estado.valor / valorTotal) * 100,
    };
  });
}

const percentuais = calcularPercentual(faturamentoEstados);
// Imprimando para cada Estado o seu nome e seu percentual
percentuais.forEach((estado) => {
  console.log(
    `Estado: ${estado.estado}, Percentual: ${estado.percentual.toFixed(2)}%`
  );
});
