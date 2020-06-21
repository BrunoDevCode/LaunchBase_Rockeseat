/**
 * Primeiros passos com JS
 * 
 * Cálculo de IMC
 * Crie um programa para calcular o IMC e nível de obesidade de uma pessoa
 */

const pessoa1 = {
    nome: 'Carlos',
    peso: 84,
    altura: 1.88
}

imc = pessoa1.peso / (pessoa1.altura * pessoa1.altura)

if (imc >= 30) {
    console.log(`${pessoa1.nome} você esta acima do peso`);
} else {
    console.log(`${pessoa1.nome} você não está acima do peso`);
}

/**
 * Cálculo de aposentadoria
 * 
 * Crie um programa para calcular a aposentadoria de uma pessoa
 */

const pessoa2 = {
    nome: 'Silvana',
    sexo: 'F',
    idade: 48,
    contribuicao: 23
}

// Teste Homem
// const pessoa = {
//     nome: 'Mario',
//     sexo: "M",
//     idade: 60,
//     contribuicao: 35
// }

const timeContribuicao = pessoa2.idade + pessoa2.contribuicao

if( pessoa2.sexo == "F" ) {
    if ( timeContribuicao >= 85 ) {
        console.log(`${pessoa2.nome}, você ja pode se aposentar`)
    } else {
        console.log(`${pessoa2.nome}, você ainda não pode se aposentar`)
    }
} else {
    if ( timeContribuicao >= 95) {
        console.log(`${pessoa2.nome}, você já pode se aposentar`)
    } else {
        console.log(`${pessoa2.nome}, você ainda não pode se aponsentar`)
    }
}

// Correção

const homemPodeAposentar = sexo == 'M' && pessoa2.contribuicao >= 35 && calculoContribuição >= 95

const mulherPodeAposentar = sexo == 'F' && pessoa2.contribuicao >= 35 && calculoContribuição >= 95

if ( homemPodeAposentar || mulherPodeAposentar ) {
    console.log(`${pessoa2.nome}, você já pode se aposentar`)
} else {
    console.log(`${pessoa2.nome}, você ainda não pode se aponsentar`)
}