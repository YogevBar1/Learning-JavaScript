"use strict";

// Create a Set object, put 1000 random numbers in it, any number between 0 and 20, display all items. Which numbers really exist in it?
// Receive a number from the user, display a message whether the number is in the collection or not.
// What is the complexity of the search?

function test() {

    const randomNumbers = new Set();

    for (let i = 1; i <= 1000; i++) {
        const randomNum = Math.floor(Math.random()*21);
        randomNumbers.add(randomNum);
    }

    for(const number of randomNumbers)
        document.write(number + " , ")


        // O(n)
    const userNum =+ prompt("Insert number");
    if(randomNumbers.has(userNum))
        alert(`${userNum} exists`);
    else
        alert(`${userNum} not exists`);

}

