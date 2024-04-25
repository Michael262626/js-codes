//function numb(arrays){
    let arrays = [2, 2, 2, 2, 2, 2, 3, 3, 3, 5]
    let result = []
    let cout = 0
    for(let count = 0; count < arrays.length; count++){
        for(let counter = 0; counter < arrays.length; counter++){
        if(arrays[count] === arrays[counter]){
            cout++;
            arrays[counter] = -1;
        }
        if(result[counter] >cout)
    
    
    }
   console.log(result);

//}
//module.exports = numb