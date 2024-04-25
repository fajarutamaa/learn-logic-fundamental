const checkNumber = (a, b) => {
    
    let valueDiff = []

    for (const element of a) {
        let isTrue = false
        for (const item of b) {
            if (element === item) {
                isTrue = true
                break
            }
        } if (!isTrue) {
            valueDiff.push(element)
        }
    }
    return valueDiff
}

const arr1 = [1, 2, 3, 4, 5, 6]
const arr2 = [1, 2, 3, 5, 7, 8]

const valueDiff = checkNumber(arr1, arr2)
console.log(valueDiff)