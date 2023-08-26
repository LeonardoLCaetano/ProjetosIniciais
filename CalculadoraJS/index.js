//DEFINIÇÃO DE VARIÁVEIS
let opcao = prompt('Informe o tipo de cálculo que deseja realizar: ')
let numero1 = parseInt(prompt('Digite um número: '))
let numero2 = parseInt(prompt('Digite outro número: '))

//CRIANDO SWITCH CASE
switch(opcao){
    
    case 'subtracao': 
        console.log(numero1 + ' - ' + numero2 + ' = ' + (numero1 - numero2))
        break;
    case 'adicao':
        console.log(numero1 + ' + ' + numero2 + ' = ' + (numero1 + numero2))
        break;
    case 'multiplicacao':
        console.log(numero1 + ' * ' + numero2 + ' = ' + (numero1 * numero2))
        break;
    default:
        console.log(numero1 + ' / ' + numero2 + ' = ' (numero1 / numero2))
        break;
    
}
