// # ReverterString
function inverterString(str: string): string {
  let stringInvertida: string = "";
  // Laco para ir adicionando os caracteres da string um por um comecando pelo primeiro em uma string vazia, fazendo com que reverta a string
  for (let i = str.length - 1; i >= 0; i--) {
    stringInvertida += str[i];
  }

  return stringInvertida;
}

const original: string = "tegraT ad oigatse on odavorpa iuF";
const invertida: string = inverterString(original);

console.log(`String original: ${original}`);
console.log(`String invertida: ${invertida}`);
