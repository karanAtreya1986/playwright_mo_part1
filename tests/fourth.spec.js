/**
 * 
 */

const{test,expect}= require("@playwright/test");
const { title } = require("process");


test.describe("my scenarios", async function(){

  
    test("login 1",async function({page}){

        await page.goto("https://www.google.com")

        //get the url of the page.
        let urlvalue=await page.url();
        console.log(urlvalue) //https://www.google.com/

         //get the title of the page.
        let titlevalue=await page.title();
        console.log(titlevalue) //Google

        //validate title
        //the below gives issues as error when running because we didnt use async.
        //pw runs everything quickly.
        // expect(title).toContain("Google");

        //the below gives issues as error when running because we didnt use async.
        //pw runs everything quickly.
        // expect(page).toHaveTitle("Google")

        //with await expect works nicely.
        await expect(titlevalue).toEqual("Google");
        await expect(page).toHaveTitle("Google");

    })

   
    test("login 2",async function({page}){
     
    })

    test("login 3",async function({page}){
        
    })

})