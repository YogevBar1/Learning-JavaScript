function getAverage(a , b, c){
const sum = a + b + c;
const avg = sum / 3;
return avg; // we must always return back the calculation
}

const result = getAverage(10, 20, 30);
document.write(`Average : ${result}<br>`);


const average = getAverage(100,200,300);
if( average>= 150)
    document.write("Cool...");
else    
    document.write("Not so cool...");