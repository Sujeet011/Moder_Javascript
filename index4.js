//Default Parameters in Function

// Basic Default Parameters

function greet(name = "Guest"){
    return `Hello, ${name}!`
}

console.log(greet());
console.log(greet("Sujeet"));

console.log("----------------------------");


// Multiple Default Parameters

function calculateTotal(price, tax = 0.05) {
    return price + (price * tax);
  }
  
  console.log(calculateTotal(100));       
  console.log(calculateTotal(100, 0.1)); 

  console.log("----------------------------");

  //Default Parameters with Undefined Values

  function describePerson(name, age = 25) {
    return `${name} is ${age} years old.`;
  }
  
  
  console.log(describePerson("Sujeet"));            
  console.log(describePerson("Sujeet", undefined)); 
  console.log(describePerson("Avik", 30));  

  console.log("----------------------------");
  
  
  // Default Parameters in Complex Expression

  function calculateDiscount(price, discount = price * 0.1) {
    return price - discount;
  }
  
  console.log(calculateDiscount(100));        
  console.log(calculateDiscount(200, 20)); 

  console.log("----------------------------");

  // Overriding Default Parameters

  function createUser(username, role = "user") {
    return { username, role };
  }
  
  console.log(createUser("Sujeet"));      
  console.log(createUser("Sujeet", "admin"));