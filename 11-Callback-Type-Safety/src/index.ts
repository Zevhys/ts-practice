// ! Category : Easy
// TODO : reate a function named `processData` that takes two parameters: an array of type number and a callback. The callback takes a single parameter of type number and returns void. The `processData` function should call the callback for each element in the array.

function processData(params: number[], cb: Callback) {
  params.forEach(cb);
}

type Callback = (a: number) => void;

function logNumber(num: number): void {
  console.log(`Number: ${num}`);
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
processData(numbers, logNumber);

console.log("");

// ! Category : Medium
// TODO :  Create a function named `filterData` that takes two parameters: an array of type string and a callback. The callback takes a single parameter of type string and returns a boolean. The `filterData` function should return a new array containing only the elements for which the callback returns true.

function filterData(params: string[], cb: cbs) {
  let result: string[] = [];

  for (const element of params) {
    if (cb(element)) {
      result.push(element);
    }
  }
  return result;
}

type cbs = (a: string) => boolean;

function isShortString(str: string): boolean {
  return str.length < 5;
}

const strings = ["apple", "pear", "banana", "kiwi", "grape"];
const result = filterData(strings, isShortString);
console.log(result);
