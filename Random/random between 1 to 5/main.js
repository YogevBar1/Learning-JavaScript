// The user insert num between 1 to 5 
// we check if it equal to random number

const userNum = + prompt("Insert num between 1 to 5");
const randomNum = + Math.floor(Math.random() * 5) + 1;

document.write("The user number: " + userNum + "<br>");
document.write("The random number: " + randomNum + "<br>");

if (userNum === randomNum)
    document.write("😊");
else
    document.write("☹️");
