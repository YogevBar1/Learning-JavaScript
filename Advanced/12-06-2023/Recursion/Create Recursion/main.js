"use strict";

function testRecursion(){
    printStars(10);
}

//Function signature- same as regular function
function printStars(n){

    //2. Exit condition:
    if(n <=0) return;

    //3.Do only on step of the entire task:
    document.write("* ");

    //4. Recursive call, sending entire task minus the one step were already done:
    printStars(n- 1);
}

//     for(let i = 1; i<=n;i++){
//         document.write("* ");
//     }
// }