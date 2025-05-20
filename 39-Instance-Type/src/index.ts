// ! Category: Easy
// Todo: Create a Person class with properties name and age, and a greet method that prints a greeting message to the console. Use the InstanceType utility type to create a new type called PersonInstance that represents the type of Person class instance. Define a function called printPersonDetails that accepts a parameter of type PersonInstance and prints the details of name and age properties to the console.

class Person {
  constructor(public name: string, public age: number) { }

  greet(): string {
    return `"Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

type PersonInstance = InstanceType<typeof Person>;

function printPersonDetails(params: PersonInstance): void {
  console.log(`Name: ${params.name}, Age: ${params.age}`);
}

const person1 = new Person("rusher", 20);
console.log(person1.greet());
printPersonDetails(person1);

console.log("");

// ! Category: Medium
// Todo: Create an Animal class with properties species and sound, and a makeSound method that prints the animal's sound to the console. Create a Dog class that inherits from the Animal class and has an additional breed property. Use the InstanceType utility type to create new types called AnimalInstance and DogInstance that represent the types of Animal and Dog class instances. Implement a function called describeAnimal that accepts a parameter of type AnimalInstance or DogInstance, and prints the details of species, sound, and breed (if available) properties to the console.

class Animal {
  constructor(public species: string, public sound: string) { }

  makeSound(): string {
    return ``;
  }
}

class Dog extends Animal {
  constructor(
    public species: string,
    public sound: string,
    public breed: string
  ) {
    super(species, sound);
  }
}

type AnimalInstance = InstanceType<typeof Animal>;
type DogInstance = InstanceType<typeof Dog>;

function describeAnimal(animal: AnimalInstance | DogInstance): void {
  const description =
    animal instanceof Dog
      ? `Species: ${animal.species}, Sound: ${animal.sound}, Breed: ${animal.breed}`
      : `Species: ${animal.species}, Sound: ${animal.sound}`;
  console.log(description);
}

const myDog = new Dog("Dog", "Woof", "Golden Retriever");
describeAnimal(myDog);

const myAnimal = new Animal("Cat", "Meow");
describeAnimal(myAnimal);
