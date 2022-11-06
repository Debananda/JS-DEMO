class Car {
  name = "";
  topSpeed = 0;
  constructor(givenName, givenSpeed) {
    this.name = givenName;
    this.topSpeed = givenSpeed;
  }
  run = function () {
    console.log(`Running ${this.name} @ ${this.topSpeed}`);
  };
}

class SUV extends Car {
  color = "";
  constructor(givenName, givenSpeed, givenColor) {
    super(givenName, givenSpeed);
    this.color = givenColor;
  }
  run = function () {
    console.log(
      `Running ${this.name} @ ${this.topSpeed + 50} - Color ${this.color}`
    );
  };
}

const car1 = new Car("Maruti 800", 80);
const car2 = new SUV("Verna", 120, "Red");

car1.run();
car2.run();
