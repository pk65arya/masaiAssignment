// L2 - Building a Library Management System Using Factory Functions

// Problem Statement:
// Create a factory function createLibrary that manages a collection of books in a library. Each library should allow for adding new books, removing books by title, and displaying all available books. Implement helper factory functions for creating Book objects, which include properties title and author, and a method details() to print the book’s details.

// Steps:

// Define the Book factory function with title, author, and a details() method.
// Define the createLibrary factory function that returns an object with methods to:
// Add a book to the collection.
// Remove a book by title.
// List all books by calling each book’s details() method.
// Implement createLibrary to store books in an internal array.
// Example:
// const library = createLibrary();

// const book1 = Book("To Kill a Mockingbird", "Harper Lee");
// const book2 = Book("1984", "George Orwell");

// library.addBook(book1);
// library.addBook(book2);

// library.listBooks();
// // Output:
// // Title: To Kill a Mockingbird, Author: Harper Lee
// // Title: 1984, Author: George Orwell

// library.removeBook("1984");
// library.listBooks();
// // Output:
// // Title: To Kill a Mockingbird, Author: Harper Lee

function Book(title,author){
  let obj={}
  obj.title=title
  obj.author=author
  obj.details=function(){
    console.log(`title: ${this.title} author: ${this.author}`)
  }

  return obj;
}

function createLibrary() {
  const booksCollection = [];

  return {
    
    addBook(book) {
      booksCollection.push(book);
    },
    
   
    removeBook(title) {
      const index = booksCollection.findIndex(book => book.title === title);
      if (index !== -1) {
        booksCollection.splice(index, 1);
        console.log(`Book "${title}" removed from the library.`);
      } else {
        console.log(`Book "${title}" not found.`);
      }
    },
    
    listBooks() {
      if (booksCollection.length === 0) {
        console.log("No books available in the library.");
      } else {
        booksCollection.forEach(book => book.details());
      }
    }
  };
}


const library = createLibrary();

const book1 = Book("To Kill a Mockingbird", "Harper Lee");
const book2 = Book("1984", "George Orwell");

library.addBook(book1);
library.addBook(book2);

console.log("Listing all books:");
library.listBooks();

library.removeBook("1984");
library.listBooks();