// hw4
// Challenge: Get a password from the user. The password must be a strong password.
// A strong password is a password with 6 or more characters, which must contain an 
// uppercase letter, a lowercase letter, a number and some other character.
// Display a message indicating whether the password is indeed a strong password or not.
// If the password is not a strong password - present the reason for this (too short / 
// missing a capital letter, etc.).


const password = prompt("Insert password :");
const oneCapital = /[A-Z]/;
const oneUnCapital = /[a-z]/;
const oneDigit = /[0-9]/;
const oneSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;


let check = true;

if (password.length < 6){
    document.write(`The password too short, you need 6 digits at least<br>`);
    check = false;
}
if (!oneCapital.test(password)){
    document.write(`You need at least one capital letter<br>`);
    check = false;

}
if (!oneUnCapital.test(password)){
    document.write(`You need at least one Uncapital letter<br>`);
    check = false;

}
if (!oneDigit.test(password)){
    document.write(`You need at least one digit<br>`);
    check = false;

}
if (!oneSpecialChar.test(password)){
    document.write(`You need at least one special character<br>`);
    check = false;

}

if(check)
    document.write("You password is strong");







// && oneCapital.test(password) && oneUnCapital)
