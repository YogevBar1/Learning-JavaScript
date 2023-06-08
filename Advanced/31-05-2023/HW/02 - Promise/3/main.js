"use strict";

// 3. Create a function called generateCuteAnimalAfterDelayAsync that does not accept anything in the 
// brackets and returns a Promise. The function must wait a second and then draw a cute animal from a fixed
//  series of the following animals: "Kitten", "Dog", "Rabbit", "Pig", "Scorpion", "Spider", "Cockroach". If the
//   guerilla animal is cuter than the above animals (and there is no need to specify the level of cuteness of the
//      above animals), it must report it with resolve as a success. If the guerilla animal is not cute, it must
//       report with reject an error message that includes the name of the animal The cute one that was drawn. By
//        pressing a button, call the above function, display the drawn animal or the failure message.

function test() {
 
    generateCuteAnimalAfterDelayAsync().then(animal => { alert(`The animal ${animal} is Quite!`) })
        .catch(err => alert(err));
}

function generateCuteAnimalAfterDelayAsync(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            try{
            const randomNum = Math.floor(Math.random()*7);
            const animals =["cat", "dog", "rabbit", "parrot", "scorpion", "spider", "cockroach"];
            if(!isQuite(animals[randomNum]))
                throw new Error (`The animal ${animals[randomNum]} is not quite!`);
            resolve(animals[randomNum]);
            }
            catch(err){
                 reject (err);   
            }
        },1000)
    })
}

function isQuite(animal){
    if(animal=== "scorpion" ||animal=== "spider" || animal==="cockroach")
        return false;
    else    
        return true;
}


