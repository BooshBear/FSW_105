let employees = [];

function Employee(name, job, salary) {
    this.name = name;
    this.jobTitle = job;
    this.salary = salary;
    this.status = "Full Time";
}

function printEmployeeForm(employee) {
    console.log("Name: " + employee.name + ", Job Title: " + employee.jobTitle + 
    ", Salary: $" + employee.salary + "/per hour, Status: " + employee.status);
    employees.push(employee);
}


let employee0 = new Employee("John", "Janitor", "9");
let employee1 = new Employee("Steve", "CEO", "22");
let employee2 = new Employee("Patrick", "Manager", "12");

employee1.status = "Contract";

printEmployeeForm(employee0);
printEmployeeForm(employee1);
printEmployeeForm(employee2);

for (let i = 0; i < employees.length; i++) {
    console.log(employees[i]);  
}


