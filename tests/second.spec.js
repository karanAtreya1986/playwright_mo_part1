/**
 * 
 */

const{test,expect}= require("@playwright/test")

// describe block
// write group of test.
// no need of sync as its only grouping.
// async to write where we perform some actions.

test.describe("my scenarios", function(){

    test("login 1",async function({page}){

    })

    test("login 2",async function({page}){
        
    })

    test("login 3",async function({page}){
        
    })

})