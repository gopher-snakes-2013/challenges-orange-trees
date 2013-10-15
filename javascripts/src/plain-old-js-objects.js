/* Write your code for the plain-old-js-objects-spec here */
var FRUIT_BEARING_AGE = 5
var MAX_AGE = 15

var createTree = function(){
  return {
    age: 0,
    height: 0,
    orangeCount: 0,
    isAlive: true,

    grow: function(){
      this.age += 1; 
      this.height += 10;
      this.orangeCount += Math.floor(Math.random()*this.age)
      this.die();
    },

    die: function(){
      if(this.age >= MAX_AGE){
        this.isAlive = false;
      }
    },

    dropOrange: function(){
      return "this is a lie"
    }
  }  
}

var createOrange = function(){
  return {
    diameter: Math.floor((Math.random()+1)*5)
  }
}




