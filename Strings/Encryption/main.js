"use strict";

const plainText = prompt("Insert some text to encrypt: ");

const secretKey = 10;

let encryptedText = "";

let decryptedText ="";

//encrypt:
for(let i = 0; i< plainText.length; i++)
{
    let code = plainText.charCodeAt(i);
    code += secretKey;
    const encryptedChar = String.fromCharCode(code);
    encryptedText += encryptedChar;
}

//Decrypt

for(let i = 0; i< encryptedText.length; i++)
{
    let code = encryptedText.charCodeAt(i);
    code -= secretKey;
    const decryptedChar = String.fromCharCode(code);
    decryptedText += decryptedChar;
}


document.write(`Plain Text: ${plainText}<br>`);
document.write(`Encrypted Text: ${encryptedText}<br>`);
document.write(`decrypted Text: ${decryptedText}<br>`);