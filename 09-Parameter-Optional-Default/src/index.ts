// ! Category : Easy
// TODO : Create a function named `greet` that takes two parameters: `name` (string) - the name of the person to greet, and `greeting` (string, optional) - the greeting to use. If `greeting` is not provided, use the default value "Hello". The function should return a greeting string in the format "[greeting], [name]!".

function greet(name: string, greeting?: string): string {
  if (!greeting) {
    return `Hello, ${name}!`;
  }
  return `${greeting} ${name}!`;
}

console.log(greet("Alice"));
console.log(greet("Bob", "Good morning"));
console.log(greet("Charlie", "Hi"));

console.log("");

// ! Category : Medium
// TODO : Create a function named `calculateArea` that takes two optional parameters: `width` (number, optional) - the width of the rectangle. If not provided, use the default value 1. `height` (number, optional) - the height of the rectangle. If not provided, use the default value 1. The function should return the area of the rectangle based on the values of `width` and `height`.

function calculateArea(width: number = 1, height: number = 1): number {
  return width * height;
}

console.log(calculateArea());
console.log(calculateArea(5));
console.log(calculateArea(5, 10));
console.log(calculateArea(undefined, 5));
