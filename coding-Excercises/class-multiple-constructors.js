class Rectangle{
    constructor(height, width){
        this.height = height;
        this.width = width;
    }

    constructor(width){
        this.width = width;
    }

    // getter
    get area(){
        return this.calcArea();
    }
    
    // Method
    calcArea(){
        return this.height * this.width;
    }
}

const square = new Rectangle(10, 10);

console.log(square.area); // 100