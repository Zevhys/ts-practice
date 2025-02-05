// ! Category : Easy

function isEven(a: number): boolean {
  return a % 2 === 0;
}

console.log(isEven(4));
console.log(isEven(7));

console.log("");

// ! Category : Medium

function describePerson(name: string, age: number): string {
  return `My name is ${name} and I am ${age} years old.`;
}

console.log(describePerson("Alice", 30));
console.log(describePerson("Bob", 25));

console.log("");

// ! Category : Hard

function calculateBMI(weight: number, height: number): string {
  let bmi = weight / (height * height);

  if (bmi < 18.5) {
    return "Underweight";
  } else if (bmi <= 24.9) {
    return "Normal weight";
  } else if (bmi <= 29.9) {
    return "Overweight";
  }
  return "Obese";
}

console.log(calculateBMI(60, 1.7));
console.log(calculateBMI(80, 1.7));
console.log(calculateBMI(50, 1.6));
console.log(calculateBMI(90, 1.6));
