"use strict";

(() => {
    const productButton = document.getElementById("productButton");
    productButton.addEventListener("click", async () => {
        const containerObjects = await getJSON("https://dummyjson.com/products?skip=0&limit=100");
        const products = containerObjects.products;
        displayProducts(products);
    });


function displayProducts(products) {
    const tableBody = document.getElementById("tableBody");
    let html = "";
    for (const product of products) {

        html +=  
        `<tr><td>${product.title}</td>
             <td>${product.description}</td>
             <td>${product.price}</td>
             <td>${getRatingStars(product.rating)}</td>
             <td><img class="thumbnail" src="${product.thumbnail}"></td></tr>`;

    }
    tableBody.innerHTML = html;
}

function getRatingStars(rating){
    rating = Math.round(rating);
    let stars = "";
    for(let i = 1; i<=rating; i++)
        stars+="⭐";
    return stars;
}

// Get Json from REST API:
async function getJSON(url) {

    //Get Json from REST API:
    //1. Get response back :
    const response = await fetch(url);
    //2. Extract data as a json 
    const data = await response.json();

    //return
    return data;
}


})();