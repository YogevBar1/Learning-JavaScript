//HW1
// Create an array called names, enter 5 names from the
//  user, only the first name and the last name.
// Again this time present each name on a separate line.
// Show all the names again this time in one line but in 
// reverse (the last name is shown first, followed by the
//      penultimate name, etc.)


const names = [];
for(let i =0; i<=4 ; i++)
    names[i] = prompt(`Insert the ${i + 1} name:`);

document.write(`First name: ${names[0]} , `);
document.write(`Last name: ${names[names.length - 1]}`);


document.write("<br><hr>");
document.write(`First name: ${names[0]} <br> `);
document.write(`Last name: ${names[names.length - 1]}<br>`);

for(let i = names.length - 1 ; i>=0 ; i--)
    document.write(`The ${i + 1} name: ${names[i]} , `);