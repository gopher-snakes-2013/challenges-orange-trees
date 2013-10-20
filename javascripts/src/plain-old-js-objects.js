/* Write your code for the plain-old-js-objects-spec here */
// with JS objects, there is only one tree you can create. 

FRUIT_BEARING_AGE = 4,
MAX_AGE = 40

function createTree(){
  var tree = {
              age: 0,
              height: 0,
              orangeCount: 0,
              isAlive: true,
              grow: function(){
                this.age += 1,
                this.height +=10,
                this.orangeCount += Math.floor((Math.random()*10)+1)
                if (this.age > MAX_AGE){
                  this.die();
                }
              },
              die: function(){
                this.isAlive = false;
              },

              dropOrange: function(){
                return this.orangeCount
              }

              
            }
  return tree
}

function createOrange(){
  return orange = { diameter: Math.floor((Math.random()*10)+1)}
}
