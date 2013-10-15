function plantAlert(){
  var type = prompt("what kinda tree do you want to grow?");
  addTree(type);
}

function addTree(tree_name){
  var newTree = new Tree(tree_name);
  // var parent = document.getElementById("body")
  var newElement = document.createElement("BUTTON");
  // parent.appendChild(newElement).innerHTML(newTree);
  var t = document.createTextNode(tree_name);
  // newElement.appendChild(t);
  document.body.appendChild(newElement).appendChild(t);
}

