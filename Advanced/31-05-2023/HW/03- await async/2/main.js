"use strict";

// 2. Create a function called generatePrimeNumberAfterDelayAsync that accepts two arguments in
//  brackets: a minimum number and a maximum number and returns a Promise. The function must wait a second and
//  then dial a number in the range it received. If the number that was split is a prime number
//   (divisible only by itself and only by 1), it must report it by resolve as a success. If the number
//    that was split is not a prime number (there is some number that divides it without a remainder), it
//     should report by reject an error message.
// Create two text boxes and a button. The user must enter a minimum number and a maximum number in the text
//  boxes. By pressing the button, the above function must be called, display the initial number drawn if there
//   is success or display the failure message.

async function test() {
    const minTextbox = document.getElementById("min");
    const maxTextbox = document.getElementById("max");
    const min = + minTextbox.value;
    const max = + maxTextbox.value;
    try {
        const result = await generatePrimeNumberAfterDelayAsync(min, max);
        alert(result);
    }
    catch (err) {
        alert(`Error: ` + err.message);
    }

}

function generatePrimeNumberAfterDelayAsync(min, max) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                const num = Math.floor(Math.random() * (max - min + 1) + min);
                if (!isPrime(num))
                    throw new Error(`${num} is not Prime`);
                resolve(`${num} is Prime!`);

            }
            catch (err) {
                reject(err);
            }
        }, 1000)
    })

}

function isPrime(num) {
    if (num === 1 || num === 2)
        return true;
    for (let i = 3; i < num; i++)
        if (num % i === 0)
            return false;
    return true;
}