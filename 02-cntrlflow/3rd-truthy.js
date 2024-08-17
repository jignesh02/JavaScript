const userEmail = [];

if (userEmail) {
    // console.log("got email");
} else {
    // console.log("dont have email");
}

// falsy values
// false, 0, -0, BigInt, "", null, undefined, NaN

// truthy values
// "0", 'false', " ", [], {}, function(){}

// check array is empty.

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

//check object is empty

const emptyObj = {};

// if (Object.keys(emptyObj).length === 0) {
//     console.log("Object is empty");
// }

// if
// false == 0 => true
// false == '' => true
// 0 == '' => true

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 2 ?? 30
// val1 = null ?? 40
// val1 = 40 ?? null
// val1 = undefined ?? 40
// val1 = 40 ?? undefined
val1 = 10 ?? null ?? 30
// console.log(val1);



// Terniary Operator

// condition ? true : false ;

const price = 500;

price <= 400 ? console.log("less then 500") : console.log("more then 500");
