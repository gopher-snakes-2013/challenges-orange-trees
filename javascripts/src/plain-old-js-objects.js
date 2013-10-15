function createTree() {
  var tree = {
    age: 0,
    height: 0,
    orangeCount: 0,
    grow: function() { 
    	this.age += 1, 
    	this.height += 10;
      this.orangeCount += 6},
    dropOrange: function() {
    	this.orangeCount -= 1;
    	return 1;
    },
  };
  return tree;
}

function createOrange() {
	var orange = {
		diameter: Math.random() * 3
	};
	return orange;
}

var FRUIT_BEARING_AGE = 7;
var MAX_AGE = 100;