"use strict";

function MakeMapProducts() {
    const items = new Map();

    const product1 = { id: 1, name: "Apple", price: 3.5 };
    const product2 = { id: 2, name: "Banana", price: 31.5 };
    const product3 = { id: 3, name: "Peach", price: 3.25 };
    const product4 = { id: 4, name: "Orange", price: 32.5 };
    const product5 = { id: 5, name: "Melon", price: 34.5 };

    items.set(product1.id, product1);
    items.set(product2.id, product2);
    items.set(product3.id, product3);
    items.set(product4.id, product4);
    items.set(product5.id, product5);



    const id = + prompt("insert id of product");
    const product = items.get(id);

    if (product)
        alert(`ID:${product.id}, Name:${product.name}, price: ${product.price}`);

    else
        alert("product Not found");

    for (const product of items.values()) {
        document.write(`ID:${product.id}, Name:${product.name}, price: ${product.price}<br>`);
    }



    let sum = 0;
    for (const product of items.values()) {
        sum += product.price;

    }
    const avg = sum / items.size;
    document.write("Price Avg: "+ avg.toFixed(2));
}
// ------------------------------------------------------