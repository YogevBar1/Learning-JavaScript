// 3. Create an empty array. Using a loop, insert 20 objects into it, where each object describes a pizza containing:
// Diameter (diameter in cm), slices (number of triangles), toppings (number of toppings), price.
// The values ​​should be drawn randomly when each value should make sense (for example 50 additions does not make sense).
// By functions belonging to the array object (such as forEach, filter, find, map, reduce, etc.) display the following:
// A. The array itself - each object in a separate row.
// B. The first pizza without toppings.
// third. The first pizza with a cheaper price than 30.
// d. All personal pizzas (diameter less than or equal to 20).
// God. All the expensive pizzas (price greater than 80).
// and. All pizzas without toppings.
// G. the index of the first pizza with 6 triangles.
// H. the radii of all the pizzas (radius = diameter divided by 2).

// H. the radii of all the pizzas (radius = diameter divided by 2).
// ninth. For each pizza - a new object containing: price (original price) vat (VAT value of the price when the original price is a price including VAT).
// J. the sum of all pizza prices.
// 11 the most expensive price.
// 12. You are the most expensive pizza object.

"use strict";

const pizzaArr = [];

for (let i = 0; i <= 19; i++) {
    pizzaArr[i] = {
        diameter: Math.floor(Math.random() * 30 + 4),
        slices: Math.floor(Math.random() * 8 + 5),
        topping: Math.floor(Math.random() * 9),
        price: Math.floor(Math.random() * 100) + 5
    };
}


document.write("The Pizzas:<br>");
pizzaArr.forEach((pizza) => {
    document.write(`Diameter: ${pizza.diameter} , Slices: ${pizza.slices} , Topping: ${pizza.topping}, Price: ${pizza.price}<br>`);
});

document.write("<hr>")
document.write("First Pizza without topping:<br>");

const firstPizzaWithoutTopping = pizzaArr.find((pizza) => pizza.topping === 0);
if (firstPizzaWithoutTopping) {
    document.write(`Diameter: ${firstPizzaWithoutTopping.diameter} , Slices: ${firstPizzaWithoutTopping.slices} , Topping: ${firstPizzaWithoutTopping.topping}, Price: ${firstPizzaWithoutTopping.price}<br>`);
}

else {
    document.write("There is not Pizza with 0 topping");
}

document.write("<hr>")
document.write("First Pizza cheaper than 30:<br>");
const firstPizzaCheaperThan30 = pizzaArr.find((pizza) => pizza.price < 30);
document.write(`Diameter: ${firstPizzaCheaperThan30.diameter} , Slices: ${firstPizzaCheaperThan30.slices} , Topping: ${firstPizzaCheaperThan30.topping}, Price: ${firstPizzaCheaperThan30.price}<br>`);


document.write("<hr>")
document.write("First Pizza smaller than 20 sm:<br>");

const firstPizzaSmaller20Sm = pizzaArr.find((pizza) => pizza.diameter <= 20);
if (firstPizzaSmaller20Sm)
    document.write(`Diameter: ${firstPizzaSmaller20Sm.diameter} , Slices: ${firstPizzaSmaller20Sm.slices} , Topping: ${firstPizzaSmaller20Sm.topping}, Price: ${firstPizzaSmaller20Sm.price}<br>`);

else
    document.write("There is not Pizza That smaller than 20");



document.write("<hr>")
document.write("First Pizza Price above 80:<br>");

const firstPizzaPriceAbove80 = pizzaArr.find((pizza) => pizza.price > 80);
if (firstPizzaPriceAbove80)
    document.write(`Diameter: ${firstPizzaPriceAbove80.diameter} , Slices: ${firstPizzaPriceAbove80.slices} , Topping: ${firstPizzaPriceAbove80.topping}, Price: ${firstPizzaPriceAbove80.price}<br>`);

else
    document.write("There is not Pizza That bigger than 80 SM");




document.write("<hr>")
document.write("All pizza without topping:<br>");

const arrOfPizzaWithoutTopping = pizzaArr.filter((pizza) => pizza.topping === 0);
arrOfPizzaWithoutTopping.forEach((pizza) => {
    document.write(`Diameter: ${pizza.diameter} , Slices: ${pizza.slices} , Topping: ${pizza.topping}, Price: ${pizza.price}<br>`);
});




document.write("<hr>")
const indexOfFirstPizzaWith6Topping = pizzaArr.findIndex((pizza) => pizza.topping === 6);
if (indexOfFirstPizzaWith6Topping)
    document.write(`Index Of first pizza with 6 topping: ${indexOfFirstPizzaWith6Topping} <br>`);

else
    document.write("There is not Pizza with 6 topping");



document.write("<hr>")
const arrOfPizzasRadius = pizzaArr.map((pizza) => pizza.diameter / 2);
document.write(`Radius of all Pizzas: <br>`);

arrOfPizzasRadius.forEach((pizzaRadius) => {
    document.write(`Radius: ${pizzaRadius}<br>`);
});


document.write("<hr>")
const arrOfPizzasPriceAndVat = pizzaArr.map((pizza) => { return { price: pizza.price, vat: pizza.price * 0.18 }; });
document.write(`Prices and VAR of all Pizzas: <br>`);

arrOfPizzasPriceAndVat.forEach((pizza) => {
    document.write(`Price: ${pizza.price}, VAT: ${pizza.vat}<br>`);
});


document.write("<hr>")
let sumPrices = 0;

pizzaArr.forEach((pizza) => {
    sumPrices += pizza.price;
});

document.write(`Sum of prices = ${sumPrices}`);

document.write("<hr>")
let maxPrice = -Infinity;

pizzaArr.forEach((pizza) => {
    if (maxPrice < pizza.price)
        maxPrice = pizza.price;
});

document.write(`Max Price = ${maxPrice}`);

document.write("<hr>")
let pizzaMaxPrice = {
    diameter: 0,
    slices: 0,
    topping: 0,
    price: -Infinity
};

pizzaArr.forEach((pizza) => {
    if (pizzaMaxPrice.price < pizza.price)
        pizzaMaxPrice = pizza;
});

document.write(`The Pizza with max price:<br>
Diameter: ${pizzaMaxPrice.diameter},Slices:${pizzaMaxPrice.slices}, Topping ${pizzaMaxPrice.topping} , Price: ${pizzaMaxPrice.price} `);



