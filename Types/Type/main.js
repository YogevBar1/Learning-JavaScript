const a = 10;
const b = "Hello";
const c= true;
const d = {name: "Mitsi" , age:4};
const e = alert;
const f = Symbol("Something...");//Unique id and more...
let g;

document.write(`The type of ${a} is ${typeof a}<br>`);//number
document.write(`The type of ${b} is ${typeof b}<br>`);//string
document.write(`The type of ${c} is ${typeof c}<br>`);//boolean
document.write(`The type of ${d} is ${typeof d}<br>`);//object
document.write(`The type of ${e} is ${typeof e}<br>`);//function
document.write(`The type of ${f.description} is ${typeof f}<br>`);//symbol
document.write(`The type of ${g} is ${typeof g}<br>`);//undefined