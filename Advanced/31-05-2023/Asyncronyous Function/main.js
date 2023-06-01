"use strict";


function test1() {
    console.log("starting test1...");
    f1(); //Not waiting for it ti totally complete
    console.log("ending test1...");

}

// ASynchronous Function
function f1() {
    console.log("starting f1...");

    setTimeout(() => {//Asynchronous function

        let sum = 0;
        for (let i = 1; i <= 1000000000; i++) {
            sum += i;
        }
        console.log("sum = " + sum);

    }, 1000);

    console.log("Ending f1...");

}

//-------------------------------------------------------------------------
function test3() {
    console.log("starting button...");
    const displayUserLocation = displayLocation(); //waiting for it to complete
    console.log("ending button...");

}

function displayLocation() {
    console.log("starting displayLocation...");

    navigator.geolocation.getCurrentPosition(position =>{//Asynchronous function
        console.log(position)});
   
    console.log("Ending displayLocation...");
    
}




// --------------------------.

function test2() {
    console.log("starting test2...");
    f2((result)=> console.log("sum:"+result));
    
    console.log("ending test2...");

}
// ASynchronous Function
function f2(callback) {
    console.log("starting f2...");

    setTimeout(() => {//Asynchronous function

        let sum = 0;
        for (let i = 1; i <= 1000000000; i++) {
            sum += i;
        }
        //only at this point we have the sum - which is the calc result:
        callback(sum);
    }, 1000);

    console.log("Ending f2...");

}
