// Arrow Functions

// Basic Arrow Function
// function add(a, b) {
//     return a + b;
//   }

  // Convert the function into an arrow function

const add = (a, b) => a + b;

console.log("----------------------------------");

// Single-Line Arrow Function

const double = n => n * 2;

console.log(double(4)); 

console.log("----------------------------------");


//Arrow Function with Implicit Return

const greet = name => `Hello, ${name}`;

console.log(greet("Sujeet")); 

console.log("----------------------------------");

//Arrow Function in Callback

const filterEvenNumbers = arr => arr.filter(num => num % 2 === 0);

console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));

console.log("----------------------------------");

//Arrow Function and this Context

function Person(name) {
    this.name = name;
    
    this.printNameArrow = () => {
      console.log(` My name is ${this.name}`);
    };
  
  }
  
  const person = new Person("Sujeet");
  
  person.printNameArrow();    
   