var target = document.getElementByClassName("plant")
target.addEventListener("click", plantOrangeTree, false);


var target = document.getElementByClassName("age-button")
target.addEventListener("click", growTree, false);


var growTree = function() {
  tree.grow()
  //update the age dom element
  //update the fruit count dom element
}




function plantOrangeTree(){
  var button = document.getElementById("orange-tree-template")
  button.style.display = "inline"
  tree = plantTree()
 };

var targetFruit = document.getElementsByClassName("pick")
targetFruit[0].addEventListener("click", pick, false);

function pick(){
  var fruitCountNode = document.getElementsByClassName("fruit-count")[0]
  var fruitCount = parseInt(fruitCountNode.innerText)
  fruitCountNode.innerText = fruitCount + 1
}

function increaseAge(){
  var ageCountNode = document.getElementsByClassName("age")[0]
  var ageCount = parseInt(ageCountNode.innerText)
  ageCountNode.innerText = ageCount + 1
}

