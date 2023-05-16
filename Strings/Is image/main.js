// hw2
// Receive a file from the user including an extension.
// Display a message indicating whether the file is an image file.
// An image file ends with the following suffixes:
// • jpg.
// • .jpeg
// • .png
// • .gif
// • .tiff
// • .bmp
// • .webp



const fileName = prompt("Insert file name");
const dotLocation = fileName.indexOf(".");
const end = fileName.substring(dotLocation);
if (end === ".jpg" || end === ".jpeg" || end === ".png" || end === ".gif" || end === ".tiff" || end === ".bmp" || end === ".webp")
    document.write("The file is Image");
else
    document.write("The file is not Image");
