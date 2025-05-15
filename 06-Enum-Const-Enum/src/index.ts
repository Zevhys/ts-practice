// ! Category : Easy
// TODO : Create an enum named `Direction` that represents the four cardinal directions: North, East, South, and West.Then, create a function named `turnLeft` that takes a parameter of type `Direction` and returns the direction after turning left.

enum Direction {
  North = "North",
  East = "East",
  South = "South",
  West = "West",
}

function turnLeft(direction: Direction): Direction {
  switch (direction) {
    case Direction.North:
      return Direction.West;
    case Direction.West:
      return Direction.South;
    case Direction.South:
      return Direction.East;
    case Direction.East:
      return Direction.North;
    default:
      throw new Error("Invalid Direction");
  }
}

let currentDirection: Direction = Direction.North;
currentDirection = turnLeft(currentDirection);
console.log(currentDirection);

console.log("");

// ! Category : Medium
// TODO : Create a const enum named `Status` that represents the status of a task: NotStarted, InProgress, and Completed. Then, create a class named `Task` with properties `title` of type string, `description` of type string, and `status` of type `Status`. Create a method named `start` in the class that changes the task's status to `InProgress`, and a method named `complete` that changes the task's status to `Completed`.

const enum Status {
  NotStarted = "Not Started",
  InProgress = "In Progress",
  Completed = "Completed",
}

class Task {
  title: string;
  description: string;
  status: Status;

  constructor(title: string, description: string) {
    this.title = title;
    this.description = description;
    this.status = Status.NotStarted;
  }

  start(): void {
    this.status = Status.InProgress;
  }

  complete(): void {
    this.status = Status.Completed;
  }
}

const task = new Task("Learn TypeScript", "Practice enums and const enums");
console.log(task.status);
task.start();
console.log(task.status);
task.complete();
console.log(task.status);
