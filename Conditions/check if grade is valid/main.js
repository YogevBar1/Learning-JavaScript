//Recive a grade and print if valid or not

const grade = prompt("Insert a grade:");
{
    if (grade <= 100 && grade >= 0) {
        document.write(`Valid grade.<br>`);

    }
    else {
        document.write(`Not a valid grade.<br>`);
    }
}