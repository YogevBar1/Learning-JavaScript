"use strict";


async function test(){
    try{
        const n = await getRandomNumberAfterDelay();
        console.log("Success: "+ n);
    }
    catch(err){
        alert("Error: "+ err.message);
    }
}



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
    },1000);
})
}
