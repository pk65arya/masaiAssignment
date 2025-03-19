// L1 - Debugging this in Factory Function Methods

// Problem Statement:
// You have been given a factory function createBook with a method printInfo. However, the printInfo method is not correctly using the this keyword to access book properties. Identify and fix the issue so that the method correctly outputs the book's title and author.

// Steps:

// Inspect the createBook function to identify how this is used incorrectly in printInfo.
// Correct the this usage to access title and author.
// Test the function to ensure it works as expected.
// Original Code:

function createBook(title, author) {
  return {
    title: title,
    author: author,
    //arrow function is not  their own this it takes this on rent from others so by using normal function we can solve the problem;
    // printInfo: () => {
    //   console.log("Book: " + this.title + ", Author: " + this.author);
    // }
    printInfo:function (){
      console.log("Book: " + this.title + ", Author: " + this.author);
    }
  };
}

const book = createBook("1984", "George Orwell");
book.printInfo();
// Output: Book: 1984, Author: George Orwell