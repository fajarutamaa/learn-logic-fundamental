const containsValue = (arr, x) => {
    return arr.includes(x)
}

console.log(containsValue([1, 2, 3], 2))    // true because x = 2, contains in arr
console.log(containsValue([1, 2, 3], 5))    // false 

// best practice
const checkContainsValue = (arr, x) => arr.includes(x)