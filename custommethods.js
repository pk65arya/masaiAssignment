//L1 - Implementing Multiple Custom Methods for Array Operations

//Create a program that defines the following custom methods:

//filterEvenNumbers(arr): This method takes an array of numbers and returns a new array with only the even numbers using filter.

//sumOfArray(arr): This method calculates and returns the sum of all elements in an array using reduce.
//sortAndConcat(arr1, arr2): This method takes two arrays of numbers, sorts each array in ascending order using sort, and then concatenates them into one array using concat. Return the sorted and concatenated array.


function filterEvenNumbers(arr){

  let narr=arr.filter((ele)=>{
    return ele%2==0;
  })

  return narr;
}


function sumOfArray(arr){

  let sum=arr.reduce((a,b)=>{
          a+=b;
          return a;
  },0)

  return sum;

}

function sortAndConcat(array1, array2){

  let s1=array1.sort();
  let s2=array2.sort();
  let arr3=s1.concat(s2);

  return arr3;
}


const arr1=[4,3,5,1,2];
const arr2=[6,9,8,7];


console.log(filterEvenNumbers(arr1));
console.log(sumOfArray(arr1));
console.log(sortAndConcat(arr1,arr2))