//L1 - Debugging Object Methods


//You need to debug and refactor a script meant to handle user profiles in an application. The script uses object methods but has issues with method referencing and logical errors.


const userProfile = {

  name: "Alice",
  
  age: 28,
  
  details: function() {
  
  return `${this.name} is ${this.age} years old.`; },
  
  updateAge(newAge) {
  
  if (newAge <= 0) {
  
  return "Invalid age.";
  
  }
  
  this.age = newAge;
  
   } 
    
  };
  
  userProfile.updateAge(30);
  console.log(userProfile.details());