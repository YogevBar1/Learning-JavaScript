const n1= 10;
const n2= 10;
const n3= 10;
const n4= 10;


const numbers =[n1, n2, n3, 40, 50];
numbers.push(n4);
console.log(numbers);

document.write(`Second number: ${numbers[1]}<br>`);

// --------------------------
const kitten1 = {name: "Mitsi", age: 4};
const kitten2 = {name: "Kitsi", age: 5};
const kitten3 = {name: "Pitsi", age: 6};

const kittens = [kitten1, kitten2,kitten3, {name: "Oscar", age:7}, {name: "Cyber" , age: 8}];
const kitten4 = {name: "Hertzel" , age:9};
kittens.push(kitten4) ;
kittens.push({name: "Shoshana",age: 10});
console.log(kittens);

document.write(`Second Kitten name : ${kittens[1].name}<br>`);
document.write(`Second Kitten age : ${kittens[1].age}<br>`);

document.write(`Second Kitten name : ${kittens[1]["name"]}<br>`);
document.write(`Second Kitten age : ${kittens[1]["age"]}<br>`);

