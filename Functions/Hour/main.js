// 8. Create a function that displays the current time (hint: Google).
// The function should not accept any parenthetical arguments.
// She was called once.

function getHour()
{
    const currentDate = new Date();
    const currentHour = currentDate.getHours();
    const currentMin = currentDate.getMinutes();
    document.write("The hour right now : "+ currentHour + ":" + currentMin);
}

getHour();