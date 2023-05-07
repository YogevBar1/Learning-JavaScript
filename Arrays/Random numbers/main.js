// Create an empty array
// Using a normal for loop, insert 100 random numbers
//  into it, any number between 1 and 50
// Show all values
// By the for loop calculate the sum of the values
// Show the sum and the average

const arr = [];

for (let i = 1; i <= 100; i++) {
    const num = Math.floor(Math.random() * 50) + 1;
    arr.push(num);
}

for (let i = 0; i < arr.length; i++) {
    document.write(arr[i] + " , ");
}

let sum = 0;
for (const item of arr)
    sum += item;

document.write("<hr>")
document.write(`The sum is = ${sum}<br>`);
const avg = sum / 100;
document.write(`The average = ${avg}`);