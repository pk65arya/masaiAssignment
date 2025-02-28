//L2 - Nested Object Destructuring for API Response with Optional Chaining

//You are working with data fetched from an API, which returns a user object with nested properties. Use object destructuring along with optional chaining (make sure you read about it in MDN) to extract specific properties, including those nested inside other objects. The user data might sometimes have missing fields, so optional chaining will help safely handle such cases.

const user = { id: 123, profile: { name: "John Doe", address: { city: "Los Angeles" } } };


const {
  id,
  profile:{
    name,
    address:{city,  zipcode}
    ={}
  }={}
}=user;
const userCity = city ?? "Information not available";
const userZipcode = zipcode ?? "Information not available";

const ans=`User ${name} (ID: ${id}) lives in ${userCity} (ZIP: ${userZipcode})`

console.log(ans);