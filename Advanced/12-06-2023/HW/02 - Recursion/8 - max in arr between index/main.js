"use strict";

// 8. Create a recursive function that accepts an array of numbers, a start index and an end index and returns the maximum number among all the numbers between the indexes it received (inclusive).

function test() {
    const arr=[0,14,42,73,44,53,46,47,88,9];
    document.write("max in arr between indexes 1 to 6= " + maxInArrBetweenIndexes(arr,1,6));
    document.write("<br>max in arr between indexes 2 to 4= " + maxInArrBetweenIndexes(arr,2,4));
    document.write("<br>max in arr between indexes 0 to 8= " + maxInArrBetweenIndexes(arr,0,8));
    document.write("<br>max in arr between all the arr= " + maxInArrBetweenIndexes(arr,0,arr.length -1));
 
}

function maxInArrBetweenIndexes(arr,start,end){
    if(start===end + 1) return arr[end];
    return(Math.max(arr[start],maxInArrBetweenIndexes(arr,start + 1, end) ));
}

