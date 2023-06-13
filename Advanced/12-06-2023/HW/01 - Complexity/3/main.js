"use strict";

// 3. Create an array containing several strings.
// Create a function to search for a string in an array.
// Accept a string from the user, search for it in the array and display a message indicating whether the string exists or not.
// And if it exists - in which index.
// What is the complexity of the function?

function test() {

    const arr = ["aaa", "nbbb" , "cccc" , "dddd", "eeee", "aaa" ];
    const userString = prompt("Insert string");
    const result = searchStringInArr(arr, userString);
    if (result>=0 )
        alert(`The string exists located in index ${result}`);
    else
        alert(`The string dont exists`)

}

// O(n)
function searchStringInArr(arr, string){
    for(let i=0; i<arr.length; i++)
        if(string===arr[i])
            return i;
    
    //if the string dont exitst return -1
    return -1;

}

