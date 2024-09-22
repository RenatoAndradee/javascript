const valor = parseFloat(prompt("Conversor de medidas: \n\nInsira o valor em metros (m):"))

const converter = prompt("Escolha a medida para a qual deseja converter: \n1. milímetro (mm) \n2. centímetro (cm) \n3. decímetro (dm) \n4. decâmetro (dam) \n5. hectômetro (hm) \n6. quilômetro (km)")

const resultado = parseFloat(converter)

switch (resultado) {
    case 1:
       alert("O valor em milímetros é: " + valor * 1000 + " (mm)")
       break
    case 2:
        alert("O valor em centímetro é: " + valor * 100 + " (cm)")
       break
    case 3:
        alert("O valor em decímetro é: " + valor * 10 + " (dm)")
        break
    case 4:
        alert("O valor em decâmetro é: " + valor / 10 + " (dam)")
        break
    case 5:
        alert("O valor em hectômetro é: " + valor / 100 + " (hm)")
        break
    case 6:
        alert("O valor em quilômetro é: " + valor / 1000 + " (km)")
        break
    default:
        alert("Opção inválida!")
    }

// Resolução do professor:
// const medida = parseFloat(prompt("Insira uma medida em metros:"))

// const unidade = prompt(
//     "Para qual unidade de medida deseja converter?" +
//     "\n1 - milímetros (mm)" +
//     "\n2 - centímetros (cm)" +
//     "\n3 - decímetros (dm)" +
//     "\n4 - decâmetros (dam)" +
//     "\n5 - hectômetro (hm)" +
//     "\n6 - quilômetro (km)"
//   )

//   Por fim usamos o switch para mostrar os resultados de acordo com as diferentes opções:

// switch (unidade) {
//     case "1":
//       alert("Resultado: " + medida + "m = " + medida * 1000 + "mm")
//     case "2":
//       alert("Resultado: " + medida + "m = " + medida * 100 + "cm")
//     case "3":
//       alert("Resultado: " + medida + "m = " + medida * 10 + "dm")
//     case "4":
//       alert("Resultado: " + medida + "m = " + medida / 10 + "dam")
//     case "5":
//       alert("Resultado: " + medida + "m = " + medida / 100 + "hm")
//     case "6":
//       alert("Resultado: " + medida + "m = " + medida / 1000 + "km")
//   }

//   E incluímos também um bloco default e os breaks em cada case para garantir que o default não seja ativado:

// switch (unidade) {
//     case "1":
//       alert("Resultado: " + medida + "m = " + medida * 1000 + "mm")
//       break
//     case "2":
//       alert("Resultado: " + medida + "m = " + medida * 100 + "cm")
//       break
//     case "3":
//       alert("Resultado: " + medida + "m = " + medida * 10 + "dm")
//       break
//     case "4":
//       alert("Resultado: " + medida + "m = " + medida / 10 + "dam")
//       break
//     case "5":
//       alert("Resultado: " + medida + "m = " + medida / 100 + "hm")
//       break
//     case "6":
//       alert("Resultado: " + medida + "m = " + medida / 1000 + "km")
//       break
//     default:
//       alert("Opção inválida!")
//       break
//   }