// array and object destructuring

// Array Destructuring

function swap(a, b) {
    [a, b] = [b, a];
    return { a, b };
}

console.log(swap(5, 10)); 

console.log("---------------------------");

// Object Destructuring


function displayPerson(person) {
    const { name, age } = person;
    console.log(`Name: ${name}, Age: ${age}`);
}

const person1 = { name: "Avik", age: 25 };
displayPerson(person1);

console.log("---------------------------------");

// Nested Destructuring

function extractNestedData(obj) {
    const { name: { first, last }, age } = obj;
    return `First Name: ${first}, Last Name: ${last}, Age: ${age}`;
}

const person2 = { name: { first: "Avik", last: "Singh" }, age: 25 };
console.log(extractNestedData(person2)); 

console.log("---------------------------");

//  Default Values in Destructuring

function getCoordinates({ x = 0, y = 0 } = {}) {
    return `X: ${x}, Y: ${y}`;
}

console.log(getCoordinates({ x: 5, y: 10 }));
console.log(getCoordinates({ x: 8 }));        
console.log(getCoordinates());   


console.log("---------------------------");


// Rest in Destructuring

function getUserInfo(user) {
    const { name, ...rest } = user;
    return { name, rest };
}

const user1 = { name: "Sujeet", age: 23, city: "Noida", profession: "Engineer" };

console.log(getUserInfo(user1));

