// html code
// <button class="btn">Add name</button>
// <ul id="names"></ul>

class NameField{
	constructor(name){
  	const field = document.createElement('li');
    field.textContent = name;
    const nameListHook = document.querySelector('#names');
    nameListHook.appendChild(field);
  }
}

class NameGenerator{
	constructor(){
  	const btn = document.querySelector('.btn');
    this.names = ["manish", "pratik", "shikha"]
    this.currentName = 0;
    
    //add name on click of button
    btn.addEventListener('click', this.addName.bind(this));
    
    // add name immediately without click 
    //btn.addEventListener('click', this.addName());
  }
  
  addName(){
  	const name = new NameField(this.names[this.currentName]);
    this.currentName++;
    if(this.currentName >= this.names.length){
    	this.currentName = 0;
    }
  }
}

const gen = new NameGenerator();
