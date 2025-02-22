
//L1-Pattern Printing III
// * * * * *

// *

// *

// *

// * * * * *


function pattern3(N){

  for(let i=0;i<N;i++){
    let bag="";
    if(i==0 || i==N-1){
      for(let j=0;j<N;j++){
        bag+="*"+" "
      }
      console.log(bag);
    }else{
      console.log("*");
    }
  }
}

pattern3(5);