class Shape{
    constructor(name){
        this.name = name;
    }
    setName(name){
        this.name = name
    }
    getName(){
        return this.shape
    }
}
class Rectangle extends Shape{
    constructor(name, width, height){
        super(name);
        this.width = width
        this.height = height
    }
    calculateArea() {
        return this.width * this.height;
    }
    isSquare(){
        if(this.height === this.width) return true;
        return false;
    }
}
const rectangle = new Rectangle("Rectangle", 5, 10);
console.log("Area of rectangle:", rectangle.calculateArea());
console.log("Check if it is squared:", rectangle.isSquare() )