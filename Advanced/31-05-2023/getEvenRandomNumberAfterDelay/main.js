"use strict";

// function test() {
//     getRandomNumberAfterDelay(
//         value => console.log("Success: " + value),
//         err =>alert(err.message)
//     )
// };

function test(){
    getRandomNumberAfterDelay().then(value=>console.log("Success: "+ value))
    .catch(err=>alert("Error: "+ err.message));
}

// function getRandomNumberAfterDelay(successCallback, errorCallback) {
    
//     setTimeout(() => {
//         try {
//             const num = Math.floor(Math.random()*100);
//             if (Math.random() < 0.5) throw new Error("Some Crash Demo"); //demo crash
//             successCallback(num);
//         }
//         catch (err) {
//             errorCallback(err);
//         }
//     }, 3000);
// }

function getRandomNumberAfterDelay() {
return new Promise((resolve, reject)=>{
    setTimeout(()=>{
        try{
            const num = Math.floor(Math.random()*100);
            if(Math.random()<0.5) throw new Error("Some Crash Demo");
            resolve(num);
        }
        catch(err){
            reject(err);
        }
    },3000);
})
}
