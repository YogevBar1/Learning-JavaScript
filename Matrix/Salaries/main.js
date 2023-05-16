// A matrix representing the last 3 salaries of 4 employees
// Create an algorithm that finds the highest salary

//Find the bigger salary
const salaries = [];
salaries.push([10000, 12000, 13000]);
salaries.push([11000, 11000, 11500]);
salaries.push([16000, 10000, 12500]);
salaries.push([10000, 9000, 12500]);

let max = -1;
for(let i = 0 ; i< salaries.length; i++)
    for(let j = 0 ; j < salaries[i].length ; j++)
        if(salaries[i][j] > max)
            max = salaries[i][j] ;

document.write(`Max salary: ${max}<br>`);

//another way:
for(const arr of salaries)
{
    for(const salary of arr)
        if(salary > max) max = salary;

}

document.write(`Max salary: ${max}<br>`);
