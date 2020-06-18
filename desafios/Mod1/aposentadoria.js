const pessoa = {
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

timeContribuicao = pessoa.idade + pessoa.contribuicao

if( pessoa.sexo == "F" ) {
    if ( timeContribuicao >= 85 ) {
        console.log(`${pessoa.nome}, você ja pode se aposentar`)
    } else {
        console.log(`${pessoa.nome}, você ainda não pode se aposentar`)
    }
} else {
    if ( timeContribuicao >= 95) {
        console.log(`${pessoa.nome}, você já pode se aposentar`)
    } else {
        console.log(`${pessoa.nome}, você ainda não pode se aponsentar`)
    }
}