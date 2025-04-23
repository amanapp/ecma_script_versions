// 1. Logical Assignment Operators
let a = 1;
let b = 0;

// Example usage
a ||= 2; // equivalent to a = a || 2
b &&= 2; // equivalent to b = b && 2
console.log(a); // 1
console.log(b); // 0

let c = null;
c ??= 3; // equivalent to c = c ?? 3
console.log(c); // 3

// 2. Numeric Separators
const billion = 1_000_000_000;
const hex = 0xFF_FF_FF;
const binary = 0b1010_1010;

// Example usage
console.log(billion); // 1000000000
console.log(hex); // 16777215
console.log(binary); // 170

// 3. String.prototype.replaceAll
const text = "Hello, world! Hello, everyone!";

// Example usage
const newText = text.replaceAll("Hello", "Hi");
console.log(newText); // Hi, world! Hi, everyone!

const sentence = "The quick brown fox jumps over the lazy dog.";
const updatedSentence = sentence.replaceAll("o", "0");
console.log(updatedSentence); // The quick br0wn f0x jumps 0ver the lazy d0g.

// 4. Promise.any
const promise1 = Promise.reject("Error 1");
const promise2 = Promise.resolve(2);
const promise3 = Promise.resolve(3);

// Example usage
Promise.any([promise1, promise2, promise3])
    .then(result => console.log(result)) // 2
    .catch(error => console.log(error));

// Another example
const promise4 = Promise.reject("Error 2");
const promise5 = Promise.reject("Error 3");

Promise.any([promise4, promise5])
    .then(result => console.log(result))
    .catch(error => console.log(error)); // Error: All promises were rejected