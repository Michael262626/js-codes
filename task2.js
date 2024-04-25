function numbers(array){
//for(let num =0; num < array.length; num++){
    if(array <= 100 && array>= 90){
        return "A"
    }else if(array <= 89 && array >= 80){
        return "B"
    }else if(array <= 79 && array >= 70){
        return "C"
    }else if(array <= 69 && array >= 60){
        return "D"
    }else{
        return "F"
    }
    
}
    function num(array){
        return  array.map((num) => numbers(num))
    }
  module.exports =  num