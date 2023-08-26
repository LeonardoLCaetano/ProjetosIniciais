//DECLARAÇÃO DAS VARIÁVEIS
let nome = ""
let idade = 0
let altura = 0
let peso = 0

//ENTRADA DO USUÁRIO
nome = prompt('Digite seu nome: ')
idade = parseInt(prompt('Digite sua idade: '))
altura = parseFloat(prompt('Digite sua altura: '))
peso = parseInt(prompt('Digite seu peso: '))

//CÁLCULO ANO DE NASCIMENTO//CÁLCULO DE IMC
let anoNasc
anoNasc = 2023 - idade

let imc = 0     
imc = peso / (altura * altura)

//EXIBIÇÃO DOS DADOS NO CONSOLE
console.log('Ola! ' +nome+ ', voce nasceu em ' +anoNasc+ ', tem ' +idade+ ' anos, pesa ' +peso+ ' e mede ' +altura+ ' sendo assim seu imc e de ' +imc+ ' kg/m².')