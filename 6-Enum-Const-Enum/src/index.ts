// ! Category : Easy

enum Direction {
  North,
  East,
  South,
  West,
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
