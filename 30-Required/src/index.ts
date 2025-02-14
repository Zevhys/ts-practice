// ! Category : Easy
// TODO : Create an interface `User` that has properties `username`, `email`, and `password`. Then create a function named `registerUser` that takes a parameter `user` of type `Required<User>` and returns a `User` object.

interface User {
  username: string;
  email: string;
  password: string;
}

function registerUser(user: Required<User>): User {
  return {
    username: user.username,
    email: user.email,
    password: user.password,
  };
}

const newUser: Required<User> = {
  username: "john_doe",
  email: "john@example.com",
  password: "securepassword",
};
const registeredUser = registerUser(newUser);
console.log(registeredUser);

console.log("");

// ! Category : Medium
// TODO : Create an interface `Product` that has properties `id`, `name`, `price`, and `description`. Then create a class `ProductService` that has methods `addProduct`, `getProductById`, and `updateProduct`. The `updateProduct` method should take two parameters: the `id` of the product to be updated and an object `partialUpdate` of type `Required<Product>`. The `updateProduct` method should merge the updated properties with the existing product.

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

class ProductService {
  private products: Product[] = [];

  addProduct(item: Product): void {
    this.products.push(item);
  }

  getProductById(id: number): Product | undefined {
    const product = this.products.find((item) => item.id === id);
    return product;
  }

  updateProduct(
    id: number,
    partialUpdate: Required<Product>
  ): Product | undefined {
    const product = this.products.find((item) => item.id === id);

    if (product) {
      Object.assign(product, partialUpdate);
    }

    return product;
  }
}

const service = new ProductService();
service.addProduct({
  id: 1,
  name: "Laptop",
  price: 1000,
  description: "A powerful laptop",
});
service.addProduct({
  id: 2,
  name: "Mouse",
  price: 50,
  description: "A wireless mouse",
});

service.updateProduct(1, {
  id: 1,
  name: "Laptop",
  price: 900,
  description: "Discounted laptop",
});
const updatedProduct = service.getProductById(1);
console.log(updatedProduct);
