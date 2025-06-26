/**
 * 
 */

const{test,expect}= require("@playwright/test")


test.describe("my scenarios", async function(){

    //goto any url
    //by default goes to chromium in headless.
    test("login 1",async function({page}){

        await page.goto("https://www.google.com")

    })

    //giving protocol mandatory else when we run we get protocol error.
    test("login 2",async function({page}){
        await page.goto("www.google.com")
    })

    test("login 3",async function({page}){
        
    })

})