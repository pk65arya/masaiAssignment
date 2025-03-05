//L2: Sort an Array of Names Alphabetically using localeCompare()

//Write a function sortNames(namesArray) that sorts an array of names alphabetically using the sort() method and localeCompare().


const arr=["Charlie", "Alice", "Bob"];

function sortNames(namesArray){

  let sorting=namesArray.sort((a,b)=>{
    return a.localeCompare(b);
  })
  console.log(sorting);
}

sortNames(arr);