// Create an empty object describing a customer,
//  enter the user's first name, last name 
// and email in the object. Display the object 
// on the page.

const client ={};
client.firstName = prompt("Insert first name:");
client.lastName = prompt("Insert last name:");
client.email = prompt("Insert Email :");

for(const prop in client)
{
        document.write(`${prop} ➡️ ${client[prop]}<br>`);
      
}


