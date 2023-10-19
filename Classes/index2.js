//CRIANDO CLASSES E METODOS
class Carro {
    nomeEquipe
    potencia
    velocidadeMaxima
    aceleracao
    constructor(nomeEquipe, potencia, velocidadeMaxima, aceleracao) {
        this.nomeEquipe = nomeEquipe
        this.potencia = potencia
        this.velocidadeMaxima = velocidadeMaxima
        this.aceleracao = aceleracao
    }

    calculoDistancia(distancia) {
        let resultado = distancia / (this.velocidadeMaxima / this.aceleracao)
        return resultado
    }
}

class Corrida {
    nomeCorrida
    tipoCorrida
    distancia
    participantesCorrida
    vencedorCorrida
    constructor(nomeCorrida, tipoCorrida, distancia, participantesCorrida, vencedorCorrida) {
        this.nomeCorrida = nomeCorrida
        this.tipoCorrida = tipoCorrida
        this.distancia = distancia
        this.participantesCorrida = []
        this.vencedorCorrida = ''

    }

    verificaTempo() {
        let menorTempo = this.participantesCorrida[0].calculoDistancia(this.distancia)
        let vencedor = this.participantesCorrida[0]

        for (let index = 1; index < this.participantesCorrida.length; index++) {
            let tempo = this.participantesCorrida[index].calculoDistancia(this.distancia)
            if (tempo < menorTempo) {
                menorTempo = tempo
                vencedor = this.participantesCorrida[index]
            }
        }

        return this.vencedorCorrida = vencedor
    }

    exibirVencedor() {
        alert('O vencedor é: ' + this.vencedorCorrida.nomeEquipe)
    }
}

//CRIANDO VARIÁVEIS
let carro
let continuar = true
let distancia
let contador = 0

//PREENCHENDO OS PARÂMETROS DO OBJETO ATRAVÉS DOS PROMPTS 
while (continuar) {
    let nomeEquipe = prompt('Informe o nome da equipe do carro: ')
    let potencia = prompt('Informe a potencia do carro em cavalos: ')
    let velocidadeMaxima = parseInt(prompt('Informe a velocidade máxima que o carro pode atingir: '))
    let aceleracao = parseInt(prompt('Informe em quantos segundos o carro vai de 0km/h - 100km/h: '))
    distancia = parseInt(prompt('Informe a distância que o veículo irá percorrer em metros: '))

    carro = new Carro(nomeEquipe, potencia, velocidadeMaxima, aceleracao)

    let opcao = prompt('Deseja inserir um novo veículo?  (s/n)')
    if (opcao != 's') {
        continuar = false
    }
}

console.log(`O carro inserido percorre ${distancia} metros em ${carro.calculoDistancia(distancia)} segundos`)

//SIMULAÇÃO DE CORRIDA UTILIZANDO OBJETOS
console.log('-------------------- CORRIDA ----------------------')

let corrida = new Corrida('Racing Stars', 'Fórmula 1', 9000)

corrida.participantesCorrida[0] = new Carro('Civic', 120, 230, 4)
corrida.participantesCorrida[1] = new Carro('HR-V', 100, 210, 6)
corrida.participantesCorrida[2] = new Carro('Gol G5', 115, 225, 4)
corrida.participantesCorrida[3] = new Carro('Chevett', 75, 170, 8)

console.log(corrida.verificaTempo())
console.log(corrida.exibirVencedor())





