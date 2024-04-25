function number(numbers) {
    for(let count = numbers.length - 1; count >= 0; count--){
        if(numbers[count] != 9){
            numbers[count]++;
            break
        }
        else{
            numbers[count] = 0
        }
    }
    if(numbers[0]==0)numbers.unshift(1)
    return numbers
}
    

module.exports = number

