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

        //with await expect works nicely.
        await expect(titlevalue).toEqual("Google");
        await expect(page).toHaveTitle("Google");

    })

   //go back by clicking on back button of browser.
    test("login 2",async function({page}){
     await page.goto("https://ineuron-courses.vercel.app")
     await page.goto("https://www.google.com")
     await page.goto("https://www.yahoo.com")

     await page.goBack()
     await page.goBack()
     await page.goBack()
    })

    //latest methods added.
   // page.get and we get loads of METHODS.
    test("login 3",async function({page}){
        await page.goto("https://ineuron-courses.vercel.app/")
        // await page.getAttribute(<selector></selector>)
        // await page.getByAltText("alt text of image").click()
        // await page.getByLabel("get value from label attribute")
        // await page.getByPlaceholder("get value from placeholder attribute")
        
//         <h3>Sign up</h3>
// <label>
//   <input type="checkbox" /> Subscribe
// </label>
// <br/>
// <button>Submit</button>
// You can locate each element by it's implicit role:

// await expect(page.getByRole('heading', { name: 'Sign up' })).toBeVisible();

// await page.getByRole('checkbox', { name: 'Subscribe' }).check();

        // await page.getByRole("pass in any role name of the webelement, 
        // first pass your name and then the webelement using name")

        // await page.getByTestId("id of webelement")

        // await page.getByText("visible text")

        // await page.getByTitle("title of page")

        await page.getByText("Log in").click()
    })

})