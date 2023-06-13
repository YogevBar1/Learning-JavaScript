"use strict";

function testMap() {
    const items = new Map();

    items.set(100,"Apple");
    items.set(200,"Banana");
    items.set(300,"Peach");
    items.set(200,"Banana");
    items.set(200,"Orange");

    console.log("Total items: " + items.size);
    console.log("The value of key 300: "+ items.get(300)); //O(1)

    for(const key of items.keys()){
        console.log(key, items.get(key));
    }

    for(const keyValueArr of items){
        const key = keyValueArr[0];
        const value = keyValueArr[1];
        console.log(key,value);
    }

}

// ------------------------------------------------------