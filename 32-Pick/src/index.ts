// ! Category: Easy
// Todo: Create an interface called Person with properties: name, age, and email. Use the Pick utility type to create a new type that only includes the name and email properties. Define a function called createContact that accepts a parameter of this new type and returns an object containing name and email properties.

interface Person {
  name: string;
  age: number;
  email: string;
}

type personPick = Pick<Person, "name" | "email">;

function createContact(person: personPick): personPick {
  return {
    name: person.name,
    email: person.email,
  };
}

const newPerson: Person = {
  name: "jane",
  age: 20,
  email: "jane@gmail.com",
};

console.log(createContact(newPerson));

console.log("");

// ! Category: Medium
// Todo: Create an interface called Product with properties: id, name, price, category, and stock. Use the Pick utility type to create a new type that only includes id, name, and price properties. Implement a ProductManager class that has an addProduct method to add products to a product list and a getProductDetails method to retrieve product details based on id. The getProductDetails method should return an object with the new type that only contains id, name, and price properties.

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  stock: number;
}

type pickProduct = Pick<Product, "id" | "name" | "price">;

class ProductManager {
  private products: Product[] = [];

  addProduct(product: Product): void {
    this.products.push(product);
  }

  getProductDetails(id: number): pickProduct | undefined {
    const product = this.products.find((p) => p.id === id);

    if (product) {
      return { id: product.id, name: product.name, price: product.price };
    }
  }
}

const newProduct = new ProductManager();
newProduct.addProduct({
  id: 1,
  name: "shirt",
  price: 5000,
  category: "clothes",
  stock: 5,
});

console.log(newProduct.getProductDetails(1));
