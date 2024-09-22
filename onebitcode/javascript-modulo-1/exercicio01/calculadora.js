const primeiroNumero = parseFloat(prompt("Insira o primeiro número da operação:"))

const segundoNumero = parseFloat(prompt("Insira um segundo número para a operação:"))


// const primeiroNumero = prompt("Insira o primeiro número da operação:")

// const segundoNumero = prompt("Insira o primeiro número da operação:")

// const soma = x + y
// const subtracao = x - y
// const multiplicacao = x * y
// const divisao = x / y

const soma = primeiroNumero + segundoNumero
const subtracao = primeiroNumero - segundoNumero
const multiplicacao = primeiroNumero * segundoNumero
const divisao = primeiroNumero / segundoNumero

alert(
    "Abaixo, os resultados das operações:\n" +
    "\nA Soma dos números inseridos é igual a:" + " " + soma +
    "\nA subtração é igual a:" + " " + subtracao +
    "\nA multiplicação é igual a:" + " " + multiplicacao +
    "\nA divisão é igual a:" + " " + divisao 
)