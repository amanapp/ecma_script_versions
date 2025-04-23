// 1. Optional Chaining
const user = {
    name: "Alice",
    address: {
        city: "Wonderland"
    }
};

// Example usage
console.log(user.address?.city); // Wonderland
console.log(user.address?.zip); // undefined

// Another example
const getUserCity = (user) => user.address?.city || "City not found";
console.log(getUserCity(user)); // Wonderland
console.log(getUserCity({})); // City not found

// 2. Nullish Coalescing Operator
const value1 = null;
const value2 = "Hello, World!";

// Example usage
const result1 = value1 ?? "Default Value";
console.log(result1); // Default Value

const result2 = value2 ?? "Default Value";
console.log(result2); // Hello, World!

// Another example
const userInput = 0;
const finalValue = userInput ?? 42; // 0 is not null or undefined
console.log(finalValue); // 0

// 3. BigInt
const bigIntValue = 1234567890123456789012345678901234567890n; // Note the 'n' at the end

// Example usage
console.log(bigIntValue); // 1234567890123456789012345678901234567890n
console.log(bigIntValue + 1n); // 1234567890123456789012345678901234567891n

// Another example
const anotherBigInt = BigInt(123);
console.log(anotherBigInt); // 123n

// 4. Promise.allSettled
const promise1 = Promise.resolve(3);
const promise2 = Promise.reject("Error");
const promise3 = Promise.resolve(42);

// Example usage
Promise.allSettled([promise1, promise2, promise3])
    .then(results => {
        results.forEach((result) => {
            if (result.status === "fulfilled") {
                console.log(`Result: ${result.value}`); // Result: 3, Result: 42
            } else {
                console.log(`Error: ${result.reason}`); // Error: Error
            }
        });
    });

// Another example
const promise4 = new Promise((resolve) => setTimeout(resolve, 100, "Delayed Result"));
Promise.allSettled([promise1, promise4])
    .then(results => {
        results.forEach((result) => {
            if (result.status === "fulfilled") {
                console.log(`Result: ${result.value}`); // Result: 3, Result: Delayed Result
            }
        });
    });