// Two types of datatypes :
// 1. Primitive Datatype
          // 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100   // --> number datatype
const scoreValue = 100.3  // --> number datatype not seperately defined float.
const isLoggedIn = false  // --> boolean datatype
const temperature = null  // null datatype
let userEmail;   // --> undefined datatype

const id = Symbol('123')   // --> Symbol datatype
const anotherId = Symbol('123')  // --> in both variables, values are same but logically it is not same because of Symbol datatype.

const bigNumber = 12348965467n   // --> bigint datatype. For making a BigInt datatype, we have to write "n" in last of the value.



// 2. Reference (Non-Primitive)
        // Array, Objects, Functions

const heros = ["shaktiman","arjun","bhishm"]

let myObj = {
    name: "dhruv",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof heros);
console.log(typeof myFunction);
