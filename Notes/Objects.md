###### NOTES OF WHAT I AM LEARNING IN JS

# OBJECTS
#### OBJECT LITERAL METHOD
The Object Literal method in JavaScript is a concise way to create objects using a
simple and straightforward syntax. It involves defining an object directly
using curly braces {} and specifying its properties and methods inside the braces.

#### Example:
// Define an object using object literal syntax  
const myDog = {  
    name: 'Rex',  
    breed: 'Golden Retriever',  
    bark: function() {  
      return `${this.name} says woof!`;  
    }  
  };
  
  // Use the object's properties and methods
  console.log(myDog.name); // Output: Rex 
  console.log(myDog.breed); // Output: Golden Retriever
  console.log(myDog.bark()); // Output: Rex says woof!


  ### What is an OBJECT CONSTRUCTOR
It's a special function used to create and initialize objects.
When you use the new keyword with a constructor function, it creates a new instance of an object.
#### Example
// Define a constructor function  
function Dog(name, breed) {  
  this.name = name;  
  this.breed = breed;  
  this.bark = function() {  
    return `${this.name} says woof!`;  
  };  
}

// Instantiate an object using the constructor function  (new keyword)
const myDog = new Dog('Rex', 'Golden Retriever');

// Use the object's properties and methods
console.log(myDog.name); // Output: Rex
console.log(myDog.breed); // Output: Golden Retriever
console.log(myDog.bark()); // Output: Rex says woof!
