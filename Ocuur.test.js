const numb = require("./Ocuur.js");

test("Add two numbers", () =>{
    let arr = [1, 1 ,1, 3, 3, 3, 3, 2];
    let answer  = numb(arr);
    expect(answer).toEqual([3]);
})