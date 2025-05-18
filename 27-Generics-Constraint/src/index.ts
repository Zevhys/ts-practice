// ! Category: Easy
// Todo: Create a generic function named `mergeObjects` that merges two objects. This function should use generic constraints to ensure that both parameters are objects. The function should return a new object that is a combination of the two objects provided as parameters.

function mergeObjects<T extends object, U extends object>(
  obj1: T,
  obj2: U
): T & U {
  return { ...obj1, ...obj2 };
}

const obj1 = { name: "Alice" };
const obj2 = { age: 30 };
const merged = mergeObjects(obj1, obj2);
console.log(merged);

console.log("");

// ! Category: New
// Todo: Create a generic class named `Collection` that uses generic constraints to ensure that the type of elements in the collection has a property `id` of type number. This class should have methods to add elements, get elements by id, and remove elements by id.

class Collection<T extends { id: number }> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  getById(id: number): T | undefined {
    return this.items.find((item) => item.id === id);
  }

  removeById(id: number): void {
    const index = this.items.findIndex((item) => item.id === id);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }
}

interface Item {
  id: number;
  name: string;
}

const collection = new Collection<Item>();
collection.add({ id: 1, name: "Item 1" });
collection.add({ id: 2, name: "Item 2" });

console.log(collection.getById(1));
collection.removeById(1);
console.log(collection.getById(1));
