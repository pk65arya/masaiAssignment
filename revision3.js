// L0 - Fixing Array and Object Operations

// Problem Statement:
// You have been provided with a script that is intended to handle a system for tracking book collections in a small library. The script uses arrays and objects to manage information but contains logical errors and syntax misuse, especially around ES6 features.

// Code Sample:

// const library = {

// books: [{ title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 }],

// addBook(book) {

// if (!book.title || !book.author || !book.year) {

// console.log("Book information is incomplete.");

// return;

// }
// this.books.push(book);

// },

// findBookByTitle(title) {

// return this.books.find(book => book.title === title);

// },

// removeBook(title) {

// const index = this.books.findIndex(book => book.title === title);

// if (index !== -1) {

// this.books.splice(index, 1);

// } else {

// console.log("Book not found.");

// } } };

// library.addBook({ author: "George Orwell", year: 1949 });

// console.log(library.books.length);

// Steps:

// Debug and improve the addBook method to ensure all books added are valid and fully specified.
// Read about the methods provided above in MDN
// Review and correct the output of the system based on operations performed.
// Refactor the code for better error handling and data integrity.



const library = {

books: [{ title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 }],

addBook(book) {

if (!book.title || !book.author || !book.year) {

console.log("Book information is incomplete. Please give valid title ,author and year");

return;

}

let existingBook = this.books.find(b => b.title === book.title);
    if (existingBook) {
      console.log(`The book "${book.title}" is already in the library.`);
      return;
    }
this.books.push(book);
console.log(`Book titled "${book.title}" added to the library.`);
},

findBookByTitle(title) {

return this.books.find(book => book.title === title);

},

removeBook(title) {

const index = this.books.findIndex(book => book.title === title || 'Books are not found');

if (index !== -1) {

this.books.splice(index, 1);
 console.log(`Book titled "${title}" removed from the library.`);
} else {

console.log("Book not found.");

} } };

library.addBook({ title: 'SRK',author: "George Orwell", year: 1949 });
 
  console.log(library.findBookByTitle('SRK'))
  library.removeBook('SRK');

console.log(library.books.length);
