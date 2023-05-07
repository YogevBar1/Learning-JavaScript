const fruits = ["Apple", "Banana", "Orange", "Watermelon", "Pear", "Pinapple"];

document.write(`The first fruit ➡️ ${fruits[0]}<br>`);
document.write(`Fruit array length : ${fruits.length}<br>`);
document.write(`The last fruit: ${fruits[fruits.length - 1]}<br>`);


document.write("<br><hr>");
for (let i = 0; i < fruits.length; i++) {
    document.write(`The ${i} fruit = ${fruits[i]}<br>`);
}

document.write("<br><hr>");
for (let i = fruits.length - 1; i > 0; i--) {
    document.write(`The ${i} fruit = ${fruits[i]}<br>`);
}

fruits.splice(3, 1);


//Running over the array with regular for loop:
document.write("<br><hr>");
for (let i = 0; i < fruits.length; i++) {
    document.write(`The ${i} fruit = ${fruits[i]}<br>`);
}

document.write("<br><hr>");
//Running over the array with for of loop
for (const item of fruits) { //item is the cell value when running over the array
    document.write(`Fruit item: ${item}<br>`);
}


//for of is a read only loop:
for (let item of fruits) {    //item is the cell value when running over the array
    item = "Lichi";   //Wont change the cell value! only the local variable
    document.write("Item: " + item +"<br>");

}

document.write(fruits);