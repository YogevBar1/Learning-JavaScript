
const myProduct ={
    name: "iphone",
    description : "A smart phone, build by Apple",
    price: 499.99 ,
    discount: 0.15

};

console.log(myProduct);
document.write(`Product Name: ${myProduct.name}<br>`);
document.write(`Product description: ${myProduct.description}<br>`);
document.write(`Product price: ${myProduct["price"]}<br>`);
document.write(`Product discount: ${myProduct["discount"]}`);

myProduct.creationDate ="2023-01-02";

delete myProduct.discount;
document.write("<hr>");

document.write("<br>");
for(const prop in myProduct){
    document.write(`${prop} ➡️ ${myProduct[prop]}<br>`);
}