"use strict";

// 10. Create a recursive function that accepts an array and returns true if all the numbers in it are even. otherwise - returns false.
function test() {

    const arr1= [3,354,543,543,,543,345,53,534,543,354,543,5,34,543,543,543,54];
    const arr2= [2,4,6,8,88,66,44,32];

    console.log(isAllTheNumberInArrEven(arr1));
    console.log(isAllTheNumberInArrEven(arr2));

}

function isAllTheNumberInArrEven(arr) {
    if (arr.length === 0) return true;
    if (arr[arr.length - 1] % 2 !== 0) return false;

    return (isAllTheNumberInArrEven(arr.slice(0, arr.length - 1)));
}
