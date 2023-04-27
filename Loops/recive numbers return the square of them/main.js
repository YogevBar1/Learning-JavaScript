
document.write("Get from the user numbers until recived a negative number,for all number show is power in 2 <br>:");
document.write("<br>")
let num = +prompt("Insert a number:");
while (num >= 0 )
{
    document.write("<br>")
    document.write(`The squared of ${num} = ` + (num*num) + "<br>");
    num = +prompt("Insert another number:");
    document.write("<br>")

}
