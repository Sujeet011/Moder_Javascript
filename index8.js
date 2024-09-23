// using optional chaining

//Basic Optional Chaining

function getUserCity(user) {
    return user?.address?.city;
}

const user1 = { name: "Sujeet", address: { city: "Noida" } };
const user2 = { name: "Avik" };

console.log(getUserCity(user1)); 
console.log(getUserCity(user2)); 

console.log("--------------------------");

// Optional Chaining with Arrays

function getFirstFriend(user) {
    return user?.friends?.[0];
}

const user3 = { name: "Sapna", friends: ["Ravita", "Usha"] };
const user4 = { name: "Avik" };

console.log(getFirstFriend(user3)); 
console.log(getFirstFriend(user4)); 

console.log("--------------------------");

// Optional Chaining with Function Calls

function callOptionalMethod(obj) {
    return obj?.greet?.();
}

const obj1 = { greet: () => "Hello!" };
const obj2 = { name: "No Greet Method" };

console.log(callOptionalMethod(obj1)); 
console.log(callOptionalMethod(obj2)); 

console.log("--------------------------");

// Optional Chaining with Nested Objects

function getNestedProperty(obj) {
    return obj?.a?.b?.c?.d;
}

const obj3 = { a: { b: { c: { d: 42 } } } };
const obj4 = { a: { b: { } } };

console.log(getNestedProperty(obj3)); 
console.log(getNestedProperty(obj4)); 

console.log("--------------------------");

// Optional Chaining with Default Values


function getNestedPropertyWithDefault(obj) {
    return obj?.a?.b?.c?.d ?? "Not Available";
}

console.log(getNestedPropertyWithDefault(obj3)); // Output: "Not Available"
