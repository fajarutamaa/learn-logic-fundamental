// Program untuk memilah bilangan ganjil dan genap

function filterNumbers(num) {
    const oddNumbers = []
    const evenNumbers = []

    for (let i = 1; i <= num; i++) {
        (i % 2 !== 0 ? oddNumbers : evenNumbers).push(i)
    }

    return { oddNumbers, evenNumbers }
}

const result = filterNumbers(100)
console.log('Bilangan Ganjil : \n' + result.oddNumbers)
console.log('Bilangan Genap : \n' + result.evenNumbers)
