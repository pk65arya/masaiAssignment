//L2 - Building a Countdown Timer with Both setTimeout and setInterval

//Design a countdown timer that begins from a specified number of seconds and displays the remaining time in the console. You should:

// Prompt the user to enter a number of seconds to count down.
// Display the remaining time every second using setInterval.
// When the countdown reaches zero, stop the timer and print "Countdown Complete!".
// Additionally, if the user presses a specific key (e.g., "s") during the countdown, the countdown should immediately stop. Implement this key detection using setTimeout to delay checking for user input.

// This problem will require combining concepts of both setInterval for the countdown and setTimeout for delayed actions.


function timer(time){
    let id=setInterval(()=>{
      console.log(time--)
    },1000);

    setTimeout((time)=>{
      clearInterval(id)
      console.log("Countdown Compelete")
    },(time+2)*1000)
}

timer(5);