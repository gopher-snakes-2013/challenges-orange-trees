FRUIT_BEARING_AGE = 3
MAX_AGE = 30;

var Tree = function(age, height) {
  this.age = age;
  this.height = height;
  this.count = 0;
};

Tree.prototype.orangeCount = function() {
  if (this.age > FRUIT_BEARING_AGE) {
    this.count += 1
  }
  return this.count
};

Tree.prototype.grow = function() {
  this.age += 1;
  this.height += 10;
  this.orangeCount()
};

Tree.prototype.isAlive = function() {
  if (this.age > MAX_AGE) {
    return false;
  } else {
    return true;
  }
}

Tree.prototype.dropOrange = function() {
  return true;
}

var Orange = function() {
  this.diameter = (Math.floor (Math.random()*7)+1);

};
