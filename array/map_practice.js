// Practice Exercise: Analyzing Data

// Given an array of people
const people = [
    { name: "Alice", age: 30, color: "Blue" },
    { name: "Bob", age: 25, color: "Red" },
    { name: "Charlie", age: 40, color: "Green" },
    { name: "David", age: 22, color: "Blue" },
    // Add more people here...
  ];
  
  // 1. Calculate the average age of all people in the array.
  let averageAge = people.reduce((accum,e)=> accum + e.age,0)/people.length
//   console.log(averageAge);
  // 2. Create an array of names for people whose favorite color is "Blue."
  let name = people.filter(e=>e.color === "Blue")
//   console.log(name)
  // 3. Filter the array to include only people who are 30 years or older.
  let older = people.filter(e=> e.age > 30)
  // 4. Calculate the total age of people with a favorite color of "Green."
  let totalGreen = people.filter(e=>e.color === "Green").reduce((accum,e)=> accum + e.age,0)
  // 5. Create an object that counts how many people have each favorite color.
  let color_count = people.reduce((countObj ,e)=>{
    let color = e.color
    if(countObj[color]){
        countObj[color]++

    }
    else{
        countObj[color] = 1
    }
    return countObj

  },{})
  console.log(color_count);

  
  // Your code goes here...
  
  // Display the results
//   console.log("Average Age:", averageAge);
//   console.log("Names with Blue Favorite Color:", namesWithBlueColor);
//   console.log("People 30 or Older:", people30OrOlder);
//   console.log("Total Age of People with Green Favorite Color:", totalAgeGreenColor);
//   console.log("Favorite Color Counts:", favoriteColorCounts);
  