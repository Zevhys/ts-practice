// ! Category : Easy
// TODO : Create a class named `Animal` with properties `name` and `sound`. The class should have a constructor that takes two parameters: `name` and `sound`, which will be initialized to the class properties. Additionally, create a method named `makeSound` that returns a string in the format: "<name> makes a '<sound>' sound."

class Animal {
  name: string;
  sound: string;

  constructor(name: string, sound: string) {
    this.name = name;
    this.sound = sound;
  }

  makeSound(): string {
    return `${this.name} makes a '${this.sound}' sound.`;
  }
}

const dog = new Animal("Dog", "bark");
console.log(dog.makeSound());

console.log("");

// ! Category : Medium
// TODO : Create a class named `Book` with properties `title`, `author`, and `year`. The class should have a constructor that takes three parameters: `title`, `author`, and `year`, which will be initialized to the class properties. Additionally, create a method named `getSummary` that returns a string in the format: "<title> by <author>, published in <year>."

class Book {
  title: string;
  author: string;
  year: number;

  constructor(title: string, author: string, year: number) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  getSummary(): string {
    return `${this.title} by ${this.author}, published in ${this.year}`;
  }
}

const book = new Book("1984", "George Orwell", 1949);
console.log(book.getSummary());
