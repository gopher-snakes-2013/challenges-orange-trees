describe("Tree", function(){
  var tree;
  beforeEach(function() {
    tree = new Tree();
    // var tree = Object.create(Tree.prototype);
    // tree = Tree.call(Object.create(Tree.prototype));
  });


  it("should return a tree object", function(){
    expect(tree).toBeDefined();
  });

  it("should return tree with age 0 when created", function(){
    expect(tree.age).toEqual(0);
  });

  it("should have height 0 when created", function(){
    expect(tree.height).toEqual(0);
  });

  it("should have 0 oranges if age < FRUIT_BEARING_AGE", function(){
    expect(tree.orangeCount).toEqual(0);
  });

  describe("grow", function(){
    it("should increase the age of the tree by 1 year", function(){
      tree.grow();
      expect(tree.age).toEqual(1);
    });

    xit("should increase the height of the tree by 10 inches", function(){
      tree.grow();
      expect(tree.height).toEqual(10);
    });

    xit("should add a random number of oranges if age > FRUIT_BEARING_AGE", function(){
      while(tree.age < FRUIT_BEARING_AGE){
        tree.grow();
      }
      expect(tree.orangeCount).toBeGreaterThan(0);
    });
  });

  describe("die", function(){
    xit("should die when age > MAX_AGE", function(){
      while(tree.age < MAX_AGE){
        tree.grow();
      }
      tree.grow();
      expect(tree.isAlive).toBeFalsy();
    });
  });

  describe("dropOrange", function(){
    it("should return the orange that is removed from oranges", function(){
      while(tree.age < FRUIT_BEARING_AGE){
        tree.grow();
      }
      expect(tree.dropOrange()).toBeDefined();
    });
  });
});

describe ("Orange", function(){
  var orange = new Orange();
  it("should return an orange object", function(){
    expect(orange).toBeDefined();
  });
  it("should return an orange with a random diameter > 0", function(){
    expect(orange.diameter).toBeGreaterThan(0);
  });
});

