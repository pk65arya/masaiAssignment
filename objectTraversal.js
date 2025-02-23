//Traversing Objects with for...in

let book = { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 };

let bag="";
for (const key in book) {
  bag+=key +" : " +book[key] +" ";
}

console.log(bag);