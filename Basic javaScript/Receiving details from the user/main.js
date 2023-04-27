// Collect the user's first name, last name, email and phone number,
//  display them all in one alert in the following format:
// First Name: ____
// Last Name: ____
// Email: ____
// Phone: ____

let firstName = prompt("Insert first name");
let lastName = prompt("Insert last name");
let email = prompt("Insert email");
let phone = prompt("Insert phone number");

alert(`First Name: ${firstName} \n Last Name: ${lastName} \n Email: ${email} \n Phone: ${phone}`);


document.write("<br>")

// Collect the user's first name, last name, email and phone number, 
// display them all in one alert in the following format:
// full name: ____ ____
// Email: ____, Phone: ____

firstName = prompt("Insert first name");
lastName = prompt("Insert last name");
email = prompt("Insert email");
phone = prompt("Insert phone number");
alert(`Full Name: ${firstName} ${lastName} \n Email: ${email}, Phone: ${phone}`);
