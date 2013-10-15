

$(document).ready(function(){
    // $(".tree-created").hide();
    $(".plant").click(function(){
      $("#orange-tree-template").show();
      tree = new Tree();
      $(".tree-created").append("You planted a tree!");
      $(".age").text("Age: " + tree.age);
      $(".fruit-count").text("Fruit count: " + tree.orangeCount);
    });

    $(".age-button").click(function(){
      tree.grow();
      $(".age").text("Age: " + tree.age);
      
    });

});

// click Plant Orange Tree (class="plant")
// make "Tree" appear, or "You've planted a tree!"
// "Your tree name is: !"
// button: age
// click button, when of age: "Your tree is ready to be picked!"
// display: orange count
// button: pick, button: age (until MAX_AGE, dead)
// click pick, here's your orange!, ocount--
