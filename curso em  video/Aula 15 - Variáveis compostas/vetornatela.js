let valores = [2, 4, 5, 3, 6, 8, 14, 15]
valores.sort()
/*

for (let pos = 0; pos<valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

for(let pos in valores) {
    console.log (`A posição ${pos} tem o valor ${valores[pos]}`)
}
