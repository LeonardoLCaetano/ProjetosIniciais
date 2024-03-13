
//ARRAYS QUE SERÃO UTILIZADOS
let alunos = []
let notas = []

//CRIAÇÃO DA CLASSE ALUNO
class Aluno {
    nome
    idade
    nota
    constructor(nome, nota, idade) {
        this.nome = nome
        this.idade = idade
        this.nota = nota
    }
}

//CADASTRAR UM NOVO ALUNO
function cadastrarAluno(nome, nota, idade) {
    //INPUTS DO USUÁRIO
    let nomeAluno = prompt('DIGITE O NOME DO ALUNO: ')
    let notaAluno = Number(prompt('DIGITE A NOTA DO ALUNO: '))
    let idadeAluno = Number(prompt('DIGITE A IDADE DO ALUNO: '))

    //VERIFICA SE O ALUNO JÁ FOI CADASTRADO (DESCONSIDERANDO A POSSIBILIDADE DE ALUNOS COM O MESMO NOME)
    let verificaAluno = alunos.some(aluno => aluno.nome === nomeAluno);
    if (verificaAluno) {
        alert('ALUNO JÁ CADASTRADO!')
    } else {//CRIA O OBJETO E ADICIONA NO ARRAY
        let aluno = new Aluno(nomeAluno, notaAluno, idadeAluno)
        alunos.push(aluno)
        notas.push(notaAluno)

        return aluno
    }

}

// ORDENAR POR NOTA
function ordenarPorNota(array) {
    const notasOrdenadas = array.slice(); //CRIA UMA CÓPIA DO ARRAY E SALVA AS NOTAS ORDENADAS
    notasOrdenadas.sort((a, b) => a.nota - b.nota);
    return notasOrdenadas;
}

// ORDENAR POR IDADE
function ordenarPorIdade(array) {
    const idadesOrdenadas = array.slice(); //CRIA UMA CÓPIA DO ARRAY E SALVA AS IDADES ORDENADAS
    idadesOrdenadas.sort((a, b) => a.idade - b.idade);
    return idadesOrdenadas;
}

//CALCULANDO A MEDIA
function calculaMedia(array) {
    let somaNotas = 0
    array.forEach(aluno => {
        somaNotas += Number(aluno.nota)
    });
    let mediaGeral = somaNotas / array.length
    return mediaGeral
}

//FLUXO DE FUNCIONAMENTO PARA O USUÁRIO
let continuar = true
while (continuar) {
    let opcao = prompt('DIGITE 1 PARA CADASTRAR UM NOVO ALUNO // 2 PARA ORDENAR ALUNOS POR NOTA // 3 PARA ORDENAR POR IDADE // 4 PARA CALCULAR A MÉDIA // 5 PARA ENCERRAR O PROGRAMA.')

    switch (opcao) {
        case '1':
            cadastrarAluno()
            break;

        case '2':
            alert(ordenarPorNota(alunos).map(aluno => ` ${aluno.nome} - Nota: ${aluno.nota} , Idade: ${aluno.idade} //`));
            break;

        case '3':
            alert(ordenarPorIdade(alunos).map(aluno => ` ${aluno.nome} - Idade: ${aluno.idade} , Nota: ${aluno.nota} //`));
            break;

        case '4':
            alert(`A média dos alunos é de ${calculaMedia(alunos)}`)
            break;

        default:
            continuar = false
            break;
    }

}

alert('OBRIGADO POR UTILIZAR A PLATAFORMA, ATÉ A PRÓXIMA!')