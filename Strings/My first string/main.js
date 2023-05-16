

"use strict";//setting JavaScript into script mode Strict Mode


//string can`t be change. It is called immutable

let s1 = "Hello!";
document.write(`${s1}<br>`);
document.write(`${s1[0]}<br>`);
document.write(`${s1[1]}<br>`);


s1="Bye..."; //This is a new string entered into s1
document.write(`${s1}<br>`);

let n = 10;
n=20;

document.write(`${s1[0]}<br>`);

// s1[0] = "X"; //won`t do a thing because string is immutable - cant be changed
// document.write(`${s1[0]}<br>`);
// document.write(`${s1}<br>`);

// let totalSalary = 50000;
// totalSalaries = 60000;
// document.write(totalSalaries);

let s2="Amazing! ! !";
//      0123456789
document.write(`s2: ${s2}<br>`);
document.write(`s2.toUpperCase: ${s2.toUpperCase()}<br>`);
document.write(`s2: ${s2}<br>`);

let s3= s2.toUpperCase();
document.write(`s3: ${s3}<br>`);

s2= s2.toUpperCase();
document.write(`s2: ${s2}<br>`);


const index1 = s2.indexOf("!");
document.write(`first ! index: ${index1}<br>`);

const index2 = s2.lastIndexOf("!");
document.write(`last ! index: ${index2}<br>`);

const index3 = s2.lastIndexOf("T");
document.write(`T index: ${index3}<br>`);

const index4 = s2.indexOf("!" , index1 +1);
document.write(`Second ! index: ${index4}<br>`);

const s4 = s2.substring(3 , 7); //3 including 7 excluding
document.write(`s4: ${s4}<br>`);