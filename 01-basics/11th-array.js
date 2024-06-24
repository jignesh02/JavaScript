// let arr1 =  [1, 2, 3, 4, 5];
// let arr2 = new Array (1, 2, 3, 4);
// define the array use this 2 ways

// Array methods
let myArr =  [1, 2, 3, 4, 5];

myArr.push(6); // Add elements of the end
myArr.pop() // remove elements of the end

myArr.unshift(0); // Add elements of the start
myArr.shift() // remove elements of the start

myArr.includes(7); // check given value is in the array and return boolean
myArr.indexOf(9); // check which value on the given index and index is invalid print -1

myArr.join(); // convert array into string and seprated with coma
myArr.of(var1, var2, var3); // convert any given variable into array

myArr.slice(1,4); // print elements of the index of 1 to 3 not include 4 didnt manipulated original array
myArr.splice(1,4); // print elements of the index of 1 to 4 yes, include 4 and manipulated original array

myArr.concat(arr2); // concat merge 2 arrays
myArr = [...arr1, ...arr2]; // merge 2 array using spread operator

myArr.flat(Infinity); // convert all sub array into in a single array
myArr.isArray("Jignesh"); // check given value is in the array or not and return boolean

myArr.from("Jignesh"); // convert any given value into array
myArr.from({name: "jignesh"}); // in object convert into arry but first define the value or key