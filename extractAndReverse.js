//L0 - Extract and Reverse a Portion of an Array

//Given an array of integers [15, 30, 45, 60, 75, 90], write a function extractAndReverse that performs the following tasks:

//Use the slice method to extract a subarray from the third element (inclusive) to the fifth element (exclusive).
//Reverse the extracted subarray and return it.

//The original array should remain unchanged. The function should return the reversed subarray.

 function extractAndReverse(array){
  const sliceArray=array.slice(2,4);

  const reversed=sliceArray.reverse();
return reversed;
}

let arr=[15, 30, 45, 60, 75, 90];
console.log(extractAndReverse(arr));

console.log(arr);
