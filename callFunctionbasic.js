//L1 - Using call() to Access Object Properties

//Create a function personInfo that logs the name and age of a person. Using the call() method, call the function with a specific this context (an object with properties name and age).



function personInfo(){
  console.log(`${this.personName} is of ${this.age} years.`)
}


let personObj={
  personName:"Pradeep",
  age:25
}


personInfo.call(personObj)