// Conversion into Number

let score = "33"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)         // ==> it will easily convert a string into a number.
console.log(valueInNumber, typeof valueInNumber)

let value = "33abc"

let changeNumber = Number(value)         // ====> it will covert this value in number but in output it will show "NaN(Not a number)" and type will be number.
console.log(changeNumber, typeof changeNumber);

let val = null

let chng = Number(val)
console.log(chng, typeof chng);  // ==> in the case of "null", it will print 0 and type will be number.

let val1 = undefined
let val2 = Number(val1)
console.log(val2, typeof val2);  // ==> in the case of "undefined", it will show in output "NaN" but type will be number.

let bool = true
let chnageValue = Number(bool)
console.log(chnageValue, typeof chnageValue);  // ==> in the case of Boolean "True", it will print 1 as an ouput and type number.

// Convert in Number....
/*
"33" --> 33
"null" --> 0
"undefined" --> NaN
"any_value" --> NaN
boolean true --> 1 && false --> 0
"33abs" --> NaN
*/

//------------------------------------------------------------------------------------------------------------------------------

// Convert into Boolean

let isLogin = 1
let isEmpty = ""
let isString = "name"
let isLoggedIn = Boolean(isLogin)
let isConvertEmpty = Boolean(isEmpty)
let isConvertString = Boolean(isString)
console.log(isLoggedIn, typeof isLoggedIn);  // ==> when we convert 1 into boolean, it will print true and same as for false.
console.log(isConvertEmpty);  // ==> when we will convert ""(empty string) into boolean, it will print false.
console.log(isConvertString);  // ==> when we will convert "string" into boolean, it will print true.

// Convert into Boolean
/*
1 --> true && 0 --> false
"" --> false
"string/name" --> true
*/

//-------------------------------------------------------------------------------------------------------------------------------

// Convert into String

let a = 33

let b = String(a)
console.log(b);

let c = null
let d = String(c)
console.log(d, typeof d);



