const candies = (n, m) => {
    const candyPerChild = Math.floor(m / n) * n
    return candyPerChild
}

console.log(candies(3, 10))