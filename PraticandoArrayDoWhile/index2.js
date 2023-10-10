//CRIANDO VARIÁVEIS
let modelos = []
let anos = []
let valores = []
continuar = true
contador = 0

while(continuar){
    let modeloCarro = prompt('Informe o modelo de carro: ')
    let ano = prompt('Informe o ano do veículo: ')
    let valor = parseFloat(prompt('Informe o valor do veículo: '))

    modelos[contador] = modeloCarro
    anos[contador] = ano
    valores[contador] = valor
    contador++
   

    let opcao = prompt('Deseja inserir um novo veículo?  (s/n)')
    if(opcao == 'n'){
        continuar = false
    }
}

    console.log('Carros cadastrados: ')
    for (i = 0; i < modelos.length; i++){
        console.log(modelos[i]+ ' - ' +anos[i]+ ' - ' +valores[i])
    }

    for (let i = 0; i < valores.length - 1;i++){
        for (let j = 0; j < valores.length - i - 1; j++){
            if (valores[j] > valores[j + 1]) {

                let modeloMaiorValor = modelos[j]
                modelos[j] = modelos[j + 1]
                modelos[j + 1] = modeloMaiorValor

                let anoMaiorValor = anos[j]
                anos[j] = anos[j + 1]
                anos[j + 1] = anoMaiorValor

                let maiorValor = valores[j]
                valores[j] = valores[j + 1]
                valores[j + 1] = maiorValor
            }
        }
    }

    console.log('Carros ordenados pelo preço: ')
    for (let i = 0; i < modelos.length; i++) {
        console.log(modelos[i] + ' - ' +anos[i]+ ' - ' +valores[i])
    }



