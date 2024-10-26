// javascript execution context 

/*
 so whenever we give any code to javascript then it creates
 following execution cotexts:-

 1. Global execution context which is referred by variable
    this.
    when we apply on object then value of this is window object
    but when we use node then value of this is empty object


    ** javascript is a singlethreaded language everything in 
    it is a process

  2. Functional Execution Context 
  
  3. Eval execution context

*/

/*
            how javascript executes code

    javascript always executes codes in two phases :-

    1.  memory creation phase or creation phase in this phase 
    simply declaration of variable and memory allocation take
    place 

    2  execution phase

*/

// lets take an example

let val1 = 10
let val2 = 5

function addnum(num1, num2){
    let total = num1 + num2
    return total
}
let result =addnum(val1, val2)
let result2 = addnum(4,5)

/*
 let's understand its complete procedure :-

 firstmost and always a global execution phase will be created and 
 referred by this

 now there will be a memory phase :-

 val1 = undefined
 val2 = undefined
 addnum = definition of function is kept 
 result1 = undefined
 result2 = undefined

 now there will be execution phase :-
 val1 = 10
 val2 = 5

 addnum -> now this will again create a new environment
 which will had its own memory phase and execution phase 

so environment of addnum will be again look like :-

1. memory phase :-

val1 = undefined
val2 = undefined
total = undefined

2. execution phase :-
num1 = 10
num2 = 5
total 15

now after this this environment will gets deleted after returning
this total result to the global execution.

now returning to previous execution context

result = 15

again for result2 the addnum function will called and again
environment will be made 

result2 = 9



/*
these is a concept of call stack in javascript in which whenever we call a function it goes into the stack 
and accordingly to lifo the the last gone function comes out that is after its execution we delete its
execution context
*/

