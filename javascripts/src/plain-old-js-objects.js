/* Write your code for the plain-old-js-objects-spec here */

var FRUIT_BEARING_AGE = 5
var MAX_AGE = 1000

var createOrange = function(){
  var orange = {
    diameter: Math.floor((Math.random()*3)+1)
  };
  return orange
};

var createTree = function(){ 

  var little_tree = { 

    orangeCount: 0,
    age: 0, 
    height: 0,

    grow: function(){ 
      this.age += 1,
      this.height += 10; 
      // debugger

      if ( this.age >= FRUIT_BEARING_AGE ){
        this.orangeCount += Math.floor((Math.random()*10)+1)
      };
    },

    dropOrange: function(){ return 'orange' },

  };

  return little_tree
};

