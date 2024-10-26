// if else

// const isUserLoggedIn = true
// const temperature = 41

// if(temperature < 50){
//     console.log(`temperature is less than 50 and it is ${temperature}`)
// }
// else{
//     console.log("temperature is greater than 50")
// }
// console.log("this will always execute")

// comparison operator:-
// <, > , >= , == , === ,!= , !==

// const score = 200

// if(score > 100){
//     const power = "fly"
//     console.log(`User power : ${power} `)
// }

// console.log(`user power : ${power}`) it will throw error because of local scope power is declared locally inside if 

// const balance = 1000

// if (balance > 500) console.log("test");

// if(balance <500){
//     console.log("less than")
// }else if(balance <750){
//     console.log("less than 750")
// }
// else{
//     console.log("less than 1200")
// }

// real life example

const UserLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(UserLoggedIn && debitCard && 2==2){
    console.log("Allow to buy course")
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("allow to login")
}
