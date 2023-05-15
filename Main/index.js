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



