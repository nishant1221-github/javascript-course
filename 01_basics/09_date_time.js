// Date starts from 1 January 1970, UTC(the epoch)
// in javascript months start from 0 like 0 --> January.


let myDate = new Date()
console.log(myDate);  // convert a unredable format
console.log(myDate.toString());  // convert it into Indian Standard time with Day, Date and Time
console.log(myDate.toDateString()); // convert into Day, Date and Month only.
console.log(myDate.toISOString());  // same like firstone
console.log(myDate.toJSON());  // same like firstone 
console.log(myDate.toLocaleDateString());  // only date.

console.log(typeof myDate)

let specificDate = new Date(2003, 5, 14)   
console.log(specificDate.toDateString())  // it gives only day and date which is specified by us

// let specifiedDate = new Date(2003, 5, 14, 2, 40)   
console.log(specifiedDate.toLocaleString()) // it prints day, date and time.

let specDate = new Date("2003-01-14")   
console.log(specDate.toLocaleString()) 


//-----------> TimeStamps......

let myTimeStamp = Date.now()
console.log(myTimeStamp)   // it will print this "1786860792460". This is a milisecond value from starting date 1970 to till now.

console.log(specDate.getTime())  // convert the value in milisecond from that specific date.

console.log(Math.floor(Date.now() / 1000))  // convert the date in seconds.


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);  // to print current month
console.log(newDate.getDay());  // to print current date


console.log(newDate.toLocaleString('default', {
    weekday: "long"                          // ctrl+space we can find the suggetions. 
}))
