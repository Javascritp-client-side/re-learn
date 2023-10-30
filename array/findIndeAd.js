const people = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 22 },
    { name: "Charlie", age: 40 },
    { name: "David", age: 28 },
    { name: "Eve", age: 24 },
  ];
  
  // Your task is to write a function that finds the index of the first person with an age between 25 and 35.
  // If no such person exists, the function should return -1.
  
  function findIndexOfPersonWithAgeRange(arr) {
    return arr.findIndex(e=>e.age >=25 && e.age <= 35)
    // Write your code here
  }
  
  // Call the function and log the result
  const index = findIndexOfPersonWithAgeRange(people);
  if (index !== -1) {
    console.log(`Index of the first person with age between 25 and 35: ${index}`);
  } else {
    console.log("No person with age between 25 and 35 found.");
  }
  