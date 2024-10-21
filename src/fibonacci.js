let number = 1597; // Inserir número para verificar se ele pertence à sequência de Fibonacci
let a = 0;
let b = 1;
let c = 0;

// faz o cálculo da sequência de fibonacci
while (number > c) {
  c = a + b;
  a = b;
  b = c;
}

// Validação do número fornecido
if (number < 0) {
  console.log(`Números negativos não pertencem à sequência de Fibonacci`);
} else if (number == 0 || number == 1) {
  console.log(`O número pertence à sequência de Fibonacci`);
} else if (number == c) {
  console.log(`O número pertence à sequência de Fibonacci`);
  console.log(`O próximo número da sequência é ${a + number}`);
} else {
  console.log(`O número não pertence à sequência de Fibonacci`);
}
