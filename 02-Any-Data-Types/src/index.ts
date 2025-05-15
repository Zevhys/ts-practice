// ! Category : Easy
// TODO : Create a function named `printMessage` that takes a single parameter of type `any`. The function should check the type of the parameter and print an appropriate message:
/* 
- If the type is `string`, print: "Message is a string: [message]"
- If the type is `number`, print: "Message is a number: [message]"
- If the type is `boolean`, print: "Message is a boolean: [message]"
- For other types, print: "Message is of unknown type" 
*/

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
// TODO : Create a function named `mergeObjects` that takes two parameters of type `any`. The function should check if both parameters are objects. If they are, merge the two objects and return the result. If either parameter is not an object, return an error message: "Both parameters must be objects".

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
