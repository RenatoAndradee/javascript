// correção do exercício:

const veiculo1 = prompt("Informe o nome do primeiro veículo: ")
const velocidade1 = parseFloat(prompt("Informe a velocidade do primeiro veículo: "))

const veiculo2 = prompt("Informe o nome do segundo veículo: ")
const velocidade2 = parseFloat(prompt("Informe a velocidade do segundo veículo: "))

if (velocidade1 > velocidade2) {
    alert(veiculo1 + " é mais rápido do que " + veiculo2)
} else if (velocidade2 > velocidade1) {
    alert(veiculo2 + " é mais rápido do que " + veiculo1)
} else {
    alert(veiculo1 + " e " + veiculo2 + " possuem velocidades iguais")
}



// Exercício que relaizei:

// const v1 = parseFloat(prompt("Insira a velocidade do 1º veículo: "))
// const v2 = parseFloat(prompt("Insira a velocidade do 2º veículo: "))

// if (v1 > v2) {
//     alert("O Veículo 1 está mais rápido do que o veículo 2!")
// } else if (v1 < v2) {
//     alert("O Veículo 2 está mais rápido do que o veículo 1!")
// } else {
//     alert("Os dois veículos estão na mesma velocidade!")
// }