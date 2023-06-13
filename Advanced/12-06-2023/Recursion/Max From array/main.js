"use strict";

function testRecursion() {
    const arr = [10, 20, 130, 140, 50, 60, 70, 80];
    const max = getMax(arr, 1, 6);
    alert("Max = " + max);
}


function getMax(arr, startIndex, endIndex) {

    if (startIndex === endIndex) return arr[startIndex];

    const max = getMax(arr, startIndex + 1, endIndex);

    return arr[startIndex] > max ? arr[startIndex] : max;
}