// ! Category: Easy
// Todo: Create a type alias named `Point` that represents a point in Cartesian coordinates with properties `x` and `y`, both of type number. Create a function named `distanceFromOrigin` that takes a parameter of type `Point` and returns the distance from that point to the origin (0, 0).

type Point = {
  x: number;
  y: number;
};

function distanceFromOrigin(params: Point): number {
  return Math.sqrt(Math.pow(params.x, 2) + Math.pow(params.y, 2));
}

const point: Point = { x: 4, y: 4 };
console.log(distanceFromOrigin(point));

console.log("");

// ! Category: Medium
// Todo:  Create a type alias named `User` that represents a user with properties `id`, `name`, and `email`. Create a function named `createUser` that takes parameters `id` of type number, `name` of type string, and `email` of type string, and returns an object of type `User`. Additionally, create a function named `getUserInfo` that takes a parameter of type `User` and returns a string containing the user's information in the format "User [id]: [name] <[email]>".

type User = {
  id: number;
  name: string;
  email: string;
};

function createUser(id: number, name: string, email: string): User {
  return { id, name, email };
}

function getUserInfo(params: User): string {
  return `User ${params.id}: ${params.name} <${params.email}>`;
}

const user = createUser(1, "John Doe", "john.doe@example.com");
console.log(getUserInfo(user));
