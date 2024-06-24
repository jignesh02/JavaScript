function addTwoNumbers(num1, num2) { // num1 num2 called parameters
    // console.log(num1 + num2);
    // return num1+num2
    let result = num1 + num2;
    return result
}
const result = addTwoNumbers(5, 5)
// 5 and 5 callded arguments

// console.log(result);


function isUserLoggedIn(username) {
    return `${username} login successfully`
}
// console.log(isUserLoggedIn("jignesh"));


// Rest (spread) operator for print multiple value at a time in array form
function calculatePrice(...num1) {
    return num1;
}
// console.log(calculatePrice(200,300,400,500));

// object handling in function

const userData = {
    userid: 2347,
    username: "same",
}

function handleObject(myObj) {
    // console.log(`My name is ${myObj.username} and my user id is ${myObj.userid}`);
}
// handleObject(userData)
handleObject({
    userid: 2347,
    username: "same",
})

// Array in function

const myArr = [100, 200, 300, 400, 500];

function handleArr(getArr){
    return getArr[2]
}

// console.log(handleArr(myArr));
console.log(handleArr([1, 2, 3, 4, 5]));