// # ReverterString
function inverterString(str: string): string {
  let stringInvertida: string = "";

  for (let i = str.length - 1; i >= 0; i--) {
    stringInvertida += str[i];
  }

  return stringInvertida;
}

const original: string = "Exemplo de string";
const invertida: string = inverterString(original);

console.log(`String original: ${original}`);
console.log(`String invertida: ${invertida}`);
