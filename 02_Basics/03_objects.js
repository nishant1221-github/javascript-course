// singleton
// Object.create


// object literals

const mySymbol = Symbol("key1")

const JUSer = {
    name: "Nishant",
    "full name": "Nishant Chaudhary",
    age: 18,
    [mySymbol]: "mySYM1",
    location: "Delhi",
    email: "nishant@gmail.com",
    isLoggedIn: false,
    lastLoginInDays: ["Monday","Saturday"]
}

console.log(JUSer.name)
console.log(JUSer["name"]) // both are same....

// but in some cases we cannot use first option we have to go with second option with big brackets.

// consoler.log(JUSer.full name) // in this case we can't print like this. This is invalid.
consoler.log(JUSer["full name"])  // we have to use this case.

console.log(JUSer.mySymbol, typeof JUSer.mySymbol)  // in this way it will string type to a symbol so we have to use symbol with [] like this....

console.log(JUSer[mySymbol])

// update the values.... 
JUSer.email = "nishant@google.com"
console.log(JUSer.email)

// froozen method
Object.freeze(JUSer)  // using this method we cannot the values in JUSer. 

JUSer.email = "nishant@email.com"
console.log(JUSer)


// create a function..... 
JUSer.greeting = function () {
    console.log("Hello JS User")
}

// console.log(JUSer.greeting)  // this will print Undefined. 
// console.log(JUSer.greeting())  // this method throws a error like this is not a function why because we have freeze the values above so we have to comment that part......


JUSer.greetingTwo = function () {
  console.log(`Hello JS User, ${this.name}`);
};
console.log(JUSer.greeting())
console.log(JUSer.greetingTwo())