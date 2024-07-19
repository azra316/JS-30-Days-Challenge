// Day-7 Objects
// Activity-1: Object creation and access

// Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console.
const Book = {
  title: "Atomic Habits",
  Author: "James Clear",
  Year: 2003,
};
console.log(Book);
//Task-2: Access and log the title and author properties of the book object.
console.log(Book.title);
console.log(Book["Author"]);

// Activity-2 Objects Methods
// Task-3: Add a method to the book object that returns a string with the book’s title and author, and log the result of calling this method.
Book.BookInfo = () => {
  console.log(`${Book.title} is written by ${Book.Author}`);
};
Book.BookInfo();

// Task-4: Add a method to the book object that takes a parameter (year) and updates the book’s year property, then log the updated object.
Book.UpdateYear = (year) => {
  Book.Year = year;
  console.log(Book);
};
Book.UpdateYear(2016);

// Activity-3 Nested Objects
// Task-5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.
const Library = {
  name: "cityLibrary",
  Books: [
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      PublishedYear: 1960,
    },
    {
      title: "the falut in our stars",
      author:"John Green",
      PublishedYear: 2004
    },
    {
      title: "It Ends With Us",
      author:"Collen Hoover",
      PublishedYear: 2016
    }
  ]
};
console.log(Library);
// Task-6: Access and log the name of the library and the titles of all the books in the library.
//console.log(`In the ${Library.name} Books Title are: ${Library.Books[0].title}, ${Library.Books[1].title}, ${Library.Books[2].title}`)

// Activity-4 The 'this' Keyword
// Task-7:Add a method to the book object that uses the this keyword to return a string with the book’s title and year, and log the result of calling this method.
Book.BookInformation = function(){
  console.log(`the name of the Book is ${this.title} ans the Author is: ${this.Author}`);
}
Book.BookInformation();

// Activity-5: Object iteration
// Task-8: Use a for...in loop to iterate over the properties of the book object and log each property and its value.
for(const key in Book){
  console.log(`key is ${key} and the value is ${Book[key]}`)
}
//Task-9: Use Object.keys(obj) and Object.values(obj) methods to log all the keys and values of the book object.
console.log(Object.keys(Book));
console.log(Object.values(Book));