// Numbers

// const score = 500;
// console.log(score);

// const balance = new Number(2000);
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

// const oneValue = 245.9999
// console.log(oneValue.toPrecision(4));
// in toPrecision output value is precise like 245.9999 become 246.0

// const secondValue = 10000000
// console.log(secondValue.toLocaleString('en-IN'));
// convert value in readable formet like 1,00,00,000 (1 corer) in number types

// const eventDate = new Date(Date.UTC(2024, 6 ,23, 6, 9, 0));
// console.log(eventDate.toLocaleString('en-IN'));
// But in date form that show local date and time

// Maths

// console.log(Math.abs(-4));
// convert neg value in pos value

// console.log(Math.round(5.5));
// 5.5 round is 6 so answer is 6

// console.log(Math.ceil(5.5));
// do roundfiger but uper value is 6 its called ceiling

// console.log(Math.floor(5.5));
// do roundfiger but same value like in this value is 5

console.log(Math.random());
// give random value in decimal form

console.log(Math.random()*10);
// give random value but multiply this value with 10

// But we dont need floating value we need only single digit value
// And we need value between 10 and 20 ex. is given below

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);