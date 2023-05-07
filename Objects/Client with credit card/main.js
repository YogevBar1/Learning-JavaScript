//HW5
// 5. Challenge: Create an object that describes
//  a customer. Contains the characteristics: first name,
//   last name, email, phone, credit card which is another object 
//   containing the characteristics: card type, card number, validity,
//    security number. Put hard-coded values ​​into it, display the details without a for-in loop.
// Challenge: present again with a for-in loop.


client = {
    firstName: "Avi",
    lastName: "Shalti",
    email: "avi@gmail.com",
    phone: "050-8884575",
    creditCard: {
        type: "Visa",
        number: "4582-4584-4584-2145",
        expired: "05/28",
        cvv: "558"
    }
}

document.write(`First name: ${client.firstName} , Last name: ${client.lastName} , Email: ${client.email} , Phone: ${client.phone}<br>`);
document.write(`Credit card : <br>`);
document.write(`Type: ${client.creditCard.type} , Number: ${client.creditCard.number} , `);
document.write(`Expired date: ${client.creditCard.expired} , CVV: ${client.creditCard.cvv}`);
document.write("<br><hr>");

for (const prop in client) {
    if (prop === "creditCard") {
        document.write(`${prop} : <br>`);
        for(const subProp in client[prop])
            document.write(`${subProp} : ${client[prop][subProp]}  <br>`);
    }
    else
        document.write(`${prop} ➡️ ${client[prop]} <br>`);
}