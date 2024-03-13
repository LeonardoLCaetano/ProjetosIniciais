//CRIANDO ARRAYS
let hoteis = []
let reservas = []
let idHotel = 1
let idReserva = 1

class Hotel {
    Id
    Nome
    Categoria
    Endereco
    Telefone
    constructor(id, nome, categoria, endereco, telefone) {
        this.Id = id
        this.Nome = nome
        this.Categoria = categoria
        this.Endereco = endereco
        this.Telefone = telefone
    }
}

class Reserva {
    Id
    IdHotel
    NomeResponsavel
    DiaEntrada
    DiaSaida
    constructor(id, nomeHotel, nomeResponsavel, diaEntrada, diaSaida) {
        this.Id = id
        this.Nome = nomeHotel
        this.NomeResponsavel = nomeResponsavel
        this.DiaEntrada = diaEntrada
        this.DiaSaida = diaSaida
    }
}

//FUNÇÕES
function cadastrarHotel() {
    let nome = prompt('Digite o nome do hotel: ')
    let categoria = prompt('Digite a categoria do hotel: ')
    let endereco = prompt('Digite o endereco do hotel: ')
    let telefone = prompt('Digite o telefone do hotel: ')
    idHotel++
    let hotel = new Hotel(idHotel, nome, categoria, endereco, telefone)
    hoteis.push(hotel)
}

function cadastrarReserva() {
    let idHotel
    let reservar = false
    do {
        for (i = 0; i < hoteis.length; i++) {
            if (idHotel == hoteis[i].Id) {
                reservar = true
            }
        }
    } while (!reservar)

let nomeHotel = prompt('Digite o nome do hotel :')
let nome = prompt('Informe o nome do responsável: ')
do {
    let diaEntrada = parseInt(prompt('Informe o dia de entrada: '))
    let diaSaida = parseInt(prompt('Informe o dia de saída: '))
    if (diaSaida < diaEntrada) {
        alert('Atenção! O dia de saída deve ser maior que o dia de entrada.')
    }
}
while (diaSaida > diaEntrada)
idReserva++
let reserva = new Reserva(id, nomeHotel, nomeResponsavel, diaEntrada, diaSaida)
reservas.push(reserva)
}

function exibirReservas(idHotel){
reservas.forEach(reserva => {
    if(idHotel == reserva.idHotel){
        console.log('')
        console.log('')
        console.log('')
        console.log('')
        console.log('')
        console.log('')
    }
})

}