use tracker_db;

INSERT INTO department (name)
VALUES ("Engineering"),
       ("Finance"),
       ("Sales"),
       ("Legal");

INSERT INTO role (department_id, title, salary)
VALUES (1, "Software Engineer", "100000"),
       (2, "Lead Software Engineer", "150000"),
       (3, "Accountant", "80000"),
       (4, "Salesperson", "80000"),
       (5, "Sales Lead", "120000"),
       (6, "Lawyer", "100000");

INSERT INTO employee (role_id, first_name, last_name, manager_id)
VALUES (1, "John", "Doe", 2),
       (2, "Jane", "Neuman", NULL),
       (3, "Bob", "Smith", NULL),
       (4, "Sally", "Erickson", 5),
       (5, "Joe", "Nemeroff", NULL),
       (6, "Bill", "Waters", NULL);
     