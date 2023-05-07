// Create an object that describes a company employee. Contains the 
// characteristics: first name, last name, salary, email, phone. The experiment to
//  which the values ​​were hard-coded, presented the details without a for-in loop, presented
//   again by a for-in loop.
//HW2


const employee ={
    firstName: "Ofir",
    lastName: "Kriaf",
    salary : 12000,
    email : "ofir@gmail.com" ,
    phone: "050444444"

}


document.write(`First name: ${employee.firstName } , Last name: ${employee.lastName} , Salary: ${employee.salary} , Email : ${employee.email} , Phone: ${employee.phone}`);
document.write("<br><hr>")

for(const prop in employee)
    document.write(`${prop} ➡️ ${employee[prop]}<br>`);