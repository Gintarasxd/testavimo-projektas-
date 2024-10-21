/*
const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}   */


  const people = [ 
    { name: 'Alice', age: 25, validResidence: true },
    { name: 'Bob', age: 17, validResidence: true },
    { name: 'Charlie', age: 30, validResidence: false },
    { name: 'John', age: 23, validResidence: true },
    { name: 'Amy', age: 29, validResidence: true }
];

const canVote = [];
const cantVote = [];

for (let i = 0; i < people.length; i++) {
    const person = people[i];
    if (person.age >= 18 && person.validResidence === true) {
        canVote.push(person);
    } else {
        cantVote.push(person);
    }
}
console.log("Žmonės, kurie gali balsuoti:");
for (let i = 0; i < canVote.length; i++) {
    console.log(canVote[i].name);
}

console.log("Žmonės, kurie negali balsuoti:");
for (let i = 0; i < cantVote.length; i++) {
    console.log(cantVote[i].name);
}
