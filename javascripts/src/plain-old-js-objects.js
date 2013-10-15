/* Write your code for the plain-old-js-objects-spec here */
var createTree = function (){
  var tree = {
  age: 0,
  height: 0,
  orangeCount: 0,
  dropOrange: function(){
    this.orangeCount -= 1
    return 1;
  },
  grow: function (){
    this.age++
    this.height += 10
    this.orangeCount += Math.floor(Math.random() * 10)
  },
  };
  return tree
};

var createOrange = function (){
  var orange ={
  diameter: Math.random() * 5
  };
  return orange
}

var FRUIT_BEARING_AGE = 5
var MAX_AGE = 60



