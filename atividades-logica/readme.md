# Exercícios de Lógica de Programação com Funções, Operadores, Condicionais e Switch Case (sem input)

## Instruções gerais

* Você deve criar um arquivo `index.js` para cada exercício.
* Os valores podem ser declarados direto no código.
* Foque em praticar funções, condicionais `if/else`, `switch` e operadores.

---

### Exercício 1 — Calculadora com Função

**Enunciado:**
Crie uma função `calcular` que receba dois números e uma operação (como string: "+", "-", "\*", "/") e retorne o resultado.

**Exemplo de chamada:**

```javascript
console.log(calcular(10, 5, '+')); // Deve imprimir 15
```

**Código base:**

```javascript
function calcular(a, b, operacao) {
  let resultado;
  
  if (operacao === '+') {
    resultado = a + b;
  } else if (operacao === '-') {
    resultado = a - b;
  } else if (operacao === '*') {
    resultado = a * b;
  } else if (operacao === '/') {
    resultado = b !== 0 ? a / b : 'Divisão por zero não permitida';
  } else {
    resultado = 'Operação inválida';
  }

  return resultado;
}

console.log(calcular(10, 5, '+'));
console.log(calcular(10, 0, '/'));
```

---

### Exercício 2 — Verificador de Idade

**Enunciado:**
Crie uma função que receba a idade de uma pessoa e retorne:

* "Criança" se for menor que 12
* "Adolescente" se for entre 12 e 17
* "Adulto" se for entre 18 e 59
* "Idoso" se for 60 ou mais

**Código base:**

```javascript
function classificarIdade(idade) {
  if (idade < 12) {
    return 'Criança';
  } else if (idade < 18) {
    return 'Adolescente';
  } else if (idade < 60) {
    return 'Adulto';
  } else {
    return 'Idoso';
  }
}

console.log(classificarIdade(8));
console.log(classificarIdade(15));
console.log(classificarIdade(35));
console.log(classificarIdade(75));
```

---

### Exercício 3 — Conversor de Dia da Semana

**Enunciado:**
Crie uma função que receba um número de 1 a 7 e retorne o nome do dia da semana correspondente (usando `switch`).

**Código base:**

```javascript
function diaDaSemana(numero) {
  let dia;

  switch (numero) {
    case 1:
      dia = 'Domingo';
      break;
    case 2:
      dia = 'Segunda-feira';
      break;
    case 3:
      dia = 'Terça-feira';
      break;
    case 4:
      dia = 'Quarta-feira';
      break;
    case 5:
      dia = 'Quinta-feira';
      break;
    case 6:
      dia = 'Sexta-feira';
      break;
    case 7:
      dia = 'Sábado';
      break;
    default:
      dia = 'Número inválido';
  }

  return dia;
}

console.log(diaDaSemana(3));
console.log(diaDaSemana(7));
console.log(diaDaSemana(0));
```

---

### Exercício 4 — Comparador de Números

**Enunciado:**
Crie uma função que receba dois números e retorne:

* "O primeiro é maior"
* "O segundo é maior"
* "Os dois são iguais"

**Código base:**

```javascript
function comparar(a, b) {
  if (a > b) {
    return 'O primeiro é maior';
  } else if (b > a) {
    return 'O segundo é maior';
  } else {
    return 'Os dois são iguais';
  }
}

console.log(comparar(10, 5));
console.log(comparar(3, 8));
console.log(comparar(7, 7));
```

---

### Exercício 5 — Função de Desconto

**Enunciado:**
Crie uma função `calcularPrecoComDesconto` que receba o preço de um produto e aplique um desconto:

* Se o preço for maior que 200, aplique 15% de desconto
* Se o preço for maior que 100, aplique 10% de desconto
* Se o preço for menor ou igual a 100, aplique 5% de desconto

**Código base:**

```javascript
function calcularPrecoComDesconto(preco) {
  let desconto;

  if (preco > 200) {
    desconto = preco * 0.15;
  } else if (preco > 100) {
    desconto = preco * 0.10;
  } else {
    desconto = preco * 0.05;
  }

  const precoFinal = preco - desconto;
  return precoFinal;
}

console.log(calcularPrecoComDesconto(250));
console.log(calcularPrecoComDesconto(150));
console.log(calcularPrecoComDesconto(80));
```
