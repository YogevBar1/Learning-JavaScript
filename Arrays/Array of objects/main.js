const products = [{
    name: "Apple",
    price: 3.5,
    discount: 0.1
}
    , {
    name: "Banana",
    price: 4.7,
    discount: 0.05
},
{
    name: "Peach",
    price: 5.2,
    discount: 0.3
}
];

for (const item of products) {
    document.write(`Name: ${item.name} , Price: ${item.price}, Discount: ${item.discount}<br>`);

}

document.write("<hr>");
document.write(`Name of second product: ${products[1].name}, Price of second product: ${products[1].price}<br>`);

let sum = 0;
for (const item of products)
    sum += item.price;

const avg = sum / (products.length);
document.write(`The average price: ${avg.toFixed(2)}<br>`);


products.push({ name: "Orange", price: 5, discount: 0.14 });
products.push({ name: "Watermelon", price: 8, discount: 0.08 });



document.write("<hr>");

for (const item of products) {
    const finalPrice = (item.price - item.price * item.discount);
    document.write(`Name: ${item.name} , final Price: ${finalPrice}<br>`);

}


document.write("<hr>");

const jsonString = JSON.stringify(products);
document.write(jsonString);


document.write("<hr>");

const dupProducts = JSON.parse(jsonString);

for (const item of dupProducts)
    document.write(`Name: ${item.name} , Price: ${item.price},Discount: ${item.discount}<br> `);


document.write("<br><hr>");

for (const item of dupProducts) {
    for (const prop in item)
        document.write(`${prop} ➡️ ${item[prop]} `);
    document.write("<br>");
}

