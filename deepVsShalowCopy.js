//Title : L1: Deep vs Shallow copy

//Write a function deepClone(obj) that creates a deep copy of a given object using JSON.stringify() and JSON.parse(). The function should ensure that modifying the cloned object does not affect the original object.





  function deepClone(abc){
    const deepCopy=JSON.parse(JSON.stringify(abc));
    deepCopy.hobbies.push('coding');
    console.log(deepCopy)
  }
  let obj={
    name: "Alice", 
    hobbies: ["reading", "traveling"] 
   };
  deepClone(obj);

  console.log(obj)