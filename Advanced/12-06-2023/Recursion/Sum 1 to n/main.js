"use strict";

function testRecursion(){
    const sum = get1toN(100);
    document.write("sum 1 to 100 = " + sum)
}

// Signature
function get1toN(n){

    // 2.Exit condition:
    if(n<=0) return 0;

    // 3.One step:      4.Entire task minus current step
    return n            + get1toN(n-1);

}



// function get1toN(n){
//     let sum =0;
//     for(let i = 1; i<=n; i++){
//         sum +=i;
//     }
//     return sum;
// }
