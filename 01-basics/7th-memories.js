// 2 Types of memory 1st is Stack and 2nd is heap
// stack memory use in primitive datatypes (change in its copy)
// heap memory use in non primitive datatypes (change in original values)

let mySurname = "Bambhaniya";

let anotherSurname = mySurname; // in this case mySurname is copy of original mySurname thats why it is not change
anotherSurname = "Ahir"

console.log(mySurname);
console.log(anotherSurname);



let userOne = {
    sname : "Jhone",
    age : 25,
}

let userTwo = userOne
userTwo.sname = "Kane"

console.log(userOne.sname);
console.log(userTwo.sname);