/**
 * 
 */

//right now we want test and expect modules.
//so we import from node modules/pwtest folder.
const {test, expect}=require("@playwright/test")

//test function returns void.
test('first  test', async function name({page}) {
    
})

//skip test.
test.skip("second  test", async function name({page}) {
    
})

//run only this test not any other in this class.
test.only("third test", async function({page}){

})