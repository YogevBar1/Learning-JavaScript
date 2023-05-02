// Accept numbers from the user, any number between 1 and 5
// For each number received, display the name of the number
// If another number is received, an error must be displayed
//  and the loop terminated

let num;

do {
    num = +prompt("Insert number between 1 to 5");
    switch (num) {
        case 1: alert(num + " ---> One");
            break;
        case 2: alert(num + " --->Two");
            break;

        case 3: alert(num + " --->Three");
            break;

        case 4: alert(num + " --->Four");
            break;

        case 5: alert(num + " --->Five");
            break;
        default: alert(num + " --->Error");


    }


} while ( num >= 1 && num <=5 );