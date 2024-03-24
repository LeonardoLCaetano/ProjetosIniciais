//CRIANDO ARRAYS
hoteis = []
reservas = []
let idHotel = 1
let idReserva = 1

//CLASSES
class Hotel {
    idHotel
    nome
    categoria
    endereco
    telefone
    constructor(idHotel, nome, categoria, endereco, telefone) {
        this.idHotel = idHotel
        this.nome = nome
        this.categoria = categoria
        this.endereco = endereco
        this.telefone = telefone
    }
}

class Reserva {
    idReserva
    idHotel
    nomeResponsavel
    diaEntrada
    diaSaida
    constructor(idReserva, idHotel, nomeResponsavel, diaEntrada, diaSaida) {
        this.idReserva = idReserva
        this.idHotel = idHotel
        this.nomeResponsavel = nomeResponsavel
        this.diaEntrada = diaEntrada
        this.diaSaida = diaSaida
    }
}

//FUNÇÃO PARA CADASTRAR HOTEL
function cadastrarHotel() {

    let nome = prompt('DIGITE O NOME DO HOTEL QUE DESEJA CADASTRAR:')
    let categoria = prompt('INFORME A CATEGORIA DO HOTEL: ')
    let endereco = prompt('INFORME A ENDEREÇO DO HOTEL: ')
    let telefone = prompt('INFORME O TELEFONE DO HOTEL: ')

    let hotel = new Hotel(idHotel, nome, categoria, endereco, telefone)
    idHotel++
    hoteis.push(hotel)
    alert('HOTEL CADASTRADO COM SUCESSO!')
    return hotel;

}

//FUNÇÃO PARA CADASTRAR RESERVA
function cadastrarReserva() {
    let reserva
    let verificaHotel = false
    let idHotel = Number(prompt('INFORME O ID DO HOTEL: '))
    let nomeResponsavel = prompt('DIGITE O NOME DO RESPONSÁVEL PELA RESERVA: ')
    let diaEntrada = parseInt(prompt('INFORME O DIA DE ENTRADA: '))
    let diaSaida = parseInt(prompt('INFORME O DIA DE SAÍDA: '))

    for (let i = 0; i < hoteis.length; i++) {
        if (idHotel == hoteis[i].idHotel) {
            verificaHotel = true
        }
    }

    if (diaEntrada > diaSaida) {
        alert('O dia de entrada deve ser menor que o dia de saída.')
    } else if (!verificaHotel) {
        alert('O ID do hotel inserido não existe!')
    } else {
        reserva = new Reserva(idReserva, idHotel, nomeResponsavel, diaEntrada, diaSaida)
        idReserva++
        reservas.push(reserva)
    }
    alert('RESERVA CADASTRADA COM SUCESSO!')
    return reserva;
}

//FUNÇÃO PARA BUSCAR UMA RESERVA PELO ID DO HOTEL
function buscarReservasPorHotel(idHotel) {
    reservas.forEach(reserva => {
        if (idHotel == reserva.idHotel) {
            let i = idHotel - 1
            alert(`Hotel: ${hoteis[i].nome}, Responsável: ${reserva.nomeResponsavel}, Dia de entrada: ${reserva.diaEntrada}, Dia de saída: ${reserva.diaSaida}. `)

        }
    });
}

//FUNÇÃO PARA BUSCAR UM HOTEL PELO ID DA RESERVA
function buscarHotelPorReservas(idReserva){
    let idHotel = reservas[idReserva - 1].idHotel
    alert(`Hotel: ${hoteis[idHotel - 1].nome} / Endereço: ${hoteis[idHotel - 1].endereco} / Dia de entrada: ${reservas[idReserva - 1].diaEntrada} / Dia de saída: ${reservas[idReserva - 1].diaSaida }`)


}

//FUNÇÃO PARA VERIFICAR RESERVAS A PARTIR DO NOME DO RESPONSÁVEL
function verificaResponsavel(nome) {
    for (let i = 0; i < reservas.length; i++) {
        if (nome == reservas[i].nomeResponsavel) {
            alert(`ID da reserva: ${reservas[i].idReserva}, ID do hotel: ${reservas[i].idHotel}`)
        }
    }

}

//FUNÇÃO PARA BUSCAR HOTEIS PELA CATEGORIA
function buscarCategoria(categoria) {
    let hoteisCategoria = []
    for (let i = 0; i < hoteis.length; i++) {
        if (categoria === hoteis[i].categoria) {
            hoteisCategoria.push(hoteis[i].nome)
        }
    }
    alert(hoteisCategoria)
    return hoteisCategoria;
}

//FUNÇÃO PARA ATUALIZAR O TELEFONE DE UM HOTEL
function atualizaTelefoneHotel(idHotel, telefone){
    hoteis[idHotel - 1].telefone = telefone
    alert('Telefone atualizado com sucesso.')
}

//FLUXO DE FUNCIONAMENTO DO CÓDIGO
let continuar = true
while(continuar){
    let opcao = prompt('DIGITE 1 PARA CADASTRAR UM HOTEL / 2 PARA CADASTRAR UMA RESERVA / 3 PARA BUSCAR UMA RESERVA PELO ID DO HOTEL / 4 PARA BUSCAR UM HOTEL PELO ID DA RESERVA/ 5 PARA VERIFICAR AS RESERVAS A PARTIR DO NOME DO RESPONSAVEL / 6 PARA BUSCAR HOTEIS PELA CATEGORIA / 7 PARA ATUALIZAR O TELEFONE DE UM HOTEL / 8 PARA ENCERRAR O PROGRAMA.')

    switch(opcao){
        case '1':
            cadastrarHotel()
        break;
        case '2':
            cadastrarReserva()
        break;
        case '3':
            buscarReservasPorHotel(prompt('DIGITE O ID DO HOTEL:'))
        break;
        case '4':
            buscarHotelPorReservas(prompt('DIGITE O ID DA RESERVA:'))
        break;
        case '5':
            verificaResponsavel(prompt('DIGITE O NOME DO RESPONSÁVEL:'))
        break;
        case '6':
            let hoteisCategoria = buscarCategoria(prompt('DIGITE A CATEGORIA DOS HOTÉIS QUE DESEJA:'))
            console.log(hoteisCategoria)
        break;
        case '7':
            let idHotel = prompt('DIGITE O ID DO HOTEL: ')
            let telefone = prompt('DIGITE O TELEFONE DO HOTEL: ')
            atualizaTelefoneHotel(idHotel, telefone)
        break;
        case '8':
            continuar = false
        break;
        default:
            alert('Opção inválida.')
        break;
    }


}

//FIM DO CÓDIGO
alert('OBRIGADO POR UTILIZAR O PROGRAMA, ATÉ A PRÓXIMA.')