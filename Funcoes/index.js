//CRIAÇÃO DE VARIÁVEIS INICIAIS
let nome
let salario

alert('Para dar inicio ao programa insira no console a função "perguntaColaborador()." ')

//FUNÇÕES + LÓGICA
function perguntaColaborador() {
    nome = prompt('Insira o nome do colaborador: ')
    salario = parseFloat(prompt('Informe o salario do colaborador: '))
    calculoAumento(nome, salario)
}

function calculoAumento(nome, salario) {
    var aumento = 0

    if (salario <= 1500.00) {
        aumento = 0.2;
    } else if (salario > 1500.01 && salario <= 2000.00) {
        aumento = 0.15;
    } else if (salario > 2000.01 && salario <= 3000.00) {
        aumento = 0.1;
    } else {
        aumento = 0.05;
    }

    var novoSalario = salario + (salario * aumento)

    console.log(`Olá colaborador ${nome}, seu salário inicialmente era equivalente a R$${salario}, após o reajuste de ${aumento * 100}% seu novo salário está estimado em R$${novoSalario}. `)

    inserirNovamente()
}

function inserirNovamente() {
    let opcao = prompt('Deseja calcular o reajuste de outro colaborador? 1 - Sim // 2 - Não')
    if (opcao == '1') {
        perguntaColaborador();
    } else { alert('Programa encerrado.') }

}