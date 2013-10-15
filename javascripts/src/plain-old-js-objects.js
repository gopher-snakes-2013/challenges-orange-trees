// /* Write your code for the plain-old-js-objects-spec here */
// function createTree () {
// 	var tree = {};
// 	tree.age = 0;
// 	tree.height = 0;
// 	tree.orangeCount = 0;
// 	tree.grow = function () {
// 		this.age += 1;
// 		this.height += 10;
// 		this.dropOrange = function () {
// 			return createOrange();
// 		};
// 		if (tree.age >= FRUIT_BEARING_AGE) {
// 			tree.orangeCount += Math.floor((Math.random()*10)+1);
// 		}; 
// 		if (tree.age <= MAX_AGE){
// 			tree.isAlive = true;
// 		}
// 		else
// 		{
// 			tree.isAlive = false;
// 		}
// 	};
// 	return tree;
// }

// function createOrange(){
// 	var orange = {
// 		diameter: Math.floor((Math.random()*10)+1)};
// 	return orange;
// }

// FRUIT_BEARING_AGE = 2;
// MAX_AGE = 20;
