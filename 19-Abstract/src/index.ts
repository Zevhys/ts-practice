// ! Category: Easy
// Todo: Create an abstract class named `Shape` that has abstract methods `area` and `perimeter`. Then, create two derived classes `Circle` and `Square` that implement the `area` and `perimeter` methods according to their respective shapes. For `Circle`, use the `radius` property and for `Square`, use the `side` property.

abstract class Shape {
  abstract area(): number;

  abstract perimeter(): number;
}

class Circle extends Shape {
  constructor(public radius: number) {
    super();
  }

  area(): number {
    return Math.PI * this.radius * this.radius;
  }

  perimeter(): number {
    return this.radius * 2 * Math.PI;
  }
}

class Square extends Shape {
  constructor(public side: number) {
    super();
  }

  area(): number {
    return this.side * this.side;
  }

  perimeter(): number {
    return this.side * 4;
  }
}

const circle = new Circle(5);
console.log(`Area of Circle: ${circle.area()}`);
console.log(`Perimeter of Circle: ${circle.perimeter()}`);

const square = new Square(4);
console.log(`Area of Square: ${square.area()}`);
console.log(`Perimeter of Square: ${square.perimeter()}`);

console.log("");

// ! Category: Medium
// Todo: Create an abstract class named `Vehicle` that has abstract methods `startEngine` and `stopEngine`. Then, create two derived classes `Car` and `Motorcycle` that implement the `startEngine` and `stopEngine` methods with appropriate messages. For `Car`, add a property `numberOfDoors` and for `Motorcycle`, add a property `hasSidecar`.

abstract class Vehicle {
  abstract startEngine(): void;

  abstract stopEngine(): void;
}

class Car extends Vehicle {
  constructor(public numberOfDoors: number) {
    super();
  }

  startEngine(): void {
    console.log(`Car engine started with ${this.numberOfDoors} doors.`);
  }

  stopEngine(): void {
    console.log("Car engine stopped.");
  }
}

class Motorcycle extends Vehicle {
  constructor(public hasSideCar: boolean) {
    super();
  }

  startEngine(): void {
    const sidecarMessage = this.hasSideCar ? " with a sidecar" : "";
    console.log(`Motorcycle engine started${sidecarMessage}.`);
  }

  stopEngine(): void {
    console.log("Motorcycle engine stopped.");
  }
}

const car = new Car(4);
car.startEngine();
car.stopEngine();

const motorcycle = new Motorcycle(true);
motorcycle.startEngine();
motorcycle.stopEngine();
