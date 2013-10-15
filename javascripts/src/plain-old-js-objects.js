/* Write your code for the plain-old-js-objects-spec here */
FRUIT_BEARING_AGE = 5;
MAX_AGE = 30;

var createTree = function(){
   return tree = {  age: 0,
                    height: 0,
                    orangeCount: 0,
                    isAlive: true,
                    grow: function() {
                      this.age += 1;
                      this.height +=10;
                      this.orangeCount += 1;
                      if (this.age > MAX_AGE) {
                        this.isAlive = false;
                      };
                    },
                    dropOrange: function() {
                      this.orangeCount -= 1;
                      return this.orangeCount;
                    }
                  }
};

var createOrange = function(){
  return orange = { diameter: 2
                  };
}
