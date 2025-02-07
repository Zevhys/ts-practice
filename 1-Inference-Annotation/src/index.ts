// ! category : Easy
// TODO : Create a function named `greet` that takes a single parameter of type string and returns a string containing a greeting message. Use type inference to determine the data type of the parameter and the function's return value.

function greet(name: string): string {
  return `Hello, ${name}!`;
}

console.log(greet("Alice"));

console.log("");

// ! category : Medium
// TODO : Create a function named `calculateArea` that takes two parameters: `width` and `height`, both of type number. This function should return an object containing the `width`, `height`, and the area of the rectangle. Use type annotations to specify the data type of the parameters and the function's return value.

function calculateArea(
  width: number,
  height: number
): { width: number; height: number; area: number } {
  return { width: width, height: height, area: width * height };
}

const rectangle = calculateArea(5, 10);
console.log(rectangle);
