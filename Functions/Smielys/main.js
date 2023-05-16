// 7. Create a function that accepts in brackets a number describing which 
// smiley is displayed on the screen.
// If you got 1, show :-)
// If you got 2, you will display: :(
// If you got 3, you will display: :-/
// If you got 4, show: ;-)
// If you got 5, you will display: ;-(
// First of all, a hard number.
// Call her a second time by sending a number from the user.
// Call her a third time by sending a random number between 1 and 5
// Create another function that displays all five smileys by using the above function.
// Create another function that displays 100 random smileys by using the above function.

function smiley(num) {
    switch (num) {
        case 1: document.write(":-)<br>"); break;
        case 2: document.write(":(<br>"); break;
        case 3: document.write(":-/<br>"); break;
        case 4: document.write(";-)<br>"); break;
        case 5: document.write(";-(<br>"); break;
    }
}

smiley(3);
document.write("<br>")
const num = + prompt("Insert number for Smiely");
smiley(num);
document.write("<br>")

const randomNum = Math.floor(Math.random() * 5 + 1);
smiley(randomNum);
document.write("<br>")

function all5Smielys() {
    smiley(1);
    smiley(2);
    smiley(3);
    smiley(4);
    smiley(5);
}

all5Smielys();
document.write("<br>")


function randomSmielys() {
    for (let i = 1; i <= 100; i++) {
        const randomNum = Math.floor(Math.random() * 5 + 1);
        smiley(randomNum);
    }
}


document.write("<br>")

randomSmielys();
