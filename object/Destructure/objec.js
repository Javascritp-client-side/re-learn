const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    email: "johndoe@example.com",
    address: {
      street: "123 Main Street",
      city: "Anytown",
      state: "CA",
      postalCode: "12345"
    },
    hobbies: ["Reading", "Hiking", "Cooking"],
    isStudent: false
  };
  const {lastName ,hobbies:[,secondHobby],address:{postalCode}} = person

  console.log(lastName); // Output: "Doe"
  console.log(secondHobby); // Output: "Hiking"
  console.log(postalCode); // Output: "12345