// ! Category: Easy
// Todo: Create a base class named `Animal` that has a method `makeSound` which returns a string. Then, create two derived classes `Dog` and `Cat` that each implement the `makeSound` method to return the corresponding animal sound. For `Dog`, the `makeSound` method should return the string "Woof". For `Cat`, the `makeSound` method should return the string "Meow".

class Animal {
  makeSound(): string {
    return "";
  }
}

class Dog extends Animal {
  makeSound(): string {
    return "Woof";
  }
}

class Cat extends Animal {
  makeSound(): string {
    return "Meow";
  }
}

const dog = new Dog();
console.log(dog.makeSound());

const cat = new Cat();
console.log(cat.makeSound());

console.log("");

// ! Category: Medium
// Todo: Create a base class named `Shape` that has a method `area` which returns a number. Then, create two derived classes `Circle` and `Rectangle` that each implement the `area` method according to the area formula for each shape. For `Circle`, use the area formula for a circle (πr²). For `Rectangle`, use the area formula for a rectangle (length × width).

class Shape {
  area(): number {
    return 0;
  }
}

class Circle extends Shape {
  constructor(public radius: number) {
    super();
  }

  area(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  constructor(public length: number, public width: number) {
    super();
  }

  area(): number {
    return this.length * this.width;
  }
}

const circle = new Circle(5);
console.log(circle.area());
const rectangle = new Rectangle(4, 6);
console.log(rectangle.area());
