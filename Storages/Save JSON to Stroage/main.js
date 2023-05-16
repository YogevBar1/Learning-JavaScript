
function saveToStorage(){
    const car = {manufacturer: "Ferrari" , model:"Spider" , price: 2000000};
    const json = JSON.stringify(car);
    localStorage.setItem("car" , json);
    

}

function loadFromStorage(){
   const json = localStorage.getItem("car");
   const car = JSON.parse(json);
   alert(car.manufacturer + " , " + car.model);



}
