//CRIAÇÃO DAS VARIÁVEIS
const array = []
const indices = []
let contador = 0

const numeroProcurado = parseInt(prompt('Digite o número a ser procurado: '))

//LOOPS
for (let i = 0; i < 10; i++){
    const elemento = parseInt(prompt(`Digite o ${i + 1}° elemento:  `))
    array[i] = elemento
}

for (let i = 0; i < 10; i++){
    if  (array[i] === numeroProcurado){
        indices[contador] = i
        contador++
    }
}

console.log(`O número ${numeroProcurado} foi encontrado nos índices: ${indices}`)