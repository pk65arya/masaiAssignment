//L1 - Grouping and Summing with reduce()

//You are given an array of strings representing product categories. Your task is to use reduce() to create an object that counts the occurrences of each category in the array.

//Use reduce() to group the categories and count how many times each category appears.
// Return the resulting object.

  let input= ["electronics", "clothing", "electronics", "toys", "clothing"];

  let arr=input.reduce((a,b)=>{
   
if(a[b]){
  a[b]++;
}else{
  a[b]=1;
}
return a;
      
  },{});


 
console.log(arr)