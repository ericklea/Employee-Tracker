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

// Connect to database
connection.connect(err => {
    if (err) throw err;
    console.log('connected as id ' + connection.threadId);
    promptUser();
});

// Run inquirer prompt
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
        if (data.choice === 'View all departments') {
            connection.query('SELECT * FROM department', (err, res) => {
                if (err) throw err;
                console.table(res);
                promptUser();
            });
        } else if (data.choice === 'View all roles') {
            connection.query('SELECT * FROM role', (err, res) => {
                if (err) throw err;
                console.table(res);
                promptUser();
            });
        } else if (data.choice === 'View all employees') {
            connection.query('SELECT * FROM employee', (err, res) => {
                if (err) throw err;
                console.table(res);
                promptUser();
            });
        } else if (data.choice === 'Add a department') {
            connection.query('SELECT * FROM department', (err, res) => {
                if (err) throw err;
                console.table(res);
                promptUser();
            });
        } else if (data.choice === 'Add a role') {
            connection.query('SELECT * FROM role', (err, res) => {
                if (err) throw err;
                console.table(res);
                promptUser();
            });
        } else if (data.choice === 'Add an employee') {
            connection.query('SELECT * FROM employee', (err, res) => {
                if (err) throw err;
                console.table(res);
                promptUser();
            });
        } else if (data.choice === 'Update an employee role') {
            connection.query('SELECT * FROM employee', (err, res) => {
                if (err) throw err;
                console.table(res);
                promptUser();
            });
        } else {
            connection.end();

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
    const sql = `SELECT * FROM employee JOIN role ON employee.role_id = role.id`;

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

// Update an employee role
const updateEmployeeRole = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'employee_id',
            message: 'What is the ID of the employee you would like to update?'
        },
        {
            type: 'input',
            name: 'role_id',
            message: 'What is the new role ID for this employee?'
        }
    ])
    .then((data) => {
        const sql = `UPDATE employee SET role_id = ? WHERE id = ?`;
        const params = [data.role_id, data.employee_id];

        db.query(sql, params, (err, result) => {
            if (err) {
            res.status(500).json({ error: err.message });
            return;
            }
            console.log('Employee role updated successfully!');
            promptUser();
        });
    })
}

promptUser();

module.exports = db;



