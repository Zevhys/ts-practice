// ! Category: Easy
// Todo: Create an interface named `Person` that has the properties `name` (required) of type string, `age` (optional) of type number, and `address` (optional) of type string. Create a function named `printPersonInfo` that takes a parameter of type `Person` and prints the person's information. If `age` or `address` is not available, print an appropriate message.

interface Person {
  name: string;
  age?: number;
  address?: string;
}

function printPersonInfo(person: Person) {
  if (!person.age || !person.address) {
    console.log(`Name: ${person.name}, Not provided, Address: Not provided`);
  } else {
    console.log(
      `Name: ${person.name}, Age: ${person.age}, Address: ${person.address}`
    );
  }
}

const person1: Person = { name: "John" };
const person2: Person = { name: "Jane", age: 30, address: "123 Main St" };

printPersonInfo(person1);
printPersonInfo(person2);

console.log("");

// ! Category: Medium
// Todo: Create an interface named `Product` that has the properties `id` (required) of type number, `name` (required) of type string, `price` (required) of type number, and `description` (optional) of type string. Create a function named `getProductSummary` that takes a parameter of type `Product` and returns a string summarizing the product. If `description` is not available, do not include it in the summary.

interface Product {
  id: number;
  name: string;
  price: number;
  description?: string;
}

function getProductSummary(product: Product) {
  if (!product.description) {
    return `Product: ${product.name}, Price: ${product.price}`;
  } else {
    return `Product: ${product.name}, Price: ${product.price}, Description: ${product.description}`;
  }
}

const product1: Product = { id: 1, name: "Laptop", price: 1000 };
const product2: Product = {
  id: 2,
  name: "Phone",
  price: 500,
  description: "A smartphone with 4G connectivity",
};

console.log(getProductSummary(product1));
console.log(getProductSummary(product2));
