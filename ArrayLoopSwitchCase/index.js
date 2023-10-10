//CRIANDO VARIAVEIS
let nomes = []
let senhas = []
let contador = 0
let continuar = true

//WHILE + LOOP + SWITCH CASE
while(continuar){

    let opcao = parseInt(prompt('Bem vindo! Deseja fazer:  1 - Cadastro, 2 - Login, 3 - Excluir'))

switch(opcao){
    case 1: 
    nomes[contador] = prompt('Insira o nome de usuário que deseja utilizar: ')
    senhas[contador] = prompt('Insira uma senha para utilizar na plataforma: ')
    contador++

    break;
    case 2:
    let nome = prompt('Usuário: ')
    let senha = prompt('Senha: ')

    let loginValido = false

    for (i = 0; i < nomes.length; i++){
        if(nome == nomes[i] && senha == senhas[i]){

            loginValido = true
        }
    }

    if(loginValido){
        alert('Login feito com sucesso!')
    }
    else{
        alert('Usuário ou senha incorreto(s).')
    }

    break;
    case 3:
        
        let nomeExcluir = prompt('Qual nome de usuário deseja excluir: ')
        let nomesAux = []
        let senhasAux = []
        let contadorAux = 0

        for(let i = 0; i < contador; i++){
            if (nomeExcluir == nomes[i]) {
                alert('Cadastro excluído com sucesso')
            } else {
                nomesAux[contadorAux] = nomes[i]
                senhasAux[contadorAux] = senhas[i]
                contadorAux++
            }
        }

    break;
    case 4: 
        continuar = false
        break;
    default:
        console.log('Opção inválida, escolha outra.')
}
    }   