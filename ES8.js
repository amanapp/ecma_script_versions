// 1. Async/Await
const fetchData = async () => {
    return "Data fetched!";
};

// Example usage
const getData = async () => {
    const data = await fetchData();
    console.log(data); // Data fetched!
};

getData();

// Another example with error handling
const fetchWithError = async () => {
    throw new Error("Fetch error!");
};

const getDataWithErrorHandling = async () => {
    try {
        const data = await fetchWithError();
        console.log(data);
    } catch (error) {
        console.error(error.message); // Fetch error!
    }
};

getDataWithErrorHandling();

// 2. Object.values() and Object.entries()
const user = {
    name: "Alice",
    age: 30,
    city: "New York"
};

// Example usage of Object.values()
const values = Object.values(user);
console.log(values); // ['Alice', 30, 'New York']

// Example usage of Object.entries()
const entries = Object.entries(user);
console.log(entries); // [['name', 'Alice'], ['age', 30], ['city', 'New York']]