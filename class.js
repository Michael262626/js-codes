// let number = [12, 5, 6, 4, 5 ,8, 9]
// let num = [2, 3, 4]
// // number.push(2)
// // console.log(number)
// // number.pop(2)
// // console.log(number)
// // number.shift()
// // console.log(number)
// // number.unshift(2)
// // console.log(number)
// // number.splice(2, 0, 2, 3)
// // console.log(number)
// console.log(number.concat(num))
// console.log(num)

// let array = [["car", 2000]]
// array.push(["Toyota,","Nissan"])
// let array2 = [["Truck", 500]]
// array2.push(["Ford"])
// let array3 = [["Bike", 6500]]
// array2.push(["Honda"])
// console.log(array[1])
// console.log(array2[1])
// console.log(array3[1])
// let array1 = [[200, 50, 300, 5], [10, 25, 7, 100], [25, 20, 70, 45], [500, 170, 11, 35]]
// num = array1[1].slice(0, 4)
// num.pop()
// console.log(num)

// let user = {
//     firstName: "mike",
//     lastName: "banks"
// }
// let array = [1,2]
// for(const count in array){
//     console.log(array[count]);
// }
let array = [[null], [obj = {name:"name", currency: "dollar", popu: 20}],
 [obj = {name:"name", currency: "dollar", popu: 20, temp: 10}],
  [obj = {name:"name", currency: "dollar", popu: 20, temp: 9}],
  [obj = {name:"name", currency: "dollar", popu: 20, temp: 20}],
  [obj = {name:"name", currency: "dollar", popu: 20, temp: 20}],
  [obj = {name:"name", currency: "dollar", popu: 20, temp: 15}],
  [null], [obj = {name:"name", currency: "dollar", popu: 20, temp: 12}],
  [null], [obj = {name:"name", currency: "dollar", popu: 20, temp: 24}],
  [obj = {name:"name", currency: "dollar", popu: 20, temp: 35}]]
  let counter = 0
  let temp = 0
    for(const count in array){
        for(const numb in count){
            if(array[count][numb]!= null && array[count][numb].temp >= 10){
            counter += array[count][numb].popu;
            }
        }
    }console.log(counter);
    
    for(let count = 0; count < array.length; count++){
        for(let counter = 0; counter < count; count++){
            if(array[count][counter]!= null && array[count][counter].temp >= 10){
            counter += array[count][counter].popu;
        }
    }
    }console.log(counter)