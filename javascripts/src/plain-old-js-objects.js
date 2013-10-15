FRUIT_BEARING_AGE = 3;
MAX_AGE = 50;

function createTree() {
  return {
    age: 0,
    height: 0,
    orangeCount: 0,
    isAlive: true,

    grow: function() {
      this.age += 1;
      this.height += 10;

      if(this.age >= FRUIT_BEARING_AGE){
        this.orangeCount += Math.floor(Math.random()*10)+1;
      }
      if(this.age > MAX_AGE){
        this.die();
      }
    },

    die: function() {
      this.isAlive = false;
    },

    dropOrange: function() {
      return "";
    }
  };
  
}

function createOrange() {
  return {
    diameter: Math.floor(Math.random()*10)+1
  };
}


// Alternative solution for later referene:
// createTree(){
//   var tree = {};
//   tree.age = 0;
//   tree['height']=0;
//   tree.grow = function() {

//   }

//   return tree;
// }
