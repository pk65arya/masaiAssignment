//L2 - Library System with Multiple Methods

//Write a program to manage a digital library system where books are stored in an array. You will use at least 6 different methods to manipulate and manage the books in the library. The program should be capable of the following operations:

// Add books: Add a book to the library.
// Remove books: Remove a book by its name.
// Search books: Check if a specific book is in the library using includes.
// Find the first and last occurrence of a specific book title using indexOf and lastIndexOf.
// Extract a sublist: Extract a subset of books using the slice method.
// Sort books: Sort the library's book titles alphabetically using localeCompare.
// Replace a book: Use splice to remove one book and add a new one at the same index.
// Join the book titles: Use join to create a string of book titles separated by commas.

// You must:

// Allow the user to add or remove books.
// Enable searching for a specific book by its name.
// Provide sorting and extracting functionalities.
// Ensure that the user can replace any book title at a specified index.
// The program should display the current list of books after every operation and must use at least 6 array methods.

var books=[];

function libraryManagement(){



function addBook(title){
  books.push(title);
 console.log(books);
}



function removeBooks(title){
  if(books.includes(title)){
    let index=books.indexOf(title);
    books.splice(index,1)
    console.log(books);
  }else{
    console.log("book is not found");
  }
}

function searchBooks(title){
  let res=books.includes(title)?'Books are available':'books not found';
  console.log(res);
}

function checkFirstandLastOccurance(title){
  console.log("this book first time found at index "+books.indexOf(title));
  console.log("this book last time found at index "+books.lastIndexOf(title));
}

function subList(a,b){
    let arr=books.slice(a,b);
    console.log("the sub list of books in given range are :",arr);
}

function sorting(){
  
   let arr=books.map((ele)=>{
    return ele.toUpperCase();
   }).sort((a,b)=>{
   return a.localeCompare(b);
   })

   console.log(arr);
 
  }

  function update(oldTitle,newTitle){
        if(books.includes(oldTitle)){
          let index=books.indexOf(oldTitle);
          books.splice(index,1,newTitle);
          console.log(books);
        }else{
          console.log("book not found");
        }
  }


  function joiningTitle(){
    console.log(books.join(","));
  }

  
} 






   
libraryManagement.addBook('republic India');
   addBook('MotherIndia');
   addBook('Kafan');
   addBook('godan');
   addBook('gaban');

   joiningTitle();

  //  update('godan','kalchakr');

   //sorting(books);


  //  subList(0,3);
//    searchBooks('republic India');

// checkFirstandLastOccurance('republic India');
// removeBooks('republic India');
