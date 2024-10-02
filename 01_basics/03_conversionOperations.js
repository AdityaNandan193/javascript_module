// let score = undefined
//let score = null
// let score = "123adi"
let score = true

console.log(typeof score)

let valueInNumber = Number(score) // we are converting string to number
console.log(typeof valueInNumber)
console.log(valueInNumber)

// conversions :-
// "33" => 33
// "33ans" => NaN(NOT A NUMBER)
// true => 1; false => 0

let isLoggedIn = 1
let valueInBool = Boolean(isLoggedIn)
console.log(valueInBool)

// for boolean conversion
// 1 => true; 0=> false
// "" => false;
// "Aditya " => true

let aNumber = 33

let numToString = String(aNumber)
console.log(numToString)
console.log(typeof aNumber)
console.log(typeof numToString)
