# Employee-Tracker
Module 12 Homework
# Description
This is a command-line application used to manage a company's employee database. To build this application, I utilized Node.js, Inquirer, and MYSQL. Building this application, I faced challenges with properly connecting the index.js to the sql file. 
# Installation
To run this application, the user needs to utilize VSCode and install node and mysql.
# Usage
To use this application, the user needs to open an integrated terminal in the schema.sql file and input mysql -u root to run mysql. Then, the user will input source schema.sql; to create the tables. Then, the user will input source seeds.sql; to import the data. From there, the user will will input the following in the integrated terminal to navigate the database and update the database. 
SELECT * FROM departments;
SELECT * FROM roles;
SELECT * FROM employees;
INSERT INTO departments (department_name) VALUES ('Department Name');
INSERT INTO roles (title, salary, department_id) VALUES ('Role Title','salary','department_id' );
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('First Name', 'Last Name', 1, 1);
UPDATE departments SET department_name = 'New Department Name' WHERE id ='';
see video:
![alt text](video/employee_tracker.gif)
# Credits
For this project, I utilized code from in class activities from The University of Utah Coding Bootcamp. Additionally, I utilized ideas from https://youtube.com and https://w3schools.com. As well, I received assistance for this project from University of Utah Coding Bootcamp tutor Scott Everett.
