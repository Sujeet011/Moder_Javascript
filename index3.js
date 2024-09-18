// Object Shorthand

// Basic Object Shorthand

function createPerson(name, age) {
    return {name , age};
}

console.log(createPerson("Sujeet", 30));

console.log("-------------------------------")

//Method Shorthand

function createintro(name, age) {
    return {
      name,
      age,
      introduce() {
        console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
      }
    };
  }

  const person = createintro("Sujeet", 25);
person.introduce(); 

console.log("-------------------------------");

// Computed Property Nmaes

function createObject(key, value) {
    return { [key]: value };
  }
  
  console.log(createObject("name", "Sujeet")); 
  
console.log("-------------------------------");

// Object Shorthand with Destructuring:

function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
  }
  
  const obj1 = { name: "Sujeet", age: 25 };
  const obj2 = { profession: "Developer", country: "India" };
  
  console.log(mergeObjects(obj1, obj2));
  
//  Advanced Shorthand Usage

function updatePerson(oldPerson, newName) {
    return { ...oldPerson, name: newName };
  }
  
  const oldPerson = { name: "Sujeet", age: 25 };
  const updatedPerson = updatePerson(oldPerson, "Avik");
  
  console.log(updatedPerson); 
  
  