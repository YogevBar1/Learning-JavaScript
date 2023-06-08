"use strict";
// 13. Below is a function:
// function getGradesFromServer() {
//     setTimeout(() => {
//   // Demo for getting grades from the server:
//         const grades = [100, 98, 75, 80, 100, 87];
//         // "Return" that array to the calling code.
//     }, 7000);
// }
// You must call this function and get back from it the array it
//  "brought" from the server and display it on the page. For this 
//  purpose, of course, a change or addition of code must be made in the function.




function getGradesFromServer(callback) {
    setTimeout(() => {
        // Demo for getting grades from the server:
        const grades = [100, 98, 75, 80, 100, 87];
        callback(grades);
        // "Return" that array to the calling code.
    }, 7000);
}


function test() {
    getGradesFromServer((grades) => {
        const gradesStringy = JSON.stringify(grades);
        const div = document.getElementById("grades");
        div.innerText =gradesStringy;
    })

}
