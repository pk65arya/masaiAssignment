//L0 - Implementing setTimeout for Delayed Messages

//Write a JavaScript program that uses setTimeout to print a delayed message to the console. Your code should:

//Print "Message 1" immediately.

//Use setTimeout to print "Message 2 after 2 seconds" after a delay of 2 seconds.

//Print "Message 3" immediately after "Message 1".

//The output order should reflect asynchronous execution: first "Message 1", then "Message 3", followed by "Message 2 after 2 seconds" after the delay.

console.log("Message 1");

setTimeout(()=>{
  console.log("Message 2");
},2000)

console.log("Message 3");