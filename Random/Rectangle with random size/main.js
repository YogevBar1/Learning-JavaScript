// Draw a width and length for a rectangle
//  between 5 and 30 including edges and fill
//   it with a random sad or happy smiley

const min =5;
const max = 30;

const hight = Math.floor(Math.random()* (max - min + 1) )+min;
const width = Math.floor(Math.random()* (max - min + 1) )+min;

const smiely =(Math.random() <0.5  ? "☹️" : "😊");

for(let i = 0; i< hight;i++)
{
    for(let j = 0; j< width; j++)
        document.write(smiely);
    document.write("<br>");
}