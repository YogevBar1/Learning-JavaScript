"use strict";

// 2. Create a function called generatePrimeNumberAfterDelayAsync that accepts two arguments
//  in brackets: a minimum number and a maximum number and returns a Promise. The function must
//  wait a second and then dial a number in the range it received. If the number that was split
//   is a prime number (divisible only by itself and only by 1), it must report it by resolve as
//    a success. If the number that was split is not a prime number (there is some number that
//      divides it without a remainder), it should report by reject an error message.
// Create two text boxes and a button. The user must enter a minimum number and a maximum number
//  in the text boxes. By pressing the button, the above function must be called, display the 
//  initial number drawn if there is success or display the failure message.

function test() {
    const minTextBox = document.getElementById("min");
    const maxTextBox = document.getElementById("max");
    const min = + minTextBox.value;
    const max = + maxTextBox.value;
    generatePrimeNumberAfterDelayAsync(min, max).then(primNumber => { alert("prime number!!:" + primNumber) })
        .catch(err => alert(err));
}

function generatePrimeNumberAfterDelayAsync(min, max) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {

                const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
                if (!isPrime(randomNum)) {
                    throw new Error (`${randomNum} is not prime number!`);
                }
                resolve(randomNum);
            }
            catch (err) {
                reject(err);
            }
        }, 1000)
    })
}

function isPrime(n) {
    if (n === 1 || n === 2) return true;
    for (let i = 2; i <= n - 1; i++) {
        if(n%i===0)
            return false;
    }
    return true;
}