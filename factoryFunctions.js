//L2 - Building a Library Management System Using Factory Functions

// Problem Statement:
// Create a factory function createLibrary that manages a collection of books in a library. Each library should allow for adding new books, removing books by title, and displaying all available books. Implement helper factory functions for creating Book objects, which include properties title and author, and a method details() to print the book’s details.

// Steps:

// Define the Book factory function with title, author, and a details() method.
// Define the createLibrary factory function that returns an object with methods to:
// Add a book to the collection.
// Remove a book by title.
// List all books by calling each book’s details() method.
// Implement createLibrary to store books in an internal array.

const Book=function(title,author){
  return{
   title,
   author,
   details(){
     return `Title: ${title}, Author: ${author}`
   }
  }
 }
 
 const createLibrary=function (){
   const books=[];
   return{
     addBook(book){
       books.push(book);
     },
     
     removeBook(title){
       let index=books.forEach((ele,i)=>{
         if(ele.title===title){
           return i;
         }
       })
       
       if(index==-1){
         console.log('book is not found');
       }else{
         books.splice(index,1);
         console.log('book removed succesfully');
       }
     },
     listBooks(){
       books.forEach((ele)=>{
         console.log(ele.details());
       })
     }
   }
 }
 
 
 const library=createLibrary();
 
 
 
 
 const book1=new Book("To Kill a Mockingbird", "Harper Lee");
 const book2=new Book("1984", 'George Orwell');
 
 library.addBook(book1);
 library.addBook(book2);
 
 library.removeBook('1984');
 
 library.listBooks();
 