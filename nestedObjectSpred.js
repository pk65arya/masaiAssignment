//L1 - Merging and Updating Nested Objects with Spread Operator

//You are given two nested objects: profile and updates. Your task is to merge the two objects using the spread operator, ensuring that specific nested properties in updates overwrite those in profile.

const profile = { name: "Charlie", age: 29, address: { city: "San Francisco", zipcode: "94101" } };
const updates = { age: 30, address: { zipcode: "94109", country: "USA" } };

let ans = {
  ...profile,
  age: updates.age,  
   address: {
     ...profile.address,  
     ...updates.address   
   }
};
console.log(ans);