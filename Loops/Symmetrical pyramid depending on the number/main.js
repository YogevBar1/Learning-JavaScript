//hw 16
// Accept a number from the user, display a
//  symmetrical pyramid as a function of the number.
//   For example, if the user entered 5, display:


//             1
//           1 2 1 
//         1 2 3 2 1
//       1 2 3 4 3 2 1
//     1 2 3 4 5 4 3 2 1 


const num = +prompt("Insert number");
for (let i = 1; i <= num; i++) {
    for (let j = 3*(num - i); j >= 1; j--) {
        document.write("&nbsp;");
    }

    for (let k = 1; k <= i; k++)
        document.write(k + " ");

    for (let k = i -1 ; k >= 1; k--)
        document.write(k + " ");


    document.write("<br>");
}
