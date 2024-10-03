const score = 300 // it automatically set datatype as number
console.log(score)
// it is actually primitive number

const balance = new Number(100)
console.log(balance)
// it is actually number object 

console.log(typeof(score))
console.log(typeof(balance))

let updated = balance.toString()
console.log(updated)
console.log(typeof(updated))

console.log(updated.length)
console.log(balance.toFixed(2)) // it is used for precision after decimal

const otherNumber = 123.89779
console.log(otherNumber.toPrecision(5))

/*
The toPrecision() method in JavaScript is used to format a number to a specified precision (total number of significant digits). It returns the number as a string, rounded to the specified precision.
*/
const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'))

// ------------------------MATHS-------------------------

// console.log(Math)
// console.log(Math.abs(-4))
// console.log(Math.round(4.7))
// console.log(Math.ceil(4.2))
// console.log(Math.floor(4.9))
// console.log(Math.min(2,3,4,5,6))
// console.log(Math.max(2,3,4,5,6,7))

console.log(Math.random()) // it always gives random number between 0 and 1
console.log((Math.random()*10)+1) // it will give random number between 1 and 9
console.log((Math.random()*100)+1) // it will give random decimal number between 1 and 100
console.log((Math.floor(Math.random()*100)+1)) 
// it will give random integers between 1 and 100

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min +1)) + min)
// this is a very strong and important formula for getting
// no. between the range or min and max i.e from 10 to 20. 