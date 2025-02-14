// ! Category : Easy
// TODO : Create a generic function named `createArray` that creates an array with elements of generic type `T`. This function should have optional parameters that specify the length of the array and the default element to fill the array. If the optional parameters are not provided, the function should use default values. Use the default type `number` for the generic type `T`.

function createArray<T = number>(length: number = 1, defaultValue?: T): T[] {
  return new Array(length).fill(
    defaultValue !== undefined ? defaultValue : (0 as any)
  );
}

const numericArray = createArray();
const stringArray = createArray<string>(3, "default");
console.log(stringArray);

console.log("");

// ! Category : Medium
// TODO : Create a generic class named `KeyValueStore` that uses `string` as the default type for the keys and `number` for the values. This class should have methods to add key-value pairs, get values by key, and remove key-value pairs by key.

class KeyValueStore<K = string, V = number> {
  private store: { [key: string]: V } = {};

  constructor(store?: { [key: string]: V }) {
    if (store) {
      this.store = store;
    }
  }

  add(key: K, value: V): void {
    this.store[key as unknown as string] = value;
  }

  get(key: K): V | undefined {
    return this.store[key as unknown as string];
  }

  remove(key: K): void {
    delete this.store[key as unknown as string];
  }
}

const store = new KeyValueStore<string, number>();
store.add("age", 25);
console.log(store.get("age"));
store.remove("age");
console.log(store.get("age"));
