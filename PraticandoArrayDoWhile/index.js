let alunos = []
let notas = []
let continuar = true
let contador = 0
let media

while(continuar){
    let nome = prompt('Insira o nome do '+(contador + 1)+ '° aluno(a): ')
    alunos[contador] = nome
    let nota = parseInt(prompt('Insira a nota do aluno: '))
    notas[contador] = nota
    contador++

    let opcao = prompt('Deseja inserir um novo aluno? (s/n)')
    if(opcao == 'n'){
        continuar = false
    }
}

    console.log('Nota dos alunos')
    for(i = 0; i < alunos.length; i++){
        console.log(alunos[i]+ ' - ' +notas[i])
    }

    let somaNotas = 0
    for(i = 0; i < notas.length; i++){
        somaNotas += notas[i] 
    }

    media = somaNotas / alunos.length

    console.log('A soma das notas foi de: ' +somaNotas)
    console.log('A média geral da turma foi de: ' +media)