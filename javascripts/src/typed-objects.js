var AGE_OF_DEATH = 15


function Tree(type) {
  this.type = type;
  this.age = 0;
  this.height = 0;
  this.numOranges = 0;
  this.isAlive = true;
}

Tree.prototype.grow = function(){
  this.height += 1;
  this.age +=1;
  if(this.age >= 5){
    this.numOranges +=1;
  }
  if(this.age >= AGE_OF_DEATH){
    this.die();
  }
}

Tree.prototype.die = function(){
  this.isAlive = false;
}

function Orange(){
 this.diameter = Math.floor((Math.random()+1)*5);
}

