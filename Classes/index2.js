class Carro{
    nomeEquipe
    potencia
    velocidadeMaxima
    aceleracao
    constructor(nomeEquipe, potencia, velocidadeMaxima, aceleracao){
        this.nomeEquipe = nomeEquipe
        this.potencia = potencia
        this.velocidadeMaxima = velocidadeMaxima
        this.aceleracao = aceleracao
    }

    calculoDistancia(distancia){
        let resultado = distancia / (this.velocidadeMaxima / this.aceleracao)
        return resultado

    }
}

let continuar = true

while(continuar){
let nomeEquipe = prompt('Informe o nome da equipe do carro: ')
let potencia = prompt('Informe a potencia do carro em cavalos: ')
let velocidadeMaxima = parseInt(prompt('Informe a velocidade máxima que o carro pode atingir: '))
let aceleracao = parseInt(prompt('Informe em quantos segundos o carro vai de 0km/h - 100km/h: '))
let distancia = parseInt(prompt('Informe a distância que o veículo irá percorrer: '))
let carro = new Carro(nomeEquipe, potencia, velocidadeMaxima, aceleracao)

let opcao = prompt('Deseja inserir um novo veículo?  (s/n)')
if(opcao != 's'){
    continuar = false
}
    }
carro.calculoDistancia();