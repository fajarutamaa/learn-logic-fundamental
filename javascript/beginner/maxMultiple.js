const maxMultiple = (advisor, bound) => {
    const modThree = bound % advisor
    const maxMultiple = bound - modThree
    return maxMultiple
}

console.log(maxMultiple(3, 10))