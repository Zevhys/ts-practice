// ! Category : Easy

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

// ! Category : Medium

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

console.log("");
