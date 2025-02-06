// ! Category : Easy

function printMessage(a: any): any {
  if (typeof a === "string") {
    console.log(`Message is a string: ${a}`);
  } else if (typeof a === "number") {
    console.log(`Message is a number: ${a}`);
  } else if (typeof a === "boolean") {
    console.log(`Message is a boolean: ${a}`);
  } else {
    console.log("Message is of unknown type");
  }
}

printMessage("Hello");
printMessage(42);
printMessage(true);
printMessage([1, 2, 3]);

console.log("");

// ! Category : Medium

function mergeObjects(a: any, b: any): any {
  if (
    a !== null &&
    typeof a === "object" &&
    b !== null &&
    typeof b === "object"
  ) {
    return { ...a, ...b };
  } else {
    return "Both parameters must be objects";
  }
}

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

console.log(mergeObjects(null, obj2));
console.log(mergeObjects(obj1, 42));

console.log("");

// ! Category : Hard

class DynamicStore {
  private store: { [key: string]: any } = {};

  setItem(key: string, value: any): void {
    this.store[key] = value;
  }

  getItem(key: string): any {
    if (key in this.store) {
      return this.store[key];
    } else {
      return "Item not found";
    }
  }

  removeItem(key: string): void | string {
    if (key in this.store) {
      delete this.store[key];
    } else {
      return "Item not found";
    }
  }
}

const store = new DynamicStore();
store.setItem("name", "Alice");
console.log(store.getItem("name"));
store.removeItem("name");
console.log(store.getItem("name"));
