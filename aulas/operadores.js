/**
 * Operadores de comparação
 * 
 *  >       Maior
 *  <       Menor
 *  >=      Maior igual a
 *  <=      Menor igual a
 *  ==      Igual a
 *  ===     Igual e do mesmo tipo
 *  !=      Diferente de
 *  !==     Diferente, inclusive do tipo
 * 
 */

// DESAFIO 1
const idade = 18

// verificar se a pessoa é maior igual a 18
// se sim, deixar entrar, se não, bloquear a entrada

if(idade >= 18) {
    console.log('Pode entrar')
} else {
    console.log('Entrada bloqueada')
}

// Se a pessoa tiver 17 anos
// Avisar para voltar quando fizer 18 anos

if(idade === 17) {
    console.log('Volte quando tiver 18 anos')
}

// Desafio 1 Menor

if(!(idade >= 18) || idade === 17) {
    console.log("Bloquear a entrada")
} else {
    console.log("Deixar entrar")
}

/**
 * Operadores Logicos
 * 
 *  &&  "E" As duas condições devem ser verdadeiras
 *      para que a condição final seja verdadeira.
 *  ||   "OU" Uma das condições deve ser verdadeira
 *       para que a condição final seja verdadeira.
 *  !   "NÂO" Nega uma condição
 */

// Dar bonificação de 500 reais
// 


/**
 * Operadores Aritméticos
 * 
 *  *   Multiplicação
 *  /   Divisão
 *  %   Resto da divisão
 *  +   Adição
 *  -   Subtração
 */

console.log(2 % 1.5) // 0.5