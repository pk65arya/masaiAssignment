//L1 - Simulating a Loading Screen with setInterval

//Create a JavaScript program that simulates a loading screen using setInterval. The program should:

//Start by logging "Loading..." every 1 second.
//After 5 seconds, stop the loading messages and log "Loaded successfully!".
//Use setInterval to repeat the loading message and clearInterval to stop it after 5 seconds.

function logging(){


const id=setInterval(()=>{
console.log("Loading");

},1000)

setTimeout(()=>{
clearInterval(id);
console.log("Loaded successfully");
},5000)

}

logging();


