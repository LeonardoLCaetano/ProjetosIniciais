//CRIANDO VARIÁVEIS
let valor
let quantidade
let opcoes = prompt('Bem vindo ao posto de gasolina! O Sr.(a) deseja qual das seguintes opções: ' + ' 1 - Gasolina, 2 - Álcool, 3 - Calibrar pneus')

//CRIANDO O SWITCH CASE
switch(opcoes){
    case '1': 
        valor = parseInt(prompt('Informe o valor que deseja abastecer: '))
        quantidade = valor / 5
        console.log('Beleza! Foram abastecidos ' +quantidade+ ' litros de gasolina.')
        break;

    case '2':
        valor = parseInt(prompt('Informe o valor que deseja abastecer: '))
        quantidade = valor / 3
        console.log('Beleza! Foram abastecidos ' +quantidade+ ' litros de álcool.')
        break;

   default:
    console.log('Pneus calibrados com sucesso!')
    break;
}