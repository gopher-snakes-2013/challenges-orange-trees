FRUIT_BEARING_AGE = 3;
MAX_AGE = 50;

var Tree = function() {
  this.age = 0;
  this.height = 0;
  this.isAlive = true;
};

var OrangeTree = function(){
  this.orangeCount = 0;
  this.grow = function() {
    this.age++;
    this.height+=10;
    if(this.age >= FRUIT_BEARING_AGE){
      this.orangeCount += Math.floor(Math.random()*10)+1;
    }
    if(this.age >  MAX_AGE) {
      this.die();
    }
  };

  this.die = function() {
    this.isAlive = false;
  };
  this.dropOrange = function() {
    return "";
  };
};


var Orange = function() {
  this.diameter = Math.floor(Math.random()*4)+1;
};

OrangeTree.prototype = new Tree;
