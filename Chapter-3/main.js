// Chapter 3 - Strings are a series of characters. They have methods as well as properties. 

// STRINGS
console.log("hello world");

let email = "rybrockers@yahoo.com"
console.log(email);
//  String concatenation 
let firstName = "Brandon";
let lastName = "Sanderson";

let fullName = firstName + " " + lastName;
console.log(fullName);

// Getting charactrs
console.log(fullName[3]);

// String length
console.log(fullName.length);

// String methods
console.log(fullName.toUpperCase());
let result = fullName.toLowerCase();
console.log(result, fullName); 

// some methods do not alter the vatiable original value
let index = email.indexOf("@");
console.log(index);
// however, some variables do
// /////////////////////////////////////////////////////////////////


