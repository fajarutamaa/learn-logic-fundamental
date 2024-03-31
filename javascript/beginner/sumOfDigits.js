const sumOfDigits = nums => {
    const parseTens = Math.floor(nums / 10)
    const parseOnes = nums % 10
    const result = parseTens + parseOnes
    return result
}

console.log(sumOfDigits(57))