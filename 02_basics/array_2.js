const marvel = ["Thor" , "Iron man" , "hulk" , "hawkeye" ,"dr strange"]
const dc = ["batman" , "aquaman" ,"flash" ,"wonder woman"]

// marvel.push(dc) it will whole dc array into marvel array;
// console.log(marvel) 

const heros = marvel.concat(dc) // so it combines both array and give new array
// console.log(heros)

//spread operator -- make elements of array individual elements

const all_heros = [...marvel, ...dc]
console.log(all_heros)

// flat

const another_array = [1,2,3, [4,5,6], 6,7,7 ,[3,4,[5,6]]]
console.log(another_array)
const flat = another_array.flat(Infinity)
console.log(flat) 

// so it will flat all subarrays into single array

console.log(Array.isArray("Nandan"))

console.log(Array.from("Nandan")) // it will make it array of its character

console.log(Array.from({name : "nandan"})) 
// it will return an empty array becuase since it is an 
// object so we need to specify here that whether to make
// array from key or from the values

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))
// it converts those variables into an array.

/*
Array.isArray(value) checks if value is an array, returning true or false.

Array.from(iterable) converts an iterable or array-like object into an array.

Array.from(object) will return an empty array unless the object is iterable.

Array.of(...elements) creates a new array instance from the provided elements, regardless of their type.
*/