

// Q: 10
// Title
// Prototypical Inheritance and Constructor Functions - I

// Level
// 1

// Time to solve the problem
// 40 mins

// Problem Statement
// You are developing a simulation for a car rental service. The simulation should manage the inventory of cars, track rentals by customers, and handle the return and maintenance of cars. Additionally, there are different types of cars with varying rental rules and prices. The system should be able to process rentals asynchronously to simulate real-world delays.

// To implement this system, follow these steps:

// Create a constructor function for Car that takes the following parameters:
// make: the make of the car (e.g., Toyota)
// model: the model of the car (e.g., Corolla)
// year: the year of the car (e.g., 2020)
// isAvailable: a boolean indicating if the car is available for rent (default is true)
// Create a constructor function for Customer that takes the following parameters:
// name: the name of the customer
// rentedCars: an array to store the cars rented by the customer (default is an empty array)
// Add a method to the Customer prototype to allow customers to rent a car. This method should:
// Take a Car object as an argument.
// Check if the car is available.
// If the car is available, mark it as not available and add the car to the customer's rentedCars array.
// If the car is not available, log a message saying the car is already rented.
// Create a constructor function for PremiumCustomer that inherits from Customer and takes the same parameters. Additionally, PremiumCustomer should have:
// A discountRate property indicating a discount on rental prices (e.g., 10%).
// Create a function to calculate rental prices that considers:
// Base rental price per day (e.g., $50).
// Different rates for different car types (e.g., SUV, Sedan).
// Apply discounts for premium customers.
// Handle car returns by adding a method to the Customer prototype to return a car. This method should:
// Take a Car object as an argument.
// Mark the car as available.
// Remove the car from the customer's rentedCars array.
// Simulate a delay in processing the return (e.g., 2 seconds).
// Extend the system to handle maintenance:
// Create a Maintenance function that takes a Car object and a delay (in milliseconds).
// After the delay, mark the car as available.
// Demonstrate the functionality:
// Create several car objects of different types.
// Create regular and premium customers.
// Show renting and returning cars, applying discounts, and handling maintenance.
// Use call, apply, and bind where appropriate to demonstrate your understanding.



function Car(make,model,year,isAvailable=true){
   this.make=make;
   this.model=model;
   this.year=year;
   this.isAvailable=isAvailable;
}


function Customer(name,rentedCars=[]){

  this.name=name;
  this.rentedCars=rentedCars;
}

Customer.prototype.rentACar=function(car){

  if(car.isAvailable){
    car.isAvailable=false;
    this.rentedCars.push(car);
    console.log(`${this.name} is rented ${car.make} ${car.model}`)
  }else{
    console.log(`${car.make} ${car.model} is already rented`);
  }
}

Customer.prototype.returnCar=function(car){

  setTimeout(()=>{
    car.isAvailable=true;
    let index=this.rentedCars.indexOf(car);

    if(index!=-1){
      this.rentedCars.splice(index,1);
    }
    console.log(`${this.name} returned ${car.make} ${car.model}`)
  },2000);
}

function PremiumCustomer(name,rentedCars=[],discountRate){

  Customer.call(this,name,rentedCars);
  this.discountRate=discountRate;

}

PremiumCustomer.prototype=Object.create(Customer.prototype);
PremiumCustomer.prototype.constructor=PremiumCustomer;

PremiumCustomer.prototype.rentACar=function(car){
  Customer.prototype.rentACar.call(this,car);
}

let baseRentalPrice = 50;

function calculateRentalPrice(car,days){
  let carTypePrice=0;

  

}




let car1=new Car('Toyta','suv',1990,true);

let customer1=new Customer('Pradeep');
let customer2=new Customer('Pankaj');

customer1.rentACar(car1);
customer2.rentACar(car1);