// ! Category : Easy
// TODO : Create an interface named `GreetFunction` that defines a function named `greet` which takes one parameter `name` of type string and returns a string. Implement this interface in a function named `sayHello` that returns a greeting string like "Hello, [name]!".

interface GreetFunction {
  greet(name: string): string;
}

const sayHello: GreetFunction = {
  greet(name) {
    return `Hello, ${name}!`;
  },
};

const greetFunction: GreetFunction = sayHello;
console.log(greetFunction.greet("Alice"));

console.log("");

// ! Category : Medium
// TODO : Create an interface named `MathOperation` that defines a function named `operate` which takes two parameters of type number and returns a value of type number. Implement this interface in two functions named `add` and `multiply` that each sum and multiply two numbers respectively.

interface MathOperation {
  operate(a: number, b: number): number;
}

const add: MathOperation = {
  operate(a, b) {
    return a + b;
  },
};

const multiply: MathOperation = {
  operate(a, b) {
    return a * b;
  },
};

const addOperation: MathOperation = add;
console.log(addOperation.operate(2, 3));

const multiplyOperation: MathOperation = multiply;
console.log(multiplyOperation.operate(2, 3));
