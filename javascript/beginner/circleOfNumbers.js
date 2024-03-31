const circleOfNumbers = (n, firstNumber) => {
    let oppositeNumber = firstNumber + Math.floor(n / 2)

    if (oppositeNumber > n) {
        oppositeNumber -= n
    }

    return oppositeNumber
}

console.log(circleOfNumbers(10, 2))