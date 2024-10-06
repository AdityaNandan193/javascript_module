const object = {
    js : "javascript",
    cpp : "c++",
    rb : "ruby",
    swift : "swift for apple"

}

// we can only use for in loop for objects

for(const key in object){
    // console.log(`${key}  is shortcut for the ${object[key]}`)
    // so here we can see that simply key give the key of the object and object[key] gives the value of the corresponding key
}

const arr = ["jaipur" , "patna" , "barmer" , " rajasthan"]

for(const key in arr){
    console.log(`corresponding index of ${arr[key]} is ${key}`)
}

// by default key in array gives the index of its elements
