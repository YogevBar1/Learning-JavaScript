// Normal functions:
doSomething1(function(){console.log("Hi");});

// Arrow function:
doSomething1(() =>{console.log("Hi"); console.log("Bye");});
doSomething1(() =>console.log("Hi")); //Executing a single line of code

doSomething2(function(a,b,c){console.log(a+b+c);});
doSomething2((a,b,c)=>console.log(a+b+c));

doSomething3(function(n){console.log(n**2);})
doSomething3((n)=>console.log(n**2)); 
doSomething3(n =>console.log(n**2));

doSomething4(function(){return 42;});
doSomething4(()=>{return 42;});
doSomething4(()=> 42);
doSomething4(function(){console.log("Start");return 123;});
doSomething4(()=>{console.log("Start");return 123;});


// Arrow function is an anonymous function with shorter syntax.
// (There is another technical difference)

function doSomething1(callback){
    callback();
}


function doSomething2(callback){
    callback(10,20,30);
}

function doSomething3(callback){
    callback(10);
}

function doSomething4(callback){
    const result = callback();
    console.log("result: "+ result);
}

