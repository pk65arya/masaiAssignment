// Title: L0 - Convert to Arrow Function with Default Parameters

//Problem Statement: You are provided with a function multiply(a, b) that multiplies two numbers. Your task is to rewrite this function using arrow function syntax with a slight enhancement: include default parameters for both a and b. If no values are passed, a and b should default to 1.


let multiply=(a,b) => 
                      a==null && b==null ? '1'*'1' :
                      a*b;

                      console.log(multiply(4,5));
