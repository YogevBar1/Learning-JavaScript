function displayLine(length) {
    for (let i = 1; i <= length; i++)
        document.write("* ");
    document.write("<br>");
}

function displayRectangle(width, hight) {
    for (let i = 1; i <= hight; i++)
        displayLine(width);

    document.write("<br>");
}

displayRectangle(10, 5);
displayRectangle(6, 8);
displayRectangle(3, 5);
displayRectangle(10, 4);