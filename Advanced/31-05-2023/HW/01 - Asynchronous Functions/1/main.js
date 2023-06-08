"use strict";

// 1. Write a display command of the word Start, followed by a display command of the current time, followed by a display command of the word End (everything is synchronous).
// Therefore, what you should see at the end of the prints will be:

function test() {
    console.log("start");

    const now = new Date();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();

    const formattedTime = `${currentHour}:${currentMinute < 10 ? '0' : ''}${currentMinute}`;
    console.log(formattedTime);
    console.log("end");
}