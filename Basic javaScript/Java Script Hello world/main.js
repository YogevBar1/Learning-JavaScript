
//Screen OutPut:
// alert("Hello all!\nIm JavaScript Programmer!")
document.write("This text will be <br>printed on the page<br>")

//Variables:
var a = 10; //Old method. Risky. May lead to a bug. Never use it!!!
let b = 20; //Replace var. Bug sloved.
const c = 30; //Same as let, but constant variable. can`t be re-assigned


document.write("a = " + a + "<br>") 
document.write("b = " + b + "<br>") 
document.write("c = " + c + "<br>") 


a = 100;
b = 200;
console.log(a , b, c);
//c = 300; //Crash

document.write("a = " + a + "<br>") 
document.write("b = " + b + "<br>") 

//const firstName = "Moishe" //hard-coded

const firstName = prompt("Please enter yout first name");
document.write(`Your first name: ${firstName}<br>`)