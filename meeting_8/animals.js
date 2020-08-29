class Animals {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  move() {
    console.log("MOVED");
  }
}

const animal = new Animals("Vasya", 3);
console.log(animal);

class Bird extends Animals {
  move() {
    console.log("Птичка летает");
  }
}

class Cat extends Animals {
  move() {
    console.log("Котик ходит");
  }
}
