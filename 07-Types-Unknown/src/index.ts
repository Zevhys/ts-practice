// ! Category: Easy
// Todo: Create a function named `isString` that takes a parameter of type `unknown` and returns a boolean value. The function should check if the parameter is a string. If the parameter is a string, the function should return true; otherwise, it should return false.

function isString(params: unknown): unknown {
  if (typeof params === "string") {
    return true;
  } else {
    return false;
  }
}

console.log(isString("hello"));
console.log(isString(123));
console.log(isString({}));

console.log("");

// ! Category: Medium
// Todo: Create a function named `isString` that takes a parameter of type `unknown` and returns a boolean value. The function should check if the parameter is a string. If the parameter is a string, the function should return true; otherwise, it should return false.

function safeParse(params: unknown) {
  try {
    if (typeof params === "string") {
      return JSON.parse(params);
    } else {
      return { error: "Parameter is not a string" };
    }
  } catch (error) {
    return "{error: 'Invalid JSON'}";
  }
}

console.log(safeParse('{"key": "value"}'));
console.log(safeParse("not a json"));
