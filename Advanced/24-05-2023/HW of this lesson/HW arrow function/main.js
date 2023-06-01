"use strict";


bFunction(()=>alert("Yogev"));


function bFunction(callback){
    callback();
}


function cool(callback){
	callback();
}

cool(()=>alert(Math.floor(Math.random()*100)));



 function nice(callback) {
	callback(42);
}

// nice((n)=>alert(n));


function amazing  (callback) {
	const num = callback(42, 128, 37, 81, 66);
	document.write("Num: " + num);
};

const showRandom=(a,b,c,d,e)=>{
    const arr=[a,b,c,d,e];
    const num = Math.floor(Math.random()*5);
    alert("The choosen num=" + arr[num]);
    return arr[num];

};

// amazing(showRandom);



function paintPageRandom (){
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);

    document.body.style.backgroundColor=`rgb(${r},${g},${b})`;
};

// cool(paintPageRandom);

function nice2 (paintCallback) {
	paintCallback("Green");
}

// nice2((color)=>document.body.style.backgroundColor=color);

function amazing2 (paintCallback) {
	const paintedColor = paintCallback("Red", "Green", "Blue");
	document.write("Painted Color: " + paintedColor);
};


amazing2((color1, color2,color3)=>{
    const arrColors=[color1, color2,color3];
    const randomNum = Math.floor(Math.random()*3);
    document.body.style.backgroundColor=arrColors[randomNum];
    return arrColors[randomNum];
});



function repeatAllSecond(callback){
    setInterval(callback,1000);
}


repeatAllSecond(()=>{
    const randomNum = Math.floor(Math.random()*100)+1;
    const divNum =document.getElementById("numContinar");
    divNum.innerHTML = randomNum;});



repeatAllSecond(paintPageRandom);

function repeatAll3Second(callback){
    setInterval(callback,3000);
}

function showRandomArrNum(){
    const arrDiv = document.getElementById("arrNumContinar");
    let arr=[];
    for(let i=0;i<=99;i++){
        arr[i] = Math.floor(Math.random()*100);

    }

    arrDiv.innerHTML = arr;
}
repeatAll3Second(showRandomArrNum);
