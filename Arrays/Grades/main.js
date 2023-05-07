//HW3
// Create an array called grades, enter 10 grades from the user 
// into it, after receiving the values ​​display a message indicating
//  whether all grades are 
// valid (0 to 100) or not, and if not - display the invalid grades.


grades = [];

for (let i = 0; i <= 9; i++)
    grades[i] = prompt("Insert grade:");

let invalidGrades = 0;
for (let i = 0; i <= grades.length - 1; i++) {
    if (grades[i] < 0 || grades[i] > 100) {
        invalidGrades++;
        document.write(`The grade ${grades[i]} is not valid<br> `);
    }

}
if (invalidGrades === 0)
    document.write("All the grades are valid");
