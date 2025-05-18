// ! Category: Easy
// Todo: Create a generic interface called 'DataContainer<T>' that has a property 'data' of type T, a method 'getValue()' that returns type T, and a method 'setValue(value: T)' that accepts a parameter of type T. Then implement this interface in a class called 'NumberContainer' that can only accept number data type. This class must be able to store a number value, retrieve the stored value, and modify the stored value.

interface DataContainer<T> {
  data: T;
  getValue(): T;
  setValue(value: T): T;
}

class NumberContainer implements DataContainer<number> {
  constructor(public data: number) { }

  getValue(): number {
    return this.data;
  }

  setValue(value: number): number {
    return (this.data = value);
  }
}

const numContainer = new NumberContainer(42);
console.log(numContainer.getValue());
numContainer.setValue(100);
console.log(numContainer.getValue());

console.log("");

// ! Category: Medium
// Todo: Create a generic interface named `Repository` that has three methods: `add`, `get`, and `remove`. The `add` method takes one parameter of generic type `T` and does not return a value. The `get` method returns a value of type `T` based on the given index. The `remove` method deletes the value based on the given index and does not return a value. Implement this interface in a class named `ArrayRepository` that uses an array to store items. Use the generic type `T` to define both the interface and the class.

interface Repository<T> {
  add(item: T): void;
  get(index: number): T;
  remove(index: number): void;
}

class ArrayRepository<T> implements Repository<T> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  get(index: number): T {
    return this.items[index];
  }

  remove(index: number): void {
    this.items.slice(index, 1);
  }
}

const repository = new ArrayRepository<number>();
repository.add(1);
repository.add(2);
console.log(repository.get(0));
repository.remove(0);
console.log(repository.get(0));
