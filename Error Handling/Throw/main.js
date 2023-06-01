// programer B
function showGradeFactor(){
    try{
    const grade =+ prompt("Enter your grade: ");
    const factorGrade = getFactor(grade);
    alert(`Grade: ${grade} ,New Grade: ${factorGrade}`);
    }
    catch(err){
        alert("Some Error! please resent valid grade. \n Message:" +err.message);
    }

}

//programer A

function getFactor(grade){
    if(grade < 0 || grade > 100){
        throw new Error("Illegal grade! Grade must be 0 to 100");
    }

    if(isNaN(grade))
        throw new Error ("Grade must be numeric!!!");

        
    const newGrade = 10 * Math.sqrt(grade);
    return newGrade;
}