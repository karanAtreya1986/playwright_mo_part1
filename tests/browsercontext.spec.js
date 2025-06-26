/**
 * 
 */


//Browser context- older way nowadays we have browser fixture and page fixture.
//we specify the browser on which we need to change specs.
//Customize specific spec file.

let{test,expect,chromium}=require("@playwright/test")

// const{test,expect,chromium}=require("@playwright/test")

test("another way to launch browser with specific settings", async()=>{

    //launch method.
    //pass in any property what you want to set in browser.
    //when we click launch we have all the options we can use, 
    // similarly for newContext() and all others.
    //return type of launch is Browser.
    let browser =await chromium.launch({headless:false})
    //record videos and add them to the videos path in current project directory.
   let context= await browser.newContext({recordVideo:{dir: "./videos"}})
//Creates a new page in the browser context.
   let page=await context.newPage()

   await page.goto("https://ineuron-courses.vercel.app/login")
   await page.getByPlaceholder("Email").click()
   await page.getByPlaceholder("Email").fill("m9@gmail.com")
   await page.getByPlaceholder("Password").fill("m9@gmail.com")
   await page.getByRole("button", {name: "Sign in"}).click();
  await  expect (page).toHaveURL("https://ineuron-courses.vercel.app/")
   await page.getByRole("button", {name: "Sign out"}).click();
   await expect (page).toHaveURL("https://ineuron-courses.vercel.app/login")


   //to close browsers and page and context.
    await page.close()
    await browser.close()
    await context.close()


})

    