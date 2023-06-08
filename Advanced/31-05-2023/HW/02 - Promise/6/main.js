"use strict";

// 6. Create a function called getPizzaFromServerAsync that does not accept anything in parentheses and returns 
// a Promise. The function must wait a second and then hash a number n. If n is even, it must produce a pizza object 
// containing a diameter (random between 10 and 50), price (random between 20 and 80), and number of toppings (random
//      between 0 and 4) and report it as a success by resolve. If n is not It is even necessary to report by reject an
//       error message that a pizza object cannot be fetched from the server.
// By pressing a button, the above function should be called, the pizza object or the failure message should be displayed.

function test() {

    getPizzaFromServerAsync(10).then(Pizza => {
        let text = JSON.stringify(Pizza);
        alert("Pizza: " + text);
        })
        .catch(err => alert(err));
}


function getPizzaFromServerAsync(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            try{
            const n = Math.floor(Math.random()*100);
            if(n % 2 !==0)
                throw `Error! we cant make Pizza`;
            const diameter = Math.floor(Math.random()*40 +10)+1;
            const price = Math.floor(Math.random()*60 +20)+1;
            const topping = Math.floor(Math.random()*5);
            const Pizza ={diameter, price, topping};
            resolve(Pizza);
            }
            catch(err){
                reject(err);
            }
        },1000)
    })
}
