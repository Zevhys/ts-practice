// ! Category: Easy
// Todo: Create an interface called Car with properties: make, model, year, and color. Use the Omit utility type to create a new type that only includes make and model properties. Define a function called createCarSummary that accepts a parameter of this new type and returns an object containing make and model properties.

interface Car {
  make: string;
  model: string;
  year: number;
  color: string;
}

type omitCar = Omit<Car, "year" | "color">;

function createCarSummary(car: Car): omitCar {
  return { make: car.make, model: car.model };
}

const car: Car = {
  make: "Honda Brio",
  model: "hatchback",
  year: 2024,
  color: "red",
};

console.log(createCarSummary(car));

console.log("");

// ! Category: Medium
// Todo: Create an interface called Employee with properties: id, name, position, salary, and department. Use the Omit utility type to create a new type that only includes name, position, and department properties. Implement an EmployeeManager class that has an addEmployee method to add employees to an employee list and a getEmployeeInfo method to retrieve employee information based on id. The getEmployeeInfo method should return an object with the new type that only contains name, position, and department properties.

interface Employee {
  id: number;
  name: string;
  position: string;
  salary: number;
  department: string;
}

type omitEmployee = Omit<Employee, "id" | "salary">;

class EmployeeManager {
  private employees: Employee[] = [];

  addEmployee(employee: Employee): void {
    this.employees.push(employee);
  }

  getEmployeeInfo(id: number): omitEmployee | undefined {
    const employee = this.employees.find((e) => e.id === id);

    if (employee) {
      return {
        name: employee.name,
        position: employee.position,
        department: employee.department,
      };
    }
  }
}

const e1 = new EmployeeManager();
e1.addEmployee({
  id: 1,
  name: "jane",
  position: "Addmin",
  salary: 80000,
  department: "TI",
});

console.log(e1.getEmployeeInfo(1));
