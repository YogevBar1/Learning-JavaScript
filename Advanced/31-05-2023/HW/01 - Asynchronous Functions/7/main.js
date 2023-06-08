"use strict";
// 7. Challenge: write the following code, activated by pressing a button:
// document.body.style.backgroundColor = "Green";
// alert("Done");
// According to this code, the page is colored green and only after that the message Done appears in the alert.
// A. Is this really what will happen?
// B. If not - why did what happened?
// third. If not - how can the problem be fixed so that the page really turns green and only after that the Done message is displayed?

function test() {
    document.body.style.backgroundColor = "Green";
    setTimeout(()=>{
        alert("Done");
    },100)
    

}