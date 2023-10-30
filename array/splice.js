// Exercise 1
const fruits = ["apple", "banana", "cherry", "date", "elderberry"];
fruits.splice(2, 1);
console.log(fruits);

// Exercise 2
const colors = ["red", "green", "blue", "yellow"];
colors.splice(2,2,"Hello");
console.log(colors);

// Exercise 3
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.splice(numbers.length-3, 3);
console.log(numbers);

// // Exercise 4
// const letters = ["A", "B", "C", "D", "E"];
// letters.splice(index, 0, newItem1, newItem2, newItem3);
// console.log(letters);

// // Exercise 5
// const planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter"];
// planets.splice(index, countToRemove);
// console.log(planets);
