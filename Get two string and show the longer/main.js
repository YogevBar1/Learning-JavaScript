const str1 = prompt ("Insert first string");
const str2 = prompt ("Insert second string");

const longerString =( str1.length > str2.length ) ? str1 : str2;

document.write(`The longer string: ${longerString}`);