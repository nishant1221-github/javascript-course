const marvel_heros = ["Thor","Ironman","Captain"]
const dc_heros = ["Spiderman", "Batman", "Flash"]

marvel_heros.push(dc_heros)  // using push, it will update the values in existing array and he will create array inside array not concate all values in a single array.
// console.log(marvel_heros)

marvel_heros.concat(dc_heros)  // we can not concat directly by this it will just print marvel_heros values only so for this we have store this method in another variable.

const allHeros = marvel_heros.concat(dc_heros);  // now this method we can easily concatenate the arrays in a single array but it is limited for two arrays only.
// console.log(allHeros);


//*****Here for more than two arrays we have another method which is 'spread method'. *******
const newAllHeros = [...marvel_heros, ...dc_heros]   // this method also prints all the array values in a single array but in this method we can concate multiple arrays at a time.
// console.log(newAllHeros)


// ********** flat Method ********************
const another_array = [1, 2, 3, [4, 5, 6], 7, [3, 4, 5, [8, 9]]]
const real_array = another_array.flat(Infinity)  // this flat method converts this complex array in a single flat array.
// console.log(real_array)

// console.log(Array.isArray("Method"))  // this method will ask this "Hitesh" is an array or not.
// console.log(Array.from("Method"))  // this method will convert this "Method" or any other datatype in an array.

console.log(Array.from({ name: "Nishant" }))  // this method will not convert this object into array directly we have to tell to that array that we want to convert it into array.

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3))  // Returns a new array from a set of elements. 