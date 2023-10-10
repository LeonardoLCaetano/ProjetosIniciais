//CRIANDO VARIÁVEIS/LOOP

let salario
let confirmar = "n"

while(confirmar != "s"){
    let nome = prompt('Digite seu nome: ')
    let idade = parseInt(prompt('Digite sua idade: '))
    salario = parseFloat(prompt('Informe seu salário atual: '))
    console.log('Olá ' +nome+ ', você tem ' +idade+ ' anos e seu salário atual é de ' +salario+ ' reais por mês.')
confirmar = prompt('As informações inseridas estão corretas?  (s/n)')

}

//FAZENDO A PREVISÃO DO SALÁRIO
let aumento = 0.015
console.log('Previsão de aumento salarial nos próximos 10 anos: ')

for(let ano = 1; ano <= 10; ano++){
    salario += salario * aumento
    aumento *= 2

console.log((2023 + ano)+ ' = R$ ' + salario)
}
