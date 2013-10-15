FRUIT_BEARING_AGE = 3;
MAX_AGE = 50

function createTree() {
  return {
    age: 0,
    height: 0,
    orangeCount: 0,

    grow: function() {
      this.age += 1,
      this.height += 10

      if(this.age >= FRUIT_BEARING_AGE){
        this.orangeCount += Math.floor(Math.random()*10)+1;
      }
    },

    die: function() {
      if (this.age >= MAX_AGE) {
        this.isAlive = false;
      }

    },

    dropOrange: function() {
      return 'something';
    }

  };
  
}


function createOrange() {
  return {
    diameter: Math.floor(Math.random()*10)+1
  };
}
