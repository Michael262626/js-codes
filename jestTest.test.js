const number = require("./JavaScriptTask.js");

test("Add two numbers", () =>{
    let arr = [9];
    let answer  = number(arr);
    expect(answer).toEqual([1, 0]);
})