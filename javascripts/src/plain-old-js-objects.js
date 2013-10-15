/* Write your code for the plain-old-js-objects-spec here */
function createTree() {
  FRUIT_BEARING_AGE = 3;
  MAX_AGE = 10;
  return {
    age: 0,
    height: 0,
    orangeCount: 0,
    isAlive: true,
    grow: function() {
      this.age += 1;
      this.height += 10;
      if (this.age >= FRUIT_BEARING_AGE) {
        this.orangeCount += Math.floor(Math.random()*10);
      };
      if (this.age >= MAX_AGE) {
        this.isAlive = false;
      };
    },
    dropOrange: function () {
      this.orangeCount--;
      return createOrange();
    }
  };
};

function createOrange() {
  return {
    color: "orange",
    flavor: "yummy",
    diameter: 20
  };
}