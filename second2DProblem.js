//Title: L0-Sum of Indexes

function sumOfIndex(N,M){
  for(let i=0;i<N;i++){
    let bag="";
    for(let j=0;j<M;j++){
      bag+=i+j+" "
    }
    console.log(bag);
  }
}

sumOfIndex(3,2);