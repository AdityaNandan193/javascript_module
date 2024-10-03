const name = " Aditya Nandan"
const age = 23

// traditional way of concatenating the string

console.log(name + age + "patna")

// modern way of concatenating the string

console.log(`Hello my name is ${name} and my age is ${age} and i am from patna `)

const gameName = new String('Aditya Nandan')

console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName)

const updatedgame = gameName.toLowerCase()
console.log(updatedgame)

// so strings are immutable we can't change the value of 
// string instead we can change assign it to new variable

console.log(gameName.charAt(2));
console.log(gameName.indexOf('i'));

const newString = gameName.substring(0, 4)
console.log(newString)

const anotherString = gameName.slice(-8, 4)
console.log(anotherString)

// we can use -ve starting point in slice but not in substring
// in -ve start point it will start from rhs side of string
// the end index is not included

// The trim() method of String values removes whitespace from both ends of this string and returns a new string, without modifying the original string.

let myName = "   bitu   "
console.log(myName)
console.log(myName.trim())
console.log(myName.trimEnd())
console.log(myName.trimStart())

// trimEnd() only removes ending spaces
// trimStart()  only removes starting spaces

const email = "adityanandan659@gmail.com"
console.log(email.replace('@' , '_'))

console.log(email.includes('aditya'))
console.log(email.includes('bitu'))


//The split() method of String values takes a pattern and divides this string into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array.

let newName = "aditya-nandan-choudhary"

console.log(newName.split('-'))

