// Run inquirer prompt
const inquirer = require('inquirer');
const sql = require('mysql2');



// Connect to database
const connection = sql.createConnection(
    {
        host: 'localhost',
        // MySQL username,
        user: 'root',
        database: 'tracker_db'
    });

// Run inquirer prompt
function promptUser() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'choice',
            message: 'What would you like to do?',
            choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role', 'Exit']
        }
    ])
// View all departments, roles, or employees
.then( (data) => {
    if (data.choice === 'View all departments') {
        connection.query('SELECT * FROM department', (err, res) => {
            if (err) throw err;
            console.log(res);
            promptUser();
        });
    } else if (data.choice === 'View all roles') {
        connection.query('SELECT * FROM role', (err, res) => {
            if (err) throw err;
            console.log(res);
            promptUser();
        });
    } else if (data.choice === 'View all employees') {
        connection.query('SELECT * FROM employee', (err, res) => {
            if (err) throw err;
            console.log(res);
            promptUser();
        });
    } else if (data.choice === 'Add a department') {
        const department = inquirer.prompt([
            {
                type: 'input',
                name: 'departmentName',
                message: 'What is the name of the department?'
            }
        ])
        .then( (data) => {
            connection.query('INSERT INTO department (name) VALUES (?)', [choice.departmentName], (err, res) => {
                if (err) throw err;
                console.log(res);
                promptUser();
            });
        });
    } else if (data.choice === 'Add a role') {
        const role = inquirer.prompt([
            {
                type: 'input',
                name: 'roleName',
                message: 'What is the name of the role?'
            },
            {
                type: 'input',
                name: 'roleSalary',
                message: 'What is the salary of the role?'
            },
            {
                type: 'input',
                name: 'roleDepartment',
                message: 'What is the department ID of the role?'
            }
        ])
        .then( (data) => {
            connection.query('INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)', [choice.roleName, choice.roleSalary, choice.roleDepartment], (err, res) => {
                if (err) throw err;
                console.log(`${choice.roleName} added to roles`);
                promptUser();
            });
        });
    } else if (data.choice === 'Add an employee') {
        const employee = inquirer.prompt([
            {
                type: 'input',
                name: 'employeeFirstName',
                message: 'What is the first name of the employee?'
            },
            {
                type: 'input',
                name: 'employeeLastName',
                message: 'What is the last name of the employee?'
            },
            {
                type: 'input',
                name: 'employeeRole',
                message: 'What is the role ID of the employee?'
            },
            {
                type: 'input',
                name: 'employeeManager',
                message: 'What is the manager ID of the employee?'
            }
        ])
        .then( (data) => {
            connection.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)', [choice.employeeFirstName, choice.employeeLastName, choice.employeeRole, choice.employeeManager], (err, res) => {
                if (err) throw err;
                console.log(`${choice.employeeFirstName} ${choice.employeeLastName} added to employees`);
                promptUser();
            });
        });
    } else if (data.choice === 'Update an employee role') {
        const update = inquirer.prompt([
            {
                type: 'input',
                name: 'employeeUpdate',
                message: 'What is the ID of the employee you would like to update?'
            },
            {
                type: 'input',
                name: 'roleUpdate',
                message: 'What is the new role ID of the employee?'
            }
        ])
        .then( (data) => {
            connection.query('UPDATE employee SET role_id = ? WHERE id = ?', [choice.roleUpdate, choice.employeeUpdate], (err, res) => {
                if (err) throw err;
                console.log(`Employee ${choice.employeeUpdate} updated to role ${choice.roleUpdate}`);
                promptUser();
            });
        });
    } else if (data.choice === 'Exit') {
        connection.end();
    }
});
};
 
promptUser();




