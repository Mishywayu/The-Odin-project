// Define an object using object literal syntax
const myDog = {
    name: 'Rex',
    breed: 'Golden Retriever',
    bark: function() {
      return `${this.name} is a ${this.breed} and says woof!`;
    }
  };
  
  // // Use the object's properties and methods
  // console.log(myDog.name); // Output: Rex
  // console.log(myDog.breed); // Output: Golden Retriever
  // console.log(myDog.bark()); // Output: Rex says woof!



// Object constructor
function Player (name, marker) {
    this.name = name;
    this.marker = marker;
}

// which you use by calling the function with the keyword new.
const player = new Player('Steve', 'X');
const player1 = new Player('Michelle', 'Y');
console.log(player.name);
console.log(player1.name);

console.log(Object.getPrototypeOf(player1) === Player.prototype);
console.log(Object.getPrototypeOf(player) === Player.prototype);



// function Players(name, marker) {
//     this.name = name;
//     this.marker = marker;
//     this.sayName = function() {
//       console.log(this.name)
//     };
//   }
  
//   const player3 = new Players('steve');
//   const player2 = new Players('also steve');
//   console.log(player3.sayName()); // logs 'steve'
//   console.log(player2.sayName()); // logs 'also steve'
  