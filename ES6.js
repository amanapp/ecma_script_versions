// 1. Arrow Functions
const add = (a, b) => a + b;
const square = x => x * x;

// Example usage
console.log(add(2, 3)); // 5
console.log(square(4)); // 16

// 2. Template Literals
const name = "John";
const greeting = `Hello, ${name}!`;

// Example usage
console.log(greeting); // Hello, John!

// 3. Destructuring Assignment
const person = { name: "Alice", age: 30 };
const { name: personName, age } = person;

// Example usage
console.log(personName); // Alice
console.log(age); // 30

// 4. Classes
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks.`);
    }
}

// Example usage
const dog = new Dog('Rex');
dog.speak(); // Rex barks.

// 5. Modules (import/export)
// Note: This part will be commented out as it requires a module system to run.
export const pi = 3.14;
export function add(a, b) {
    return a + b;
}

// Example usage (in another file):
// import { pi, add } from './es6_examples.js';
// console.log(pi); // 3.14
// console.log(add(2, 3)); // 5