// ! Category : Easy
// TODO : Create a class named `Person` with properties `name` and `age`. The `name` property should be accessible from outside the class but should not be changeable after initialization. The `age` property should be accessible and changeable from outside the class. The class should also have a method named `getDetails` that returns a string in the format: "<name> is <age> years old."

class Person {
  constructor(readonly name: string, public age: number) {}

  getDetails(): string {
    return `${this.name} is ${this.age} years old`;
  }
}

const person = new Person("Alice", 30);
console.log(person.getDetails());
person.age = 31;
console.log(person.getDetails());
// person.name = "Bob"; Error: Cannot assign to 'name' because it is a read-only property.

console.log("");

// ! Category : Medium
// TODO : Create a class named `BankAccount` with properties `accountNumber`, `balance`, and `ownerName`.The `accountNumber` property should be initialized through the constructor and should not be changeable after that.The `balance` property should only be accessible and changeable from within the class. The `ownerName` property should be accessible and changeable from outside the class.The class should also have `deposit` and `withdraw` methods to add and subtract from the balance, as well as a method named `getAccountInfo` that returns a string in the format: "<ownerName>'s account <accountNumber> has balance: $<balance>."

class BankAccount {
  constructor(
    readonly accountNumber: number,
    private balance: number,
    public ownerName: string
  ) {}

  deposit(amount: number): void {
    this.balance += amount;
  }

  withdraw(amount: number): void {
    if (this.balance >= amount) {
      this.balance -= amount;
    } else {
      console.log("Insufficient funds.");
    }
  }

  getAccountInfo(): string {
    return `${this.ownerName}'s account ${this.accountNumber} has balance: $${this.balance}.`;
  }
}

const account = new BankAccount(123456, 1000, "Alice");
console.log(account.getAccountInfo());
account.deposit(500);
console.log(account.getAccountInfo());
account.withdraw(200);
console.log(account.getAccountInfo());
account.ownerName = "Bob";
console.log(account.getAccountInfo());
// account.accountNumber = 654321; Error: Cannot assign to 'accountNumber' because it is a read-only property.
// console.log(account.balance); Error: Property 'balance' is private and only accessible within class 'BankAccount'.
