// 1. Create a page containing the following boxes:
// • First name (normal text box)
// • Surname (normal text box)
// • Email (email box)
// • Telephone (phone box)
// • message (textarea box)
// By Validcit HTML they checked the following:
// A. First name, last name and message are mandatory fields
// B. Do not enter a minimum of 2 characters in each field.
// third. A maximum of 30 characters can be entered in each field except for the message.
// d. A maximum of 500 characters can be entered in the message.
// If all information is valid - the information must be displayed in the alert.
// If there is another error - the error message must be displayed by the
//  HTML editor without a notification about their presentation.


function showData() {
    const firstNameTextBox = document.getElementById("firstName");
    const firstName = firstNameTextBox.value;

    const lastNameTextBox = document.getElementById("lastName");
    const lastName = lastNameTextBox.value;


    const emailTextBox = document.getElementById("email");
    const email = emailTextBox.value;

    const phoneTextBox = document.getElementById("phone");
    const phone = phoneTextBox.value;

    const msgTextBox = document.getElementById("massage");
    const msg = msgTextBox.value;

    alert(`Full name: ${firstName} + ${lastName} , Email: ${email} , Phone: ${phone} , Massage: ${msg}`);




}