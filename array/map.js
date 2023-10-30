// Advanced Practice Exercise: Mapping and Filtering

// Given an array of books
const books = [
    { title: "Book 1", author: "Author A", year: 1998, genre: "Fiction" },
    { title: "Book 2", author: "Author B", year: 2005, genre: "Mystery" },
    { title: "Book 3", author: "Author C", year: 1985, genre: "Science Fiction" },
    { title: "Book 4", author: "Author D", year: 2003, genre: "Fantasy" },
    // Add more books here...
  ];
  
  // 1. Create a new array with book titles and authors, in the format "Author: Title."
  const title_auth = books.map(e=> e.author.concat(": ")+e.title )
//   console.log(title_auth)
  
  // 2. Filter out books published before the year 2000.
 const filter = books.filter(e=>e.year < 2000 )
 console.log(filter)
  
  // 3. Sort the remaining books in alphabetical order based on the author's last name.
  const sort = filter.sort((e,c)=>{
    return e.author.split(" ")[1].localeCompare(c.author.split(" ")[1])
  })
