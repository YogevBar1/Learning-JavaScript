"use strict";


function test(){
    console.log("starting test...");
    f1(); //waiting for it to complete
    console.log("ending test...");

}

// Synchronous Function
function f1(){
    console.log("starting f1...");
    let sum =0;
    for(let i =1;i<=10000000;i++){
        sum+=i;
    }
    console.log(sum);
    console.log("Ending f1...");

}

//-------------------------------------------------------------------------
function test2(){
    console.log("starting test...");
    const result = f2(); //waiting for it to complete
    console.log("sum: "+ result);
    console.log("ending test...");

}

// Synchronous Function
function f2(){
    console.log("starting f2...");
    let sum =0;
    for(let i =1;i<=1000000000;i++){
        sum+=i;
    }
    
    console.log("Ending f2...");
    return sum;
}




