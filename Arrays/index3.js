//DECLARAÇÃO DE VARIÁVEIS
const array = []
const arrayInvertido = []
let numArray = parseInt(prompt('Informe quantos números deseja adicionar no array: '))

//LOOP
for(i = 0; i < numArray; i++){
    let numero = parseInt(prompt(`Digite o ${i + 1}° número: `))
    array[i] = numero
}

//LOOP INVERTIDO
let contador = numArray - 1
for(i = 0; i < numArray; i++){
    arrayInvertido[i] = array[contador]
    contador--
}

//EXIBIÇÃO NO CONSOLE
console.log(`${numArray} números foram adicionados no array.`)
console.log(`Array original: ${array}  Array invertido: ${arrayInvertido}`)