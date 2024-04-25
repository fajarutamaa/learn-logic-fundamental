const sumOfSequence = n => {
    return n === 0 ? 1 : n ** 2 + sumOfSequence(n - 1)
}

console.log(sumOfSequence(3))