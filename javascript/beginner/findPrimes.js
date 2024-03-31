// Program sederhana untuk mencari bilangan prima ke-n

const findPrimes = (num) => {
    const isPrime = []
    const result = []

    for (let i = 2; i <= num; i++) {
        if (!isPrime[i]) {
            result.push(i)
            for (let j = i; j <= num; j += i) {
                isPrime[j] = true
            }
        }
    }
    return result
}


console.log(findPrimes(50))