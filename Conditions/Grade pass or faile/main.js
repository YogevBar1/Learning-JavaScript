//get from the user grade (you can let its valid)
// if the grade above 60 insert 😊/☹️ to smiley variable

const grade =+ prompt ("Insert grade:");
const smiley = grade >=60 ? "😊" : "☹️";

document.write(smiley);