describe("prototype tree", function(){

  it("should exist", function(){
    expect(new Tree()).toBeDefined();

  });

  it("should have an age of 0 when created", function (){
    var lemon = new Tree();
    expect(lemon.age).toEqual(0)
  });

  it("should have a height of 0 when created", function(){
    var lemon = new Tree();
    expect(lemon.height).toEqual(0);
  });



  describe("prototype grow", function(){

    it("should increase in height when it grows", function(){
      var pomegranate = new Tree();
      pomegranate.grow();
      expect(pomegranate.height).not.toEqual(0);
    });

    it("should only have oranges if the tree is older than five", function(){
      var lemon = new Tree();
      if(lemon.age < 5){ 
        expect(lemon.numOranges).toEqual(0);
      };
    });

    it("should add oranges if the tree is older than five", function(){
      var apple = new Tree();
      // expect(apple.numOranges).toEqual(0);
      while(apple.age < 5){
        apple.grow();
      }
      expect(apple.numOranges).toBeGreaterThan(0);
    });
  });

  describe("prototype die", function(){
    it("should die if its older than max age", function(){
      var jtr = new Tree();
      for(i=0; i<15; i++){
        jtr.grow();
      }
      if(jtr.age > AGE_OF_DEATH){
        jtr.die();
      }
      expect(jtr.isAlive).toBeFalsy();
    });
  });
});

describe("orange", function(){
  it("should be defined", function(){
    expect(new Orange()).toBeDefined;
  });
});


describe("plant", function(){
  it("should be clickable", function(){
    
  });
});



