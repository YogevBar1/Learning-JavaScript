//Print the end of the file

const str = prompt("Insert file name include ending");

const dotIndex = str.indexOf(".");

const ending = str.substring(dotIndex, str.length);

document.write(`The ending of the file: ${ending}<br>`);
document.write("<br><hr>");

//check Email validtion:
const email = prompt("Insert Email adress");
const strudelIndex = email.indexOf("@");
if (strudelIndex === -1)
    document.write("Error: Invalid email");
else
    document.write(email);

document.write("<br><hr>");


//Get a string from the user, print all char in new row
const str2 = prompt("Insert String");

for (let i = 0; i <= str2.length - 1; i++)
    document.write(`${str2.charAt(i)}<br>`);



//Get a Sentence and word , print if the Sentence include the word
document.write("<br><hr>");

const sentence = prompt("Insert sentence");
const word = prompt("Insert word");


if (sentence.includes(word))
    document.write(`The Sentence include the word: ${word}`);
else
    document.write(`The Sentence not include the word :${word}`);


//Get from the user 3 string, print the bigger and his length
document.write("<br><hr>");

const sentence1 = prompt("Insert first sentence");
const sentence2 = prompt("Insert second sentence");
const sentence3 = prompt("Insert third sentence");

const sentence1Length = sentence1.length;
const sentence2Length = sentence2.length;
const sentence3Length = sentence3.length;

if (sentence1Length > sentence2Length && sentence1Length > sentence3Length) {
    document.write(`The long sentence is: ${sentence1}<br> The length is: ${sentence1Length}`);

}
else if (sentence2Length > sentence3Length && sentence2Length > sentence1Length) {
    document.write(`The long sentence is: ${sentence2}<br> The length is: ${sentence2Length}`);

}
else
    document.write(`The long sentence is: ${sentence3}<br> The length is: ${sentence3Length}`);
