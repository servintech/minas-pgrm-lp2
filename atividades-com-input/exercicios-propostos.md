# Pacotinho de Exercícios — Lógica de Programação com Input no Terminal (Node.js)

## Como rodar os exercícios

* Crie um arquivo `index.js` para cada exercício.
* Rode com:

```bash
node index.js
```

---

### Exercício 1 — Par ou Ír

**Enunciado:**
Peça para o usuário digitar um número e diga se ele é par ou ímpar.

**Código base:**

```javascript
const readline = require('readline/promises');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

function main() {
  const numero = rl.question('Digite um número: ');
  const n = Number(numero);

  if (n % 2 === 0) {
    console.log('O número é PAR');
  } else {
    console.log('O número é ÍMPAR');
  }

  rl.close();
}

main();
```

---

### Exercício 2 — Calculadora Simples

**Enunciado:**
Peça dois números e uma operação (+, -, \*, /) e mostre o resultado.

**Código base:**

```javascript
const readline = require('readline/promises');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

function main() {
  const num1 = rl.question('Digite o primeiro número: ');
  const num2 = rl.question('Digite o segundo número: ');
  const operacao = rl.question('Qual operação (+, -, *, /): ');

  const n1 = Number(num1);
  const n2 = Number(num2);
  let resultado;

  if (operacao === '+') {
    resultado = n1 + n2;
  } else if (operacao === '-') {
    resultado = n1 - n2;
  } else if (operacao === '*') {
    resultado = n1 * n2;
  } else if (operacao === '/') {
    resultado = n2 !== 0 ? n1 / n2 : 'Divisão por zero não permitida';
  } else {
    resultado = 'Operação inválida';
  }

  console.log(`Resultado: ${resultado}`);
  rl.close();
}

main();
```

---

### Exercício 3 — Maior de Três Números

**Enunciado:**
Peça 3 números e informe qual é o maior deles.

**Código base:**

```javascript
const readline = require('readline/promises');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

function main() {
  const num1 = Number(rl.question('Digite o primeiro número: '));
  const num2 = Number(rl.question('Digite o segundo número: '));
  const num3 = Number(rl.question('Digite o terceiro número: '));

  let maior = num1;

  if (num2 > maior) {
    maior = num2;
  }
  if (num3 > maior) {
    maior = num3;
  }

  console.log(`O maior número é: ${maior}`);
  rl.close();
}

main();
```

---

### Exercício 4 — Verificador de Nota

**Enunciado:**
Peça a nota de um aluno (de 0 a 10) e informe:

* Se a nota for maior ou igual a 7: "Aprovado"
* Entre 5 e 6.9: "Recuperação"
* Menor que 5: "Reprovado"

**Código base:**

```javascript
const readline = require('readline/promises');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

function main() {
  const nota = Number(rl.question('Digite a nota (0 a 10): '));

  if (nota >= 7) {
    console.log('Aprovado');
  } else if (nota >= 5) {
    console.log('Recuperação');
  } else {
    console.log('Reprovado');
  }

  rl.close();
}

main();
```

---

### Exercício 5 — Jogo de Adivinhação

**Enunciado:**
Crie um jogo onde o computador escolhe um número entre 1 e 10 e o usuário tem que adivinhar.

**Código base:**

```javascript
const readline = require('readline/promises');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

function main() {
  const numeroSecreto = Math.floor(Math.random() * 10) + 1;

  const tentativa = Number(rl.question('Adivinhe o número (1 a 10): '));

  if (tentativa === numeroSecreto) {
    console.log('Parabéns! Você acertou!');
  } else {
    console.log(`Errou! O número era ${numeroSecreto}`);
  }

  rl.close();
}

main();
```
