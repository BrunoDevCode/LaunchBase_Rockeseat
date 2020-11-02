/**
 * Funções e estruturas de repetição
 * 
 * Usuários e tecnologias
 * 
 * Crie um programa que armazena um array de usuários(objetos), cada usuário tem um nome e suas tecnologias(novo array)
 */

const usuarios = [
    { nome: 'Carlos', tecnologias: ["HTML", "CSS"] },
    { nome: 'Jasmine', tecnologias: ["JavaScript", 'CSS'] },
    { nome: 'Tuane', tecnologias: ["HTML", "Node.js"] }
];

for(let i=0; i < usuarios.length; i++) {
    console.log(`${usuarios[i].nome}, trabalha com ${usuarios[i].tecnologias}.`)
}

/**
 * Busca por tecnologia
 * 
 * Baseado no desafio anterior, utilize a mesma lista de usuários construida.
 * Crie uma função que recebe os dados de um objeto de usuário e retorna SE o usuário trabalha com CSS ou não. Essa função deve retornar um boolean true/false
 */

// Esse eu não consegui fazer

function checaSeUsuarioUsaCss(usuario) {
    for (let tecnologia of usuario.tecnologias) {
        if (tecnologia == 'CSS') return true
    }

    return false
}

for (let i=0; i < usuarios.length; i++) {
    const usuarioTrabalhaComCss = checaSeUsuarioUsaCss(usuarios[i])

    if (usuarioTrabalhaComCss) {
        console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`)
    }
}

/**
 * Soma de despesas e receitas
 * 
 * Crie um programa que calcula a soma de receitas e despesas de usuários e no fim retorna o saldo (receitas - despesas)
 */

const usuarios2 = [
    {
        nome: 'Salvio',
        receitas : [115.3, 48.7, 98.3, 14.5],
        despesas: [85.3, 13.5, 19.9],
    },
    {
        nome: 'Marcio',
        receitas: [24.6, 214.3, 45.3],
        despesas: [185.3, 12.1, 120.0],
    },
    {
        nome: 'Lucia',
        receitas: [9.8, 120.3, 340.2, 45.3],
        despesas: [450.2, 29.9]
    }
];

function calculaSaldo(receitas, despesas) {
    function somaNumeros(numeros) {
        // Essa function poderia ser separada 
        let soma = 0;
        for(let numero of numeros) {
            soma += numero
        }
        return soma
    }

    // Essa função poderia apenas chamar as function abaixo
    
    const somaReceitas = somaNumeros(receitas)
    const somaDespesas = somaNumeros(despesas)

    return somaReceitas - somaDespesas
}

// Se colocasse usuario of usuarios tbm funcionava
for (let i=0; i < usuarios2.length; i++) {
    const resultado = calculaSaldo(usuarios2[i].receitas, usuarios2[i].despesas)
    if(resultado > 0) 
        console.log(`${usuarios2[i].nome} possui saldo POSITIVO de ${resultado}`)

    if(resultado < 0)
        console.log(`${usuarios2[i].nome} possui saldo NEGATIVO de ${resultado}`)
}