"use strict";

// 1. Create a recursive function that accepts a number n and displays n smileys on the screen

function test() {
    const n =+ prompt("How many 😊 you want?");
    recursiveSmile(n);
}

function recursiveSmile(n){
    if(n===0) return;
    document.write("😊 ");
    recursiveSmile(n -1);
}

