// ! Category : Easy
// TODO : Create a function named `getLength` that takes one parameter of type `unknown`. The function should use type assertion to check if the parameter is a string or an array, and return its length. If the parameter is neither a string nor an array, the function should return an error message.

function getLength(params: unknown): unknown {
  if (typeof params === "string") {
    return (params as string).length;
  } else if (Array.isArray(params)) {
    return (params as []).length;
  } else {
    return "Error: Parameter must be a string or an array";
  }
}

console.log(getLength("hello"));
console.log(getLength([1, 2, 3]));
console.log(getLength(123));
console.log(getLength({}));

console.log("");

// ! Category : Medium
// TODO :  Create a class named `Person` with properties `name` and `age`. Then, create a function named `describePerson` that takes a parameter of type `unknown`. The function should use type assertion to check if the parameter is an object of type `Person`, and return a string describing the person in the format "Name is age years old". If the parameter is not an object of type `Person`, the function should return an error message.

class Person {
  constructor(public name: string, public age: number) {}
}

function describePerson(params: unknown): string {
  if (typeof params === "object" && params !== null) {
    if (params.hasOwnProperty("name") && params.hasOwnProperty("age")) {
      const person = params as Person;
      return `${person.name} ${person.age}`;
    }
  }
  return "Error: Parameter must be of type Person";
}

console.log(describePerson(new Person("Alice", 30)));
console.log(describePerson({ name: "Bob", age: 25 }));
console.log(describePerson("Charlie"));
console.log(describePerson(45));
