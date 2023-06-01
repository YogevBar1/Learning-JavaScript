
function test1() {

    //1. Function is also an object and can be assigned into a variable
    function f1() {
        alert("f1");
        return 123;
    }
    //Assigning the function into a variable
    const a = f1;


    //Calling the function using the variable:
    const result = a();
    alert("result: " + result);

    const b = a;
    const c = b;
    const d = c;

    const result2 = d();
    alert("result2 " + result2);
}

//2. Function can be built directly inside a variable
// This is called "Inline Function"
function test2(){
    const a =    function f2() {
        alert("f2");
        return 123;
    }
    const result = a();
    alert("result: "+ result);

}

//3. Because we don`t call the function using its name,
// we can drop the name!
// This is called "Anonymous Function":

function test3(){
    const a =    function () { //Anonymouse function
        alert("f3");
        return 123;
    }

    
    const result = a();
    alert("result: "+ result);

}

// 4.Because we can assign a function to a variable, we can also send a function 
// to an argument of another function. The argument is called "Callback":

function test4(){

    doSomething(function() {alert("f4"); return 123;});
    // --------------------------------------------------------

    function doSomething(a){ //this argument is a "callback"
        alert(a);
        const result = a(); //calls me back
        alert("result: " + result);
    }
}