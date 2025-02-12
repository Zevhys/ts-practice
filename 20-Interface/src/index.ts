// ! Category : Easy
// TODO : Create an interface named `Animal` that has two properties: `name` (string) and `age` (number), and one method `makeSound()`. Then, create two classes `Dog` and `Cat` that implement the `Animal` interface. The `makeSound()` method in the `Dog` class should print "Woof!" and in the `Cat` class should print "Meow!".

interface Animal {
  name: string;
  age: number;
  makeSound(): void;
}

class Dog implements Animal {
  constructor(public name: string, public age: number) {}

  makeSound(): void {
    console.log("Woof");
  }
}

class Cat implements Animal {
  constructor(public name: string, public age: number) {}

  makeSound(): void {
    console.log("Meow");
  }
}

const dog = new Dog("Buddy", 3);
console.log(dog.name);
console.log(dog.age);
dog.makeSound();

const cat = new Cat("Whiskers", 2);
console.log(cat.name);
console.log(cat.age);
cat.makeSound();

console.log("");

// ! Category : Medium
// TODO : Create an interface named `Vehicle` that has properties `brand` (string) and `speed` (number), and methods `accelerate()` and `brake()`. Create two classes `Car` and `Bike` that implement the `Vehicle` interface. The `accelerate()` method in `Car` should increase the speed by 10 and the `brake()` method should decrease the speed by 5. The `accelerate()` method in `Bike` should increase the speed by 5 and the `brake()` method should decrease the speed by 3.

interface Vehicle {
  brand: string;
  speed: number;
  accelerate(): void;
  brake(): void;
}

// ! Metode accelerate() pada Car harus menambah speed sebesar 10 dan metode brake() harus mengurangi speed sebesar 5. Metode accelerate() pada Bike harus menambah speed sebesar 5 dan metode brake() harus mengurangi speed sebesar 3.

class Car implements Vehicle {
  constructor(public brand: string, public speed: number) {}

  accelerate(): void {
    this.speed += 10;
  }

  brake(): void {
    this.speed -= 5;
  }
}

class Bike implements Vehicle {
  constructor(public brand: string, public speed: number) {}

  accelerate(): void {
    this.speed += 5;
  }

  brake(): void {
    this.speed -= 3;
  }
}

const car = new Car("Toyota", 50);
console.log(car.brand);
console.log(car.speed);
car.accelerate();
console.log(car.speed);
car.brake();
console.log(car.speed);

const bike = new Bike("Yamaha", 20);
console.log(bike.brand);
console.log(bike.speed);
bike.accelerate();
console.log(bike.speed);
bike.brake();
console.log(bike.speed);
