// ! Category : Easy
// TODO : Create a function named `printStatus` that takes a parameter `status` with a union type of 'success' | 'error' | 'loading'. The function should print a message based on the value of `status`:
/*
- If the status is 'success', print: "Operation was successful."
- If the status is 'error', print: "An error occurred during the operation."
- If the status is 'loading', print: "Operation is loading."
*/

function printStatus(status: "success" | "error" | "loading") {
  if (status === "success") {
    console.log("Operation was successful.");
  } else if (status === "error") {
    console.log("An error occurred during the operation.");
  } else if (status === "loading") {
    console.log("Operation is loading.");
  }
}

printStatus("success");
printStatus("error");
printStatus("loading");

console.log("");

// ! Category : Medium
// TODO : Create a function named `calculateArea` that takes two parameters: `shape` (with a union type of 'circle' | 'rectangle') and `dimensions` (with a union type of number | { width: number, height: number }). The function should calculate and return the area of the given shape:
/*
- If the shape is 'circle' and `dimensions` is a number, return the area of the circle using the formula: π * radius^2.
- If the shape is 'rectangle' and `dimensions` is an object { width: number, height: number }, return the area of the rectangle using the formula: width * height.
- If the parameters do not match the expected types, return an error message: "Invalid parameters."
*/

function calculateArea(
  shape: "circle" | "rectangle",
  dimensions: number | { width: number; height: number }
) {
  if (shape === "circle" && typeof dimensions === "number") {
    return Math.PI * Math.pow(dimensions, 2);
  } else if (shape === "rectangle" && typeof dimensions === "object") {
    return dimensions.width * dimensions.height;
  } else {
    return "Invalid parameters.";
  }
}

console.log(calculateArea("circle", 5));
console.log(calculateArea("rectangle", { width: 4, height: 5 }));
console.log(calculateArea("rectangle", 5));
