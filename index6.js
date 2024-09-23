// Rest and Spread

// Reast Parametr

function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sum(1, 2, 3, 4));

console.log("--------------------------------");


// Spread with Arrays

function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}

console.log(mergeArrays([1, 2], [3, 4]));

console.log("--------------------------------");

// Spread with Objects

function updatePerson(person, updates) {
    return { ...person, ...updates };
}

const person = { name: "John", age: 30 };
const updates = { age: 31, city: "New York" };

console.log(updatePerson(person, updates));

console.log("--------------------------------");

// Rest with Destructuring

function extractFirstAndRest(arr) {
    const [first, ...rest] = arr;
    return { first, rest };
}

console.log(extractFirstAndRest([1, 2, 3, 4]));

console.log("--------------------------------");

// Spread in Function Calls

function calculateTotal(...args) {
    return sum(...args);
}

console.log(calculateTotal(5, 10, 15)); 
