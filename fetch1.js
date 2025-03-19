
// L0 - Fetch and Display Users

// Problem Statement:
// Create a webpage that fetches a list of users from the JSONPlaceholder API (https://jsonplaceholder.typicode.com/users) and displays their names in console.

// Key Requirements:
// Fetch the user data
// Display the names in console.




fetch('https://jsonplaceholder.typicode.com/users')
.then((res)=>{
  return res.json();
})
.then((res)=>{
    res.forEach(element => {
      console.log(element.name);
    });
})