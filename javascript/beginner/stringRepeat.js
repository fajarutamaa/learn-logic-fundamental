const stringRepeat = (n, str) => {
    let result = ''

    for (let i = 0; i < n; i++) {
        result += str
    }

    return result
}

console.log(stringRepeat(3, '*'))