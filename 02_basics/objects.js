 /*
 An object is a collection of key-value pairs, where each key (also known as a property) is a string (or Symbol) and the value can be of any data type (including other objects or functions). This allows for the organization and storage of related data and functionality.
 */

 // when object is made using literals then it is not singleton
 // when object is made using constructors then it is singleton



 // object literals
 const mySym = Symbol("key1") // symbol is a primitive datatype which is used for uniqueness

 const user = {
    name : "Aditya",
    "full name" : "Aditya Nandan",
    [mySym] : "myKey1",
    age : 23,
    location : "Jaipur",
    email : "adityanandan659@gmail.com",
    isloggedin : true,
    lastLoginDays: ["Monday" ,"Saturday" , "Sunday"],
 
 };

 // methods to access elements of objects

//  console.log(user.email)
 console.log(user["email"])
 console.log(user["full name"]) // so this is the only way to access full name because it can't be accessed by dot method
 console.log(user[mySym])

 user.email = "aditya@gmail.com"
  //Object.freeze(user) // it is used to freeze complete object i.e we can't overwrite further
 user.email = "adi@gmail.com"
 user.name = "bitu"

 console.log(user)

 user.greeting = function(){
    console.log("hello my name is adi good afternoon")
 }

 // using string interpolation

 user.greetingTwo = function(){
    console.log(`hello user my name is ${this.name}`)
 }

user.greeting()
user.greetingTwo()