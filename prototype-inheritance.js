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
