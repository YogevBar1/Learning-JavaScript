
const grades = [90, 97, 95, 100, 64, 98];


document.write(`Arrays length(total cells): ${grades.length}<br>`)
document.write(`First grade: ${grades[0]}<br>`);
document.write(`Second grade: ${grades[1]}<br>`);
document.write(`Value in cell 5: ${grades[5]}<br>`);
document.write(`Value in cell 6: ${grades[6]}<br>`);

grades[0] = 92;
document.write(`First grade: ${grades[0]}<br>`);


grades.push(94); //adding item

document.write(`All grades: ${grades}<br>`);

grades.splice(2, 1); //remove one item from index 2

document.write(`All grades: ${grades}<br>`);

for (let i = 0; i < grades.length; i++) {
    document.write(`Item in index ${i} ➡️ ${grades[i]}<br>`);
}
