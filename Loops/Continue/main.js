alert("Enter 10 positive number");

for (let i = 1; i <= 10; i++) {
    const n = +prompt("Positive number:");
    if (n <= 0)
        continue; //immediately continues to the next iteration

    document.write("Positive number: " + n + "<br>");
    document.write("Power 2: " + n ** 2 + "<br>");
    document.write("Power 3: " + n ** 3 + "<br>");
    document.write("<hr>");


}

alert("Enter 10 numbers that not divided by 7 and not finished by 7");
for (let i = 1; i <= 10; i++) {
    const n = + prompt("Insert number that not finished by 7 and not divide by 7");
    if (n % 7 === 0 || n % 10 === 7)
        continue;
    document.write(`The number is: ${n}<br>`);
    document.write(`${n} ** 2 = ${n ** 2}<br>`);
    if (n % 2 === 0)
        document.write(`${n} is even`);
    else
        document.write(`${n} is odd`);
    document.write("<hr>");
}