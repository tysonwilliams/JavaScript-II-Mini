// to test these problems you can run 'node constructors.js' in your terminal

// problem #1
// add a method to Animal's prototype called 'grow'
// when 'grow' is invoked log '<name> grew larger!'

function Animal(options) {
  this.species = options.species;
  this.name = options.name;
}

// add 'grow' to Animal's prototype here
Animal.prototype.grow = function() {
  console.log(`${this.name} grew larger!`);
}

Animal.prototype.greeting = function() {
  console.log(`${this.name} says ${this.speak}!`);
}

function Dog(dogAttributes) {
  Animal.call(this, dogAttributes);
  this.speak = dogAttributes.speak;
  this.waggyTail = dogAttributes.waggyTail;
}

Dog.prototype = Object.create(Animal.prototype);

const doggie = new Dog({
  species: "Top Dog",
  name: "doggie",
  speak: "woof",
  waggyTail: true,
});

console.log(doggie);
doggie.greeting();

// problem #2
// setup Cat to inherit from Animal
// the Animal constructor needs to be invoked with the 'options' argument
// Cat should have its prototype inherit from Animal
// instances of Cat should also have access to the 'grow' method

// invoke Animal here with .call
function Cat(catAttributes) {
  Animal.call(this, catAttributes);
  this.speak = catAttributes.speak;
  this.getsHairballs = catAttributes.getsHairballs;
}

// connect the prototypes here
Cat.prototype = Object.create(Animal.prototype);

// if everything is setup properly the code below will print 'Foofie grew larger!'
// uncomment the code below to test your solution

// const foofie = new Cat({
  //   name: 'foofie',
  // });
  //
  // foofie.grow();

const kitty = new Cat({
  species: "Fluffy Cat",
  name: "kitty",
  speak: "meow",
  getsHairballs: true,
});

console.log(kitty);
kitty.grow();
