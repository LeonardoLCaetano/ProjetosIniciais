//ARRAY ORIGINAL
const array = []
const arrayInvertido = []

for(i = 0; i < 5; i++){
    let numero = parseInt(prompt(`Digite o ${i + 1}° número: `))
    array[i] = numero
}
console.log ('O array original é: ' +array)

//ARRAY INVERTIDO
let contador = 4
for(i = 0; i < 5; i++){
    arrayInvertido[i] = array[contador]
    contador--  
}

console.log('O array invertido é: ' +arrayInvertido)