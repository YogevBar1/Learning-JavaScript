"use strict";

// 1. Create a function called generate7BoomAfterDelayAsync that accepts two arguments in brackets: a minimum number 
// and a maximum number and returns a Promise. The function must wait a second and then dial a number in the range it 
// received. If the number that is divisible by 7 or ends in 7, it must report it by resolve as a success. If the number that is not divisible by 7 and does not end in 7, it must report by reject an error message.
// Create two text boxes and a button. The user must enter a minimum number and a maximum number in the text boxes.
//  By pressing the button, the above function must be called, display the number of the "7 Boom" that succeeded or the
//   failure message.

async function test() {
    const minTextbox = document.getElementById("min");
    const maxTextbox = document.getElementById("max");
    const min = + minTextbox.value;
    const max = + maxTextbox.value;
    try{
    const result =await generate7BoomAfterDelayAsync(min, max);
    alert(result);
    }
    catch(err){
        alert(`Error:` + err.message);
    }
    
}

 function generate7BoomAfterDelayAsync(min, max) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            try{
            const num = Math.floor(Math.random() * (max - min + 1) + min);
            if(num % 7 !==0 && num % 10 !== 7)
                throw new Error (`${num} is not Bom number`);
            resolve(`${num} is a bom number!`);
                
            }
            catch(err){
                reject(err);
            }
        }, 1000)
    })

}