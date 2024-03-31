const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    return mpg * fuelLeft >= distanceToPump
}

console.log(zeroFuel(10, 5, 2))   // true beacuse possible to get to the pump
console.log(zeroFuel(10, 5, 1))   // false