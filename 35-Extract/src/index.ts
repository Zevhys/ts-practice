// ! Category: Easy
// Todo: Create an interface called Person with properties: name, age, email, and address, using appropriate data types. Use the Extract utility type to create a new type that only includes name and email properties from Person. Define a function called getContactInfo that accepts a parameter of type Person and returns an object of the new type.

interface Person {
  name: string;
  age: number;
  email: string;
  address: string;
}

type PersonExtract = Extract<keyof Person, "name" | "email">;

function getContactInfo(person: Person): Pick<Person, PersonExtract> {
  return {
    name: person.name,
    email: person.email,
  };
}

const p1: Person = {
  name: "john",
  age: 20,
  email: "john@gmail.com",
  address: "street new york",
};

console.log(getContactInfo(p1));

console.log("");

// ! Category: Medium
// Todo: Create an interface called Employee with properties: id, name, position, salary, and department, using appropriate data types. Use the Extract utility type to create a new type that only includes id, name, and department properties from Employee. Implement an EmployeeDirectory class that has an addEmployee method to add employees to the directory and a getEmployeeDetails method to retrieve employee details based on id. The getEmployeeDetails method should return an object of the new type.

interface Employee {
  id: number;
  name: string;
  position: string;
  salary: number;
  department: string;
}

type extractEmployee = Extract<keyof Employee, "id" | "name" | "department">;
type pickEmployee = Pick<Employee, extractEmployee>;

class EmployeeDirectory {
  private directory: pickEmployee[] = [];

  addEmployee(employee: Employee): void {
    const newEmployee: pickEmployee = {
      id: employee.id,
      name: employee.name,
      department: employee.department,
    };
    this.directory.push(newEmployee);
  }

  getEmployeeDetails(id: number): pickEmployee | undefined {
    return this.directory.find((e) => e.id === id);
  }
}

const e1 = new EmployeeDirectory();
e1.addEmployee({
  id: 111,
  name: "james",
  position: "Addmin",
  salary: 9000000,
  department: "It Support",
});

console.log(e1.getEmployeeDetails(111));
