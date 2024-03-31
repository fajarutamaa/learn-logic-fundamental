const lengthOfLastWord = s => {
    const trimmedString = s.trim()
    return console.log(trimmedString.length - trimmedString.lastIndexOf(' ') - 1)
}

lengthOfLastWord('Hello World')