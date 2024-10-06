// for of

// an array contain anything like ["" , "" , ""]
// in javascript array also contains object [{} ,{}, {}]

let arr = [1,2 ,3,4,5]

for(const num of arr){
    // console.log(num)
}

const greeting = "Hello World!"

for(const greet of greeting){
    if(greet == ' '){
        continue
    }
    // console.log(`each char is ${greet}`)
}


// maps

const map = new Map()
map.set('IN' , "India")
map.set('usa' , "united states of america")
map.set('Fr' , "france")

// console.log(map)

// A map is used for unique entries only and its key and value
// can be of any data type and it also remembers the order of insertions

for(const [key, value] of map){
    // console.log(`${key} :- ${value}`)
}

// maps are iterable hence it can be iterated in this way

// for each loop

/*
The forEach() method in JavaScript is an array method that executes a provided function once for each array element. It is used to loop through elements of an array and perform an operation on each element without returning anything.

Unlike the map() method, which creates a new array with the results of applying the function, forEach() doesn't return a new array. It simply performs the function on each array element.


*/

const coding = ["js" , "java" , "ruby" , "python" ,"cpp"]

coding.forEach(function(val){
    // console.log(val)
})

// so this forEach has a callback function and it does not have a  name  here directly goes and take the elements from the array
// arrow callback function

coding.forEach((item) => {
    // console.log(item)
})

function print(item){
    // console.log(item)
}

coding.forEach(print) // so here we are only passing the reference of the function hence we have written only print


coding.forEach((item, index, arr) => {
    // console.log(item, index, arr)
})

// things about array of objects

const myCoding = [
    {
        langName : "Javascript",
        langFile : "js"
    },
    {
        langName : "cpp",
        langFile : "cp"
    },
    {
        langName : "java",
        langFile : "java"

    }
]

myCoding.forEach((item) => {
    // console.log(item.langName)
})

// some advanced things about forEach

const value = coding.forEach((item) => {
    // console.log(item)
    return item
})
// console.log(value) // hence this console log is printing undefined hence it prooves that forEach never returns any value

// filter
/*
In JavaScript, the filter() method is an array method that creates a new array with all the elements that pass a test (provided by a callback function). The original array is not mutated or changed. 
*/

const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter((num) => num>4)

// const newNums = myNums.filter((num) => {
//     return num >4
// } )

// console.log(newNums)

const newNums = []

myNums.forEach((num) => {
    if(num > 4){
        newNums.push(num)
    }
})

console.log(newNums)