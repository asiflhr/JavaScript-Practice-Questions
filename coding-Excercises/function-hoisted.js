var car = new Vehicle('Honda', 'Accord', 'blue');
console.log(car);

function Vehicle(comapny, model, color) {
    this.company = comapny;
    this.model = model;
    this.color = color;
}

