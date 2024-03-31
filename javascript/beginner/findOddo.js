const findOddo = n => {
    for (let i = 0; i <= n; i++) {
        const isOddo = i % 2 != 0
        isOddo ? console.log(i, '= ganjil') : console.log(i)
    }
}

findOddo(100)