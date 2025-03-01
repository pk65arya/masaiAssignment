//L2 - Debugging Memory Leak in Closures

//The following code is designed to handle a large dataset temporarily, but it seems to be causing a memory leak. Even after the dataset is no longer needed, the memory usage remains high. You need to figure out why the closure is holding onto the large dataset and resolve the issue.

function createHeavyDataHandler() {

  let largeData=new Array(1000000).fill(0);
  
  
  
  return {
  
  processData: function () {
  
  console.log("Processing data of size:", largeData.length);
  
  },
  
  clearData: function () {
  console.log("Clearing data");
  largeData=[]
   
  } };
  }
  
  const handler = createHeavyDataHandler();
  
  handler.processData(); 
  handler.clearData();
  handler.processData();