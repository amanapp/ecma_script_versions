// 1. Array.prototype.flat()
const nestedArray = [1, 2, [3, 4, [5, 6]]];

// Example usage
const flatArray = nestedArray.flat(2); // Flattening to depth 2
console.log(flatArray); // [1, 2, 3, 4, 5, 6]

// Another example
const moreNestedArray = [1, [2, [3, [4]]]];
const flatMoreNestedArray = moreNestedArray.flat(); // Flattening to depth 1
console.log(flatMoreNestedArray); // [1, 2, [3, [4]]]

// 2. Array.prototype.flatMap()
const arrayOfNumbers = [1, 2, 3, 4];

// Example usage
const flatMappedArray = arrayOfNumbers.flatMap(num => [num, num * 2]);
console.log(flatMappedArray); // [1, 2, 2, 4, 3, 6, 4, 8]

// Another example
const sentences = ["Hello", "World"];
const words = sentences.flatMap(sentence => sentence.split(" "));
console.log(words); // ["Hello", "World"]

// 3. Object.fromEntries()
const entries = [['name', 'Alice'], ['age', 30]];

// Example usage
const obj = Object.fromEntries(entries);
console.log(obj); // { name: 'Alice', age: 30 }

// Another example
const keyValuePairs = [['x', 1], ['y', 2], ['z', 3]];
const objFromPairs = Object.fromEntries(keyValuePairs);
console.log(objFromPairs); // { x: 1, y: 2, z: 3 }

// 4. Optional Catch Binding
try {
    throw new Error("An error occurred");
} catch {
    console.log("Caught an error without binding it to a variable.");
}

// Another example
try {
    throw new Error("Another error");
} catch {
    console.log("Caught another error without binding.");
}