// ! Category : Easy
// TODO : Create an interface called Vehicle with properties: make, model, year, and color, using appropriate data types. Use the Exclude utility type to create a new type that excludes the color property from Vehicle. Define a function called getBasicInfo that accepts a parameter of type Vehicle and returns an object of the new type.

interface Vehicle {
  make: string;
  model: string;
  year: number;
  color: string;
}

type excludeVehicle = Exclude<keyof Vehicle, "color">;
type pickVehicle = Pick<Vehicle, excludeVehicle>;

function getBasicInfo(vehicle: Vehicle): pickVehicle {
  return {
    make: vehicle.make,
    model: vehicle.model,
    year: vehicle.year,
  };
}

const car: Vehicle = {
  make: "toyota",
  model: "camry",
  year: 2025,
  color: "blue silver",
};

console.log(getBasicInfo(car));

console.log("");

// ! Category : Medium
// TODO : Create an interface called Product with properties: id, name, category, price, and stock, using appropriate data types. Use the Exclude utility type to create a new type that excludes price and stock properties from Product. Implement a ProductCatalog class that has an addProduct method to add products to the catalog and a getProductSummary method to retrieve product summary based on id. The getProductSummary method should return an object of the new type.

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
}

type excludeProduct = Exclude<keyof Product, "price" | "stock">;
type pickProduct = Pick<Product, excludeProduct>;

class ProductCatalog {
  private catalog: Product[] = [];

  addProduct(product: Product): void {
    this.catalog.push(product);
  }

  getProductSummary(id: number): pickProduct | undefined {
    const product = this.catalog.find((p) => p.id === id);

    if (product) {
      return { id: product.id, name: product.name, category: product.category };
    }
  }
}

const p1 = new ProductCatalog();
p1.addProduct({
  id: 123,
  name: "keyboard",
  category: "electronic",
  price: 50000,
  stock: 10,
});

console.log(p1.getProductSummary(123));
