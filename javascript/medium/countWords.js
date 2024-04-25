const countWords = str => {

    let totalWords = 0
    const words = str.split(' ')

    for (const element of words) {
        if (element.trim() != '') {
            totalWords++
        }
    }

    return totalWords
}

const str = 'Budi belajar programming bersama temannya'
console.log('Total kata dalam kalimat tersebut adalah : ', countWords(str))