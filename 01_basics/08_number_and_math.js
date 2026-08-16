const score = 400

const balance = new Number(100)
// both ways are used to prin tnumbers both are same.
// console.log(balance);

// console.log(balance.toString())
// console.log(balance.toFixed(2))  // take two values after point like 100.00

const otherNumber = 23.8966

// console.log(otherNumber.toPrecision(3))   // it will print 23.9, it will give priority to before decimal.

const val = 113.896
// console.log(val.toPrecision(3))    // now it will print 114 because it will roundof according to the priorty.


const hundreds = 1000000
// console.log(hundreds.toLocaleString())   // it will seperate a long zeros value with commas like 1000000 --> 10,00,000


//++++++++++++++++++++++++ MATHS +++++++++++++++++++++++++++++++++++++++++++++++++++++

// console.log(Math)
// console.log(Math.abs(-4))   // converts only negative value to positive values
// console.log(Math.round(4.4))  // it will take nearest value of that value after .5 it will take next value like 5 and before .5 it will take same value like 4.

// console.log(Math.ceil(4.7))  // in this case it will always take next value like 4.7 to 5 in each case with 4.something.

// console.log(Math.floor(4.8))  // in this case it always take same value like 4 before(.)

// console.log(Math.sqrt(25))

// console.log(Math.pow(2,4))

// console.log(Math.min(4,3,6,8))

console.log(Math.random())
console.log(Math.random()*10 + 1)
console.log((Math.random() * 10) + 1)
console.log(Math.floor(Math.random() * 10) + 1)

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1))+ min)