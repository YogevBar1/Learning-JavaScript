//HW1 30.4
// Accept numbers from the user repeatedly until he enters
//  0 or a negative number.
// For each number entered (without the 0 or 
//     negative terminating the input) display all
//  the numbers from 1 to it (ascending order).

let num = +prompt("Insert a number");
while(num > 0 )
{
    for(let i =1; i<= num; i++)
        document.write(i+" ");
    
    document.write("<br>");
    num = +prompt("Insert another number");
}



document.write("<br><hr>")
//hw2
// Accept numbers from the user repeatedly 
// until he enters 0 or a negative number.
// For each number entered (without the 0 or
//      negative terminating the input) display 
// all the numbers from it to 1 (descending order).
num = +prompt("Insert a number");
while(num > 0 )
{
    for(let i =num; i>= 1; i--)
        document.write(i+" ");
    
    document.write("<br>");
    num = +prompt("Insert another number");
}

document.write("<br><hr>")
//hw3
//Accept numbers from the user repeatedly until he enters 0 or a negative number.
// For each number entered (without the 0 
//     or negative terminating the input) display
//  all pairs from 2 up to (in ascending order).
num = +prompt("Insert a number");
while(num > 0 )
{
    for(let i =2; i<= num; i+= 2)
        document.write(i+" ");
    
    document.write("<br>");
    num = +prompt("Insert another number");
}


document.write("<br><hr>")
//hw4
// Accept numbers from the user repeatedly
//  until he enters 0 or a negative number.
// For each number entered (without the 0 or
//negative terminating the input) display
//all even numbers from it to 2 (descending
//  order). If the received number is odd, it
//  should not be displayed. Only doubles should be shown.
num = +prompt("Insert a number");
while(num > 0 )
{
    if(num %2 !==0 )
        num--;

    for(let i =num; i>= 2; i-= 2)
        document.write(i+" ");
    
    document.write("<br>");
    num = +prompt("Insert another number");
}