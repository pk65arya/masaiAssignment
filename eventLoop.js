//L1 - Debugging Event Loop Order

//You are given a JavaScript snippet that logs messages in a specific order. However, there is an error in the output order because of asynchronous code. Debug the code so it matches the following order of execution:

// The correct order should be:

// Begin
// End
// Promise Task
// Timeout Task

console.log("Begin"); 
setTimeout(() => { console.log("Timeout Task"); }, 0); 
Promise.resolve().then(() =>
   { console.log("Promise Task"); });
 console.log("End");

 //there is no bug to  fix because it give the output as mention in the question

 //the out put is given below and it is same as above mention in the question;

// Begin
// End
// Promise Task
// Timeout Task