//CRIANDO VARIÁVEIS
let contador = 1
let quantMulheresAcimade7 = 0
let quantHomens = 0
let maiorNotaHomens = 0
let mediaGeral = 0
    
//UTILIZANDO O WHILE
while(contador <=10){
    nota = parseInt(prompt('Digite a nota do ' +contador+ ' º aluno(a).'))
    sexo = prompt('Digite o sexo do aluno:  (M/F)')

if(sexo == 'M'){
    if(nota > maiorNotaHomens){
        maiorNotaHomens = nota
    }
    quantHomens++
}
    if (sexo == 'F' && nota > 7){
    quantMulheresAcimade7++
}
mediaGeral += nota
contador++

}

mediaGeral = mediaGeral / 10

console.log('A quantidade de mulheres com nota acima de 7 é de: ' +quantMulheresAcimade7)
console.log('A quantidade de homens é de: ' +quantHomens)
console.log('A maior nota entre os homens é: ' +maiorNotaHomens) 
console.log('A média geral da nota dos alunos é: ' +mediaGeral)  