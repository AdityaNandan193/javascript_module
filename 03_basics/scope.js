// we should not use var because it creates problem in scopes

var c = 300
let a = 500
if(true){
    let a = 10
    const b = 20
    var c = 30
    // console.log("inner : " , a)
}

// console.log(a)

// console.log(c) so this is printing inner c which is wrong
// so do not use var 

// the variables nside if is local or block scope
// the variables outside if is global scope and they
// are applicable in whole program

function one(){
    const user = "Aditya"

    function two(){
        const website = "youtube"
        console.log(user)
    }
    // console.log(website)
    two()
}
one()

// hence inner function can access its parent function 
// but parent function can't access its child function

if(true){
    const username = "Aditya"

    if(username === "Aditya"){
        const website = " youtube"
        console.log(username + website)
    }
    // console.log(website)
}
// console.log(username)
// both console will give error because of the scope rule

// ************************interesting****************

console.log(addone(6))
function addone(num){
    return num+1
}
// this is ok no problem in it we can do this 

console.log(addtwo(7))
const addtwo = function(num){
    return num+1
}

// this is wrong we can't do it because we are accesing a variable 
// without declaring it so it is a problem