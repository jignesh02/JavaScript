/* 
comparison operator:

< : lessthen , <= less equalto
> : greaterthen ,>= greater equalto
== : check values are equal or not
!= : not equal
=== : it also check types of given value
&& : both value need be true
|| : in two values at least 1 value need to be true
*/

// const marks = 50;

// if (marks === 51) {
//     console.log("yes"); 
// } else {
//    console.log("no"); 
// }

// implicit block
// if(marks > 40) console.log("yes");



// nested if-else

// const balance = 1000;

// if (balance < 500) {
//     console.log("less then 500");

// } else if (balance < 750) {
//     console.log("less then 750");

// } else if (balance < 900) {
//     console.log("less then 900");

// } else{
//     console.log("balance is 1000");

// }

// multiple condition check


const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = true
const loggedInFromEmail = false

if (userLoggedIn && debitCard) {
    console.log("user is allowed");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("user is logged in");
}