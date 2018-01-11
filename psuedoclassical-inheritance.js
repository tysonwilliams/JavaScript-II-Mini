class Fruit {
  constructor(attrs) {
    this.type = attrs.type;
    this.name = attrs.name;
    this.isRipe = attrs.isRipe;
    this.calories = attrs.calories;
  }
  calculateCalories() {
    console.log(`Calories in a ${this.name} are ${this.calories * 200}`);
  }
}

class Banana extends Fruit {
  constructor(banAttrs) {
    super(banAttrs);
    this.doMonkeysEat = banAttrs.doMonkeysEat;
  }
  ripen() {
    if(this.isRipe === false) {
      this.isRipe = true;
    }
  }
}

class Kiwi extends Fruit {
  constructor(kiwiAttrs) {
    super(kiwiAttrs);
    this.isFuzzy = kiwiAttrs.isFuzzy;
    this.isPeeled = kiwiAttrs.isPeeled;
  }
  peel() {
    if(this.isPeeled === false) {
      this.isPeeled = true;
    }
  }
}

const newBanana = new Banana({
  type: "Amazon",
  name: "Bananayums",
  isRipe: false,
  calories: 10,
  doMonkeysEat: true,
});

const newKiwi = new Kiwi({
  type: "Tree",
  name: "Tree Kiwi",
  isRipe: true,
  calories: 4,
  isFuzzy: true,
  isPeeled: false,
});

console.log(newBanana);
newBanana.calculateCalories();
newBanana.ripen();
console.log(newBanana);

console.log(newKiwi);
newKiwi.calculateCalories();
newKiwi.peel();
console.log(newKiwi);
