// ! Category: Easy
// Todo: Create an interface `Person` that has properties `name`, `age`, and `address`. Then create a generic function named `updatePerson` that takes two parameters: an object `person` of type `Person` and an object `partialUpdate` of type `Partial<Person>`. The `updatePerson` function should return a new object that is the result of merging `person` and `partialUpdate`.

interface Person {
  name: string;
  age: number;
  address: string;
}

function updatePerson(person: Person, partialUpdate: Partial<Person>): Person {
  return { ...person, ...partialUpdate };
}

const person: Person = { name: "John", age: 30, address: "123 Main St" };
const partialUpdate: Partial<Person> = { age: 31 };

const updatedPerson = updatePerson(person, partialUpdate);
console.log(updatedPerson);

console.log("");

// ! Category: Medium
// Todo: Create an interface `Product` that has properties `id`, `name`, `price`, and `description`. Then create a class `ProductManager` that has methods `addProduct`, `getProductById`, and `updateProduct`. The `updateProduct` method should take two parameters: the `id` of the product to be updated and an object `partialUpdate` of type `Partial<Product>`. The `updateProduct` method should merge the updated properties with the existing product.

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

class ProductManager {
  private products: Product[] = [];

  addProduct(item: Product): void {
    this.products.push(item);
  }

  getProductById(id: number): Product | undefined {
    const product = this.products.find((product) => product.id === id);
    return product;
  }

  updateProduct(
    id: number,
    partialUpdate: Partial<Product>
  ): Product | undefined {
    const product = this.products.find((product) => product.id === id);

    if (product) {
      Object.assign(product, partialUpdate);
    }

    return product;
  }
}

const manager = new ProductManager();
manager.addProduct({
  id: 1,
  name: "Laptop",
  price: 1000,
  description: "A powerful laptop",
});
manager.addProduct({
  id: 2,
  name: "Mouse",
  price: 50,
  description: "A wireless mouse",
});

manager.updateProduct(1, { price: 900, description: "Discounted laptop" });
const updatedProduct = manager.getProductById(1);
console.log(updatedProduct);
