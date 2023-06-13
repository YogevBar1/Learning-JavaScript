"use strict";

function testRecursion() {
    const arr = [10,20,30,40,50,60,70,80];
    const sum = getSum(arr,2,6);
    alert("Sum = " + sum);
}


//
function getSum(arr, startIndex, endIndex){
    if(startIndex = endIndex) return arr[startIndex];
    return arr[startIndex] + getSum(arr,startIndex + 1 , endIndex);
}