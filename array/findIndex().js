const numbers = [5, 8, 12, 3, 18, 7, 15];

// Your task is to write a function that finds the index of the first number greater than or equal to 10.
// If no such number exists, the function should return -1.

function findIndexOfFirstElementGreaterThanTen(arr) {
    return arr.findIndex(e=> e>=10)
  // Write your code here
}

// Call the function and log the result
const index = findIndexOfFirstElementGreaterThanTen(numbers);
console.log(`Index of the first element greater than or equal to 10: ${index}`);
