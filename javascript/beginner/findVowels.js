// Menghitung dan mencari huruf vokal

function findVowels(str) {
    if (typeof str !== 'string') {
        console.log('invalid input')
        return
    }

    const vowels = str.match(/[aiueo]/gi)

    if (vowels) {
        const count = vowels.length
        console.log(`count vowels : ${count}\n` +
            `vowels : ${vowels.join(', ')}`
        )
    } else {
        console.log('vowels not found')
    }
}

findVowels('hhhhh')