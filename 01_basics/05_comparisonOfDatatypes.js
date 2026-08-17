// Basic Comparison Operator....
console.log(2>1)
console.log(2>=1)
console.log(2<1)
console.log(2<=1)
console.log(2==1)
console.log(2!=1)


console.log("2">1);
console.log("02">1);
// both are true Because relational operators perform numeric conversion here.
// JavaScript effectively converts: string into numbers and then it will compare.
// This does not mean that JavaScript always converts strings to numbers.
// The operator you're using matters.
// That's one of the most important things to understand.


console.log(null>0);
console.log(null==0);
console.log(null>=0);
// For Relational Comparison, Javascript converts null to a number. Number(null) = 0 that's why (null>0) is false and (null>=0) is true.
// But in the case of (null==0). The == operator has special rule for Null. null is equally to undefined but it is not loosely 
// equal to 0. So null == undefined is true but null == 0 is false.



console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined >= 0);
console.log(undefined < 0);
console.log(undefined <= 0);
// Number(undefined) -> Nan that's why everyone is false.



console.log("2"==2)  // it will print true
console.log("2" === 2);  // in === comaprison, it will check strictly because with the number it will check datatype also and will print False.
// Because '==' is called the loose equality operator. It allows javascript to perform Type Coercion.
// Javascript sees "2" is a string and 2 is a number and converts the string into a number for the comparison.
// But "===" is a Strict Equality comparison. Because it will value with datatype if both the datatypes are different but the value is same then it will print appropirate results.