//Title: L2-Circular Traversal
let arr=[
  [1,2,3],
  [4,5,6],
  [7,8,9]
];


let bag="";

for(let i=arr.length-1;i>=0;i--){
  bag+=arr[i][0]+" ";
}

for(let i=1;i<arr.length;i++){
  bag+=arr[0][i]+" "
}

for(let i=1;i<arr.length;i++){
  bag+=arr[i][arr.length-1]+" "
}

for(let i=arr.length-2;i>=1;i--){
  bag+=arr[arr.length-1][i]+" ";
}

console.log(bag);