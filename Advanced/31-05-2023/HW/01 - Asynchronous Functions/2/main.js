"use strict";

// 2. Repeat the previous exercise, but the current time must be displayed asynchronously by waiting 3 seconds.
// Therefore, what you should see at the end of the prints will be:
// Start
// End
// (current time)

function test() {
    console.log("start");

    setTimeout(showTime,3000)
    console.log("end");
}

function showTime(){
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    const currentSeconds = now.getSeconds();

    const formattedTime = `${currentHour}:${currentMinute < 10 ? '0' : ''}${currentMinute}:${currentSeconds}`;
    console.log(formattedTime);
}