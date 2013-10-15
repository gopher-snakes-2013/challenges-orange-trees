var plantButton = document.getElementsByClassName('plant')[0]
var ageButton = document.getElementsByClassName('age')[1]
var pickButton = document.getElementsByClassName('pick')[0]
var treeDisplay = document.getElementById("orange-tree-template")
var ageLabel = document.getElementsByClassName('age')[0]
var countLabel = document.getElementsByClassName('fruit-count')[0]


var tree;

plantButton.addEventListener('click',function(){
  tree =  new Tree(0,0);
  treeDisplay.style.display = "inline"
})

ageButton.addEventListener('click',function(){
  tree.grow();
  ageLabel.innerText = tree.age
  countLabel.innerText = tree.count
})

pickButton.addEventListener('click',function(){
  tree.count -= 1
  countLabel.innerText = tree.count
})
