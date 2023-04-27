//The program will take a number  from the user 
//and print the name of the day or the error 

const day = +prompt("Enter a number between 1 and 7 and specifying a day:");

// if(day === 1){
//     document.write("Sunday");

// }

// else if (day ===2 ){
//     document.write("Monday");
// }

// else if (day === 3 ){
//     document.write("Tuesday");
// }

// else if (day === 4 ){
//     document.write("Wednesday");
// }

// else if (day === 5 ){
//     document.write("Thursday");
// }

// else if (day === 6 ){
//     document.write("Friday");
// }

// else if (day === 7 ){
//     document.write("Saturday");
// }

// else{
//     document.write("Invalid number");
// }

//solution with switch case
switch (day) {
    case 1: document.write("Sunday");
        break;
    case 2: document.write("Monday");
        break;
    case 3: document.write("Tuesday");
        break;
    case 4: document.write("Wednesday");
        break;
    case 5: document.write("Thursday");
        break;
    case 6: document.write("Friday");
        break;
    case 7: document.write("Saturday");
        break;
    default: document.write("Invalid number");
}











