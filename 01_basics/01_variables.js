const accountId = 144553
let  accountEmail =  "adityanandan659@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState 

// accountId = 2  so this is not allowed we can't change the value of const .
console.log(accountId);
accountEmail = "aditya@gmail.com"
accountPassword = "123"
accountCity = "patna"

console.table([accountEmail, accountPassword, accountCity , accountState])

/*
prefer not to use var because of issue 
in block scope and variable scope 

mainly use const and let only 

and like above accountCity we have not used any of the keywords
so it is allowed in javascript but it is not a good practise

so in javascript if we have written let accountstate then 
in console it will show undefined because we have not defined it
values yet.
*/