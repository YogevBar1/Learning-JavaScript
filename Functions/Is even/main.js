function isEven(num) {
    return (num % 2 === 0)

}

const n = 12;
if (isEven(n))
    document.write(`${n} is even`);
else
    document.write(`${n} is odd`);
