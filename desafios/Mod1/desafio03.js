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
    const usuarioTrabalhaComCss = checaSeUsuarioUsaCss(usuario[i])

    if (usuarioTrabalhaComCss) {
        console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`)
    }
}