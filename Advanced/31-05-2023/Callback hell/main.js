"use strict";

async function display(){
    try{
    const n1 = await getRandomNumberAfterDelay(1000);
    console.log(n1);
    const n2 = await getRandomNumberAfterDelay(n1);
    console.log(n2);
    const n3 = await getRandomNumberAfterDelay(n2);
    console.log(n3);
    }
    catch(err){
        console.log(err.message);
    }

}

// function display() {
//     //Callback Hell:
//     getRandomNumberAfterDelay(1000).then(n1 => {
//         console.log("Success: " + n1);

//         getRandomNumberAfterDelay(n1).then(n2 => {
//             console.log("Success: " + n2)
//             getRandomNumberAfterDelay(n2)
//             .then(n3 =>{
//                 console.log("Success: " +n3);
//             })
//             .catch(err => alert("Error: " + err.message));
//         })
//             .catch(err => alert("Error: " + err.message));
//     })
//         .catch(err => alert("Error: " + err.message));

// }






//working according promise Design pattern:
function getRandomNumberAfterDelay(limit) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                const num = Math.floor(Math.random() * limit);
                if (Math.random() < 0.2) throw new Error("Some Crash Demo");
                resolve(num);
            }
            catch (err) {
                reject(err);
            }
        }, 1000);
    })
}
