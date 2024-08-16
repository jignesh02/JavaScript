const user = {
    username: "jignesh",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username}, Welcome to this website`);
        console.log(this);
        // this means current concept it only print curent value in the scope
    }
}
// user.welcomeMessage()
// user.username = "zigs"
// user.welcomeMessage()

// console.log(this);



// function hello() {
//     let name = "jignesh"
//     console.log(this.name);
// }
// hello()


// arrow function

const hello = () => {
    let name = "jignesh"
    // console.log(this);
}
hello()

// syntax of arow function
// () => {}


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3, 4));


// implicit return type to write arrow function

// const addTwo = (num1, num2) => (num1 + num2)

// console.log(addTwo(3, 4));

const addTwo = (num1, num2) => ({username: "jignesh"})

console.log(addTwo(3, 4));