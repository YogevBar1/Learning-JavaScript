//hw2
// Create an array called songs, enter 3 song names from
//  the user, display the array, target the
//  middle song (so that the cell itself disappears), 
//  display the array again.

const songs = [];
for(let i = 0; i<= 2; i++)
    songs[i] = prompt("Insert Song ");

for(const item of songs)
    document.write(`${item} , `);

songs.splice(1,1);


document.write("<br><hr>")
for(const item of songs)
    document.write(`${item} , `);