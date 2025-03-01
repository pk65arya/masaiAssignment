//L0 - Transforming and Filtering with map() and forEach()

//You are given an array of objects representing products. Each product has a name and a price. Write a function processProducts that uses map() to create a new array of product names, and then uses forEach() to log each product name along with a message indicating whether the price is above or below $50.





var arr=[
  { name: "Laptop", price: 1000 },
   { name: "Mouse", price: 20 }
];
function processProducts(array){
  let marr=array.map((ele)=>{
    return ele.name;
  })
  return marr;
}

function process(array){
  arr.forEach((element) => {
    if(element.price>50)
    console.log( `${element.name} is above $50.`)
    else
    console.log(`${element.name} is below $50.`)
  });

}
 console.log(processProducts(arr));
process(arr);