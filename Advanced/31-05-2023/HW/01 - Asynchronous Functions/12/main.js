"use strict";

// 12. Below is a function:
// function getUserFromServer() {
//     setTimeout(() => {
//   // Demo for getting user from the server:
//         const user = { firstName: "Moishe", lastName: "Ufnik" }
//         // "Return" that user to the calling code.
//     }, 4000);
// }
// You must call this function and get back from it the user object that it "brought" from the server and display 
// it in the console. For this purpose, of course, a change or addition of code must be made in the function.

function getUserFromServer(callback) {
    setTimeout(() => {
        // Demo for getting user from the server:
        const user = { firstName: "Moishe", lastName: "Ufnik" }
        callback(user);
        // "Return" that user to the calling code.
    }, 4000);

}

function test() {
    getUserFromServer((user) => {
        const userStringy = JSON.stringify(user);
        console.log(userStringy);
    })

}
