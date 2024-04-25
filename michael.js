// function myClass(...args){
//     // this.myMethod = function(){
//         for(let i = 0; i < args.length; i++){
//             console.log("Argument been passed:", i + 1, args[i])
//         }
//     //     let num1 = 6
//     //     let num2 = 5
//     //     let sum = num1 + num2
//     // console.log("The sum of", num1, "and",num2, "is", sum );
//     // };
// }
// // let myInstance = new myClass();
// // myInstance.myMethod();
// myClass(1, 2 ,"hello", true)
class Rectangle{
    constructor(width, heigth){
        this.width = width
        this.heigth = heigth
    }
    calculateArea(){
        return this.width*this.heigth
    }
    calculatePerimeter(){
        return 2*(this.heigth+this.width)
    }
};
let rectangle = new Rectangle(5, 6)
console.log("Width", rectangle.width)

console.log("Heigth", rectangle.heigth)
console.log("Calculated Area", rectangle.calculateArea())
console.log("Calculated Perimeter", rectangle.calculatePerimeter())