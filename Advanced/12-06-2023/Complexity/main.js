"use strict";

function test_O_1() {
    const arr = [12, 23, 34, 45, 56, 67, 78];
    const item = getRandomItem(arr);
    alert("Random Item: " + item)
}

//O(1)
function getRandomItem(arr) {
    const index = Math.floor(Math.random() * arr.length);
    const item = arr[index];
    return item;
}


//--------------------------------------
function test_O_n() {
    const arr = [12, 23, 34, 45, 56, 67, 78];
    const avg = getAverage(arr);
    alert(" Arr avg: " + avg)
}

function getAverage(arr) {
    let sum = 0;
    for (const item of arr) {
        sum += item;
    }
    const avg = sum / arr.length;
    return avg;
}

function test_O_n_power_2() {
    const mat = [[10, 20, 30], [40, 50, 60], [70, 80, 90]];
    const avg = getMatrixAverage(mat);
    alert("Matrix Average " + avg);
}

function getMatrixAverage(mat) {
    let sum = 0;
    let count = 0;
    for (const arr of mat) {
        for (const item of arr) {
            sum += item;
            count++;
        }
    }

    const avg = sum / count;
    return avg;
}

function test_O_log_n() {
    const arr = [12, 23, 35, 45, 56, 67, 78];
    const index = binarySearch(arr,34);
    if(index >=0)
        alert("34 is ar index: "+ index);
    else
        alert("34 not found")
}

// O(n)
function search(arr, value) { //Search value in array and return index, or -1 if not found
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) return i;
    }
    return -1;
}

// O(log n)
function binarySearch(arr, value) { //Search value in sorted array and return index, or -1 if not found
    //Start index
    let startIndex = 0;

    // end index:
    let endIndex = arr.length - 1;

    // Binary search:
    do {

        // Find middle index:
        let middleIndex = Math.floor((startIndex + endIndex) / 2);

        // If the middle number is our search value:
        if (arr[middleIndex] === value) return middleIndex;

        // If value located at the left side(smaller):
        if (value < arr[middleIndex])
            endIndex = middleIndex - 1;

        // If value located at the right side(larger):
        else
            startIndex = middleIndex + 1;


    } while (startIndex <= endIndex);

    // Value not found
    return -1;



}