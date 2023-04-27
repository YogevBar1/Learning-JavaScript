// Pick up three numbers, present the maximum of them.

const num1 = +prompt("Insert first number");
const num2 = +prompt("Insert second number");
const num3 = +prompt("Insert third number");

if (num1 > num2 && num1 > num3) {
    document.write(`${num1} is the max`);
}
else if (num2 > num3) {
    document.write(`${num2} is the max`);

}

else {
    document.write(`${num3} is the max`);

}
