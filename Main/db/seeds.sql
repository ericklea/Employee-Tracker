INSERT INTO department (name)
VALUES ("Engineering"),
       ("Finance"),
       ("Sales"),
       ("Legal");

INSERT INTO role (department_id, title, salary)
VALUES ("1", "Software Engineer", "100000"),
       ("1", "Lead Software Engineer", "150000"),
       ("2", "Accountant", "80000"),
       ("3", "Salesperson", "80000"),
       ("3", "Sales Lead", "120000"),
       ("4", "Lawyer", "100000");

INSERT INTO employee (role_id, first_name, last_name, manager_id)
VALUES ("1", "John", "Doe", "2"),
       ("2", "Jane", "Neuman", "2"),
       ("3", "Bob", "Smith", "4"),
       ("4", "Sally", "Erickson", "4"),
       ("5", "Joe", "Nemeroff", "6"),
       ("6", "Karen", "Shafley", "6"),
       ("7", "Mark", "Fox", "8"),
       ("8", "Mary", "Remmelts", "8"),
       ("9", "Tom", "Jones", "10"),
       ("10", "Sue", "Scott", "10"),
       ("11", "Bill", "Gates", "12"),
       ("12", "Steve", "Jobs", "12");