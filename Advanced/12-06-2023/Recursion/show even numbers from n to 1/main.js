"use strict";

function testRecursion() {
    const n = + prompt("Insert number");
    showEvenNumsFromNto1(n);
}

// Signature
function showEvenNumsFromNto1(n) {

    // 2.Exit condition:
    if (n <= 0) return;

    if (n % 2 === 0)
        document.write(n + " , ");

    // 3.One step:      4.Entire task minus current step
    showEvenNumsFromNto1(n - 1);

}
