# Guia: Como usar input no terminal com JavaScript (Node.js)

## 1. Pré-requisitos

* Ter o Node.js instalado na máquina.
* Ter um editor de código (ex: VS Code).

## 2. Criando o projeto

Abra o terminal e crie uma pasta para os exercícios:

```bash
mkdir pratica-logica
cd pratica-logica
```

Crie um arquivo de código:

```bash
touch index.js
```

Abra no VS Code (se quiser):

```bash
code .
```

## 3. Lendo input no terminal

No Node.js puro, podemos usar o módulo `readline`:

```javascript
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite um número: ', (numero) => {
  console.log(`Você digitou: ${numero}`);
  rl.close();
});
```

### Como rodar:

```bash
node index.js
```

## 4. Exemplo com dois inputs (somando dois números)

```javascript
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o primeiro número: ', (n1) => {
  rl.question('Digite o segundo número: ', (n2) => {
    const soma = Number(n1) + Number(n2);
    console.log(`A soma é: ${soma}`);
    rl.close();
  });
});
```
