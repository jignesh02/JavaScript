if (true) {
    let a = 10 // This is called block scope
    const b = 20
    var c = 30

    // console.log("Inner :", a);
}
// This if is called block scope so we dont access this value outside of this block

// var d = 40
// this is called global scope we access this value in whole pages


// console.log(a);
// console.log(b);
// console.log(c);

// var is not blocked scope so we didint use va insted of we use let and const

let a = 100  // This is called global scope
// console.log("Outer :", a);

// Nested scope

function one() {
    const name = "jignesh";

    function two() {
        const surname = "ahir";
        // console.log(name);
    }
    // console.log(surname);

    two()

}
one()
// Function two can access all variable of the function one.
// But function one cant access all veraible of the function two.
// It is also called clouser

if (true) {
    const myname = "jignesh";

    if (true) {
        const surname = " ahir";
        // console.log(myname + surname);
    }
    // console.log(surname);

}
// console.log(myname);




// basic concept of hoisting

console.log(addOne(5));
// you can access addOne  before initialization specifically in this concept.
function addOne(num) {
    return num + 1
}


addTwo(5)  
// can not access addTwo  before initialization specifically in this concept.
const addTwo = function (num) {
    return num + 2
}