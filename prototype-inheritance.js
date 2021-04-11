// Basically everyobject has property called prototype where you can add methods and properties to it. 
// And when you create other objects from this object , the newly created object will automatically inherit the prperty of the parent. 
// But not by including in its own property but instead it uses from its parent prototype properties and methos. 
// And the way it work is when u call a particular method or object it frst looks at its own properties to see if its there 
// if its not there then it will look at its parent.and if its find it there then it will execute it.


var Job = function(){
	this.pays = true;
}

Job.prototype.print = function(){
console.log(this.pays ? 'Please hire me': 'no thank you');
}

//subclass
var TechJob = function(title, pays){
	Job.call(this);
  this.title = title
	this.pays = pays;
}

TechJob.prototype = Object.create(Job.prototype);
TechJob.prototype.constructr = TechJob;

var softwarePosition = new TechJob('JS Programmer', true);
var softwarePosition2 = new TechJob('AngularJS Programmer', false);

console.log(softwarePosition.print())
console.log(softwarePosition2.print())

//--------------------------------------------------------
// let car = function(model){
// this.model = model;
// }

// car.prototype.getModel = function(){
// return this.model;
// }

// let toyota = new car('toyota')
// console.log(toyota.getModel());
