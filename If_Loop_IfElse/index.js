//CRIANDO VARIÁVEIS
let continuar = 'n'
//DO-WHILE
do {
    let nome = prompt('Digite seu nome: ')
    let idade = parseInt(prompt('Digite sua idade: '))
    let peso = parseInt(prompt('Digite seu peso: '))
    let altura = parseFloat(prompt('Digite sua altura: '))
    let profissao = prompt('Digite sua profissão: ')
   
    console.log('Olá ' + nome + ', você tem ' + idade + ' anos, é um ' + profissao + ', tem ' + altura + 'm de altura e pesa ' + peso + ' kg.')

    //VERIFICANDO IDADE
    if (idade >= 18) {
        console.log('Está liberado para tomar umas geladas!')
    }
    else if (idade < 18) {
        console.log('Sem gelada para você.')
    }

    //IDADE FRACIONADA
    let meses = idade * 12
    let semanas = idade * 52
    let dias = idade * 365

    console.log('Sua idade em meses é: ' + meses)
    console.log('Sua idade em semanas é: ' + semanas)
    console.log('Sua idade em dias é: ' + dias)

    //DESCOBRINDO ANO DE NASCIMENTO
    let anoAtual = 2023
    let anoNasc = 2023 - idade
    console.log('Você nasceu em ' + anoNasc)

    //CALCULANDO IMC
    let IMC = peso / (altura * altura)
    if (IMC < 18.5) {
        console.log('Saudações ' + nome + ' seu IMC é equivalente a ' + IMC + ' se enquadrando no quadro de magreza.')
    }
    else if (IMC >= 18.5 && IMC <= 24.9) {
        console.log('Saudações ' + nome + ' seu IMC é equivalente a ' + IMC + ' se enquadrando no quadro normal.')
    }
    else if (IMC >= 24.9 && IMC <= 30) {
        console.log('Saudações ' + nome + ' seu IMC é equivalente a ' + IMC + ' se enquadrando no quadro de sobrepeso.')
    }
    else {
        console.log('Saudações ' + nome + ' seu IMC é equivalente a ' + IMC + ' se enquadrando no quadro de obesidade.')
    }

    //LAÇO DE REPETIÇÃO FOR
    let anoVivido = anoNasc
    let idadeAtual = 0

   for (let anoVivido = anoNasc; anoVivido <= anoAtual; anoVivido++) {
        console.log(anoVivido + ' - ' + idadeAtual + ' anos de idade.')
       idadeAtual++
   }
   continuar = prompt('Deseja inserir as informações novamente?  (s/n)')
   
} while (continuar != 'n')