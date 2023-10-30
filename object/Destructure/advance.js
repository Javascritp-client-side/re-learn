const user = {
    name: "Alice",
    info: {
      age: 28,
      country: "Wonderland",
    },
  };
  
  // Destructuring with default values
  const {
    name = "Unknown",
    info: { age: userAge = "N/A", country: userCountry = "N/A" },
  } = user;
  
  console.log(`Name: ${name}`); // Output: "Name: Alice"
  console.log(`Age: ${userAge}`); // Output: "Age: 28"
  console.log(`Country: ${userCountry}`); // Output: "Country: Wonderland"
  console.log(user)