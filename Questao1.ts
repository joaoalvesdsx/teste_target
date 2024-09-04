// // # S O M A
function Soma() {
  let INDICE: number = 13;
  let SOMA: number = 0;
  let K: number = 0;

  while (K < INDICE) {
    K = K + 1;
    SOMA = SOMA + K;
  }
  console.log(`O valor de SOMA é: ${SOMA}`); // O valor de SOMA será 91
}

Soma();
