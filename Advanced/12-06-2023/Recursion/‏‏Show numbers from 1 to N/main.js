"use strict";

function testRecursion() {
    const n = + prompt("Insert number");
    showNumsFrom1toN(n);
}

// Signature
function showNumsFrom1toN(n) {

    // 2.Exit condition:
    if (n <= 0) return;

    // 3.One step:      4.Entire task minus current step
    showNumsFrom1toN(n - 1);

    document.write(n + " , ");



}
