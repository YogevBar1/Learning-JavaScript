// 1. Create a text box and a button
// By clicking the button, display in the alert the 
// third power of the number entered in the box and 
// change the background 
// color of the box to a different background color.

function powerOfThree() {
    const textBox = document.getElementById("textBox");
    const num = textBox.value;
    alert(num ** 3);
}

// 2. Create three text boxes and two buttons.
// By clicking the first button - display the sum 
// of the values ​​entered in the text boxes in the alert.
// By clicking the second button - display the average of
//  the values ​​entered in the text boxes in the alert.

function sum() {
    const textBox1 = document.getElementById("num1");
    const textBox2 = document.getElementById("num2");

    const num1 = parseInt(textBox1.value);
    const num2 = parseInt(textBox2.value)

    alert(num1 + num2);
}

function avg() {
    const textBox1 = document.getElementById("num1");
    const textBox2 = document.getElementById("num2");

    const num1 = parseInt(textBox1.value);
    const num2 = parseInt(textBox2.value)

    alert((num1 + num2) / 2);
}

// 3. Create a text box to enter an email and a button.
// By clicking the button, display the email in the alert.
// If no email was entered - display an error message in the 
// alert instead of displaying the email.

function showEmail() {
    const emailTextBox = document.getElementById("email");

    const email = emailTextBox.value;

    if (email === "")
        alert("Email not entered!");
    else
        alert(`Your Email: ${email}`);
}

// 4. Create a text box for entering a first name, a text 
// box for entering a last name and a button.
// By clicking the button, display the full name in the alert.
// If one of the details is missing - display an error message
//  in the alert instead of displaying the full name.

function showFullName() {
    const firstNameTextBox = document.getElementById("firstName");
    const lastNameTextBox = document.getElementById("lastName");

    const firstName = firstNameTextBox.value;
    const lastName = lastNameTextBox.value;

    if (firstName === "" || lastName === "")
        alert("Error! please insert first and last name");
    else
        alert(`Your full name: ${firstName} ${lastName}`);



}

// 5. Create a text box to enter an email, a button and a span.
// By clicking the button, display the email in the alert.
// If no email was entered - color the current color of 
// the text box red + display
//  an error message in the span without any alert.

function showEmailIfNotChangeToGreen() {
    const emailTextBox = document.getElementById("email2");

    const email = emailTextBox.value;

    if (email !== "")

        alert(`Your Email: ${email}`);
    else{
        emailTextBox.style.backgroundColor = "red";
        const spanText = document.getElementById("spanOfEmail");
        spanText.textContent  ="Error! insert Email!";
    }
}