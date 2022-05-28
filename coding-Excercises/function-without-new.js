function Vehicle(comapny, model, color) {
  //This constructor function may be converted to a class declaration.
  this.company = comapny;
  this.model = model;
  this.color = color;
}

var car = Vehicle('Honda', 'Accord', 'blue');
console.log(car);