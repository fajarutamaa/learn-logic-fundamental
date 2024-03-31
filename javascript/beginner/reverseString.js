const reverseString = str => {
    return str.split('').reverse().join('')
}

//best practice
const reverseStr = str => str.split('').reverse().join('')

console.log(reverseString('hello'))