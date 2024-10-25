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
console.log(typeof gameName)

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

/*
Understanding slice(-8, 4):

Here, start is -8, so it will count 8 characters back from the end of 'Aditya Nandan', which brings it to the character 't'.
end is 4, meaning it will slice up to, but not including, index 4.
However, because the start position (-8, equivalent to index 6 from the start) is after the end position (4), the slice returns an empty string.
*/

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

let email2 = "adityanandan659@@gmail.com";
// Replace all occurrences of '@' with '_'
email2 = email2.replace(/@/g, '_');
console.log(email2); // Output: "adityanandan659__gmail.com"


console.log(email.includes('aditya'))
console.log(email.includes('bitu'))


//The split() method of String values takes a pattern and divides this string into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array.

let newName = "aditya-nandan-choudhary"

console.log(newName.split('-'))

