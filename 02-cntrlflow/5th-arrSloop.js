// for of loop

// const arr = [1, 2, 3, 4, 5]

// for (const num of arr) {
//     console.log(num);

// }

// const greeting = "Hello, how are you"

// for (const greet of greeting) {
//     if (greet == " ") {
//         continue
//     }
//     console.log(`Each cheracter is ${greet}`);

// }


// Maps

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United states of America")
// map.set('FR', "France")

// console.log(map);

// for (const [key, value] of map) {
//     console.log(key, ':-', value);
// }

// for in loop

// const myObj = {
//     'game: 1': 'PUBG',
//     'game: 2': 'CoC',
//     'game: 3': 'Fortnite',
//     'game: 4': 'GTA-5',
//     'game: 5': 'RDR',
// }

// for (const key in myObj) {
//     console.log(`${key} name is ${myObj[key]}`);
// }



// const programming = ['JS', 'CPP', 'PY', 'C', 'C#'];

// for (const key in programming) {
//     console.log(programming[key]);
// }


// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United states of America")
// map.set('FR', "France")

// for (const key in map) {
//     console.log(key);
//     // map is not itrateble
// }



// for each loop

const programming = ['JS', 'CPP', 'PY', 'C', 'C#'];

// programming.forEach( function (item) {
//     console.log(item);
// } )

// programming.forEach( (value) => {
//     console.log(value);
// } )

// function print(value){
//     console.log(value);
// }

// programming.forEach(print)


// programming.forEach((item, index, array) => {
//     console.log(item, index, array);
// })


const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "c++",
        languageFileName: "cpp"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoding.forEach((item) => {
    console.log(item.languageFileName);
    console.log(item.languageName);
    
})