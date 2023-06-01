// Higher Order Functions

const arr=[10,20,25,30,40,45];
const result = arr.find(n=>n % 2 !==0);

const result1 = arr.find(isOdd);
console.log(result1);

// function isOdd(n){
//     if(n%2 ===0)
//         return false;
//     else
//         return true;
// }

function isOdd(n){
    return n%2 !==0;
}


//inline function:
const result2 = arr.find(function isOdd(n) {return  n%2 !==0; })
console.log(result2);

//inline function:
const result3 = arr.find(n => n%2 !==0)
console.log(result3);

const numbers=[];
for(let i = 1; i<=100;i++){
    numbers.push(Math.floor(Math.random()*100));
}

for(const item of numbers){
    document.write(item + " ");
}

document.write(`<br><hr>`);

const firstEven = numbers.find(n => n%2 ===0);
document.write(`First Even =  ${firstEven}<br><hr>`);

const firstEvenBigger50 = numbers.find(n => n%2 ===0 && n>50);
document.write(`First Even bigger than 50 =  ${firstEvenBigger50}<br><hr>`);

const firstDivBy7 = numbers.find(n => n%7 ===0);
document.write(`First number divided by 7=  ${firstDivBy7}<br><hr>`);

const evenNumbers = numbers.filter(n => n%2 ===0);
document.write(`Even numbers: ${evenNumbers}<br><hr>`);

const evenNumbersBigger50 = numbers.filter(n => n%2 ===0 && n> 50);
document.write(`Even numbers bigger 50: ${evenNumbersBigger50}<br><hr>`);

const numsDivBy7 = numbers.filter(n => n%7 ===0);
document.write(`Numbers divided by 7=  ${numsDivBy7}<br><hr>`);

const indexOfFirstBigger80 = numbers.findIndex(n => n > 80);
document.write(`Index of First number bigger 80=  ${indexOfFirstBigger80}<br><hr>`);

const isAllEven = numbers.every(n => n%2===0);
let text = isAllEven ? "All" : "Not all";
document.write(`${text} numbers are even<br><hr>`);

const isAllNonNegative = numbers.every(n => n >= 0);
text = isAllNonNegative ? "All" : "Not all";
document.write(`${text} numbers are non negative<br><hr>`);

const isNumBigger90 = numbers.some(n=> n>90);
text = isNumBigger90 ? "is" : "is not";
document.write(`There ${text} number higher than 90<br><hr>`);

const isNumBigger100 = numbers.some(n=> n>100);
text = isNumBigger100 ? "is" : "is not";
document.write(`There ${text} number higher than 100<br><hr>`);

//display each number separated by |

numbers.forEach(n=> document.write(n + " | "));


document.write(`<br><hr>`);

// Map each number to its power
const arrInPower2 = numbers.map(n => n**2);
document.write(`All powers :${arrInPower2}<hr>`);

//display powers of all numbers lower than 50, each sperated by | in one linear

numbers.filter(n => n<50).map(n=> n**2).forEach(n=>document.write( n + " | "));


