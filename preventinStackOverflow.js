//L2 - Preventing Stack Overflow in Recursion

//You are required to write a recursive function factorial to calculate the factorial of a given number. However, you also need to handle potential stack overflow issues by adding a check to prevent an infinite recursion in case of incorrect input or base cases. Specifically, ensure that:


function factorial(n) {
  // Check for invalid inputs
  if (typeof n !== 'number' || isNaN(n) || n < 0) {
      console.log("Invalid input");
      return;
  }

  
  if (n === 0) {
      return 1;
  }

  
  return n * factorial(n - 1);
}


console.log(factorial(5)); 
console.log(factorial(0));  
console.log(factorial(-5)); 
console.log(factorial('abc')); 
console.log(factorial(3.5));  
console.log(factorial(10));  
