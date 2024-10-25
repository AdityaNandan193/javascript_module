// let score = undefined
//let score = null
let score = "123adi"
// let score = true

// console.log(typeof score)

let valueInNumber = Number(score) // we are converting string to number
// console.log(typeof valueInNumber)
// console.log(valueInNumber)

// conversions :-
// "33" => 33
// "33ans" => NaN(NOT A NUMBER)
// true => 1; false => 0

let isLoggedIn = 1
let valueInBool = Boolean(isLoggedIn)
// console.log(valueInBool)

// for boolean conversion
// 1 => true; 0=> false
// "" => false;
// "Aditya " => true

let aNumber = 33

let numToString = String(aNumber)
console.log(numToString)
console.log(typeof aNumber)
console.log(typeof numToString)

// ****************** operations **************

let value = 3
let negValue = -value
console.log(negValue)

// console.log(2+2)
// console.log(2-2)
// console.log(2**2) // two to the power 2
// console.log(2**3) // tow to the power 3
// console.log(2/3)
// console.log(2%3)

let str1 = "hello"
let str2 =  " Aditya"

let str3 =   str1 + str2
// console.log(str3)

// some special conversion 
// it works left to right if string is 1st then everthing 
// will be converted to string and if string is last then 
// left to right everything will be done then comes on string

console.log("1" +2)
console.log(1 + "2")
console.log(1+2+3+"4")
console.log("4"+1+2+3)

// but at industry level it is not a good practise we 
// must use parenthesis for these type of things

console.log(true)
console.log(+true)

let num1, num2, num3

num1= num2 = num3 = 2+2
console.log(num1)

let gameCounter = 100
gameCounter++
++gameCounter
console.log(gameCounter)





