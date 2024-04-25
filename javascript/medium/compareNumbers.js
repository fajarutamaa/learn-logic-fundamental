const compareNumber = num => {
    
    let prevNumber = null

    for (let i = 0; i <= num; i++) {

        let currNumber = Math.floor(Math.random() * 100)

        if (i === 0) { console.log(currNumber, ': PERTAMA') }
        else if (currNumber > prevNumber) { console.log(currNumber, ': BESAR') }
        else if (currNumber < prevNumber) { console.log(currNumber, ': KECIL') }
        else { console.log(currNumber, ': SAMA') }

        prevNumber = currNumber
    }

    return prevNumber
}

compareNumber(20)