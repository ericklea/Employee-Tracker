const prompt = require('prompt-sync')();
const mysql = require('mysql');

// Create a MySQL connection
const connection = mysql.createConnection({
    host: 'localhost',
    database: 'tracker_db',
});

// Connect to the MySQL server
connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to the tracker_db database.');
}
);

// Display on the main menu
console.log(`Welcome to the Employee Tracker!`);
console.log('Please select an option from the menu below:');
console.log('1. View all departments');
console.log('2. View all roles');
console.log('3. View all employees');
console.log('4. Add a department');
console.log('5. Add a role');
console.log('6. Add an employee');
console.log('7. Update an employee role');
console.log('8. Exit');

// Get user input
const choice = prompt('Enter your selection: ');

// Handle user input
switch (choice) {
    case '1':
        viewDepartments();
        break;
    case '2':
        viewRoles();
        break;
    case '3':
        viewEmployees();
        break;
    case '4':
        addDepartment();
        break;
    case '5':
        addRole();
        break;
    case '6':
        addEmployee();
        break;
    case '7':
        updateEmployeeRole();
        break;
    case '8':
        connection.end();
        break;
    default:
        console.log('Invalid selection. Please try again.');
        break;
}

// Functions for each option
function viewDepartments() {
    connection.query('SELECT * FROM department', (err, res) => {
        if (err) throw err;
        console.table(res);
        connection.end();
    });
}
function viewRoles() {
    connection.query('SELECT * FROM role', (err, res) => {
        if (err) throw err;
        console.table(res);
        connection.end();
    });
}
function viewEmployees() {
    connection.query('SELECT * FROM employee', (err, res) => {
        if (err) throw err;
        console.table(res);
        connection.end();
    });
}
function addDepartment() {
    const department = prompt('Enter the name of the department you would like to add: ');
    connection.query('INSERT INTO department (name) VALUES (?)', [department], (err, res) => {
        if (err) throw err;
        console.log('Department added.');
        connection.end();
    });
}
function addRole() {
    const role = prompt('Enter the name of the role you would like to add: ');
    const salary = prompt('Enter the salary for this role: ');
    const department = prompt('Enter the department ID for this role: ');
    connection.query('INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)', [role, salary, department], (err, res) => {
        if (err) throw err;
        console.log('Role added.');
        connection.end();
    });
}
function addEmployee() {
    const firstName = prompt('Enter the employee\'s first name: ');
    const lastName = prompt('Enter the employee\'s last name: ');
    const role = prompt('Enter the role ID for this employee: ');
    const manager = prompt('Enter the manager ID for this employee: ');
    connection.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)', [firstName, lastName, role, manager], (err, res) => {
        if (err) throw err;
        console.log('Employee added.');
        connection.end();
    });
}
function updateEmployeeRole() {
    const employee = prompt('Enter the ID of the employee you would like to update: ');
    const role = prompt('Enter the role ID for this employee: ');
    connection.query('UPDATE employee SET role_id = ? WHERE id = ?', [role, employee], (err, res) => {
        if (err) throw err;
        console.log('Employee role updated.');
        connection.end();
    });
}





