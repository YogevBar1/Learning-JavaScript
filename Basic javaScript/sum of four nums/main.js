// Collect four numbers from the user, display their sum


const num1 =+ prompt("Insert first number:");
const num2 =+ prompt("Insert another number:");
const num3 =+ prompt("Insert another number:");
const num4 =+ prompt("Insert another number:");

document.write(`${num1} + ${num2} + ${num3} + ${num4} = ${num1 + num2 + num3 + num4}`);


document.write("<br>")
// Accept two numbers from the user, display the maximum.
const num5 =+ prompt("Insert first number:");
const num6 =+ prompt("Insert another number:");
const max = (num6 > num5) ? num6 : num5;
document.write(`The bigger number is = ${max}`);

