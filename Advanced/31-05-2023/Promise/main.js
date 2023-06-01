"use strict";


function test(){
    downloadSomething().then(value=>console.log("Success: " + value))
    .catch( err=>console.log("Error: " + err.message));
}


function downloadSomething(){

    return new Promise((resolve, reject)=>{
        // The asynchronous code...
        setTimeout(() => {    //Demo for downloading something

            try {
                const value = "Cool Value Downloaded...";
    
                if (Math.random() < 0.5) Math.random().toFixed(-5);//demo for some crash
                resolve(value);
            }
            catch (err) {
                reject(err);
            }
        }, 3000);
    });
}

// function downloadSomething(successCallback, errorCallback) {
//     setTimeout(() => {    //Demo for downloading something

//         try {
//             const value = "Cool Value Downloaded...";

//             if (Math.random() < 0.5) Math.random().toFixed(-5);//demo for some crash
//             successCallback(value);
//         }
//         catch (err) {
//             errorCallback(err);
//         }
//     }, 3000);

// }