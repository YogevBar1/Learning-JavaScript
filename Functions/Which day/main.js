function whichDay(day) {
    let dayWord = "";

    switch (day) {
        case 1:
            dayWord = "Sunday";
            break;
        case 2:
            dayWord = "Monday";
            break;

        case 3:
            dayWord = "Tuesday";
            break;

        case 4:
            dayWord = "Wednesday";
            break;

        case 5:
            dayWord = "Thursday";
            break;

        case 6:
            dayWord = "Friday";
            break;

        case 7:
            dayWord = "Saturday";
            break;

        default:
            dayWord = "Invalid number";

    }

    document.write(`The number ${day} represent the day ${dayWord}`);
}

const userDay = + prompt("Insert number");
whichDay(userDay);

document.write(`<hr>`);
function isEven(n) {
    if (n % 2 === 0) {
        for (let i = 1; i <= n; i++)
            document.write("😊");
    }
    else {
        for (let i = 1; i <= n; i++)
            document.write("😒");
    }
}

let num = + prompt("Insert number");
isEven(num);

document.write(`<hr>`);
function ifEvenSmiely(n) {
    if (n % 2 !== 0) 
        return;

    for (let i = 1; i <= n; i++)
        document.write("😊");

}

num = + prompt("Insert number");
ifEvenSmiely(num);