// function sum(num1, num2){ 
//     console.log(num1+num2)
// }
// sum(4,5)

// so here above when we define function then num1 and num2 are called parameters
// and when we call function then it is called arguements

// const result = sum(4,5)
// console.log(result) // here it does not work

function sum(num1, num2){ 
    return(num1+num2)
}
const resultnew = sum(4,5)
console.log(resultnew)

function login(username = 'sam'){ // herre sam is written because if we don't pass any value then sam will atleast be there always

    if(username === undefined){
        console.log("please enter a username")
        return
    }
    return `${username} just logged in`
}

console.log(login("Aditya"))
console.log(login("nandan")) // so if we don't pass any value then it will show undefined at place ofusername 

/*
== (loosely equality)
The == operator compares two values for equality after performing type conversion if necessary.
This means that if the values being compared are of different types, JavaScript will attempt to convert one or both values to the same type before comparing.

console.log(5 == '5');   // Outputs: true
console.log(true == 1);  // Outputs: true
console.log(null == undefined); // Outputs: true

In these cases, JavaScript converts the string '5' to a number before comparing it to 5, the boolean true to 1, and treats null and undefined as loosely equal.

 === (Strict Equality)
The === operator compares both the value and the type without performing any type conversion.
For two values to be considered equal with ===, they must be exactly the same in both type and value.

console.log(5 === '5');   // Outputs: false
console.log(true === 1);  // Outputs: false
console.log(null === undefined); // Outputs: false

*/

// use of rest operator

function calculate(...num1){
    return num1
}

console.log(calculate(299,399,499,599))
// so these three triple dots simply returns an array of elements and these three triple dots is called rest operator

// how to pass objects in function

const user = {
    username : "Aditya",
    price : 200
}

function handleObject(object){
    console.log(`my name is ${object.username} and the price is ${object.price}`)
}

handleObject(user) 
// another way of passing object is :-

handleObject({
    username : "adi",
    price:399
})

// passing arrays

const arr = [200,300,400,500]

function handlearr(arr){
    return arr[2]
}

console.log(handlearr(arr))