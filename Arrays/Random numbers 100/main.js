//HW4
// Create an array called numbers, put 100 random numbers in it 
// where each number is between 1 (inclusive) and 100 (inclusive).
// Introduce:
// A. The array itself with a separator line ( | ) between numbers.
// B. the whole array in reverse order (from the end to the beginning).
// third. the consumption of numbers.
// d. the average of the numbers.
// God. all the pairs in the array.
// and. the number of odd numbers in the array 
// (display the odd numbers, but only their quantity).
// G. the maximum number in the array.
// H. the minimum number in the array.
// ninth. All numbers larger than the average.
// J. the number of numbers smaller than the average
//  (the numbers smaller than the average should not be displayed,
//      but only their quantity).

const numbers = [];
for (let i = 0; i <= 99; i++) {
    const num = Math.floor(Math.random() * 100) + 1;
    numbers[i] = num;
}

for (const num of numbers) {
    document.write(`${num} |`);
}

document.write("<br><hr>");

for (let i = numbers.length - 1; i >= 0; i--)
    document.write(`${numbers[i]} , `);



document.write("<br><hr>");
let sum = 0;
for (const num of numbers) {
    sum += num;
}

document.write(`Sum = ${sum}<br>`);

const avg = sum / 100;

document.write(`Average = ${avg}`);



document.write("<br><hr>");
document.write("Even numbers:<br>");

for (const num of numbers) {
    if (num % 2 === 0)
        document.write(`${num} , `);
}

document.write("<br><hr>");
let countOdd = 0;
for (const num of numbers) {
    if (num % 2 !== 0)
        countOdd++;
}

document.write(`Count of Odd numbers: ${countOdd}`);

document.write("<br><hr>");

let max = -1;
for (const num of numbers) {
    if (num > max)
        max = num;
}

document.write(`The bigger number = ${max}`);

document.write("<br><hr>");
let min = 101;
for (const num of numbers) {
    if (num < min)
        min = num;
}

document.write(`The minimal number = ${min}`);


document.write("<br><hr>");
document.write("Numbers that bigger than the average: ");
for (const num of numbers)
    if (num > avg)
        document.write(`${num} , `);


document.write("<br><hr>");
let countLowFromAvg = 0;
for (const num of numbers)
    if(num < avg)
    countLowFromAvg++;


document.write(`Count of number that low than the average = ${countLowFromAvg}`);
