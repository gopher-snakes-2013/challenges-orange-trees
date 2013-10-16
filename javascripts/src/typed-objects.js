var FRUIT_BEARING_AGE = 10;
var MAX_AGE = 100;

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var Tree = function() {
  this.age = 0;
  this.height = 0;
  this.isAlive = true;
}

var OrangeTree = function() {
  this.orangeCount = 0;

  this.grow = function() {
    this.age += 1;
    this.height += 10;
    this.orangeCount += getRandomInt(1,10);
    if (this.age > MAX_AGE) {
      this.isAlive = false;
    }
  }

  this.dropOrange = function() {
    var picked_orange = "orange";
    return picked_orange;
  }
}

var Fruit = function() {
  this.diameter = getRandomInt(1,10);
}

var Orange = function() {
  
}

Orange.prototype     = new Fruit();
OrangeTree.prototype = new Tree();

function plantTree() {
  tree = new OrangeTree;
  return tree;
}
