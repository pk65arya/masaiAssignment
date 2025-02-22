 
 


function zigzag(N,M){
let bag="";
for(let i=0;i<N;i++){
if(i%2==0){
  for(let j=M-1;j>=0;j--){
    bag+=arr[i][j]+" ";
  }
}else{
  for(let j=0;j<M;j++){
    bag+=arr[i][j]+" ";
  }
}
}
return bag;
}

let arr=[
  [1,2,3,4,5],
  [6,7,8,9,1],
  [3,2,4,5,6],
  [7,8,9,2,1]  
 ];
console.log(zigzag(arr.length,arr[0].length))