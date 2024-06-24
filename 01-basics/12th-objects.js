// Object literals
// create an object

const mySym = Symbol("Zigs02")
const anUser = {
    names: "Jignesh",
    age: "20",
    location: "Surat",
    email: "jb@g.com",
    isLoggedIn: "False",
    lastLoggedIn: ["Friday", "Saturday", "Monday"],
    [mySym]: "Zigs02", // this is correct syntex for define symbol as key in objects
}

// 2 ways to accsses value from an object keys

// console.log(anUser.names);
// console.log(anUser["lastLoggedIn"]);
// console.log(typeof anUser[mySym]); // this is the syntex for accsses symbol as an object key

// change value of the keys

// anUser.email = "zigsgpt@.com"
// console.log(anUser["email"]);

//  if you dont wont to change value of objects then freeze it like this

// Object.freeze(anUser);
// anUser.email = "random@.com"

// console.log(anUser);

// function in object

anUser.greeting = function () {
    // console.log("Hello anUser");
}

anUser.greetingOne = function () {
    // console.log(`Hello Mr. ${this.names} how are you today ?`);
}
// to define which key is print in an object use this keyword before the key
// console.log(anUser.greetingOne());


// const tinderUser = new Object(); // singleton object
// const tinderUser = {}; // non-singleton object

const tinderUser = {};

tinderUser.id = "69ab69";
tinderUser.name = "Dany";
tinderUser.isLoggedIn = "true";


// multiple objects in object

const userData = {
    email: "done@gmail.com",
    username: {
        fullname:{
            firstname: "Jignesh",
            lastname: "ahir"
        }
    },
}
// console.log(userData.username.fullname.firstname);

// merge 2 objects

// this is 1st method to merge to objects using spread operator.

// const obj1 = {1: "a", 2: "b"};
// const obj2 = {...obj1, 3: "c", 4: "d"};
// console.log(obj2);

// merge 2 object using Object.assign operator

// const obj1 = {1: "a", 2: "b"};
// const obj2 = {3: "c", 4: "d"};
// const obj3 = Object.assign({}, obj1, obj2)

// console.log(obj3);

// Array of objects

const oneUser = [
    {
        a: 1,
        email: "J@gmail.com",
    },
    {
        a: 1,
        email: "J@gmail.com",
    },
    {
        a: 1,
        email: "J@gmail.com",
    }
]

// console.log(oneUser[1].email);

// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // return only keys of the object
// console.log(Object.values(tinderUser)); // return only values of the objects
// console.log(Object.entries(tinderUser)); // return key and value pairs in array form
// console.log(Object.hasOwnProperty('isLoggedIn')); // check given property is in the object and retutn boolean


// destrucring of objects

const  course = {
    coursename: "js",
    coursefees: 9999,
    courseinstructor: "alice"
}

const {coursename, coursefees,courseinstructor: inst} = course;
console.log(coursename, coursefees,inst);
console.log(inst);
