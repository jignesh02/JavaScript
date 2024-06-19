let num = "undefined";

// console.log(typeof num);

let valueNumber = Number(num);
// console.log(typeof valueNumber);
// console.log(valueNumber);

// "33" => 33
// "33op" => NaN
// "jignesh" => NaN
// "true" => 1; "false" => 0
// "null" => 0
// "undefined" => NaN

// 1 => true
let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(typeof booleanIsLoggedIn);
// console.log(booleanIsLoggedIn);

// 0 => false
let isLoggedIn1 = 0;
let booleanIsLoggedIn1 = Boolean(isLoggedIn1);
// console.log(typeof booleanIsLoggedIn1);
// console.log(booleanIsLoggedIn1);

// "" => false
let isLoggedIn2 = "";
let booleanIsLoggedIn2 = Boolean(isLoggedIn2);
// console.log(typeof booleanIsLoggedIn2);
// console.log(booleanIsLoggedIn2);

// "Jignesh" => true
let isLoggedIn3 = "Jignesh";
let booleanIsLoggedIn3 = Boolean(isLoggedIn3);
// console.log(typeof booleanIsLoggedIn3);
// console.log(booleanIsLoggedIn3);

// type conversion in string

let someNumber = 88;
let ConvertSomeNumber = String(someNumber);
// console.log(typeof ConvertSomeNumber);
// console.log(ConvertSomeNumber);

// Operations

let value = 5;
let negValue = -value;
// console.log(negValue);

// Concatination of 2 string

let str1 = "hello";
let str2 = " Jignesh";
let str3 = str1 + str2;

// console.log(str3);

// console.log("1" + 2 + 2); // if first value is string then another all value is consider as strings
// console.log(1 + 2 + "2"); // if last value is string then all first value is consider as number and that all value perform all its operation

// prefix and postfix 

// postfix
let a = 1;
let b = a++;

// console.log(a);
// console.log(b);

// prefix
let x = 1;
let y = ++x;

// console.log(x);
// console.log(y);