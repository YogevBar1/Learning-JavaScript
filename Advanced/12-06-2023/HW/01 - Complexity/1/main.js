"use strict";
// 1. Create a Map object, insert 5 objects describing customers into it, each customer object has a first name, last name, etc. The ID is also used as a key for inserting each item.
// example:
// myMap.set(“028233848”, { id: “028233848”, firstName: “Bart”, lastName: “Simpson” } );

// Show all keys (IDs)
// Display all objects
// Collect an ID card from the user, if it exists in the collection - present the customer, if not - present an appropriate message.
// What is the complexity of the search?


function test() {

    const customers = new Map();
    customers.set("028233848", { id: "028233848", firstName: "Bart", lastName: "Simpson" });
    customers.set("028236548", { id: "028236548", firstName: "Beny", lastName: "Cohen" });
    customers.set("028233845", { id: "028233845", firstName: "Bony", lastName: "Simpson" });
    customers.set("028233811", { id: "028233811", firstName: "Gili", lastName: "Simpson" });
    customers.set("028233822", { id: "028233822", firstName: "Dany", lastName: "Simpson" });

    document.write("The id:<br>");
    for (const key of customers.keys()) {
        document.write(customers.get(key).id + " , ");
    }

    document.write("<br>All objects:<br>");

    for (const key of customers.keys()) {
        const customer = customers.get(key);
        document.write(`Id: ${customer.id}, First Name: ${customer.firstName} , Last name: ${customer.lastName}<br>`);
    }


    // O(n)
    const userId = prompt("Insert ID:");
    if (customers.has(userId)){
        const userCustomer = customers.get(userId);
        document.write(`<br>The customer exists: Id: ${userCustomer.id}, First Name: ${userCustomer.firstName} , Last name: ${userCustomer.lastName}<br>`);
    }
    else
        alert("The customer didnt exists");

}

