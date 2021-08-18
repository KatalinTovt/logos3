function CoffeeMake() {

}
CoffeeMake.prototype.on = function(){
  console.log('On');
}

CoffeeMake.prototype.off = function(){
  console.log(`Off`);
}

function Drip(){
  CoffeeMake.call(this);
}
Drip.prototype.drip = function(){
  console.log(`Drip`);
}

function Carob(){
  CoffeeMake.call(this);
}
Carob.prototype.carob = function(){
  console.log(`Carob`);
}

function Machine(){
  CoffeeMake.call(this);
}
Machine.prototype.machine = function(){
  console.log(`Machine`);
}

Drip.prototype = Object.create(CoffeeMake.prototype);
Drip.prototype.constuctor = Drip;

Carob.prototype = Object.create(CoffeeMake.prototype);
Carob.prototype.constuctor = Carob;

Machine.prototype = Object.create(CoffeeMake.prototype);
Machine.prototype.constuctor = Machine;


let variable = new Drip();
console.log(variable);
variable.on();