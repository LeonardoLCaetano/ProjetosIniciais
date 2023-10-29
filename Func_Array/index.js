//CRIAÇÃO DE DOIS ARRAYS JÁ PREENCHIDOS
let arrayA = [12, 17, 29, 25, 46, 14, 7, 9, 21, 13]
let arrayB = [17, 3, 5, 7, 11, 62, 13, 2, 44, 20]

//LÓGICA PARA A COMPARAÇÃO DOS NÚMEROS EM COMUM DOS ARRAYS
function numerosComuns(arrayUm, arrayDois) {
    let resultado = []
    let contador = 0

    for (i = 0; i < arrayUm.length; i++) {

        for (j = 0; j < arrayDois.length; j++) {

            if (arrayUm[i] == arrayDois[j]) {

                resultado[contador] = arrayUm[i]

                contador++
            }
        }
    }

    return resultado
}

//RESULTADO
numerosComuns(arrayA, arrayB)