// Add an event listener to the button 'plant'. When the button is 
// clicked:
// -  have a new tree object be created
// - select the css for the 'orange-tree-template' and change it to display: inline

// FYI - 'click' is shorthand for '.on( "click", handler )'


$(document).ready(function(){


  $( ".plant" ).click(function(){
    tree = new Tree(0,0);
    $("#orange-tree-template").css("display","inline");
    console.log(tree.age);
  });

  $( ".age" ).click(function(){
    tree.grow();
    $(".age-label").text("Age: " + tree.age)
    $(".fruit-count-label").text("Fruit Count: " + tree.orangeCount)
    console.log(tree.age);
  });


  $( ".pick" ).click(function(){
    // need to add an until loop for when it reaches zero. 
     tree.orangeCount -= 1; 
    $(".fruit-count-label").text("Fruit Count: " + tree.orangeCount)
    console.log(tree.orangeCount);
  });


});




