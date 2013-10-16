var target = document.getElementById("plant")
target.addEventListener("click", plantOrangeTree, false);

function plantOrangeTree(){
  var button = document.getElementById("orange-tree-template")
  button.style.display = "inline"
 };


var targetFruit = document.getElementsByClassName("pick")
targetFruit[0].addEventListener("click", pick, false);

function pick(){
  var fruitCountNode = document.getElementsByClassName("fruit-count")[0]
  var fruitCount = parseInt(fruitCountNode.innerText)
  fruitCountNode.innerText = fruitCount + 1

    // // var x = 0;
    // for (i=0; i < 100; i++){
    //   fruitCount[0].innerHTML = i;
    //   // x = x + i;
    // }
}
