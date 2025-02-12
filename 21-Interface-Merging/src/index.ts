// ! Category : Easy
// TODO : Create two interfaces, `Person` and `Contact`, each with their own properties. The `Person` interface has properties `firstName` (string) and `lastName` (string). The `Contact` interface has properties `email` (string) and `phone` (number). Use the concept of interface merging to combine these two interfaces into a single interface `PersonContact` that includes all properties from `Person` and `Contact`. Create a class `Employee` that implements the `PersonContact` interface.

interface Person {
  firstName: string;
  lastName: string;
}

interface Contact {
  email: string;
  phone: number;
}

interface PersonContact extends Person, Contact {}

class Employee implements PersonContact {
  constructor(
    public firstName: string,
    public lastName: string,
    public email: string,
    public phone: number
  ) {}
}

const employee = new Employee("John", "Doe", "john.doe@example.com", 123456789);
console.log(employee.firstName);
console.log(employee.lastName);
console.log(employee.email);
console.log(employee.phone);

console.log("");

// ! Category : Medium
// TODO : Create two interfaces, `Product` and `Inventory`, each with their own properties. The `Product` interface has properties `id` (number) and `name` (string). The `Inventory` interface has properties `quantity` (number) and `location` (string). Use the concept of interface merging to combine these two interfaces into a single interface `ProductInventory` that includes all properties from `Product` and `Inventory`. Create a class `StoreItem` that implements the `ProductInventory` interface.

interface Product {
  id: number;
  name: string;
}

interface Inventory {
  quantity: number;
  location: string;
}

interface ProductInventory extends Product, Inventory {}

class StoreItem implements ProductInventory {
  constructor(
    public id: number,
    public name: string,
    public quantity: number,
    public location: string
  ) {}
}

const item = new StoreItem(1, "Laptop", 50, "Warehouse A");
console.log(item.id);
console.log(item.name);
console.log(item.quantity);
console.log(item.location);
