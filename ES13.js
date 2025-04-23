// 1. Top-level await
// Note: This requires a module context to run properly.
const fetchData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await response.json();
    return data;
};

// Example usage
fetchData().then(data => console.log(data)); // Fetches and logs data from the API

// 2. Class Fields
class Person {
    name = 'John Doe'; // Public field
    #age = 30; // Private field

    getAge() {
        return this.#age;
    }
}

// Example usage
const person = new Person();
console.log(person.name); // John Doe
console.log(person.getAge()); // 30

// 3. Private Methods
class Counter {
    #count = 0;

    #increment() {
        this.#count++;
    }

    incrementAndGet() {
        this.#increment();
        return this.#count;
    }
}

// Example usage
const counter = new Counter();
console.log(counter.incrementAndGet()); // 1
console.log(counter.incrementAndGet()); // 2

// 4. WeakRefs and FinalizationRegistry
const registry = new FinalizationRegistry((heldValue) => {
    console.log(`Cleaning up: ${heldValue}`);
});

let obj = { name: 'Weak Reference Example' };
const weakRef = new WeakRef(obj);

// Example usage
registry.register(obj, 'Object 1');
obj = null; // Allow garbage collection
// The cleanup callback will be called when the object is garbage collected