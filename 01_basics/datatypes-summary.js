// how data is kept in the memory and how it is accessed 
// on this basis there are two categorization of datatypes
// primitives and non- primitives

// primitives datatypes :-
// these datatypes are call by value datatypes

// there are 7 types of primitives datatypes which are as follows:
// String , Number, Boolean , null, undefined, Symbol, BigInt

let name  = "Aditya"
let id = "21EJCCS020"
let loggedin = true
let temp= null
let userEmail // so it is undefined

const id1 = Symbol('123')
const anotherid = Symbol('123')

console.log(id1 === anotherid)


console.log(typeof(userEmail))

const bigNumber = 3424325423424234234n //it is automatically became bigint
console.log(typeof(bigNumber))




// Reference datatypes or non primitives datatypes:-

// Array, Objects, Functions

// arrays
const heros = ["ironman" , "captainamerica" , "doga"]

// object 
let myObj = {
    name : "Aditya Nandan",
    age :23,
    roll : "21EJCCS020"
}


// FUNCTION

const myFunction =  function(){
    console.log("Hello World")
}

myFunction();

/*

JavaScript is a dynamically typed language. This means that variable types are determined at runtime rather than at compile time. In a dynamically typed language like JavaScript:

You don’t need to declare the type of a variable explicitly.
The type of a variable can change as the program executes.

*/

// const score = 100
// score = true;
// console.log(typeof(score))

/*
above will throw an error because in javascript once a const
variable is declared it can't be declared again we can use
let for this purpose..
*/

let score = 100
score = "100"
score = true

// console.log(typeof(score))

/*
so here what happened that because dynamic nature of javascript
i.e when we run final code then datatype is decided...hence 
score has final dataype which is boolean
*/

const myvar = 1000
const myvariable = 1000.2 // it also comes under number only there is not such 
// as int or float difference here


console.log(typeof(temp)) 
// always remember typeof null will always give it type as
// object


// **********************************************

// Stack , Heap
// stack is used for primitive data types and we always a copy of the value

// Heap is used for nonprimitive data type and we get reference

let myname = " Aditya Nandan "
let anothername = myname

anothername = "Nandan"
console.log(myname)
console.log(anothername)

// so here above we can see that we get a copy in stack 
// hence another name did not change the my name

// heap

let userOne = {
    email : "adityanandan659@gmail.com",
    upi : "user@ybl"
}

let userTwo = userOne

userTwo.email = "nandanaditya@gmail.com"
userTwo.upi = "adi@ybl"

console.log(userOne)
console.log(userTwo)

// so here we can see that user two changed userone hence
// what happened that object get stored in heap and and userone 
// and usertwo get stored in stack and they get reference of 
// same object hence they change