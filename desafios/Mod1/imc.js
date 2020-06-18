const pessoa = {
    nome: 'Carlos',
    peso: 84,
    altura: 1.88
}

imc = pessoa.peso / (pessoa.altura * pessoa.altura)

if (imc >= 30) {
    console.log(`${pessoa.nome} você esta acima do peso`);
} else {
    console.log(`${pessoa.nome} você não está acima do peso`);
}