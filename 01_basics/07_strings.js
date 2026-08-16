const name = "Nishant";
const greetings = "Hello, ";
console.log(greetings + name); // string concatenation but not recommended to use. This is old version

// New way to use concatenation....

console.log(`Hello my name is ${name} and my greetings is ${greetings}.`);
// `` this is used for string interpolation by which you can create placeholders for directly injecting the variables.

const nameNew = new String("Nishant"); // another method to declare string..

console.log(nameNew[0]);
console.log(nameNew.__proto__);

// Some String functions/Methods...
console.log(nameNew.length);
console.log(nameNew.toUpperCase());
console.log(nameNew.charAt(2)); // at the index 2 which value is present
console.log(nameNew.indexOf("t")); // 't' present on which index number
console.log(nameNew.substring(0, 4)); // used for string slicing but it will take only positive index
console.log(nameNew.slice(-7, 4)); // also used for slicing but both(+,-) the indexing values

const newStr = "    JavaScript     ";
console.log(newStr);
console.log(newStr.trim()); // used for removing whitespaces.

const url = "https://google.com/new%20html";
console.log(url.replace("%20", "-")); // replace the value.
console.log(url.includes("google")); // find any value.catch((err) => {})

console.log(url.split("-"));
