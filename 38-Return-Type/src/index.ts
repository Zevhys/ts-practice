// ! Category : Easy
// TODO : Create a function called add that accepts two parameters of type number and returns the sum of these parameters. Use the ReturnType utility type to create a new type called AddReturnType that represents the return type of the add function. Define a function called printAddResult that accepts a parameter of type AddReturnType and prints the result to the console.

function add(a: number, b: number) {
  return a + b;
}

type AddReturnType = ReturnType<typeof add>;

function printAddResult(params: AddReturnType): void {
  console.log(params);
}

const test: AddReturnType = add(10, 10);
printAddResult(test);

console.log("");

// ! Category : Medium
// TODO : Create a Calculator class that has a subtract method to subtract two numbers and a multiply method to multiply two numbers. Use the ReturnType utility type to create new types called SubtractReturnType and MultiplyReturnType that represent the return types of the subtract and multiply methods. Implement a function called calculateResults that accepts a parameter of type array containing SubtractReturnType and MultiplyReturnType, and returns an object containing the sum and multiplication of elements in that array.

class Calculator {
  subtract(a: number, b: number) {
    return {
      result: a - b,
    };
  }

  multiply(a: number, b: number) {
    return {
      result: a * b,
    };
  }
}

type SubtractReturnType = ReturnType<Calculator["subtract"]>;
type MultiplyReturnType = ReturnType<Calculator["multiply"]>;

function calculateResults(
  results: (SubtractReturnType | MultiplyReturnType)[]
) {
  return {
    sum: results.reduce((acc, curr) => acc + curr.result, 0),
    multiply: results.reduce((acc, curr) => acc * curr.result, 1),
  };
}

const calc = new Calculator();
const results = [
  calc.subtract(10, 5),
  calc.multiply(3, 4),
  calc.subtract(20, 10),
];

console.log(calculateResults(results));
