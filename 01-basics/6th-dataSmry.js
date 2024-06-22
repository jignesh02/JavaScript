// 2 types of Datatypes

// 1 Primitive datatype 
// String, Boolean, Number, Null, Undefined, Symbol, Bigint

// Example

const myName = "jignesh";  // String
let myAge = 19; // number
const insideTemp = null; // object
const isLoggedIn = false; // boolean
let userEmail; // undefined
const id = Symbol('2367'); // function
const bigNumber = 1494293723723922n; // bigint

// 2 Non-primitive datatype (Reference)
// Array, Object, Functions

// Example

const heros = ["Spider Man", "Iron Man", "Super Man", "Bat Man"]; // object
let myObj = {
    name: "jignesh",
    age: 20,
} // object
let myfunction = function() {
    console.log("Hello World");
} // function

console.log(typeof myfunction);