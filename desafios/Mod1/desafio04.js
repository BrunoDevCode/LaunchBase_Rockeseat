/**
 * Operações bancárias
 * 
 * Crie um programa para realizar operações bancarias na conta de um usuário
 */

const user = {
    name: 'Mariana',
    transactions: [],
    balance: 0
}

function createTransaction(transfer) {
    // Esse if's apenas um if e else resolveriam

    if (transfer.type == 'credit')
        user.balance += transfer.value

    // if transaction value less user balance, the transaction is not applied
    if (transfer.type == 'debit' && user.balance >= transfer.value)
        user.balance -= transfer.value

    user.transactions.push(transfer)
}

function getHigherTrasactionByType(type) {
    // Não entendi muito bem
    let higherTransaction
    let higherValue = 0

    for (let transaction of user.transactions) {
        if(transaction.type == type && transaction.value > higherValue) {
            higherValue = transaction.value
            higherTransaction = transaction
        }
    }

    return higherTransaction
}

function getAverageTransactionValue() {
    let soma = 0

    for (let transfer of user.transactions) {
        soma += transfer.value
    }

    // Poderia colocar diretamente return soma / ... 
    // Afinal seria necessario esse media fora da function
    // const media = soma / user.transactions.length ... Assim deu erro

    return soma / user.transactions.length
}

// function getTransactionCount() {
//     for(let i = 0; i < user.transactions.length; i++){

//         if (user.transactions[i].type == 'credit')
//             return totalCredit = user.transactions.length

//         if (user.transactions[i].type == 'debit')
//             return totalDebit = user.transactions.length
//     }

// }

// Correção getTransactionCount

function getTransactionCount() {
    let count = {
        credit: 0,
        debit: 0,
    }

    for (let transaction of user.transactions) {
        if (transaction.type === 'credit')
            count.credit++
        else 
            count.debit++
    }

    return count
}

createTransaction({ type: 'credit', value: 50 })
createTransaction({ type: 'credit', value: 120 })
createTransaction({ type: 'debit', value: 80 })
createTransaction({ type: 'debit', value: 30 })

console.log(user.balance)

console.log(getHigherTrasactionByType('credit'))
console.log(getHigherTrasactionByType('debit'))

console.log(getAverageTransactionValue())

console.log(getTransactionCount())

console.log(user)