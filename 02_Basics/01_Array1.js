let myArr = [0, 1, 2, 3, 4, 5]

console.log(myArr);
console.log(myArr[0]);   // accessing the values using indexing...

myArr.push(2)   // push is used for adding value into existing list
myArr.push(5)
console.log(myArr)

myArr.pop() // pop is used for remove the value from the last in the Array.

myArr.unshift(8)   // this method is used add any value in the starting in array.

myArr.shift()  // this method is used for remove the value from the starting.

console.log(myArr.includes(9))   // it will check that following value is present in the list or not.

console.log(myArr.indexOf(9))   // it will check the index of following value if it is present in the list than it will print the index or if not present than it will print -1.

let newList = myArr.join()  // it will convert the array in the string and join the values. 
console.log(myArr)
console.log(new list)


// Slice vs Splice..........
console.log("A", myArr)
const myn1 = myArr.slice(1, 3)
console.log(myn1)

console.log("B", myArr)


const myn2 = myArr.splice(1, 3)
console.log("C", myArr)
console.log(myn2)

// slice() copies elements from an array into a new array without modifying the original, while splice() directly modifies the original array by adding, removing, or replacing elements.