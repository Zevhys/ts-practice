// ! Category: Easy
// Todo: Create a generic class named `Container` that can store a single value of any type. This class should have one property `value` to store the value and one method `getValue` that returns the stored value. Use the generic type `T` to define this class.

class Container<T> {
  constructor(public value: T) { }

  getValue(): T {
    return this.value;
  }
}

const numberContainer = new Container<number>(123);
console.log(numberContainer.getValue());

const stringContainer = new Container<string>("Hello");
console.log(stringContainer.getValue());

console.log("");

// ! Category: Medium
// Todo: Create a generic class named `Pair` that can store two values of any type. This class should have two properties `first` and `second` to store the values, and two methods `getFirst` and `getSecond` that return the `first` and `second` values respectively. Use the generic types `T` and `U` to define this class.

class Pair<T, U> {
  constructor(public first: T, public second: U) { }

  getFirst(): T {
    return this.first;
  }

  getSecond(): U {
    return this.second;
  }
}

const pair = new Pair<number, string>(1, "one");
console.log(pair.getFirst());
console.log(pair.getSecond());
