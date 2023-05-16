function isGradeLegal(grade) {
    return (grade >= 0 && grade <= 100)

}

const grade = + prompt("Insert your grade:");
if (isGradeLegal(grade))
    document.write(`The grade ${grade} is legal`);
else
    document.write(`The grade ${grade} is not legal`);
