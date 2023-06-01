// Create a function called getAverage that accepts as an array 
// argument and returns the average of its values.
// At the beginning of the function, perform a series of tests:
// A. Is no array sent at all - upload an exception with an appropriate message.
// B. Will we send null or undefined - raise an exception with an appropriate message.
// third. Is an array sent but it is empty - upload an exception with an appropriate message.
// In the button, get the size of an array from the user (size) and then get size from numbers (loop with prompt) and put each one in the array. Send the array to the function, get the average and display it on the page.
// Do not crash the button under any circumstances. Exceptions must be handled by try-catch.

function getAverage(arr) {


    if (arr === null || arr === undefined)
        throw new Error("Error! You Cant send a null or undefined in the arr");

    if (arr.length === 0)
        throw new Error("Error! You Cant send empty arr");

    if (Array.isArray(arr) === false)
        throw new Error("Error! You must send arr");

    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    alert(`Avg = ${sum / arr.length}`);

}

function getArr() {
    const size =+ prompt("How many numbers you have?");


    let arr = [];
    for (let i = 0; i < size; i++) {
        arr[i] = + prompt(`Insert the ${i + 1} number`);

    }


    try {
        getAverage(arr);
    }
    catch(err){
        alert(`: ${err.message}`);
    }
}