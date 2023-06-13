"use strict";

// 7. Create a recursive function that receives an array of numbers, a start index and an end index and returns the sum of all even numbers between the received indexes (inclusive).

function test() {
    const arr=[0,1,2,3,4,5,6,7,8,9];
    alert(sumOfEvenInArrByIndexes(arr,1,6));
    alert(sumOfEvenInArrByIndexes(arr,2,4));
 
}

function sumOfEvenInArrByIndexes(arr,start,end){
    if(start===end + 1) return 0;
    if(arr[start] % 2 ===0)
        return arr[start] +sumOfEvenInArrByIndexes(arr,start + 1, end) ;
    else
        return sumOfEvenInArrByIndexes(arr,start + 1, end);
}

