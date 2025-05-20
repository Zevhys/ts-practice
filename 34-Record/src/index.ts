// ! Category: Easy
// Todo: Create a type called User with properties: id, name, and email, using appropriate data types. Use the Record utility type to create a new type that uses string as the key and User as the value. Define a function called createUserMap that accepts an array of User objects and returns an object of type Record<string, User>.

type User = {
  id: number;
  name: string;
  email: string;
};

type RecordUser = Record<number, User>;

function createUserMap(user: User[]): RecordUser {
  const userMap = user.reduce((acc, user) => {
    acc[user.id] = user;
    return acc;
  }, {} as RecordUser);

  return userMap;
}

const users: User[] = [
  { id: 1, name: "Jane Doe", email: "jane@example.com" },
  { id: 2, name: "John Smith", email: "john@example.com" },
];

console.log(createUserMap(users));

console.log("");

// ! Category: Medium
// Todo: Create a type called Product with properties: id, name, price, and category, using appropriate data types. Use the Record utility type to create a new type that uses number as the key and Product as the value. Implement a ProductCatalog class that has an addProduct method to add products to the catalog and a getProductById method to retrieve product details based on id. The getProductById method should return an object of type Product.

type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
};

type ProductRecord = Record<number, Product>;

class ProductCatalog {
  private catalog: ProductRecord = {};

  addProduct(product: Product): void {
    this.catalog[product.id] = product;
  }

  getProductById(id: number): Product | undefined {
    return this.catalog[id];
  }
}

const product1 = new ProductCatalog();
product1.addProduct({
  id: 111,
  name: "mouse",
  price: 90000,
  category: "electronic",
});

console.log(product1.getProductById(111));
