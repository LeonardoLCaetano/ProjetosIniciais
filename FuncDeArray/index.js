let usuarios = []
let senhas = []
let usuario

//ESCOLHA DE OPÇÃO
function solicitaOpcao() {
    let opcao = prompt('Informe o que deseja fazer: 1 - Cadastro / 2 - login / 3 - exclusão de cadastro / 4 - encerrar o programa')
    return opcao;
}

//OPÇÃO DE CADASTRO
function cadastro() {
    usuarios.push(prompt('Digite seu nome de usuário: '))
    senhas.push(prompt('Digite sua senha: '))
}

//OPÇÃO DE LOGIN
function fazerLogin(usuario, senha) {
    let indice = usuarios.indexOf(usuario)
    if (indice !== -1 && senhas[indice] == senha) {
        return true
    } else {
        return false
    }

}

//OPÇÃO DE EXCLUSÃO DE CADASTRO
function excluirCadastro(usuario) {
    let indice = usuarios.indexOf(usuario)
    if (indice !== -1) {
        usuarios.splice(indice, 1)
        senhas.splice(indice, 1)
        alert('Cadastro excluído com sucesso!')
    } else {
        alert('Usuário não encontrado.')
    }
}

//FLUXO DE FUNCIONAMENTO DO PROGRAMA
let continuar = true
while (continuar) {
    let opcao = solicitaOpcao();

    switch (opcao) {
        case '1':
            cadastro();
            break;

        case '2':
            usuario = prompt('Digite seu nome de usuário: ')
            let senha = prompt('Digite sua senha: ')
            let login = fazerLogin(usuario, senha)
            if (login) {
                alert('Login feito com sucesso!')
            } else {
                alert('Usuário ou senha incorreto(s).')
            }
            break;

        case '3':
            usuario = prompt('Digite o nome de usuário que deseja excluir: ')
            excluirCadastro(usuario)
            break;

        case '4':
            continuar = false
            break;

        default:
            alert('Opcão inválida.')
            break;
    }
}

