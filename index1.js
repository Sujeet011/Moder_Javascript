//Temmplate Literals

// Basic String Interpolation

function greet(name, age) {
    return `Hello, my name is ${name}, and I am ${age} years old.`;
  }
  
  console.log(greet("John", 25)); 

  console.log("-----------------------------");

  //Multi-Line Strings

  function generateParagraph() {
    return `
    This is the first line.
    This is the second line.
    and this is the third line.`;
  }

  console.log(generateParagraph());

  console.log("----------------------------------------");


  //  Expression Inside Template Literals

  function calculateSum(a, b) {
    return `The sum of ${a} and ${b} is a ${a + b}.`;
  }

  console.log(calculateSum(5, 3));

  
  console.log("----------------------------------------");

  //Embedding a Function in Template Literals

  function formatCurrency(value) {
    return `$${value.toFixed(2)}`;
  }
  
  function displayPrice(item, price) {
    return `The price of ${item} is ${formatCurrency(price)}.`;
  }
  
  console.log(displayPrice("Laptop", 500));
  
  console.log("------------------------------------------");

  // Nested Template Literals

  function formatMessage(name, status) {
    return `Welcome back, ${name}! Your status is: ${status ? `active` : `inactive`}.`;
  }
  
  console.log(formatMessage("John", true));
  console.log(formatMessage("Jane", false));
  