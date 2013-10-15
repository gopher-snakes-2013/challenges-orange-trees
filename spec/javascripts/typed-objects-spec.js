describe ("Tree", function(){
  var apple
  beforeEach(function (){
    apple = new Tree();
  });

  it("should return a tree object", function(){
    expect(apple).toBeDefined();
  });

  it("should return tree with age 0 when created", function(){

    expect(apple.age).toEqual(0);
  });

  it ("should have height 0 when created", function(){
    expect(apple.height).toEqual(0);
  });

  it ("should have 0 oranges if age < FRUIT_BEARING_AGE", function(){
    expect(apple.orangeCount).toEqual(0);
  });

  describe("grow", function(){

    it("should increase the age of the tree by 1 year", function(){
      apple.grow();
      expect(apple.age).toEqual(1);
    });

    it("should increase the height of the tree by 10 inches", function(){
      apple.grow();
      expect(apple.height).toEqual(10);
    });

    it ("should add a random number of oranges if age > FRUIT_BEARING_AGE", function(){
      while(apple.age< FRUIT_BEARING_AGE){
        apple.grow();
      }
      expect(apple.orangeCount).toBeGreaterThan(0);
    });
  });

  describe ("die",function(){
    it("should die when age > MAX_AGE",function(){
      while(apple.age < MAX_AGE){
        apple.grow();
      }
      apple.grow();
      expect(apple.isAlive).toBeFalsy();
    });
  });

  describe("dropOrange", function(){
    it("should return the orange that is removed from oranges", function(){
      while(apple.age < FRUIT_BEARING_AGE){
        apple.grow();
      }
      expect(apple.dropOrange()).toBeDefined();
    });
  });
});

describe ("Orange", function(){
  var yum;
  beforeEach(function (){
    yum = new Orange ()
  });

  it("should return an orange object", function(){
    expect(yum).toBeDefined();
  });

  it ("should return an orange with a random diameter > 0", function(){
    expect(yum.diameter).toBeGreaterThan(0);
  });
});