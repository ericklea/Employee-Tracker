use tracker_db;

INSERT INTO department (department_name)
VALUES ("Engineering"),
       ("Finance"),
       ("Sales"),
       ("Legal");

INSERT INTO role (department_id, title, salary)
VALUES (1, "Software Engineer", "100000"),
       (1, "Lead Software Engineer", "150000"),
       (2, "Accountant", "80000"),
       (3, "Salesperson", "80000"),
       (3, "Sales Lead", "120000"),
       (4, "Lawyer", "100000");

INSERT INTO employee (role_id, first_name, last_name, manager_id)
VALUES (1, "John", "Doe", NULL),
       (2, "Jane", "Neuman", NULL),
       (3, "Bob", "Smith", NULL),
       (4, "Sally", "Erickson", 3),
       (5, "Joe", "Nemeroff", NULL),
       (6, "Bill", "Waters", NULL);
     