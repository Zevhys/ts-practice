// ! Category: Easy
// Todo: Create a class named `MathUtil` that has static methods `add` and `subtract`. The `add` method should take two parameters of type number and return their sum. The `subtract` method should take two parameters of type number and return their difference.

class MathUtil {
  static add(a: number, b: number): number {
    return a + b;
  }

  static subtract(a: number, b: number): number {
    return a - b;
  }
}

console.log(MathUtil.add(5, 3));
console.log(MathUtil.subtract(5, 3));

console.log("");

// ! Category: Medium
// Todo: Create a class named `Converter` that has static methods `toFahrenheit` and `toCelsius`. The `toFahrenheit` method should take one parameter of type number representing the temperature in degrees Celsius and return the temperature in degrees Fahrenheit. The `toCelsius` method should take one parameter of type number representing the temperature in degrees Fahrenheit and return the temperature in degrees Celsius.

class Converter {
  static toFahrenheit(c: number): number {
    return (c * 9) / 5 + 32;
  }

  static toCelsius(f: number): number {
    return ((f - 32) * 5) / 9;
  }
}

console.log(Converter.toFahrenheit(0));
console.log(Converter.toFahrenheit(100));
console.log(Converter.toCelsius(32));
console.log(Converter.toCelsius(212));
