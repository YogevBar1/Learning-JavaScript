"use strict";

// 4. Create an array containing several strings.
// Sort the array.
// Create a function for binary search of a string.
// Accept a string from the user, search for it in the array and display a message indicating whether the string exists or not.
// And if it exists - in which index.
// What is the complexity of the function?

function test() {

    const arr = ["aaa", "nbbb" , "cccc" , "dddd", "eeee", "dsfs", "sfdsdf" ];
    arr.sort();
    const userString =prompt("insert string");
    if(isStringInArr(arr,userString))
        alert(`${userString} in the arr`);
    else
    alert(`${userString} is not in the arr`);

}

// O(log n)
function isStringInArr(arr,string){
    let start = 0;
    let end = arr.length -1;
    return binarySearch(arr,string,start,end);
}

function binarySearch(arr,string,start,end){
    if(start>end) return false;
    if(start===end) return(arr[start]===string);

    const middle = Math.floor((start+end)/2);
    if(arr[middle] < string)
        return binarySearch(arr,string,middle+1,end);
    else
        return binarySearch(arr,string,start,middle);

}
