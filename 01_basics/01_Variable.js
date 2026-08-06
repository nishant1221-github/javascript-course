const accountId = 2345
let accountEmail = "nishant@gmail.com"
var accountPass = "12345"

/*
Prefer not to use 'var' variable
because of issue in block scope and functional scope
*/

accountCity = "Jaipur"

let accountState;    // if we will not assign any value then it will print "undefined" as the place variable data.

// accountId = 12345 // can't change const variable data 

accountEmail = "nishant@google.com"
accountPass = "23456"
accountCity = "Delhi"

console.log(accountId);
console.log(accountEmail);
console.log(accountPass);
console.log(accountCity);

console.table([accountId, accountEmail, accountPass, accountCity, accountState])