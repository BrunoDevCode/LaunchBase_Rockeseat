/**
 * Lidando com objetos e vetores
 * 
 * Construção e impressão de dados
 * 
 * Crie um programa que armazena dados da empresa Rockeseat dentro de um objeto chamado empresa.
 */

const empresa = {
    nome: 'Rocketseat',
    cor: 'Roxo',
    foco: 'Programação',
    endereço: {
        rua: 'Rua Guilherme Gembala',
        numero: 260
    }
}

console.log(`A empresa ${empresa.nome} está localizada na ${empresa.endereço.rua}, ${empresa.endereço.numero}`)

/**
 * Vetores e objetos
 * 
 * Crie um programa com um objeto para armazenar dados de um progrador como nome, idade e tecnologias que trabalha.
 * Um programador pode trabalhar com várias tecnologia, por isso armazene essas tecnologias em um array .
 * As tecnologias também devem ser objetos contendo nome e especialidade.
 */

const dev = {
    nome: 'Bruno',
    idade: 18,
    techs: [
        { nome: 'Javascript', especialidade: 'Web/Mobile' }
    ]
}

console.log(`O Dev ${dev.nome} tem ${dev.idade} anos e usa a tecnologia ${dev.techs[0].nome} com especialidade em ${dev.techs[0].especialidade}`)

// Apenas por curiosidade

const developers = [
    {
        nome: 'Bruno',
        idade: 18,
        techs: [
            { nome: "C++", especialidade: "Desktop" }
        ]
    },
    {
        nome: 'Mayk',
        idade: 39,
        techs: [
            {nome: 'Python', especialidade:'Data Science'}
        ]
    }
]

for (const developer of developers) {
    console.log(`O Dev ${developer.nome} tem ${developer.idade} anos e usa a tecnologia ${dev.techs[0].nome} com especialidade em ${dev.techs[0].especialidade}`)
}

// Deu Certo