// Run inquirer prompt
const inquirer = require('inquirer');
const sql = require('mysql2');

// Prompt user for what they would like to do

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'choice',
            message: 'What would you like to do?',
            choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role', 'Exit']
        }
    ])
    .then((data) => {
        switch (data.choice) {
            case 'View all departments':
                viewDepartments();
                break;
            case 'View all roles':
                viewRoles();
                break;
            case 'View all employees':
                viewEmployees();
                break;
            case 'Add a department':
                addDepartment();
                break;
            case 'Add a role':
                addRole();
                break;
            case 'Add an employee':
                addEmployee();
                break;
            case 'Update an employee role':
                updateEmployeeRole();
                break;
            case 'Exit':
                db.end();
                break;
        }
    })
}

// View all departments
const viewDepartments = () => {
    const sql = `SELECT * FROM department`;

    db.query(sql, (err, rows) => {
        if (err) {
        res.status(500).json({ error: err.message });
        return;
        }
        console.table(rows);
        promptUser();
    });
}

// View all roles
const viewRoles = () => {
    const sql = `SELECT * FROM role`;

    db.query(sql, (err, rows) => {
        if (err) {
        res.status(500).json({ error: err.message });
        return;
        }
        console.table(rows);
        promptUser();
    });
}

// View all employees
const viewEmployees = () => {
    const sql = `SELECT * FROM employee`;

    db.query(sql, (err, rows) => {
        if (err) {
        res.status(500).json({ error: err.message });
        return;
        }
        console.table(rows);
        promptUser();
    });
}

// Add a department
const addDepartment = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the department?'
        }
    ])
    .then((data) => {
        const sql = `INSERT INTO department (name)
        VALUES (?)`;
        const params = [data.name];

        db.query(sql, params, (err, result) => {
            if (err) {
            res.status(500).json({ error: err.message });
            return;
            }
            console.log('Department added successfully!');
            promptUser();
        });
    })
}

// Add a role
const addRole = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of the role?'
        },
        {
            type: 'input',
            name: 'salary',
            message: 'What is the salary for this role?'
        },
        {
            type: 'input',
            name: 'department_id',
            message: 'What is the department ID for this role?'
        }
    ])
    .then((data) => {
        const sql = `INSERT INTO role (title, salary, department_id)
        VALUES (?, ?, ?)`;
        const params = [data.title, data.salary, data.department_id];

        db.query(sql, params, (err, result) => {
            if (err) {
            res.status(500).json({ error: err.message });
            return;
            }
            console.log('Role added successfully!');
            promptUser();
        });
    })
}

// Add an employee
const addEmployee = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'first_name',
            message: 'What is the first name of the employee?'
        },
        {
            type: 'input',
            name: 'last_name',
            message: 'What is the last name of the employee?'
        },
        {
            type: 'input',
            name: 'role_id',
            message: 'What is the role ID of the employee?'
        },
        {
            type: 'input',
            name: 'manager_id',
            message: 'What is the manager ID of the employee?'
        }
    ])
    .then((data) => {
        const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id)
        VALUES (?, ?, ?, ?)`;
        const params = [data.first_name, data.last_name, data.role_id, data.manager_id];

        db.query(sql, params, (err, result) => {
            if (err) {
            res.status(500).json({ error: err.message });
            return;
            }
            console.log('Employee added successfully!');
            promptUser();
        });
    })
}



