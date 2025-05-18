// ! Category: Easy
// Todo: Create a generic function named `identity` that takes one parameter `arg` and returns the same value with the same type. Use the generic type `T` to define this function. Implement this function so that it can accept any data type and return a value with the same type.

function identity<T>(arg: T): T {
  return arg;
}

console.log(identity(5));
console.log(identity("hello"));
console.log(identity(true));

console.log("");

// ! Category: Medium
// Todo: Create a generic function named `merge` that takes two parameters `obj1` and `obj2`, both of which are objects with generic types `T` and `U`. This function should merge the two objects and return a new object that is a combination of `obj1` and `obj2`. Use the generic types `T` and `U` to define this function.

function merge<T, U>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}

const obj1 = { name: "Alice" };
const obj2 = { age: 25 };
const mergedObj = merge(obj1, obj2);
console.log(mergedObj);
