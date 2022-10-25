// contador de caracteres en una palabra

const charCount = (char, word) => {
    if (typeof char != 'string' || typeof word != 'string') return console.log('ambos parametros deben ser un string')
    let x = 0
    for (let i = 0; i < word.length; i++) {
        if (char == word.charAt(i)) {
            x++
        }
    }
    return x
}
// charCount('a', 'america latina')

// Devolver un nuevo array con el numero min y max del array
const minMax = (array) => {
    if (typeof array != 'object') {
        return console.log('se debe ingresar un array')
    }
    let max = Math.max.apply(null, array)
    let min = Math.min.apply(null, array)
    return [min, max]
}
//minMax([23332, 1, 2, 3, 4, 5])


// Devolver el digito mas grande de un numero
const maxDigit = (n) => {
    let str = n.toString()
    let array = str.split('')
    return Math.max.apply(null, array)
}
// maxDigit(5543710)


// ordenar un numero con sus digitos de mayor a menor
const sortDescending = (n) => {
    let str = n.toString()
    let array = str.split('')
    array.sort((a, b) => b - a)
    let newArray = array.join('')
    return +newArray
}
// sortDescending(419523)

// validar codigo postal. (todos caracteres son numeros, no tiene mas de 5 digitos ni espacios en blanco)
const isValid = (cp) => {
    if (cp.length > 5) return false
    for (let i = cp.length - 1; i >= 0; i--) {
        const unicode = cp.charCodeAt(i)
        if (unicode < 48 || unicode > 57) return false
    }
    return true
}
// isValid('24142')


// conversor de C a F y de F a C
const convert = (temp) => {
    let array = temp.split('')
    let array2 = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] == '°') break
        array2.push(array[i])
    }
    array2 = array2.join('')
    if (array[array.length - 1] != 'c' && array[array.length - 1] != 'f') {
        return 'Error'
    }
    if (array[array.length - 1] == 'c') {
        const result = Math.round(+array2 * (9 / 5) + 32)
        return `${result}°f`
    }
    if (array[array.length - 1] == 'f') {
        const result = Math.round((+array2 - 32) * (5 / 9))
        return `${result}°c`
    }
}
// convert('30°c')


//diferencia de dias entre fecha asignada y la presente
const daysUntil = (day) => {
    let today = new Date();
    let date2 = new Date(day)
    let timeDifference = date2.getTime() - today.getTime();
    let daysDiferrence = timeDifference / (1000 * 3600 * 24);
    return Math.floor(daysDiferrence)
}
// daysUntil('11/22/2022')


// remplazar vocales con numeros
const replaceVowel = (word) => {
    let newWord = word.replace(/(a)|(A)/g, '1').replace(/(e)|(E)/g, '2').replace(/(i)|(I)/g, '3').replace(/(o)|(O)/g, '4').replace(/(u)|(U)/g, '5')
    return newWord
}
// replaceVowel('MURCIELAGO')


// devolver suma de los dos valores mas chicos de un array positivos
const sumTwoSmallestNums = (array) => {
    array = array.sort((a, b) => a - b)
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            let sum = array[i] + array[i + 1]
            return sum
        }
    }

}
// sumTwoSmallestNums([1, 85, 6, 74, 52, -4, 2, -17, -1, 1, 1])


// calculadora basica
const calculator = (first, operator, second) => {
    if (typeof first != 'number' || typeof second != 'number') {
        return 'los parametros deben de ser tipo number'
    }
    switch (operator) {
        case '+':
            return first + second
            break;
        case '-':
            return first - second
            break;
        case '*':
            return first * second
            break;
        case '/':
            return first / second
            break;
        default:
            return 'el operador ingresado no es valido'
    }
}

// calculator(54, '+', 4)