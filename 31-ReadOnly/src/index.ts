// ! Category : Easy
// TODO : Create a class named `Student` that has properties `name` and `age`. The `name` property should be readonly so that its value cannot be changed after the object is created. Implement this class and create an instance of the `Student` class with the name "John" and age 20. Try to change the value of the `name` property after the instance is created and ensure that TypeScript throws an error.

class Student {
  readonly name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const student = new Student("John", 20);
// student.name = "jane"; Cannot assign to 'name' because it is a read-only property.
console.log(student);

console.log("");

// ! Category : Medium
// TODO : Create an interface `Book` that has properties `title`, `author`, and `year`. The `title` and `author` properties should be readonly. Implement a class `Library` that has a method `addBook` to add books to a list of books and a method `getBooks` to get the list of all books. Create an instance of the `Library` class, add some books, and display the list of books.

interface Book {
  readonly title: string;
  readonly author: string;
  year: number;
}

class Library {
  private books: Book[] = [];

  addBook(book: Book): void {
    this.books.push(book);
  }

  getBooks(): Book[] {
    return this.books;
  }
}

const buku = new Library();
buku.addBook({
  title: "Hujan Kepagian",
  author: "Nugroho Notususanto",
  year: 2011,
});

console.log(buku.getBooks());
