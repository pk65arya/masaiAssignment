//L1 - Multi-Level Array and Object Destructuring

//You are working with an array of objects where each object represents a person with their name and address details. Use multi-level destructuring to extract the person's name, city, and street information.

//"Alice lives in New York on Broadway"

const people = [ { name: "Alice", address: { city: "New York", street: { name: "Broadway", number: 123 } } }, { name: "Bob", address: { city: "Los Angeles", street: { name: "Sunset Boulevard", number: 456 } } } ];

const [{name:name1,address:{city:city1,street:{name:stret1}}},
  {
    name:name2,address:{city:city2,street:{name:stret2}}
  }
]=people;

console.log(`${name1} lives in ${city1} on ${stret1}`);
console.log(`${name2} lives in ${city2} on ${stret2}`);