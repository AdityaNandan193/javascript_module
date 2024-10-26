// Immediately Invoked Function Expressions(IIFE)

// TO REMOVE THE POLLUTION FROM THE GLOBAL SCOPE IIFE IS USED
// AND TO IMMEDIATELY INVOKE THE FUNCTION ALSO

// syntax :- ()() so first bracket is for definition of function
// second bracket is used as it is for execution purpose

(function one(){
    // name iife because it has name one
    console.log(`db connected`)
})(); // this semicolon is important because it ends the context 
// then only next function will be able to execute 

( (name) => {
    // unnamed iife
    console.log(`db connected two ${name}`)
}) ('aditya');
