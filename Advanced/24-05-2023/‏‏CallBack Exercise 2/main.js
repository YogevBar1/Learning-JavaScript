// Each Normal function - write as an arrow function with shortest syntax available:


function test1() {
    func1(()=>alert("Hi"));
    func2(()=>{alert("Hi") ; return "cool";});
    func3((x)=> alert(x));
    func4((x,y)=>alert(x + y));
    func5((x,y, z)=>alert(x* y* z));
    func6(()=>42);
    func7((a,b)=>a+b);
    func8((a,b) => a > b ? a:b);
    func9( (x, y, z)=> { alert(x); alert(y); alert(z) });
    func10(()=>({name: "Cyber" , age:3  , color:"Black"}));


}

function test2(){
    
    doSomething1(()=>alert("HI"));
    doSomething2( (a,b)=>alert(a+b));
    doSomething3( (a,b)=>alert(a > b ? a : b));
    doSomething4(()=>({name:"kinder", price:2.6}));
    doSomething5(()=> 300000 ,()=> 50);
}

//Build func1 in some correct logic:

function func1(a) {
    a();
}

function func2(callback) {
    const result = callback();
    alert("result : " + result);
}

function func3(callback) {
    callback(1000);
    callback("hey");
}

function func4(callback) {
    callback(2, 3);
    callback("bye", "bye");
}

function func5(callback) {
    callback(2, 3, 4);
}

function func6(callback) {
    const result = callback();
    alert(result);

}

function func7(callback) {
    const sum = callback(4, 5);
    alert("sum =" + sum);

}

function func8(callback) {
    const max = callback(13, 5);
    alert(max);

}

function func9(callback) {
    callback(10, 20, 30);

}

function func10(callback){
    const myCat = callback();
    alert(`Name : ${myCat.name}, Age:${myCat.age}, color:${myCat.color}`);

}



function doSomething1(callback){
    callback();
}

function doSomething2(callback){
    callback(10,20);
}

function doSomething3(callback){
    const max = callback(100,200);
    alert("Max: " + max);

}

function doSomething4(callback){
    const product = callback();
    alert(`Name: ${product.name}, Price: ${product.price}`);
}

function doSomething5(getSupermanSpeed, getBatmanSpeed){
    const supermanSpeed = getSupermanSpeed();
    const batmanSpeed = getBatmanSpeed();
    if(supermanSpeed > batmanSpeed) alert("Superman is faster");
    else if (batmanSpeed > supermanSpeed) alert("Batman is faster!");
    else alert("Superman speed equal to Batman speed!");

}


