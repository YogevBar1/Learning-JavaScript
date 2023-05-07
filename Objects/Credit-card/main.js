//HW4
// Create an object that describes a credit card. Contains the
//  characteristics: card type, card number, validity, security number
//   (three digits on the back of the card). Put hard-coded values ​​into it
//   , display the details without a for-in loop,
// Show again with a for-in loop.


creditCard ={
    type: "Visa",
    number: "4582-4584-4584-2145",
    expired: "05/28",
    cvv: "558"
}

document.write(`Type: ${creditCard.type} , Card Number: ${creditCard.number} , Expired Date: ${creditCard.expired} , CVV: ${creditCard.cvv}`);

document.write("<br><hr>");

for(const prop in creditCard)
    document.write(`${prop} ➡️ ${creditCard[prop]} <br>`);