// Title
// Basic Person Management System with Prototypical Inheritance

// Level
// 1

// Time to solve the problem
// 40 mins

// Overview
// In this problem, you will design and implement a basic person management system using JavaScript constructor functions and prototypical inheritance. This exercise will help you understand how to create and extend objects in JavaScript.

// Detailed Explanation
// Topics
// JavaScript Constructor Functions
// Prototypes and Inheritance
// Setup Guidelines and Instructions
// Use any JavaScript environment or IDE to implement the solution.
// Create separate JavaScript files or use modules to organize your code for better readability.
// Write comments to explain the logic and flow of your code.
// Problem Statement
// You are developing a basic person management system. Implement this system using constructor functions and prototypical inheritance.

// Create a constructor function Person with properties:

// name (string): name of the person
// age (number): age of the person
// Add a method introduce to Person.prototype that logs:

// "Hi, my name is [name] and I am [age] years old."
// Create a constructor function Employee that inherits from Person and adds:

// jobTitle (string): job title of the employee
// Add a method work to Employee.prototype that logs:

// "[name] is working as a [jobTitle]."
// Demonstration
// Create an instance of Person.
// Create an instance of Employee.
// Call introduce on both instances.
// Call work on the Employee instance.

function Person(name,age){
  this.name=name
  this.age=age
}

Person.prototype.introduce=function(){
  console.log(`Hi, my name is ${this.name} and I am ${this.age} year old`)
}

function Employee(name,age,jobTitle){
  Person.call(this, name, age); 
  this.jobTitle = jobTitle;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.work=function(){
  console.log(`${this.name} is working as a ${this.jobTitle}`)
}


let p1=new Person("Pradeep",25);
let e1=new Employee('pk',30,'SDE1');

p1.introduce();
e1.introduce();
e1.work();