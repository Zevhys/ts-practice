// ! Category : Easy

function printMessage(a: any): any {
  if (typeof a === "string") {
    console.log(`Message is a string: ${a}`);
  } else if (typeof a === "number") {
    console.log(`Message is a number: ${a}`);
  } else if (typeof a === "boolean") {
    console.log(`Message is a boolean: ${a}`);
  } else {
    console.log("Message is of unknown type");
  }
}

printMessage("Hello");
printMessage(42);
printMessage(true);
printMessage([1, 2, 3]);

console.log("");

// ! Category : Medium

function mergeObjects(a: any, b: any): any {
  if (
    a !== null &&
    typeof a === "object" &&
    b !== null &&
    typeof b === "object"
  ) {
    return { ...a, ...b };
  } else {
    return "Both parameters must be objects";
  }
}

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

console.log(mergeObjects(null, obj2));
console.log(mergeObjects(obj1, 42));

console.log("");
