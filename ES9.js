// 1. Asynchronous Iteration
async function* asyncGenerator() {
    yield 'Hello';
    yield 'World';
}

// Example usage
(async () => {
    for await (const value of asyncGenerator()) {
        console.log(value); // Hello, World
    }
})();

// Another example
async function fetchData() {
    const data = [1, 2, 3];
    for await (const item of data) {
        console.log(item); // 1, 2, 3
    }
}

// Example usage
fetchData();

// 2. Rest/Spread Properties
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };

// Example usage
console.log(obj2); // { a: 1, b: 2, c: 3 }

const obj3 = { d: 4, ...obj2 };

// Example usage
console.log(obj3); // { d: 4, a: 1, b: 2, c: 3 }

// 3. Promise.prototype.finally
const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Done!'), 1000);
});

// Example usage
promise
    .then(result => {
        console.log(result); // Done!
    })
    .finally(() => {
        console.log('Promise has been settled.'); // Promise has been settled.
    });

// Another example
const failedPromise = new Promise((_, reject) => {
    setTimeout(() => reject('Error!'), 1000);
});

failedPromise
    .catch(error => {
        console.log(error); // Error!
    })
    .finally(() => {
        console.log('Promise has been settled.'); // Promise has been settled.
    });