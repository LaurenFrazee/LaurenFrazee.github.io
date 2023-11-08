// Provided arrays for names and salaries
let person = ["Mark Cohen", "Roger Davis", "Mimi Marquez", "Benny Coffin III", "Maureen Johnson", "Joanne Jefferson", "Tom Collins", "Angel Schunard"];
let salaries = [85000, 75000, 80000, 109000, 85000, 55000, 86000, 85000];

function displayEmployeeData(event) {
    let ulElement = document.querySelector('.employee-list');

    ulElement.addEventListener('click', function(event) {
   
    if (event.target.tagName === 'LI') {
        for(let i = 0; i < person.length; i++) {
            if (person[i] === event.target.textContent) {
                document.getElementById('employee-data').innerText = 'Name: ' + person[i]+ ', Salary: ' + salaries[i];
            }
        }
    }
});
}

var employees = document.querySelectorAll('.employee-list li');
for (var i = 0; i < employees.length; i++) {
    employees[i].addEventListener('click', displayEmployeeData);
}
function displayResults() {
    let original = document.getElementById("results");
    let total = 0;
    for(let i = 0; i < salaries.length; i++) {
        total += salaries[i];
    }
    let averageSalary = total / salaries.length;
    let highestSalary = Math.max(...salaries);
    let resultsDiv = document.getElementById("results");
    let content = "<h2>Salary Results</h2>";
    content += "<p>Average Salary: " + averageSalary.toFixed(2) + "</p>";
    content += "<p>Highest Salary: " + highestSalary + "</p>";
    resultsDiv.innerHTML = content;
    
}


function addSalary(newPerson, newSalary) {
   
    person.push(newPerson);
    salaries.push(+newSalary);
    addEmployee(newPerson);

}

function addEmployee(newPerson) {
    var list = document.querySelector('.employee-list');
    var item = document.createElement('li');
    item.textContent = newPerson;
    list.appendChild(item);
    
}
function displaySalary(){
    
        let tableDiv = document.getElementById('results_table');
        let table = "<table><tr><th>Name</th><th>Salary</th></tr>";
        
        for (let i = 0; i < person.length; i++) {
            table += "<tr><td>" + person[i] + "</td><td>" + salaries[i] + "</td></tr>";
        }
        
        table += "</table>";
        tableDiv.innerHTML = table;
    }
