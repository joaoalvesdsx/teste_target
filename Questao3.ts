// # Calcular faturamento
import * as json from "./dados.json";

const calcularFaturamento = () => {
  // Importando e filtrando os valores que sao 0 como feriados e finais de semana.
  const d = json;
  const { data } = d;
  const valores = data.map((item) => item.valor).filter((valor) => valor > 0);

  // Obtendo o menor valor
  const menorValor = Math.min(...valores);

  // Obtendo o maior valor
  const maiorValor = Math.max(...valores);

  // Obtendo a media
  const mediaMensal =
    valores.reduce((soma, valor) => soma + valor, 0) / valores.length;

  //Obtendo os dias que venderam mais que a media
  const diasSuperiores = valores.filter((valor) => valor > mediaMensal).length;

  console.log(`Menor valor de faturamento: ${menorValor}`);
  console.log(`Maior valor de faturamento: ${maiorValor}`);
  console.log(
    `Número de dias no mês em que o valor de faturamento diário foi superior à média mensal: ${diasSuperiores}`
  );
};

calcularFaturamento();
