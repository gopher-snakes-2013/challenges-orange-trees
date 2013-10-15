describe ("create orange tree", function(){
  it("should return an orange tree object", function(){
    var tree = new OrangeTree;
    expect(tree).toBeDefined();
  });

  it("should return tree with age 0 when created", function(){
    var tree = new OrangeTree;
    expect(tree.age).toEqual(0);
  });
  it ("should have height 0 when created", function(){
    var tree = new OrangeTree;
    expect(tree.height).toEqual(0);
  });
  it ("should have 0 oranges if age < FRUIT_BEARING_AGE", function(){
    var tree = new OrangeTree;
    expect(tree.orangeCount).toEqual(0);
  });

  describe("grow", function(){
    it("should increase the age of the tree by 1 year", function(){
      var tree = new OrangeTree;
      tree.grow();
      expect(tree.age).toEqual(1);
    });

    it("should increase the height of the tree by 10 inches", function(){
      var tree = new OrangeTree;
      tree.grow();
      expect(tree.height).toEqual(10);
    });

    it ("should add a random number of oranges if age > FRUIT_BEARING_AGE", function(){
      var tree = new OrangeTree;
      while(tree.age < FRUIT_BEARING_AGE) {
        tree.grow();
      }
      expect(tree.orangeCount).toBeGreaterThan(0);
    });
  });

  describe ("die",function(){
    it("should die when age > MAX_AGE",function(){
      var tree = new OrangeTree;
      while(tree.age < MAX_AGE){
        tree.grow();
      }
      tree.grow();
      expect(tree.isAlive).toBeFalsy();
    });
  });

  describe("dropOrange", function(){
    it("should return the orange that is removed from oranges", function(){
      var tree = new OrangeTree;
      while(tree.age< FRUIT_BEARING_AGE){
        tree.grow();
      }
      expect(tree.dropOrange()).toBeDefined();
    });
  });
});

describe ("create an orange", function(){
  it("should return a orange object", function(){
    expect(createOrange()).toBeDefined();
  });

  it ("should return an orange with a random diameter > 0", function(){
    var orange = createOrange();
    expect(orange.diameter).toBeGreaterThan(0);
  });
});


