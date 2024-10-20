let number = 8; // Inserir número para verificar se ele pertence à sequência de Fibonacci

let quadradoPerfeito = false;
let binetPositivo;
let binetNegativo;
let a = 0;
let b = 1;

// Função para aplicar a equação de Binet
function equacaoBinet(number) {
  binetPositivo = 5 * number ** 2 + 4;
  binetNegativo = 5 * number ** 2 - 4;
}

// Função para verificar se um número é quadrado perfeito
function calculoQuadradoPerfeito(binetPositivo, binetNegativo) {
  // Verifica se a raiz quadrada é um inteiro
  if (
    Number.isInteger(Math.sqrt(binetPositivo)) == true ||
    Number.isInteger(Math.sqrt(binetNegativo)) == true
  ) {
    return true;
  } else {
    return false;
  }
}

// Validação do número fornecido
if (number < 0) {
  console.log("Números negativos não pertencem à sequência de Fibonacci");
} else if (number == 0 || number == 1) {
  console.log("O número pertence à sequência de Fibonacci");
} else if (true) {
  console.log("O número pertence à sequência de Fibonacci");
  for (let i = 0; i <= ; ++i) {
    console.log(a);
    let temp = a + b;
    a = b;
    b = temp;
  }
} else {
  console.log("O número não pertence à sequência de Fibonacci");
}
