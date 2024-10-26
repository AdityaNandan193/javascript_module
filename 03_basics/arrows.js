const user = {
    username : "Aditya",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website`)
        console.log(this)
    }
}
// here this is used for current context that the username
// belongs to this object only
// context simply means the value hold by the variables

user.welcomeMessage()
user.username = "sam" // here we changed the context of user
user.welcomeMessage()

console.log(this)  // here this is giving a blank object because
// its global context is nothing right now so inner this is 
// working properly right now....

// but actually on browser engine this will not give empty 
// object it will give window object


// function one(){
//     let username = "Aditya"
//     console.log(this.username) 
// }
// one()
// so this will give output as undefined because this does
// not work here..


const one = () => {
    let username = "hitesh"
    console.log(this)
}
one()

// this is arrow function in this simply we don't use the
// function keyword we just use prenthesis for parameters 
// and a arrow

// different ways of using and initializing the arrow function

//method 1:-
const arrow = (num1, num2) => {
    return num1 + num2
}

console.log(arrow(4,5)) 

// method 2:-

const arrow1 = (num1, num2) => num1 + num2
console.log(arrow1(4,5))

// method 3:-

const arrow2 = (num1, num2) => (num1 + num2)
console.log(arrow2(8,4))

// if we are curly brances then we need to use return
// if we use prenthesis then we need not to

// how to use objects with arrow function

const arrow3 = () => ({username:"Aditya" , age:20})
console.log(arrow3())

// so for objects we need to wrap it up in parenthesis
