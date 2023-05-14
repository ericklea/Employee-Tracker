// import express, mysql, and inquirer
 const express = require('express');
 const mysql = require('mysql2');
 const inquirer = require('inquirer');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      database: 'employee_db',
    },
    console.log(`Connected to the employee_db database.`)
);

// Add a department
app.post('/api/department', ({ body }, res) => {
    const sql = `INSERT INTO department (name)
    VALUES (?)`;
    const params = [body.name];

    db.query(sql, params, (err, result) => {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
            }
            res.json({
            message: 'success',
            data: body
            });
        });
    });
    
// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });