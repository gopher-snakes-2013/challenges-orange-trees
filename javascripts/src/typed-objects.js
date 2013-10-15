var FRUIT_BEARING_AGE = 5;
var MAX_AGE = 10;

function Tree() {
  this.age = 0;
  this.height = 0;
  this.orangeCount = 0;
  this.isAlive = true;
  console.log(this);
}

Tree.prototype.grow = function() {
  this.age += 1;
  this.height += 10;
  if(this.age >= FRUIT_BEARING_AGE){
    this.orangeCount += Math.floor(Math.random()*10);
  }
  if(this.age === MAX_AGE){
    this.isAlive = false;
  }
};

Tree.prototype.dropOrange = function(){
  return "something";
};

function Orange() {
  this.diameter = Math.ceil(Math.random()*10);
}