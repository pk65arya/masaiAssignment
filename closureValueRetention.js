//L1 - Debugging Incorrect Closure Value Retention


//You are given the following code that is supposed to create a list of functions. Each function should print a unique index (0, 1, 2, ...) when called. However, instead of printing the correct index, every function prints the same final value.

// Your task is to debug the code and fix the closure-related issue so that each function retains and prints its correct index.

function createFunctionList() {

let functions = [];

for (let i = 0; i < 5; i++) {

functions.push(function () {

console.log("Index:", i);

});

}

return functions; }

const functionList=createFunctionList();
functionList[0](); 
functionList[1]();
functionList[2]();