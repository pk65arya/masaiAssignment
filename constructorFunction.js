


// L2 - Binding Method in Constructor Function

// Problem Statement:
// Create a constructor function Person that initializes name and age. Implement a method displayInfo() using this inside the constructor, and then use the bind() method to create a new function that retains the context of the original Person instance. Finally, log the details using this new function.






const Person=function(name,age){
  this.name=name;
  this.age=age;
  this.displayInfo=function(){
    return `${name} is ${age} year old`;
  };
};

const per=new Person('pankaj',28);


const result=per.displayInfo.bind(per);
console.log(result());
