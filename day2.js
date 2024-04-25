let array = [2, 6, 8]
let lCm = 0
let hCf = 0
let maximum = 0
for(let count = maximum; count < array.length; count++){
    if(maximum < array[count]) 
    maximum = array[count];
    for(let counter = count; counter >= 1; counter--){
        if(maximum % array[counter] == 0);
        hCf++;
}
}if(hCf == array.length){console.log([hCf])}