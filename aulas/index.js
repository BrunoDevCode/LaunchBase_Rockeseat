// Template String: `É uma string usando aspas, possibilita adicionar variaveis ao texto`

// Criar um programa que calcula a média
// das notas entre os alunos e envia
// mensagem do cálculo da média

const alunosDaTurmaA = [
    {
        nome: 'Bruno',
        nota: 1.8,
    },
    {
        nome: 'Mayk',
        nota: 10,
    },
    {
        nome: 'Diego',
        nota: 2
    },
    {
        nome: 'Mais um aluno',
        nota: 10,
    }
]

const alunosDaTurmaB = [
    {
        nome: 'Cleiton',
        nota: 10,
    },
    {
        nome: 'Valeska',
        nota: 10,
    },
    {
        nome: 'Siclano',
        nota: 0
    },
    {
        nome: 'Novo Aluno',
        nota: 5
    }
]

function calculaMedia(alunos) {
    let soma = 0
    for (let i = 0; i < alunos.length; i++) {
        soma = soma + alunos[i].nota
    }

    const media = soma / alunos.length

    return media
}

const media1 = calculaMedia(alunosDaTurmaA)
const media2 = calculaMedia(alunosDaTurmaB)

// // Se a media do cálculo for maios que 5, parabenizar a turma

function enviaMensagem(media, turma) {
    if (media > 5) {
        console.log(`A média da ${turma} foi de ${media}. Parabens`)
    } else {
        console.log(`A média da ${turma} é menor que 5`)
    }

}

enviaMensagem(media1, "Turma A")
enviaMensagem(media2, "Turma B")

// const aluno01 = "Bruno"
// const notaAluno01 = 9.8

// const aluno02 = "Mayk"
// const notaAluno02 = 10

// const aluno03 = "Diego"
// const notaAluno03 = 2
''
// OBJETOS

// const aluno01 = {
//     nome: 'Bruno',
//     nota: 9.8
// }

// const aluno02 = {
//     nome: 'Mayk',
//     nota: 10,
// }

// const aluno03 = {
//     nome: 'Diego',
//     nota: 2
// }