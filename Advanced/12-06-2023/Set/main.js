"use strict";

function testSet() {

    const items = new Set();

    items.add("Apple");
    items.add("Banana");
    items.add("Peach");
    items.add("Banana");

    for (const item of items) {
        console.log(item);
    }

    console.log("Total items: " + items.size);

    console.log("Is peach exists: " + items.has("Peach"));
    console.log("Is Grapes exists: " + items.has("Grapes"));

    items.delete("Banana");
    for (const item of items) {
        console.log(item);
    }



}