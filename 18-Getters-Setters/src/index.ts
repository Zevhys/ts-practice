// ! Category : Easy
// TODO : Create a class named `Person` that has two properties: `firstName` and `lastName`. Create a getter and setter for the `fullName` property that combines `firstName` and `lastName` with a space in between. The `fullName` setter should be able to split the given full name into `firstName` and `lastName`.

class Person {
  constructor(public firstName: string = "", public lastName: string = "") {}

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(value: string) {
    [this.firstName, this.lastName] = value.split(" ");
  }
}

const person = new Person();
person.firstName = "John";
person.lastName = "Doe";
console.log(person.fullName);

person.fullName = "Jane Smith";
console.log(person.firstName);
console.log(person.lastName);

console.log("");

// ! Category : Medium
// TODO : Create a class named `Rectangle` that has two properties: `width` and `height`. Create a getter for the `area` property that calculates and returns the area of the rectangle. Create a setter for the `area` property that allows setting the area of the rectangle, assuming that the `width` remains the same and the `height` will be adjusted proportionally.

class Rectangle {
  constructor(public width: number = 0, public height: number = 0) {}

  get area(): number {
    return this.width * this.height;
  }

  set area(wide: number) {
    this.height = wide / this.width;
  }
}

const rectangle = new Rectangle(5, 10);
console.log(rectangle.area);

rectangle.area = 100;
console.log(rectangle.height);
