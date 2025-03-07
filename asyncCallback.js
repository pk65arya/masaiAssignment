//L0 - Asynchronous Timer with Callback

//Create a function timer that takes a duration in milliseconds and a callback function onComplete. The function should use setTimeout to simulate a countdown, and when the timer ends, it should execute the onComplete callback with a message: "Timer of <duration> ms finished".


function timer(duration,onComplete){

    setTimeout(()=>{
        onComplete(`Timer of ${duration} ms finished`)
    },duration)

}

timer(1000,(message)=>{
  console.log(message);
})