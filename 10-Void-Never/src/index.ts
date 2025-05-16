// ! Category: Easy
// Todo: Create a function named `logInfo` that takes a single parameter of type string and returns void. The function should print the received message to the console in the format "Info: [message]".

function logInfo(params: string): void {
  console.log(`Info: ${params}`);
}

logInfo("Application started");
logInfo("User logged in");

console.log("");

// ! Category: Medium
// Todo: Create a function named `handleError` that takes a single parameter of type string and returns never. The function should always throw an exception with the received message.

function handleError(params: string): never {
  throw new Error(params);
}

try {
  handleError("Critical failure detected.");
} catch (e) {
  console.error(e);
}
