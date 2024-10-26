// singleton object

const tinderUser = new Object()  // SINGLETON
// const tinderUser = {} //NON- SINGLETON

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 } it will give object inside object
// const obj3 = Object.assign({}, obj1, obj2, obj4) here what happened that 1st curly braces is the 
// target object and we need to put all other objects into it

const obj3 = {...obj1, ...obj2} // it is the spread method need to jointhe objects in one (majority used)
// console.log(obj3);

// this is how we handle data coming from the database
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

// this three gives the value in form of array

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
// this is used to check if the object contains this property or not

const course = {
    course : "js in hindi",
    price : 100,
    student : "Aditya"
}
// some more ways to access i mean the clean code

const {student} = course
console.log(student)

//or

const {student :stu} = course
console.log(stu)

// above what we done is known as destructuring

// below are the different ways how we can get api 
// in the form  of object 
// but this is actually json format
/*
{
 "name" : "Aditya"
 "course" : "js"
 "price" : "free"
}
*/

// in the form of array of objects

// [
//     {},
//     {},
//     {}
// ]