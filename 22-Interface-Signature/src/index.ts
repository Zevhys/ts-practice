// ! Category: Easy
// Todo: Create an interface named `Calculator` that has two methods: `add` and `subtract`. Both methods should have the same signature, which takes two parameters of type number and returns a value of type number. Implement this interface in a class named `SimpleCalculator` that provides the implementation for both methods.

interface Calculator {
  add(a: number, b: number): number;
  subtract(a: number, b: number): number;
}

class SimpleCalculator implements Calculator {
  add(a: number, b: number): number {
    return a + b;
  }

  subtract(a: number, b: number): number {
    return a - b;
  }
}

const calculator = new SimpleCalculator();
console.log(calculator.add(5, 3));
console.log(calculator.subtract(5, 3));

console.log("");

// ! Category: Medium
// Todo: Create an interface named `StringManipulator` that has three methods: `concatenate`, `toUpperCase`, and `toLowerCase`. The `concatenate` method should have a signature that takes two parameters of type string and returns a value of type string. The `toUpperCase` and `toLowerCase` methods should each have a signature that takes one parameter of type string and returns a value of type string. Implement this interface in a class named `BasicStringManipulator` that provides the implementation for all three methods.

interface StringManipulator {
  concatenate(a: string, b: string): string;
  toUpperCase(a: string): string;
  toLowerCase(a: string): string;
}

class BasicStringManipulator implements StringManipulator {
  concatenate(a: string, b: string): string {
    return "".concat(a, b);
  }

  toUpperCase(a: string): string {
    return a.toUpperCase();
  }

  toLowerCase(a: string): string {
    return a.toLowerCase();
  }
}

const manipulator = new BasicStringManipulator();
console.log(manipulator.concatenate("Hello", "World"));
console.log(manipulator.toUpperCase("hello"));
console.log(manipulator.toLowerCase("WORLD"));
