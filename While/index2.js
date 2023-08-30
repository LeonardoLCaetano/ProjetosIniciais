//DECLARAÇÃO DE VARIÁVEIS
let nome = prompt('Digite seu nome: ')
let cpf = prompt('Digite seu cpf: ')
let saldo = 100
let valor = 0
let maiorValor = 0
let opcao
let condicao
let contador = 0
let mediaValores = 0

do{
    opcao = prompt('Deseja realizar um saque ou depósito?  (sq/dp)')
    valor = parseFloat(prompt('Informe um valor: '))
    mediaValores += valor
    
    if(valor > maiorValor){
        maiorValor = valor
    }

    if(opcao == 'sq' && valor > saldo){
        console.log('Saldo insuficiente para realizar operação')
    }

    else if(opcao == 'sq' && valor < saldo ){
        saldo -= valor
    }

    else{
        saldo += valor
    }
    
    contador++
    console.log('Seu saldo é de: R$ ' +saldo)
    console.log('O maior valor inserido foi: R$ ' +maiorValor)
    console.log('A média dos valores inseridos foi de: R$ ' +(mediaValores / contador))

    condicao = parseInt(prompt('Digite 1 para continuar a operação ou 2 para finalizar.'))

}while(condicao == 1)

