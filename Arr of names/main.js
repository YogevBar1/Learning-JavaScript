// Create an empty array, insert five names
//  from the user, display the entire array on the page,
//   display the longest name and its length. If there are 
//   several
//  names with the same length - present the first one.

const names = [];

for(let i =1; i<=5 ;i++)
{
    const name = prompt("Insert name:");
    names.push(name);

}

let longName = "";

for(const item of names)
{
    
    if (item.length > longName.length)
        longName = item;
}

document.write(names);
document.write(`<br>The longer name is: ${longName}  with ${longName.length} charcters`);