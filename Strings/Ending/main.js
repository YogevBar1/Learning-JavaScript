//HW1
//Collect a website address from the user.
// Show the website extension (.com or .co.il, etc.)
// Display a message indicating whether the website is an international 
// commercial website (ending in .com) or an international corporate website
//  (ending in .org) or an Israeli commercial website (ending in .co.il) or
//   an Israeli corporate website (ending in .org) .il) or an Israeli government 
//   website (ending in gov.il) or another website if the extension is different
  
const address = prompt("Insert address");
const dotLocation = address.indexOf(".");
const end = address.substring(dotLocation);
let msg ;
switch(end){
    case ".com": msg = "international";
        break;
    case ".org": msg = "commercial";
        break;
    case ".co.il": msg = "Israeli";
        break;
     case ".gov.il": msg = "Israeli government";
        break;
    default: msg = "Another website";
        break;
}

document.write(`The address ${address} is ${msg}`);