// ! Category : Easy

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

// ! Category : Medium

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
