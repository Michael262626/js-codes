function board(length ,width, obj){
// let arr = [[" ", " ", " "],
// [" ", " ", " "],
// [" ", " ", " "]]
obj = {
    value: "X",
    value: "O",
    value: "X"
}
for(const key in obj){
    for(const numb in key){
        obj[key][numb] = obj.value
    }
}
function num(array){
    return  array.map((row) => board(3, 3,"X"))
}

}console.log(board(3, 3, "X"))
