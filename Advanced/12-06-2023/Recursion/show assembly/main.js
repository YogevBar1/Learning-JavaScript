"use strict";

function testRecursion() {
    const n = + prompt("Insert number");
    const assembly = showAssembly(n);
    document.write(`The assembly of ${n} = ${assembly}`);
}

// Signature
function showAssembly(n) {

    // 2.Exit condition:
    if (n <= 1) return 1;

    return n * showAssembly(n - 1);
}
