// Correção:
const atacante = prompt("Qual é o nome do personagem atacante?")
const poderDeAtaque = parseFloat(prompt("Qual é o seu poder de ataque?"))

const defensor = prompt("Qual é o nome do personagem defensor?")
let pontosDeVida = parseFloat(prompt("Quantos pontos de vida ele possui?"))
const PoderDeDefesa = parseFloat(prompt("Qual é o seu poder de defesa?"))
const possuiEscudo = prompt("Ele possui um escudo? (Sim/Não)")

let danoCausado = 0

if (poderDeAtaque > PoderDeDefesa && possuiEscudo === "Não") {
    danoCausado = poderDeAtaque - PoderDeDefesa
} else if (poderDeAtaque > PoderDeDefesa && possuiEscudo === "Sim") {
    danoCausado = (poderDeAtaque - PoderDeDefesa) / 2
}

pontosDeVida -= danoCausado

alert(atacante + " causou " + danoCausado + " pontos de dano em " + defensor)

alert(atacante + "\nPoder de ataque: " + poderDeAtaque + "\n\n" +
  defensor + "\nPontos de vida: " + pontosDeVida +
  "\nPoder de defesa: " + poderDeDefesa + "\nPossui escudo: " + possuiEscudo
)



// Programa que elaborei:
// const nameAtack = prompt("Insira o nome do personagem de ataque:")
// const pwrAtack = parseFloat(prompt("Insira o poder de ataque do personagem:"))

// const nameDefense = prompt("Insira o nome do personagem de defesa:")
// const life = parseFloat(prompt("Insira os pontos de vida do personagem de defesa:"))
// const pwrDefense = parseFloat(prompt("Insira o poder de defesa do 2º personagem:"))
// const shield = prompt("O personagem possui escudo? (Digite 1 para 'Sim' e 0 para 'Não')")
// const atack = pwrAtack - pwrDefense
// const damage = atack - life


// if (pwrAtack > pwrDefense && shield !== 0) {
//     alert("Dano: " + (atack))
// } else if (pwrAtack > pwrDefense && shield !== 1) {
//     alert("Dano: " + (atack))
// } else if (pwrAtack <= pwrDefense){
//     alert("Dano: 0")
// }

//     alert("Informações dos personagens: \n" +
//         "\nPersonagem de ataque: " + nameAtack + 
//         "\nPoder de ataque:" + pwrAtack +
//         "\n" +
//         "\nPersonagem defensor: " + nameDefense +
//         "\nDano recebido: " + atack +
//         "\nVida do personagem depois do ataque: " + damage 
//     )
