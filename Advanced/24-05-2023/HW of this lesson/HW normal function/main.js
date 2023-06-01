// bFunction(myName);
// cool(randomNum);
// nice(showNum);
// amazing(showRandomNum);
// cool(paintPageRandom);
// nice(paintPage);
// amazing(paintPageOnFromThree);
// repeatAllSecond(showRandomNumfrom1to100);
// repeatAllSecond(paintPageRandom);
repeatAll3Seconds(showArrOff100RandomNum);


function myName() {
    alert("Yogev");
}

function bFunction(callback) {
    callback();
}

function cool(callback) {
	callback();
}

function randomNum(){
    const num = Math.floor(Math.random() * 100);
    alert(num);
}

function nice(callback) {
	callback(42);
}

function showNum(num){
    alert(num);
}

function amazing(callback) {
	const num = callback(42, 128, 37, 81, 66);
	document.write("Num:"  + num);
}

function showRandomNum(a,b,c,d,e){
    const random = Math.floor(Math.random()*5);
    const arr=[a,b,c,d,e];
    alert("Tho choosen number = " + arr[random]);
    return arr[random];
}

function cool(paintCallback) {
	paintCallback();
}

function paintPageRandom(){
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);

    document.body.style.backgroundColor=`rgb(${r},${g},${b})`;
}

function nice(paintCallback) {
	paintCallback("Green");
}

function paintPage(color){
    document.body.style.backgroundColor=color;
}

function amazing(paintCallback) {
	const paintedColor = paintCallback("Red", "Green", "Blue");
	document.write("Painted Color: " + paintedColor);
}

function paintPageOnFromThree(color1,color2,color3){
    const random = Math.floor(Math.random()*3);
    const arrColors=[color1,color2,color3];
    const selectedColor=arrColors[random];
    document.body.style.backgroundColor=selectedColor;

} 

function showRandomNumfrom1to100(){
    const num = Math.floor(Math.random()*100)+1;
    const divNum = document.getElementById("randomNum");
    divNum.innerHTML = num;
}

function repeatAllSecond(callback)
{
    
    setInterval(callback,1000);
}

function showArrOff100RandomNum(){
    const arr=[];
    for(let i = 0; i<=99;i++){
        const num = Math.floor(Math.random()*100);
        arr[i]=num;
    }
    const divNum = document.getElementById("randomNum");
    divNum.innerHTML = arr;
}

function repeatAll3Seconds(callback){
    setInterval(callback,3000);
}

