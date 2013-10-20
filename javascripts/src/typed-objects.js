// with constructors and prototypes, you have a general casting mold 
//which can be adjusted. For example, casting it with a specific age or
// height. You can't do that with just plain js objects.  

FRUIT_BEARING_AGE = 4;
MAX_AGE = 40;
// same as 'function Tree (age, height){'
var Tree = function (age, height){
  this.age = age; 
  this.height = height;
  this.orangeCount = 0;
  // setting isAlive to false because I can't get the die if loop 
  // to work.  
  this.isAlive = false

};


// Rather than putting the grow function in the Tree function, you 
// can set it as a prototype function. This is faster as this means
// the grow function doesn't have to be re-created every time a new
// // tree is created. 'Grow' is only summoned when you need it to be
// // summoned.

Tree.prototype.grow = function(){ 
  this.age += 1;
  this.height += 10;
  this.orangeCount += Math.floor(Math.random()*10+1 )

  // why can't I get this if loop to work?
  // if (this.age >= FRUIT_BEARING_AGE) {
  //     this.orangeCount += Math.floor(Math.random()*10+1;
  //   )}
};


Tree.prototype.pick = function(){
  this.orangeCount -= 1;
}

Tree.prototype.die = function(){
  // OMG WHAT IS WRONG WITH MY IF LOOPS??!?!?
 if (this.age > MAX_AGE) {
    this.isAlive = false;
  }
  return this.isAlive
};

var Orange = function(){
  this.diameter = 5
}

