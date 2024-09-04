// // # Fibonacci

import prompt from "prompt-sync";

function Fibonacci(num: number): boolean {
  let a: number = 0;
  let b: number = 1;
  let temp: number = 0;

  if (num === 0 || num === 1) return true;

  while (b < num) {
    temp = a + b; // 1 // 2 // 3
    a = b; // a = 1 // a = 1 // a = 2
    b = temp; // b = 1 // b = 2 // b = 3
  }

  return b === num;
}

{
  /* 

    // Se quiser inserir a variavel pelo teclado

    let resposta = prompt();
    const num = resposta("Digite um valor: ");
    console.log(`Você digitou: ${num}`);
    
*/
}

let num: number = 21;

if (Fibonacci(num)) {
  console.log(`${num} pertence à sequência de Fibonacci.`);
} else {
  console.log(`${num} não pertence à sequência de Fibonacci.`);
}
