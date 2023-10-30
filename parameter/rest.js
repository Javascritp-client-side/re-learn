function sum(n1,...numbers) {
    console.log(typeof numbers)
    let result = 0;
    for (let number of numbers) {
      result += number;
    }
    return result;
  }
  
  console.log(sum(1, 2, 3, 4, 5)); // Output: 15
  