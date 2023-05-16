// hw3
// Collect an Israeli mobile phone number from the user.
// Display a message indicating whether the number is valid or not.
// Valid number:
// • It has exactly 10 digits (cannot contain other characters).
// • Must start at 05


const phoneNumber = prompt("Insert file name");

if (phoneNumber.length ===10 && phoneNumber[0] === "0" && phoneNumber[1]==="5")
    document.write(`The number ${phoneNumber} is valid phone number in Israel`);
else
document.write(`The number ${phoneNumber} is not valid phone number in Israel`);
