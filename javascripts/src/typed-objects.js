FRUIT_BEARING_AGE = 2;
MAX_AGE = 10;

function Tree(age){
	this.age = 0;
	this.height = 0;
	this.orangeCount = 0;
	this.isAlive = true;
}

Tree.prototype.grow = function(){
	this.age += 1;
	this.height += 10;
	if (this.age>=FRUIT_BEARING_AGE){
		this.orangeCount += Math.floor((Math.random()*10)+1);
	}
	if (this.age >= MAX_AGE) {
		this.isAlive = false;
	}
	if (this.age>=FRUIT_BEARING_AGE){
		this.dropOrange();
	}
};

Tree.prototype.dropOrange = function(){
};

function createOrange() {
	var orange = {
		diameter: 1
	}
	return orange;
}




