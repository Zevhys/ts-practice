// ! Category : Easy

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

console.log("");
