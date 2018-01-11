function Fruit(attrs) {
  this.type = attrs.type;
  this.name = attrs.name;
  this.isRipe = attrs.isRipe;
  this.calories = attrs.calories;
}

Fruit.prototype.calculateCalories = function() {
  console.log(`Calories in a ${this.name} are ${this.calories * 200}`);
};

function Banana(banAttrs) {
  Fruit.call(this, banAttrs);
  this.doMonkeysEat = banAttrs.doMonkeysEat;
}

function Kiwi(kiwiAttrs) {
  Fruit.call(this, kiwiAttrs);
  this.isFuzzy = kiwiAttrs.isFuzzy;
  this.isPeeled = kiwiAttrs.isPeeled;
}

Kiwi.prototype = Object.create(Fruit.prototype);

Kiwi.prototype.peel = function() {
  if(this.isPeeled === false) {
    this.isPeeled = true;
  }
};

const newKiwi = new Kiwi({
  type: "Tree",
  name: "Tree Kiwi",
  isRipe: true,
  calories: 4,
  isFuzzy: true,
  isPeeled: false,
});

Banana.prototype = Object.create(Fruit.prototype);

Banana.prototype.ripen = function() {
  if(this.isRipe === false) {
    this.isRipe = true;
  }
};

const newBanana = new Banana({
  type: "Amazon",
  name: "Bananayums",
  isRipe: false,
  calories: 10,
  doMonkeysEat: true,
});

console.log(newBanana);
newBanana.calculateCalories();
newBanana.ripen();
console.log(newBanana);

console.log(newKiwi);
newKiwi.calculateCalories();
newKiwi.peel();
console.log(newKiwi);
