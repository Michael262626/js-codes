// function Person(name, age){
//     this.name = name;
//     this.age = age;

//     this.sayName = function(){
//         console.log(this.name);
//     }
// }
// const personOne = new Person("Jumoke", 13);
// console.log(personOne.name)
const json = '{"result": true, "count": 42}';
const obj = JSON.parse(json)

console.log(obj)