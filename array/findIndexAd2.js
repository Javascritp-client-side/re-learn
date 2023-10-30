const books = [
    { title: "Book 1", author: "Author A" },
    { title: "Book 2", author: "Author B" },
    { title: "Book 3", author: "Author C" },
    { title: "Book 4", author: "Author A" },
    { title: "Book 5", author: "Author D" },
  ];
  
  // Your task is to write a function that finds the index of the first book by a specific author.
  // If no book by that author is found, the function should return -1.
  
  function findIndexOfBookByAuthor(arr, authorName) {
    return arr.findIndex((e)=> e.author === authorName)
    // Write your code here
  }
   
  // Call the function and log the result
  const authorNameToFind = "Author A";
  const index = findIndexOfBookByAuthor(books, authorNameToFind);
  if (index !== -1) {
    console.log(`Index of the first book by ${authorNameToFind}: ${index}`);
  } else {
    console.log(`No book by ${authorNameToFind} found.`);
  }
  