// console.log(2 >1)
// console.log(2<1)
// console.log(2>=1)
// console.log(2 == 1)
// console.log(2 != 1)

// console.log("2" > 1);
// console.log("02" >1);
// although these two are giving true but always try to compare 
// same datatypes always

console.log(null>0)
console.log(null==0)
console.log(null>=0)

console.log(undefined == 0)
console.log(undefined > 0)
console.log(undefined < 0)

// undefined always gives 0 only.
// but we must avoid these type of comparisons because these 
// does not give the predictible result hence can be confusing

/*
 the reason is that an equality check == and comparisons > < >=
 <= work differently.
 Comparisons convert null to a number , treating it as 0.
 That's why null>=0 is true and null>0 is false 

 */

 // === it is called strict check because it checks strictly datatype too

 console.log("2" === 2)

 // ALWAYS GIVE PRIORITY TO CLEAN CODE

