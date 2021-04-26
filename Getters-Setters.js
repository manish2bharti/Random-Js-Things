//Classes also allows you to use getters and setters.

//It can be smart to use getters and setters for your properties,
//especially if you want to do something special with the value before returning them, or before you set them.

class Car {
  constructor(brand) {
    this.carname = brand;
  }
  get cnam() {
    return this.carname;
  }
  set cnam(x) {
    this.carname = x;
  }
}

let myCar = new Car("Ford");

document.getElementById("demo").innerHTML = myCar.cnam;
