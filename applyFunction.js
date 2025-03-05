//L0 - Using apply() to Multiply Numbers

//Write a function called multiplyNumbers that accepts two numbers as arguments and uses the apply() method to multiply them. The function should return the product.


function multiplyNumbers(a,b){

  return a*b;

}



console.log(multiplyNumbers.apply(null,[3,6]));
