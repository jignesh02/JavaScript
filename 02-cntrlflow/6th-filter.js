// const programming = ['JS', 'CPP', 'PY', 'C', 'C#'];

// const values = programming.forEach((item) => {
//     // console.log(item);
//     return item
// })
// console.log(values);

// filter


// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter((num) => {
//     num > 4
// })
// console.log(newNums);



// const books = [
//     { title: 'Book One', genre: 'Non-Fiction', publish: 1867, edition: 2023 },
//     { title: 'Book Two', genre: 'Vocabulary', publish: 1769, edition: 2005 },
//     { title: 'Book Three', genre: 'History', publish: 1965, edition: 2020 },
//     { title: 'Book Four', genre: 'Romance', publish: 1947, edition: 2019 },
//     { title: 'Book Five', genre: 'Sci-Fi', publish: 1587, edition: 2022 },
//     { title: 'Book Six', genre: 'Geography', publish: 1897, edition: 2024 },
//     { title: 'Book Seven', genre: 'politician', publish: 1675, edition: 2033 },
//     { title: 'Book Eight', genre: 'Fiction', publish: 1789, edition: 20239 }
// ]

// let userBooks = books.filter((bk) => bk.genre === 'History')
// userBooks = books.filter((bk) => {
//     return bk.publish >= 1500 && bk.genre ==="Geography"
// })
// console.log(userBooks);


//maps

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.map((num) => num+10)
// chaining method

// const newNums = myNums
//     .map((num) => num * 10)
//     .map((num) => num + 1)
//     .filter((num) => num >= 40)

// console.log(newNums);


// reduce


// const myNums = [1, 2, 3];


// const myTotal = myNums.reduce(function (acc, crntVal) {
//     console.log(`acc value is: ${acc} and current value is ${crntVal}`);

//     return acc + crntVal
// }, 0)

// const myTotal = myNums.reduce((acc, crntVal) =>acc + crntVal, 0)

// console.log(myTotal);




const shoppingCart = [
    {
        itemName: "Javascript Course",
        itemPrice: 1999
    },
    {
        itemName: "C++ Course",
        itemPrice: 4999
    },
    {
        itemName: "Python Course",
        itemPrice: 599
    },
    {
        itemName: "Ruby Course",
        itemPrice: 9999
    },
    {
        itemName: "ML Course",
        itemPrice: 19999
    }
]

const myTotal = shoppingCart.reduce( (acc, item) => (acc + item.itemPrice), 0)
console.log(myTotal);
