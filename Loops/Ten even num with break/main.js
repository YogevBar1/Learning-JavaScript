alert("Enter 10 even number:");

for (let i = 1; i <= 10; i = i + 1) {
    const n = +prompt("Enter an even number");
    if (n % 2 !== 0) {
        break;
    }

    document.write("Even number: " + n + "<br>")

}