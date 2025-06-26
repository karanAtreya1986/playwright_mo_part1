/**
 * 
 */

//using expect for assertions.
//expect comes from jest.
const{test,expect}= require("@playwright/test")

test("my first test", async function({page}){
    expect(12).toBe(12);
})

//will throw run time error.
// test("my second test", async function({page}){
//     expect(12).toBe(123);
// })

//using includes.
test("third test", async function({page}){
    expect("manoj".includes("manoj"))
})

//includes is not case sensitive. it will return false when the data do not match.
//it returns true here also.
test("fourth test", async function({page}){
    expect("manoj".includes("mAnoj"))
})

//true
test("fifth test", async function({page}){
    expect("manoj".includes("manoj")).toBeTruthy()
})

//true
test("sixth test", async function({page}){
    expect("manoj".includes("mAnoj")).toBeFalsy()
})

//run time error for assertion.
// test("seventh test", async function({page}){
//     expect("manoj".includes("test")).toBeTruthy()
// })

//true
test("eighth test", async function({page}){
    expect("manoj".includes("test")).toBeFalsy()
})