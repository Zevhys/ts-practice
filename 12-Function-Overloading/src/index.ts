// ! Category: Easy
// Todo: Create a function named `calculateArea` that can accept various types of parameters to calculate the area of different geometric shapes. The function should support the following overloads: - Two parameters of type number representing the length and width to calculate the area of a rectangle. - One parameter of type number representing the radius to calculate the area of a circle.

function calculateArea(a: number, b?: number): number;
function calculateArea(a: number, b?: number): number {
  if (b !== undefined) {
    return a * b;
  } else {
    return Math.PI * Math.pow(a, 2);
  }
}

console.log(calculateArea(5, 10));
console.log(calculateArea(7));

console.log("");

// ! Category: Medium
// Todo: Create a function named `getUserInfo` that can accept various types of parameters to get user information. The function should support the following overloads: - One parameter of type number representing the user ID and return the user information as an object with properties id and name. - One parameter of type string representing the user name and return the user information as an object with properties id and name.

const users = [
  {
    id: 1,
    name: "Alice",
  },
  {
    id: 2,
    name: "Bob",
  },
  {
    id: 3,
    name: "Charlie",
  },
];

function getUserInfo(id: number): { id: number; name: string };
function getUserInfo(name: string): { id: number; name: string };
function getUserInfo(
  params: number | string
): { id: number; name: string } | undefined {
  if (typeof params === "number") {
    return users.find((user) => user.id === params);
  } else if (typeof params === "string") {
    return users.find((user) => user.name === params);
  }
}

console.log(getUserInfo(1));
console.log(getUserInfo("Bob"));
