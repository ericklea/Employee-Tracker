const prompt = require('prompt-sync')();
const mysql = require('mysql');

// Create a MySQL connection
const connection = mysql.createConnection({
    host: 'localhost',
    database: 'tracker_db',
