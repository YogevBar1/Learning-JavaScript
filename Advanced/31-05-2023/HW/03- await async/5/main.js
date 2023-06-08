"use strict";

// 5. Create a function called getArrayFromServerAsync that accepts size in parentheses and returns a Promise. The function must wait a second and then hash a number n. If n is even, it must produce an array of size containing random numbers and report it as a success by resolve. If n is odd, it must report by reject an error message that the array cannot be fetched from the server.
// By pressing a button, the above function must be called, display the array or the failure message.

async function test() {
    try {
        const arr = await getArrayFromServerAsync(10);
        let text = "";
        for (let i = 0; i < arr.length; i++)
            text += `${arr[i]} , `;
        alert(text);
    }

    catch (err) {
        alert(err);

    }
}

function getArrayFromServerAsync(size) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                const n = Math.floor(Math.random() * 100);
                if (n % 2 !== 0)
                    throw new Error(`Error, we cant bring the array`);
                const arr = [];
                for (let i = 0; i < size; i++) {
                    arr[i] = Math.floor(Math.random() * 100);
                }
                resolve(arr);
            }
            catch (err) {
                reject(err);
            }
        }, 1000)
    })
}



