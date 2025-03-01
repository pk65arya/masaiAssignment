//L0 - Data Privacy using Closures

//Create a closure that simulates a simple counter. Implement a function createCounter that has a private count variable. The function should return two methods: increment to increase the count by 1 and getCount to return the current value of the counter. Ensure that count cannot be accessed directly from outside the closure.

let createCounter=(function(){
  let count=0;

  function changeBy(val) {
    count += val;
  }

  return {
    increment(){
      changeBy(1);
    },

    getCount(){
      return count;
    },
  };
  
  
})();

//const ans=createCounter();
const ans=createCounter;

console.log(ans.getCount())
ans.increment();
console.log(ans.getCount())



