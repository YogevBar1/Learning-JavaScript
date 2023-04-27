// Take a note and grade:
// A. "Fail" if the score is between 0 and 59 inclusive.
// B. "Enough" if the score is between 60 and 69 inclusive.
// third. "Almost good" if the score is between 70 and 79 inclusive.
// d. "Good" if the score is between 80 and 89 inclusive.
// God. "Very good" if the score is between 90 and 99 inclusive.
// and. "Excellent" if the score is 100.

const grade = + prompt("Insert your grade:");

if (grade <= 59) {
    document.write("Failed");
}

else if (grade <= 69) {
    document.write("Enough");
}

else if (grade <= 79) {
    document.write("Almost good");
}

else if (grade <= 89) {
    document.write("Good");
}

else if (grade <= 99) {
    document.write("Very good");
}
else {
    document.write("Excellent");

}