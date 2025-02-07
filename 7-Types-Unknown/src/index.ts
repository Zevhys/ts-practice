// ! Category : Easy

function isString(params: unknown): unknown {
  if (typeof params === "string") {
    return true;
  } else {
    return false;
  }
}

console.log(isString("hello"));
console.log(isString(123));
console.log(isString({}));

console.log("");

// ! Category : Medium

function safeParse(params: unknown) {
  try {
    if (typeof params === "string") {
      return JSON.parse(params);
    } else {
      return { error: "Parameter is not a string" };
    }
  } catch (error) {
    return "{error: 'Invalid JSON'}";
  }
}

console.log(safeParse('{"key": "value"}'));
console.log(safeParse("not a json"));
