// Exercise 1
// Create an array called fruits containing the following elements: "apple", "banana", "cherry", "date", "elderberry", and "fig". Then, use the slice method to extract and log the elements from the 2nd to the 4th position (inclusive of the 2nd and 3rd elements but exclusive of the 4th element).
const fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"];
const extractedFruits = fruits.slice(2, 4);
console.log(extractedFruits);

// Exercise 2
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.slice(1,10).filter(e=> e%2 === 0)
console.log(evenNumbers);

// Exercise 3
const colors = ["red", "green", "blue", "yellow", "purple"];
const lastThreeColors = colors.slice(2, colors.length);
console.log(colors.length)
console.log(lastThreeColors);

// Exercise 4
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const springMonths = months.slice(startIndex, endIndex);
console.log(springMonths);

// Exercise 5
const sentence = ["This", "is", "a", "practice", "exercise", "for", "the", "slice", "method", "in", "JavaScript"];
const extractedWords = sentence.slice(startIndex, endIndex);
console.log(extractedWords);
