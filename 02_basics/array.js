// ARRAY
/*
In JavaScript, arrays are powerful, flexible data structures that can store multiple values in a single variable. Arrays allow you to perform a variety of operations such as adding, removing, sorting, and manipulating data. Here's a comprehensive overview of arrays in JavaScript:
*/

/*
JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).
*/

const arr = [0,2,3,4,5,6,7]
const myHeros = ["ironman" ,"hulk" , "captain america" ,"thor"]
console.log(typeof myHeros)

const myArr2 = new Array(1,2,3,4)
console.log(typeof myArr2)
console.log(arr[2])
console.log(myArr2.length)
console.log(myHeros)

// some methods of array

myArr2.push(19) // it will insert from the last 
console.log(myArr2)
myArr2.pop() // it will delete from the last
console.log(myArr2)

myArr2.unshift(9) // it will insert a value at starting of array but it is not such a good practise
console.log(myArr2)
myArr2.shift() // it will delete value from start
console.log(myArr2)

console.log(myArr2.includes(87))
console.log(myArr2.indexOf(87))


const newArr = myArr2.join() // changes array to string

console.log(myArr2)
console.log(newArr)
console.log(typeof newArr)

// slice 
//Returns a new array that contains a subset of the original array, without modifying the original array.
// first index is inclusive while the second index is not exclusive

const slicearr = myArr2.slice(0,3)
console.log(myArr2)
console.log(slicearr)

//splice
//Removes or adds elements at a specific position in the array and it change the original array too.

const month = ["January" , "February" , "March" , "May" ,"June"]
month.splice(4, 1, "december" ) // it replaces at index 4 with december
console.log(month)
month.splice(3, 1) // it only delete at index 3
console.log(month)
console.log(month.splice(1,2)) // so it will show deleted elements
console.log(month) // it will show the original array left




