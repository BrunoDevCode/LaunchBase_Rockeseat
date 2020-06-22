const classA = [
    // Objeto dentro de array
    {
        name: 'Bruno',
        grade: 9.8,
    },
    {
        name: 'Mayk',
        grade: 10,
    },
    {
        name: 'Diego',
        grade: 2
    },
    {
        name: 'Mais um student',
        grade: 10,
    }
]

const classB = [
    {
        name: 'Cleiton',
        grade: 10,
    },
    {
        name: 'Valeska',
        grade: 10,
    },
    {
        name: 'Siclano',
        grade: 0
    },
    {
        name: 'Novo Aluno',
        grade: 5
    }
]

function calculateAverage(students) {
    let sum = 0
    for (let i = 0; i < students.length; i++) {
        sum = sum + students[i].grade
    }

    const average = sum / students.length

    return average
}

function sendMenssage(average, turma) {
    if (average > 5) {
        console.log(`${turma} average: ${average}. Congrats`)
    } else {
        console.log(`${turma} average: ${average}. Is not good`)
    }

}

function markAsFlunked(student) {
    student.flunked = false;

    if (student.grade < 5) {
        student.flunked = true
    }

    // Desmontração como tabela no console
    // console.table(students)
}

function sendFlunkedMessage(student) {
    if (student.flunked) {
        console.log(`${student.name} flunked!`)
    }
}

function studentsReprovado(students) {
    for (let student of students) {
        markAsFlunked(student);
        sendFlunkedMessage(student);
    }
}

const average1 = calculateAverage(classA)
const average2 = calculateAverage(classB)

sendMenssage(average1, "Class A")
sendMenssage(average2, "Class B")

studentsReprovado(classA)
studentsReprovado(classB)