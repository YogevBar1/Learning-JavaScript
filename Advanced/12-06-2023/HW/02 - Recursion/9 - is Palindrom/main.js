"use strict";

// 9. Create a recursive function that accepts a string and returns true if the string is a polynomial, otherwise returns false. A polynomial is a symmetric string.
function test() {
    
   const string = prompt("Insert string");
   if(isPalindrom(string))
        alert("your string is Palindrom");
    else
        alert("your string is not Palindrom");
 
}

function isPalindrom(string){
    if(string.length <=1) return true;
    if(string[0]!==string[string.length-1])
        return false;
    const subString = string.slice(1,string.length - 1);
    return isPalindrom(subString);
    
}