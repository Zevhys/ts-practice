// ! category : Easy

function greet(name: string): string {
  return `Hello, ${name}!`;
}

console.log(greet("Alice"));

console.log("");

// ! category : Medium

function calculateArea(
  width: number,
  height: number
): { width: number; height: number; area: number } {
  return { width: width, height: height, area: width * height };
}

const rectangle = calculateArea(5, 10);
console.log(rectangle);

console.log("");
