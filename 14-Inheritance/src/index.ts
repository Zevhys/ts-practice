// ! Category: Easy
// Todo: Create a base class named `Vehicle` with properties `make` and `model`. The class should have a constructor that takes two parameters: `make` and `model`, which will be initialized to the class properties. Additionally, create a method named `getDetails` that returns a string in the format: "<make> <model>". Then, create a derived class named `Car` that inherits from the `Vehicle` class. Add an additional property `year` to the `Car` class and modify the constructor to take parameters `make`, `model`, and `year`. Create a method named `getCarDetails` in the `Car` class that returns a string in the format: "<year> <make> <model>".

class Vehicle {
  constructor(public make: string, public model: string) { }

  getDetails(): string {
    return `${this.make} ${this.model}`;
  }
}

class Car extends Vehicle {
  constructor(public make: string, public model: string, public year: number) {
    super(make, model);
  }

  getCarDetails(): string {
    return `${this.year} ${this.make} ${this.model}`;
  }
}

const myCar = new Car("Toyota", "Corolla", 2020);
console.log(myCar.getCarDetails());

console.log("");

// ! Category: Medium
// Todo: Create a base class named `Employee` with properties `name` and `salary`. The class should have a constructor that takes two parameters: `name` and `salary`, which will be initialized to the class properties. Additionally, create a method named `getDetails` that returns a string in the format: "<name> earns $<salary>". Then, create a derived class named `Manager` that inherits from the `Employee` class. Add an additional property `department` to the `Manager` class and modify the constructor to take parameters `name`, `salary`, and `department`. Create a method named `getManagerDetails` in the `Manager` class that returns a string in the format: "<name> manages the <department> department and earns $<salary>".

class Employee {
  constructor(public name: string, public salary: number) { }

  getDetails(): string {
    return `${this.name} earns ${this.salary}`;
  }
}

class Manager extends Employee {
  constructor(
    public name: string,
    public salary: number,
    public department: string
  ) {
    super(name, salary);
  }

  getManagerDetails(): string {
    return `${this.name} manages the ${this.department} department and earns ${this.salary}`;
  }
}

const manager = new Manager("Alice", 90000, "IT");
console.log(manager.getManagerDetails());
