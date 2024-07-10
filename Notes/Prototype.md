# PROTOTYPE
All objects in JavaScript have a prototype.  
The prototype is another object that the original object inherits from, which is to say, the original object has access to all of its prototype’s methods and properties.

#### Let’s break it down.
1. All objects in JavaScript have a prototype  
2. The prototype is another object
3. …that the original object inherits from, and has access to all of its prototype’s methods and properties


### Accessing an object’s prototype
Eg, in the previous code that we wrote on about the object constructor  
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

//the prototype  
console.log(Object.getPrototypeOf(player1) === Player.prototype);  
console.log(Object.getPrototypeOf(player) === Player.prototype);  

Here, 
1. All objects in JavaScript have a prototype:  
You can check the object’s prototype by using the Object.getPrototypeOf() function on the object, like Object.getPrototypeOf(player1).
2. The prototype is another object…  
* The value of the Object Constructor’s .prototype property (i.e., Player.prototype) contains the prototype object.  
* The reference to this value of Player.prototype is stored in every Player object, every time a Player object is created.  
* Hence, you get a true value returned when you check the Objects prototype - Object.getPrototypeOf(player1) === Player.prototype.
3. that the original object inherits from, and has access to all of its prototype’s methods and properties:  
* As said in the earlier point, every Player object has a value which refers to Player.prototype.    
So: Object.getPrototypeOf(player1) === Object.getPrototypeOf(player2) (returns true).
* So, any properties or methods defined on Player.prototype will be available to the created Player objects!