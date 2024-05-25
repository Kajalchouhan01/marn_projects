const employees = [
    { name: "Avni", salary: 130000, age: 20 },
    { name: "Janvi", salary: 170000, age: 21 },
    { name: "Kratika", salary: 180000, age: 23 },
    { name: "Lavina", salary: 200000, age: 25 },
    { name: "Mahi", salary: 160000, age: 27 },
    { name: "Nancy", salary: 190000, age: 27 },
    { name: "Ory", salary: 140000, age: 28 },
    { name: "Priya", salary: 250000, age: 29 },
    { name: "Ritu", salary: 120000, age: 30 },
    { name: "Shivani", salary: 210000, age: 32 }
];
const shortedEmployees = [];
let totalSalary = 0;

// Loop 
for (const employee of employees) {
  // salary between 150000 and 190000
  if (employee.salary >= 150000 && employee.salary <= 190000) {
    // If yes, add the employee to the extracted employees array
    shortedEmployees.push(employee);
    // Also, add the salary to the total salary
    totalSalary += employee.salary;
  }
}


console.log("extrected Employees:");
console.log(shortedEmployees);
console.log("Total Salary of Extracted Employees: " + totalSalary);