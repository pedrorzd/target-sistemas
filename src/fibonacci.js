let number = -3; // inseirir numero para verificar se ele pertence a sequência de fibonacci

let posBinet;
let raizQuadrada;
let quadradoPerfeito = false;

// Função para verificar se um número é quadrado perfeito
function verificarQuadradoPerfeito(valor) {
  raizQuadrada = Math.sqrt(valor);
  quadradoPerfeito = Number.isInteger(raizQuadrada); // Verifica se a raiz quadrada é um inteiro
  return quadradoPerfeito;
}

// Função para aplicar a equação de Binet e verificar se o número é Fibonacci
function equacaoBinet(num) {
  let binet1 = 5 * num ** 2 + 4;
  let binet2 = 5 * num ** 2 - 4;

  // Verifica se algum dos resultados de Binet é um quadrado perfeito
  if (verificarQuadradoPerfeito(binet1) || verificarQuadradoPerfeito(binet2)) {
    return true;
  }
  return false;
}

// Validação do número fornecido
if (number < 0)
  return "Números negativos não fazem parte da sequência de Fibonacci";
else if (number == 0 || number == 1) {
  console.log("O número pertence à sequência de Fibonacci");
} else if (equacaoBinet(number)) {
  console.log("O número pertence à sequência de Fibonacci");
} else {
  console.log("O número não pertence à sequência de Fibonacci");
}
