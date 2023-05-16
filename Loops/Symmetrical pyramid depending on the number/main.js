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

    for (let j = 1; j <= i; j++)
        document.write(j + " ");

    for (let j = i -1 ; j >= 1; j--)
        document.write(j + " ");


    document.write("<br>");
}
