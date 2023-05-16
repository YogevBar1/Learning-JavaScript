//get 3 , print :
// 1
// 1 2
// 1 2 3

function display1ToN(n)
{
    for(let i = 1; i<= n; i++)
        document.write(i + " ");
    document.write("<br>");
}

function displayTriangle(size){
    for(let i = 1; i<= size; i++)
        display1ToN(i);
}

displayTriangle(8);
document.write("<br><hr>");
const randomNum = Math.floor(Math.random()*5)+5;
displayTriangle(randomNum);
document.write("<br><hr>");
const userNum =+prompt("Insert number");
displayTriangle(userNum);


