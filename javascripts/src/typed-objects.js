function Tree () {
  this.age = 0;
  this.height = 0;
  this.orangeCount = 0;


};

function Orange () {
  this.diameter = Math.random()*5;

};

Tree.prototype.grow = function (){
  this.age++
  this.height += 10
  this.orangeCount += Math.floor(Math.random()*10)
}

Tree.prototype.dropOrange = function (){
  this.orangeCount -= 1
  return 1
}

var FRUIT_BEARING_AGE = 5;
var MAX_AGE = 60