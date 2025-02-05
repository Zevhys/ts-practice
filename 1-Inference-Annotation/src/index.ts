// ! category : Easy

function greet(name: string): string {
  return `Hello, ${name}!`;
}

console.log(greet("Alice"));

// ! category : Medium

function calculateArea(
  width: number,
  height: number
): { width: number; height: number; area: number } {
  return { width: width, height: height, area: width * height };
}

const rectangle = calculateArea(5, 10);
console.log(rectangle);

// ! category : Hard

class Person {
  name: string;
  age: number;
  email: string;

  constructor(name: string, age: number, email: string) {
    this.name = name;
    this.age = age;
    this.email = email;
  }

  getProfile(): { name: string; age: number } {
    return { name: this.name, age: this.age };
  }
}

const person = new Person("Bob", 30, "bob@example.com");
console.log(person.getProfile());
