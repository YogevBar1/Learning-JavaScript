//HW1
// In JavaScript, create a hard-coded array of 
// objects named Books that contains three books.
// Each book has a code, name, author, price.
// Convert the array to a JSON string and display the JSON in the alert.
// Reverse the JSON string back into a named books array.
// Display the original array - books and the second array -
//  items on the console and compare both.
// Display the second array on the page - items in the following format:
// Book ID: ___
// Title: ___
// Author of the book: ___
// Book price: ___
// -------------------------
// Book ID: ___
// Title: ___
// Author of the book: ___
// Book price: ___
// -------------------------
// Book ID: ___
// Title: ___
// Author of the book: ___
// Book price: ___
// -------------------------



books = [{
    code: 1143,
    name: "Harry Potter",
    Writer: "Arik",
    Price: 50
}
    ,
{
    code: 1543,
    name: "Never alone",
    Writer: "Yuval",
    Price: 150
}
    ,
{
    code: 1583,
    name: "Together",
    Writer: "Beni",
    Price: 60
}
]

const json = JSON.stringify(books);
alert(json);


const items = JSON.parse(json);

console.log(books);
console.log(items);

for(const item of items)
    {
        for(const prop in item)
        {
            document.write(`${prop} : ${item[prop]}<br> `);
            
        }
        document.write("<hr>");
    }