"use strict";

// 3. Do the previous exercise again, but instead of displaying the current time, display the time that was 3 seconds ago. That is, the output of the exercise should be the word Start and then the word End and then after 3 seconds a display of the time that was 3 seconds ago.
// Therefore, what you should see at the end of the prints will be:
// Start
// End
// (the time that was 3 seconds ago)

function test() {
    console.log("start");

    const now = new Date();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    const currentSeconds = now.getSeconds();
    const formattedTime = `Current time:${currentHour}:${currentMinute < 10 ? '0' : ''}${currentMinute}:${currentSeconds}`;
    console.log(formattedTime);
    setTimeout(() => {
        const threeSecondAgo = new Date(now.getTime() - 3000);
        const threeSecondAgoHour = threeSecondAgo.getHours();
        const threeSecondAgoMinute = threeSecondAgo.getMinutes();
        const threeSecondAgoSeconds = threeSecondAgo.getSeconds();

        const formattedTime = `${threeSecondAgoHour}:${threeSecondAgoMinute < 10 ? '0' : ''}${threeSecondAgoMinute}:${threeSecondAgoSeconds}`;
        console.log(formattedTime);
    }, 3000);
    console.log("end");
}


