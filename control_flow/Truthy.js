const email = "adityanandan@gmail.com"

if(email){
    console.log("got user email")
}
else{
    console.log("user does not have an email")
}

// so here we did not compared any email with true or false 
// but it automatically took that if anything written inside
// string then it is considered truthy value.

// some truthy and falsy values are as follow :-

/*

Falsy Values:
These are values that are considered false when evaluated in a boolean context. There are only a few falsy values in JavaScript:

false – The boolean false
0  && -0– The number zero
BigInt 0n
"" – An empty string
null – Represents the intentional absence of any object value
undefined – Indicates that a variable has not been assigned a value
NaN – "Not-a-Number," used to represent a value that is not a legal number

*/






/*
Truthy Values:
Any value that is not falsy is considered truthy. This means that most values in JavaScript are truthy. Some common truthy values are:

true – The boolean true
Non-zero numbers – Any number other than 0 (e.g., 1, -1, 3.14)
Non-empty strings – Any string that contains at least one character (e.g., "Hello", "0" , "false" , " ")
Objects – All objects are truthy, including empty objects {} and arrays []
Functions – All functions are truthy
*/
const userEmail = []

if(userEmail.length === 0){
    console.log("it is a truthy value")
    console.log("array is empty")
}
else{
    console.log("it is a falsy value")
}

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("object is empty")
}

// some facts

if(false == 0){
    console.log("it is true")
}
else{
    console.log("false")
}

if(false == ""){
    console.log("it is true")
}
else{
    console.log("false")
}

if(0 == ""){
    console.log("true")
}
else{
    console.log("false")
}

// Nullish Coalescing Operator (??) for null and undefined

let val1;
val1 = 5 ?? 10
val1 = null ?? 10
val1 = undefined ?? 15

val1 = null ?? 10 ?? 20

// so this is made if we are getting a null or undefined value then for safety purposes we replace the value with the actual value which we will get like here for example we ar getting 10 . and in last one it chose 10 over 20 because it always chose first value ...


console.log(val1)


// Ternary Operator

// condition ? True :false

let name = "Aditya"

name == "Aditya" ? console.log("yes it is true") : console.log("it is false")

// so it is simple just ask the condition without if and according to run the true code just after the question mark and run the false code after a colon after the true


