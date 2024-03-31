const squareSum = numbers => {
    let result = 0

    for (let i = 0; i < numbers.length; i++) {
        result += numbers[i] ** 2
    }

    return result
}

console.log(squareSum([1, 3, 5]))