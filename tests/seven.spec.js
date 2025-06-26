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

    //we can store the locator and then use it also like selenium.
    test("login 4",async function({page}){
        await page.goto("https://ineuron-courses.vercel.app/")
        

       let loginbutton= await page.getByText("Log in")
       loginbutton.click();

       let newuserlink=await page.getByText("New user? Signup");
        newuserlink.click();

        //type for typing.
        await page.locator("//input[@id='name']").type("manoj", {delay:1000})

        await page.locator("#email").type("m1@gmail.com");

        await page.locator("#password").type("m1@gmail.com")

        //checkbox or radio button.
        //using first, click on the first testing if many are present.
        await page.getByLabel("Testing").first().click()

        await page.getByText("Female").click({delay:1000})//clicks male
        await page.locator("//div[@class='genders-div']//div[2]//input[1]").click()

        //dropdown. we can select by index, value.
        await page.locator("//select[@id='state']").selectOption("Assam")

        //click button.
        await page.locator("button[type='submit']").click()
    })

    //pause option to stop the test.
    test("login 5",async function({page}){
        await page.goto("https://ineuron-courses.vercel.app/")
        

       let loginbutton= await page.getByText("Log in")
       loginbutton.click();

       let newuserlink=await page.getByText("New user? Signup");
        newuserlink.click();

        //type for typing.
        await page.locator("//input[@id='name']").type("manoj", {delay:1000})

        await page.locator("#email").type("m2@gmail.com");

        await page.locator("#password").type("m2@gmail.com")

        //checkbox or radio button.
        //using first, click on the first testing if many are present.
        await page.getByLabel("Testing").first().click()

        await page.pause();

        await page.getByText("Female").click({delay:1000})//clicks male
        await page.locator("//div[@class='genders-div']//div[2]//input[1]").click()

        //dropdown. we can select by index, value.
        await page.locator("//select[@id='state']").selectOption("Assam")

        //click button.
        await page.locator("button[type='submit']").click()
    })

})