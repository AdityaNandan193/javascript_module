
let myDate = new Date()
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleTimeString())

console.log(typeof(myDate)) // it is a date object

let myCreatedDate = new Date(2024, 9, 3 , 11, 25, 40) // for 

console.log(myCreatedDate.toLocaleString())
// in javascript january starts from the index 0
let Date2 = new Date("10-4-2024")
console.log(myDate.toTimeString())
console.log(Date2.toLocaleDateString())

let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(myCreatedDate.getTime())

let difference = myTimeStamp - myCreatedDate.getTime()
console.log(difference)

// this is useful for getting time difference between two
// point of time.

console.log(Math.floor(Date.now()/1000))
// it is used to change in seconds;

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth() + 1) // plus 1 because 0 indicates january
console.log(newDate.getDate())
console.log(newDate.getDay())

console.log(`so todays date is ${newDate.toDateString()} and current time is ${newDate.toTimeString()}`)

newDate.toLocaleString('default',{
    weekday: "long",
    
})
